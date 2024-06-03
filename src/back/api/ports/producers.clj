(ns back.api.ports.producers
  (:require [com.moclojer.components.publisher :as publisher]))

(defn publish-mock-event [mock queue-name publisher]
  (publisher/publish! publisher queue-name {:event mock}))

(defn publish-mock-changed-event [mock-id publisher]
  (publisher/publish! publisher "mock.changed" {:event {:mock-id mock-id}}))

(defn verify-domain!
  [domain retrying? skip-data? publisher]
  (publisher/publish! publisher "domain.verify"
                      {:event {:domain domain
                               :retrying? retrying?
                               :skip-data? skip-data?}}))

(defn verify-unified!
  [mocks publisher]
  (publisher/publish! publisher "unified.verify"
                      {:event {:mocks mocks}}))
