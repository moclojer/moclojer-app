(ns back.api.ports.producers
  (:require
   [components.logs :as logs]
   [components.redis-publisher :as redis-publisher]))

(defn publish-mock-event
  ([mock publisher]
   (publish-mock-event mock :mock.changed publisher))
  ([mock event publisher]
   (try
     (redis-publisher/publish! publisher event  {:event mock})
     mock
     (catch Exception e
       (logs/log :error :publish-mock-error e)))))
