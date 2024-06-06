(ns cloud-ops.api.ports.producers
  (:require [com.moclojer.components.publisher :as publisher]))

(defn create-domain! [domain retrying? publisher]
  (publisher/publish! publisher "mock.updated"
                      {:event {:domain.create {:domain domain
                                               :retrying? retrying?}}}))

(defn verify-domain!
  [domain retrying? skip-data? publisher]
  (publisher/publish! publisher "domain.verification.dispatched"
                      {:event {:domain domain
                               :retrying? retrying?
                               :skip-data? skip-data?}}))

(defn set-dns-status!
  [domain new-status publisher]
  (publisher/publish! publisher "domain.updated"
                      {:event {:domain domain
                               :new-status new-status}}))
