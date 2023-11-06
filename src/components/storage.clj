(ns components.storage
  (:require [cognitect.aws.client.api :as aws]
            [cognitect.aws.credentials :as cred]
            [com.stuartsierra.component :as component]
            [components.config :as config]))

(defprotocol IStorage
  (get-bucket [this bucket-name])
  (list-buckets [this])
  (create-bucket! [this bucket-name])
  (upload! [this bucket-name key value encoding]))

(defrecord Storage [config]
  component/Lifecycle
  (start [this]
    (println "Starting storage component")
    (let [s3 (aws/client {:api :s3
                          :region (or (System/getenv "S3_REGION") "us-east-2")
                          :credentials-provider (cred/basic-credentials-provider
                                                 {:access-key-id (-> config :config :storage :access-key-id)
                                                  :secret-access-key (-> config :config :storage :secret-access-key)})
                          :endpoint-override {:protocol :https
                                              :hostname (-> config :config :storage :host)}})]

      (assoc this :storage s3)))
  (stop [this]
    (println "Stopping storage component")
    (assoc this :storage nil))

  IStorage
  (get-bucket [this bucket-name]

    (-> (-> this :storage)
        (aws/invoke {:op :ListObjects
                     :request {:Bucket bucket-name}})
        :Contents))

  (list-buckets [this]
    (-> (-> this :storage)
        (aws/invoke {:op :ListBuckets})
        :Buckets))

  (create-bucket! [this bucket-name]
    (-> (-> this :storage)
        (aws/invoke {:op :CreateBucket
                     :request {:Bucket bucket-name}})))

  (upload! [this bucket-name key value encoding]
    (-> (-> this :storage)
        (aws/invoke {:op :PutObject
                     :request {:Bucket bucket-name
                               :Key key
                               :Body (encoding value)}}))))

(comment

  (defn new-storage []
    (map->Storage {}))

  (def system-map
    (component/system-map
     :config (config/new-config)
     :storage (component/using
               (new-storage) [:config])))

  (def system-atom (atom {}))
  (->> system-map
       component/start
       (reset! system-atom))
  (def storage
    (:storage @system-atom))

  (get-bucket storage "moclojer")

  (list-buckets storage)
  #_(create-bucket! storage "moclojer")
  ;
  )


