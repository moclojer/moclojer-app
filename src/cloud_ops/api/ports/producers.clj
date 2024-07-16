(ns cloud-ops.api.ports.producers
  (:require [com.moclojer.components.mq :as mq]))

(defn create-domain! [domain retrying? mq ctx]
  (mq/try-op! mq :publish!
              ["mock.updated"
               {:event {:domain.create {:domain domain
                                        :retrying? retrying?
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

(defn set-dns-status!
  [domain new-status mq ctx]
  (mq/try-op! mq :publish!
              ["domain.updated"
               {:event {:domain domain
                        :new-status new-status
                        :ctx ctx}}]
              ctx))
