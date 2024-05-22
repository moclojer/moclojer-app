(ns yaml-generator.controllers.yml
  (:require [back.api.db.mocks :as db.mocks]
            [clojure.java.io :as io]
            [clojure.string :as str]
            [components.logs :as logs]
            [components.storage :as storage]
            [yaml-generator.logic.yml :as logic.yml]
            [yaml-generator.ports.producers :as ports.producers]))

(defn generate [{:keys [mock-id]} {:keys [storage publisher config database]}]
  (let [pmock-id (if (uuid? mock-id) mock-id (parse-uuid mock-id))
        {:mock/keys [user_id wildcard
                     content subdomain
                     enabled publication]} (db.mocks/get-mock-by-id pmock-id database)
        path (logic.yml/gen-path user_id mock-id)
        env (get-in config [:config :env])
        host-key (if (= env :dev) :local-host :host)
        host (logic.yml/gen-host wildcard subdomain)
        domain (str/replace host #".moclojer.com" "")
        content-with-host (logic.yml/add-host host-key host content)
        ?file (storage/get-file storage "moclojer" path)
        valid? (logic.yml/validate-mock content)]

    (storage/upload! storage "moclojer" path content-with-host)
    (logs/log :info "uploaded generated yaml"
              :ctx {:path path
                    :?file ?file})

    (if valid?
      (when enabled
        (ports.producers/mock-unified! path
                                       domain
                                       (= publication "offline")
                                       (and (= publication "offline-invalid")
                                            valid?)
                                       publisher))
      (do
        (logs/log :warn "invalid mock content"
                  :ctx {:content content
                        :explanation (logic.yml/explain-mock-validation content)})
        (ports.producers/set-publication-status! domain
                                                 "offline-invalid"
                                                 publisher)))))

;; NOTE: do not confuse :local-host tag in moclojer yamls with the localhost
;; network! :local-host is just the local version of the host in prod env.
;; It's there just so we can update the unified mock.

(defn generate-unified-yml
  ([args components]
   (generate-unified-yml args components true))
  ([{:keys [path domain create-domain? valid-again?]}
    {:keys [storage config publisher]} append?]
   (let [new-mock-file (storage/get-file storage "moclojer" path)
         new-mock-content (when new-mock-file (slurp (io/reader new-mock-file)))
         unified-mock (storage/get-file storage "moclojer" "moclojer.yml")
         env (get-in config [:config :env])
         host-key (if (= env :dev) :local-host :host)]
     (try
       (storage/upload!
        storage "moclojer" "moclojer.yml"
        (if unified-mock
          (logic.yml/unified-yaml (slurp (io/reader unified-mock))
                                  new-mock-content append? host-key)
          (or new-mock-content "[]\n")))

       (logs/log :info "uploaded unified yaml"
                 :ctx {:path path})

       (ports.producers/restart-mock! publisher)
       (when create-domain?
         (ports.producers/create-domain! domain publisher))
       (when valid-again?
         (ports.producers/set-publication-status! domain
                                                  "published"
                                                  publisher))

       (catch Exception e
         (logs/log :error "failed to generate unified yaml"
                   :ctx {:ex-message (.getMessage e)}))))))

(defn delete [{:keys [id user-id]} components]
  (let [path (logic.yml/gen-path user-id id)
        storage (:storage components)]
    (generate-unified-yml {:path path} components false)
    (storage/delete-file! storage "moclojer" path)
    (logs/log :info "deleted yaml"
              :ctx {:path path})))

(defn get-parsed-mock-content
  [path storage]
  (if-let [content (storage/get-file storage "moclojer" path)]
    {:path path
     :content (logic.yml/parse-yaml-read-literal (slurp content))}
    (logs/log :warn "mock file doesn't exist"
              :ctx {:path path})))

(defn verify-unified
  [{:keys [mocks]} {:keys [config storage publisher]}]
  (let [paths (logic.yml/reduce-paths mocks)
        parsed-mocks (doall (map #(get-parsed-mock-content % storage) paths))
        parsed-unified (get-parsed-mock-content "moclojer.yml" storage)
        env (get-in config [:config :env])
        host-key (if (= env :dev) :local-host :host)
        missing-mocks (logic.yml/filter-missing-mocks
                       parsed-mocks parsed-unified host-key)]
    (doseq [{:keys [endpoint path]} missing-mocks]
      (logs/log :info "found mock missing from unified. trying to regenerate..."
                :ctx (assoc (select-keys endpoint [:path host-key])
                            :s3-path path))
      (ports.producers/mock-unified! path (get endpoint host-key)
                                     false false publisher))))
