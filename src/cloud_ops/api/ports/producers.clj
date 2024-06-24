(ns cloud-ops.api.ports.producers
  (:require [com.moclojer.components.publisher :as publisher]))

(defn create-domain! [domain retrying? publisher ctx]
  (publisher/publish! publisher "mock.updated"
                      {:event {:domain.create {:domain domain
                                               :retrying? retrying?
                                               :ctx ctx}}}))

(defn verify-domain!
  [domain retrying? skip-data? publisher ctx]
  (publisher/publish! publisher "domain.verification.dispatched"
                      {:event {:domain domain
                               :retrying? retrying?
                               :skip-data? skip-data?
                               :ctx ctx}}))

(defn set-dns-status!
  [domain new-status publisher ctx]
  (publisher/publish! publisher "domain.updated"
                      {:event {:domain domain
                               :new-status new-status
                               :ctx ctx}}))
