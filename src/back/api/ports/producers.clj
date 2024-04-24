(ns back.api.ports.producers
  (:require
   [components.logs :as logs]
   [components.redis-publisher :as redis-publisher]))

(defn publish-mock-event [mock queue-name publisher]
  (redis-publisher/publish! publisher queue-name {:event mock}))

(defn publish-mock-changed-event [mock-id publisher]
  (redis-publisher/publish! publisher "mock.changed" {:event {:mock-id mock-id}}))
