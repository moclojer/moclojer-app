(ns cloud-ops.api.ports.producers
  (:require [com.moclojer.components.publisher :as publisher]))

(defn create-domain!
  [domain retrying? publisher]
  (publisher/publish! publisher "domain.create"
                      {:event {:domain domain
                               :retrying? retrying?}}))

(defn verify-domain!
  [domain retrying? skip-data? publisher]
  (publisher/publish! publisher "domain.verify"
                      {:event {:domain domain
                               :retrying? retrying?
                               :skip-data? skip-data?}}))

(defn set-publication-status!
  [domain new-status publisher]
  (publisher/publish! publisher "mock.publication"
                      {:event {:domain domain
                               :new-status new-status}}))
