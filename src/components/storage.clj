(ns components.storage
  (:require [cognitect.aws.client.api :as aws]
            [cognitect.aws.credentials :as cred]
            [com.stuartsierra.component :as component]
            [components.config :as config]))

;;improve protocol
(defprotocol IStorage
  (file [this])
  (save! [this]))

(defrecord Storage [config]
  component/Lifecycle
  (start [this]
    (println "Starting storage component")
    (let [s3 (aws/client {:api :s3
                          :region (or (System/getenv "S3_REGION") "us-east-2")
                          :credentials-provider (cred/basic-credentials-provider
                                                 {:access-key-id (-> config :config :aws :access-key-id)
                                                  :secret-access-key (-> config :config :aws :secret-access-key)})
                          :endpoint-override {:protocol :https
                                              :hostname (-> config :config :aws :host)}})]

      (assoc this :storage s3)))
  (stop [this]
    (println "Stopping storage component")
    (assoc this :storage nil))

  IStorage
  (file [])

  (save []))

(defn new-storage []
  (map->Storage {}))

(comment

  (def system-map
    (component/system-map
     :config (config/new-config)
     :storage (component/using
               (new-storage) [:config])))

  (def system-atom (atom {}))
  (let [s (->> system-map
               component/start
               (reset! system-atom))])
  (def storage
    (:storage @system-atom))

  (:storage storage)

  ;
  )


