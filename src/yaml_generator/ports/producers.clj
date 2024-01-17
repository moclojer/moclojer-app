(ns yaml-generator.ports.producers
  (:require
   [components.logs :as logs]
   [components.redis-publisher :as redis-publisher]))

(defn mock-unified!
  [path publisher]
  (try
    (let [_ (redis-publisher/publish! publisher :mock.unified {:event {:path path}})]
      path)
    (catch Exception e
      (logs/log :error e)
      (logs/log :error :publish-mock-error e))))

(defn restart-mock!
  [publisher]
  (try
    (let [_ (redis-publisher/publish! publisher :restart.mocks
                                      {:event {:path "moclojer.yml"}})])
    (catch Exception e
      (logs/log :error :publish-mock-restart-error e))))

(defn create-domain!
  [domain publisher]
  (try
    (let [_ (redis-publisher/publish! publisher :domain.create
                                      {:event {:domain domain}})])
    (catch Exception e
      (logs/log :error :publish-domain-error e))))
