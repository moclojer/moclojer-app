(ns yaml-generator.ports.producers
  (:require  [components.redis-publisher :as redis-publisher]))

(defn mock-unified!
  [path domain create-domain? valid-again? publisher]
  (redis-publisher/publish! publisher "mock.unified"
                            {:event {:path path
                                     :domain domain
                                     :create-domain? create-domain?
                                     :valid-again? valid-again?}}))

(defn restart-mock!
  [publisher]
  (redis-publisher/publish! publisher "restart.mocks"
                            {:event {:path "moclojer.yml"}}))

(defn create-domain!
  [domain publisher]
  (redis-publisher/publish! publisher "domain.create"
                            {:event {:domain domain}}))

(defn set-publication-status!
  [domain new-status publisher]
  (redis-publisher/publish! publisher "mock.publication"
                            {:event {:domain domain
                                     :new-status new-status}})

  domain)
