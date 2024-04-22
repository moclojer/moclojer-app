(ns yaml-generator.server
  (:require [com.stuartsierra.component :as component]
            [components.config :as config]
            [components.database :as database]
            [components.logs :as logs]
            [components.redis-publisher :as redis-publisher]
            [components.redis-queue :as redis-queue]
            [components.sentry :as sentry]
            [components.storage :as storage]
            [yaml-generator.ports.workers :as p.workers])
  (:gen-class))

(def system-atom (atom nil))

(defn build-system-map []
  (component/system-map
   :config (config/new-config)
   :sentry (component/using (sentry/new-sentry :cloud-ops) [:config])
   :database (component/using (database/new-database) [:config])
   :storage (component/using (storage/new-storage) [:config])
   :publisher (component/using
               (redis-publisher/new-redis-publisher)
               [:config :sentry])
   :workers (component/using
             (redis-queue/new-redis-queue p.workers/workers)
             [:config :database :storage :publisher :sentry])))

(defn start-system! [system-map]
  (logs/setup [["*" :info]] :auto)
  (->> system-map
       component/start
       (reset! system-atom)))

(defn stop-system! []
  (logs/log :info :system-stop)
  (swap!
   system-atom
   (fn [s] (when s (component/stop s)))))

(defn -main
  "The entry-point for 'gen-class'"
  [& _args]
  ;; Graceful shutdown
  (.addShutdownHook (Runtime/getRuntime)
                    (Thread. ^Runnable stop-system!))
  (start-system! (build-system-map)))

(comment
  ;with db
  (stop-system!)
  (start-system! (build-system-map))
  ;;
  )
