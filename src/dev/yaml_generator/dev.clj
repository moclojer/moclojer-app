(ns dev.yaml-generator.dev
  (:require [com.stuartsierra.component :as component]
            [components.config :as config]
            [components.database :as database]
            [components.redis-publisher :as redis-publisher]
            [components.redis-queue :as redis-queue]
            [components.sentry :as sentry]
            [components.storage :as storage]
            [dev.utils :as utils]
            [yaml-generator.ports.workers :as p.workers])
  (:gen-class))

(def sys-atom (atom nil))

(defn build-system-map []
  (component/system-map
   :config (config/new-config)
   :sentry (sentry/new-mock-sentry)
   :database (component/using (database/new-database) [:config])
   :storage (component/using (storage/new-storage) [:config])
   :publisher (component/using
               (redis-publisher/new-redis-publisher) [:config])
   :workers (component/using
             (redis-queue/new-redis-queue p.workers/workers false)
             [:config :database :storage :publisher])))

(comment
  ;; init
  (utils/start-system-dev! sys-atom (build-system-map) false)

  ;; iterate
  (utils/stop-system-dev! sys-atom false)
  ;; reload then
  (utils/start-system-dev! sys-atom (build-system-map) false)

  ;; finish
  (utils/stop-system-dev! sys-atom false))
