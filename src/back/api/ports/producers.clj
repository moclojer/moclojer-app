(ns back.api.ports.producers
  (:require
   [components.logs :as logs]
   [components.redis-publisher :as redis-publisher]))

(defn publish-mock-event [mock queue-name publisher]
  (try
    (redis-publisher/publish! publisher queue-name  {:event mock})
    mock
    (catch Exception e
      (logs/log :error :publish-mock-error e))))
