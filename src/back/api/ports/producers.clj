(ns back.api.ports.producers
  (:require [com.moclojer.components.publisher :as publisher]))

(defn generate-single-yml! [mock-id publisher ctx]
  (publisher/publish! publisher "mock.updated"
                      {:event {:yml.single.generate {:mock-id mock-id
                                                     :ctx ctx}}}))

(defn delete-single-yml! [mock-id owner-id publisher ctx]
  (publisher/publish! publisher "mock.deleted"
                      {:event {:yml.single.delete {:mock-id mock-id
                                                   :owner-id owner-id
                                                   :ctx ctx}}}))

(defn delete-domain! [domain publisher ctx]
  (publisher/publish! publisher "mock.deleted"
                      {:event {:domain.delete {:domain domain
                                               :ctx ctx}}}))

(defn create-domain! [domain publisher ctx]
  (publisher/publish! publisher "mock.updated"
                      {:event {:domain.create {:domain domain
                                               :retrying? true
                                               :ctx ctx}}}))

(defn verify-domain!
  [domain retrying? skip-data? publisher ctx]
  (publisher/publish! publisher "domain.verification.dispatched"
                      {:event {:domain domain
                               :retrying? retrying?
                               :skip-data? skip-data?
                               :ctx ctx}}))

(defn verify-unified-yml!
  [mocks publisher ctx]
  (publisher/publish! publisher "yml.unified.verification.dispatched"
                      {:event {:mocks mocks
                               :ctx ctx}}))
