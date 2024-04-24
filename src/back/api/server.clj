(ns back.api.server
  (:require [back.api.ports.workers :as p.workers]
            [back.api.routes :as routes]
            [com.stuartsierra.component :as component]
            [components.config :as config]
            [components.database :as database]
            [components.http :as http]
            [components.logs :as logs]
            [components.migrations :as migrations]
            [components.redis-publisher :as redis-publisher]
            [components.redis-queue :as redis-queue]
            [components.router :as router]
            [components.sentry :as sentry]
            [components.webserver :as webserver])
  (:gen-class))

(def system-atom (atom nil))

(defn build-system-map []
  (component/system-map
   :config (config/new-config)
   :http (http/new-http)
   :sentry (component/using (sentry/new-sentry) [:config])
   :router (router/new-router routes/routes)
   :database (component/using (database/new-database) [:config])
   :publisher (component/using (redis-publisher/new-redis-publisher)
                               [:config :sentry])
   :webserver (component/using (webserver/new-webserver)
                               [:config :http :router :database :publisher :sentry])
   :workers (component/using
             (redis-queue/new-redis-queue p.workers/workers)
             [:config :database :publisher :sentry])))

(defn start-system! [system-map]
  (logs/setup [["*" :info]] :auto :dev)
  (migrations/migrate (migrations/configuration-with-db))
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
  (stop-system!)
  (start-system! (build-system-map)))
