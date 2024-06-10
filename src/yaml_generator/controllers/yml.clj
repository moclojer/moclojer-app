(ns yaml-generator.controllers.yml
  (:require [back.api.adapters.mocks :as adapters.mocks]
            [back.api.db.mocks :as db.mocks]
            [clojure.java.io :as io]
            [com.moclojer.components.logs :as logs]
            [com.moclojer.components.storage :as storage]
            [yaml-generator.logic.yml :as logic.yml]
            [yaml-generator.ports.producers :as ports.producers]))

(defn generate-single-yml!
  [mock-id {:keys [storage publisher config database]}]
  (let [{:keys [user-id wildcard enabled
                content subdomain]} (-> (parse-uuid (str mock-id))
                                        (db.mocks/get-mock-by-id database)
                                        adapters.mocks/->wire)
        path (logic.yml/gen-path user-id mock-id)
        env (get-in config [:config :env])
        host-key (if (= env :dev) :local-host :host)
        host (logic.yml/gen-host wildcard subdomain)
        content-with-host (logic.yml/add-host host-key host content)
        ?file (storage/get-file storage "moclojer" path)
        valid? (logic.yml/validate-mock content)]

    (storage/upload! storage "moclojer" path content-with-host)
    (logs/log :info "uploaded generated yaml"
              :ctx {:path path
                    :?file ?file})

    (if valid?
      (when enabled
        (ports.producers/generate-unified-yml! path true publisher))
      (do
        (logs/log :warn "invalid mock content"
                  :ctx {:content content
                        :explanation (logic.yml/explain-mock-validation content)})
        (ports.producers/set-unification-status! mock-id "offline-invalid"
                                                 publisher)))))

;; NOTE: do not confuse :local-host tag in moclojer yamls with the localhost
;; network! :local-host is just the local version of the host in prod env.
;; It's there just so we can update the unified yml.

(defn generate-unified-yml!
  [gen-yml-path append? {:keys [storage config publisher]}]
  (let [new-mock-file (storage/get-file storage "moclojer" gen-yml-path)
        new-mock-content (when new-mock-file (slurp (io/reader new-mock-file)))
        unified-mock (storage/get-file storage "moclojer" "moclojer.yml")
        env (get-in config [:config :env])
        host-key (if (= env :dev) :local-host :host)
        {:keys [mock-id]} (logic.yml/unpack-path gen-yml-path)]
    (try
      (storage/upload! storage "moclojer" "moclojer.yml"
                       (if unified-mock
                         (logic.yml/unified-yaml (slurp (io/reader unified-mock))
                                                 new-mock-content append? host-key)
                         (or new-mock-content "[]\n")))

      (logs/log :info "uploaded unified yaml"
                :ctx {:gen-yml-path gen-yml-path})

      (ports.producers/restart-mock! publisher)
      (when append?
        (ports.producers/set-unification-status! mock-id "published" publisher))

      (catch Exception e
        (logs/log :error "failed to generate unified yaml"
                  :ctx {:ex-message (.getMessage e)})
        (ports.producers/set-unification-status! mock-id "offline" publisher)))))

(defn delete-single-yml! [mock-id user-id components]
  (let [path (logic.yml/gen-path user-id mock-id)
        storage (:storage components)]
    (generate-unified-yml! path false components)
    (storage/delete-file! storage "moclojer" path)
    (logs/log :info "deleted yaml"
              :ctx {:path path})))

(defn get-parsed-yml-content
  [path storage]
  (if-let [content (storage/get-file storage "moclojer" path)]
    {:path path
     :content (logic.yml/parse-yaml-read-literal (slurp content))}
    (logs/log :warn "mock file doesn't exist"
              :ctx {:path path})))

(defn verify-unified-yml!
  [{:keys [mocks]} {:keys [config storage publisher]}]
  (let [paths (logic.yml/reduce-paths mocks)
        parsed-mocks (doall (map #(get-parsed-yml-content % storage) paths))
        parsed-unified (get-parsed-yml-content "moclojer.yml" storage)
        env (get-in config [:config :env])
        host-key (if (= env :dev) :local-host :host)
        missing-mocks (logic.yml/filter-missing-mocks
                       parsed-mocks parsed-unified host-key)]
    (doseq [{:keys [endpoint path]} missing-mocks]
      (logs/log :info "found mock missing from unified. trying to regenerate..."
                :ctx (assoc (select-keys endpoint [:path host-key])
                            :s3-path path))
      (ports.producers/generate-unified-yml! path false publisher)
      (Thread/sleep 3000))))
