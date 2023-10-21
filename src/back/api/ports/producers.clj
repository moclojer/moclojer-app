(ns back.api.ports.producers
  (:require [components.logs :as logs]
            [components.redis-publisher :as redis-publisher]))

(defn mock-updated
  [mock publisher]
  (try
    (let [_ (redis-publisher/publish! publisher :mock.changed {:event mock})]
      mock)
    (catch Exception e
      (logs/log :error :publish-mock-error e))))
