(ns cloud-ops.api.ports.producers
  (:require [components.redis-publisher :as redis-publisher]))

(defn create-domain!
  [domain retrying? publisher]
  (redis-publisher/publish! publisher "domain.create"
                            {:event {:domain domain
                                     :retrying? retrying?}}))

(defn verify-domain!
  [domain attempt publisher]
  (redis-publisher/publish! publisher "domain.verify"
                            {:event {:domain domain
                                     :attempt attempt}}))

(defn set-publication-status!
  [domain new-status publisher]
  (redis-publisher/publish! publisher "mock.publication"
                            {:event {:domain domain
                                     :new-status new-status}}))

(defn verify-health!
  [scope constraints publisher]
  (redis-publisher/publish! publisher "health.verify"
                            {:event (merge constraints {:scope scope})}))
