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

(defn publish-mock-changed-event [mock-id publisher]
  (try
    (redis-publisher/publish! publisher "mock.changed" {:event {:mock-id mock-id}})
    (catch Exception e
      (logs/log :error :publish-mock-error e))))
