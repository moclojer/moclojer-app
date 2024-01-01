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
      (logs/log :error :publish-mock-error e))))
