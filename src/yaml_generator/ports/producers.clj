(ns yaml-generator.ports.producers
  (:require
   [components.logs :as logs]
   [components.redis-publisher :as redis-publisher]))

(defn mock-unified!
  [path domain publisher]
  (try
    (redis-publisher/publish! publisher :mock.unified
                              {:event {:path path
                                       :domain domain}})
    (catch Exception e
      (logs/log :error :publish-mock-error e))))

(defn restart-mock!
  [publisher]
  (try
    (redis-publisher/publish! publisher :restart.mocks
                              {:event {:path "moclojer.yml"}})
    (catch Exception e
      (logs/log :error :publish-mock-restart-error e))))

(defn create-domain!
  [domain publisher]
  (try
    (redis-publisher/publish! publisher :domain.create
                              {:event {:domain domain}})
    (catch Exception e
      (logs/log :error :publish-domain-error e))))
