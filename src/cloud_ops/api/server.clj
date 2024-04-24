(ns cloud-ops.api.server
  (:require [cloud-ops.api.ports.workers :as p.workers]
            [com.stuartsierra.component :as component]
            [components.config :as config]
            [components.http :as http]
            [components.logs :as logs]
            [components.redis-publisher :as redis-publisher]
            [components.redis-queue :as redis-queue]
            [components.sentry :as sentry])
  (:gen-class))
(def system-atom (atom nil))

(defn build-system-map []
  (component/system-map
   :config (config/new-config)
   :http (http/new-http)
   :sentry (component/using (sentry/new-sentry) [:config])
   :publisher (component/using
               (redis-publisher/new-redis-publisher)
               [:config :sentry])
   :workers (component/using
             (redis-queue/new-redis-queue p.workers/workers)
             [:config :http :publisher :sentry])))

(defn start-system! [system-map]
  (logs/setup [["*" :info]] :auto :prod)
  (->> system-map
       component/start
       (reset! system-atom)))

(defn stop-system! []
  (logs/log :info "stopping system")
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
  (start-system! (build-system-map))
  (stop-system!)
  ;;
  )
