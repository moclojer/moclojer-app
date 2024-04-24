(ns cloud-ops.api.ports.producers
  (:require [components.logs :as logs]
            [components.redis-publisher :as redis-publisher]))

(defn verify-domain!
  [domain attempt publisher]
  (redis-publisher/publish! publisher "domain.verify"
                            {:event {:domain domain
                                     :attempt attempt}}))

(defn set-publication-status!
  [domain new-status publisher]
  (redis-publisher/publish! publisher "mock.publication"
                            {:event {:domain domain
                                     :new-status new-status}})

  domain)
