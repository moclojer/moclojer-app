(ns back.api.server
  (:require
   [back.api.ports.workers :as p.workers]
   [back.api.routes :as routes]
   [com.moclojer.components.core :as components]
   [com.moclojer.components.logs :as logs]
   [com.moclojer.components.migrations :as migrations]
   [com.stuartsierra.component :as component]
   [dev.utils :refer [trace-all-ns]])
  (:gen-class))

(def system-atom (atom nil))

(defn build-system-map []
  (component/system-map
   :config (components/new-config "back/config.edn")
   :logger (component/using (components/new-logger) [:config])
   :http (components/new-http)
   :sentry (component/using (components/new-sentry) [:config])
   :router (components/new-router routes/routes)
   :database (component/using (components/new-database) [:config])
   :mq (component/using (components/new-mq
                         p.workers/workers
                         [{:channel "domains.verification.fired"
                           :event {}
                           ;; every 2 minutes
                           :sleep 120000}
                          {:channel "yml.unified.verification.fired"
                           :event {}
                           ;; every 5 minutes
                           :sleep 300000}]

                         false)
                        [:config :database :sentry])
   :webserver (component/using (components/new-webserver)
                               [:config :http :router :database :mq :sentry])))

(defn start-system! [system-map]
  (migrations/migrate (migrations/build-complete-db-config "back/config.edn"))
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
