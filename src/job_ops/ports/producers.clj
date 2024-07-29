(ns job-ops.ports.producers
  (:require [com.moclojer.components.mq :as mq]))

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
