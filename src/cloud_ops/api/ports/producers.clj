(ns cloud-ops.api.ports.producers
  (:require [components.redis-publisher :as redis-publisher]))

(defn create-domain!
  [domain retrying? publisher]
  (redis-publisher/publish! publisher "domain.create"
                            {:event {:domain domain
                                     :retrying? retrying?}}))

(defn verify-domain!
  [domain retrying? skip-data? publisher]
  (redis-publisher/publish! publisher "domain.verify"
                            {:event {:domain domain
                                     :retrying? retrying?
                                     :skip-data? skip-data?}}))

(defn set-publication-status!
  [domain new-status publisher]
  (redis-publisher/publish! publisher "mock.publication"
                            {:event {:domain domain
                                     :new-status new-status}}))

(defn verify-health!
  [scope args publisher]
  (redis-publisher/publish! publisher "health.verify"
                            {:event {:scope scope
                                     :args args}}))
