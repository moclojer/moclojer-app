(ns back.api.ports.producers
  (:require [com.moclojer.components.mq :as mq]))

(defn generate-single-yml! [mock-id mq ctx]
  (mq/try-op! mq :publish!
              ["mock.updated"
               {:event {:yml.single.generate {:mock-id mock-id
                                              :ctx ctx}}}]
              ctx))

(defn delete-single-yml! [mock-id owner-id mq ctx]
  (mq/try-op! mq :publish!
              ["mock.deleted"
               {:event {:yml.single.delete {:mock-id mock-id
                                            :owner-id owner-id
                                            :ctx ctx}}}]
              ctx))

(defn delete-domain! [domain mq ctx]
  (mq/try-op! mq :publish!
              ["mock.deleted"
               {:event {:domain.delete {:domain domain
                                        :ctx ctx}}}]
              ctx))

(defn create-domain! [domain mq ctx]
  (mq/try-op! mq :publish!
              ["mock.updated"
               {:event {:domain.create {:domain domain
                                        :retrying? true
                                        :ctx ctx}}}]
              ctx))

(defn verify-domain!
  [domain retrying? skip-data? mq ctx]
  (mq/try-op! mq :publish!
              ["domain.verification.dispatched"
               {:event {:domain domain
                        :retrying? retrying?
                        :skip-data? skip-data?
                        :ctx ctx}}]
              ctx))

(defn verify-unified-yml!
  [mocks mq ctx]
  (mq/try-op! mq :publish!
              ["yml.unified.verification.dispatched"
               {:event {:mocks mocks
                        :ctx ctx}}]
              ctx))
