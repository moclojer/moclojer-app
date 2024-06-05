(ns back.api.ports.producers
  (:require [com.moclojer.components.publisher :as publisher]))

(defn generate-single-yml! [mock-id publisher]
  (publisher/publish! publisher "mock.updated"
                      {:event {:yml.single.generate {:mock-id mock-id}}}))

(defn delete-single-yml! [mock-id user-id publisher]
  (publisher/publish! publisher "mock.deleted"
                      {:event {:yml.single.delete {:mock-id mock-id
                                                   :user-id user-id}}}))

(defn verify-domain!
  [domain retrying? skip-data? publisher]
  (publisher/publish! publisher "domain.verification.dispatched"
                      {:event {:domain domain
                               :retrying? retrying?
                               :skip-data? skip-data?}}))

(defn verify-unified-yml!
  [mocks publisher]
  (publisher/publish! publisher "yml.unified.verification.dispatched"
                      {:event {:mocks mocks}}))
