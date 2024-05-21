(ns back.api.ports.producers
  (:require [components.redis-publisher :as redis-publisher]))

(defn publish-mock-event [mock queue-name publisher]
  (redis-publisher/publish! publisher queue-name {:event mock}))

(defn publish-mock-changed-event [mock-id publisher]
  (redis-publisher/publish! publisher "mock.changed" {:event {:mock-id mock-id}}))

(defn verify-domain!
  [domain retrying? skip-data? publisher]
  (redis-publisher/publish! publisher "domain.verify"
                            {:event {:domain domain
                                     :retrying? retrying?
                                     :skip-data? skip-data?}}))

(defn verify-unified!
  [mocks publisher]
  (redis-publisher/publish! publisher "unified.verify"
                            {:event {:mocks mocks}}))
