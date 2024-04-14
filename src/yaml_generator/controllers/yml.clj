(ns yaml-generator.controllers.yml
  (:require
   [clojure.java.io :as io]
   [clojure.string :as str]
   [components.logs :as logs]
   [components.storage :as storage]
   [yaml-generator.logic.yml :as logic.yml]
   [yaml-generator.ports.producers :as ports.producers]
   [back.api.db.mocks :as db.mocks]))

(defn generate [{:keys [mock-id]}
                {:keys [storage publisher config database]}]
  (let [{:mock/keys [user_id wildcard
                     content subdomain
                     enabled publication]} (db.mocks/get-mock-by-id mock-id database)
        path (logic.yml/gen-path user_id mock-id)
        env (get-in config [:config :env])
        host-key (if (= env :dev) :local-host :host)
        host (logic.yml/gen-host wildcard subdomain)
        domain (str/replace host #".moclojer.com" "")
        content-with-host (logic.yml/add-host host-key host content)
        ?file (storage/get-file storage "moclojer" path)
        valid? (logic.yml/validate-mock content)]

    (logs/log :info :upload :path path :?file ?file)
    (storage/upload! storage "moclojer" path content-with-host)
    (if valid?
      (when enabled
        (ports.producers/mock-unified! path
                                       domain
                                       (= publication "offline")
                                       (and (= publication "offline-invalid")
                                            valid?)
                                       publisher))
      (do
        (logs/log :warn :invalid-mock content
                  :explanation (logic.yml/explain-mock-validation content))
        (ports.producers/set-publication-status! domain
                                                 "offline-invalid"
                                                 publisher)))
    (logs/log :info :upload-success :path path)))

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
       (if unified-mock
         (do
           (logs/log :info :generate-unified :path path :new-mock new-mock-file)
           (->> (logic.yml/unified-yaml (slurp (io/reader unified-mock))
                                        new-mock-content append? host-key)
                (storage/upload! storage "moclojer" "moclojer.yml")))
         (storage/upload! storage "moclojer" "moclojer.yml"
                          (or new-mock-content "[]\n")))

       (ports.producers/restart-mock! publisher)
       (when create-domain?
         (ports.producers/create-domain! domain publisher))
       (when valid-again?
         (ports.producers/set-publication-status! domain
                                                  "published"
                                                  publisher))

       (catch Exception e
         (logs/log :error :generate-unified
                   (-> e ex-data :cause)
                   (.getMessage e)))))))

(defn delete [{:keys [id user-id]} components]
  (let [path (logic.yml/gen-path user-id id)
        storage (:storage components)]
    (logs/log :info :delete :path path)
    (generate-unified-yml {:path path} components false)
    (storage/delete-file! storage "moclojer" path)))
