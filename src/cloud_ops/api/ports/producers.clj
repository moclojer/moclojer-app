(ns cloud-ops.api.ports.producers
  (:require
   [components.logs :as logs]
   [components.redis-publisher :as redis-publisher]))

(defn verify-domain!
  [domain attempt publisher]
  (try
    (redis-publisher/publish! publisher :domain.verify
                              {:event {:domain domain
                                       :attempt attempt}})
    (catch Exception e
      (logs/log :error :verify-domain e))))

(defn set-publication-status!
  [domain new-status publisher]
  (try
    (redis-publisher/publish! publisher :mock.publication
                              {:event {:domain domain
                                       :new-status new-status}})
    domain
    (catch Exception e
      (logs/log :error :set-publication-status e))))
