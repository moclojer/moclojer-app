(ns back.api.server
  (:require [back.api.ports.workers :as p.workers]
            [back.api.routes :as routes]
            [com.moclojer.components.core :as components]
            [com.moclojer.components.logs :as logs]
            [com.moclojer.components.migrations :as migrations]
            [com.stuartsierra.component :as component])
  (:gen-class))

(def system-atom (atom nil))

(defn build-system-map []
  (component/system-map
   :config (components/new-config "back/config.edn")
   :http (components/new-http)
   :sentry (component/using (components/new-sentry) [:config])
   :router (components/new-router routes/routes)
   :database (component/using (components/new-database) [:config])
   :publisher (component/using (components/new-publisher
                                [{:qname "domains.verification.dispatch"
                                  :event {}
                                  ;; every 2 minutes
                                  :delay 120000}
                                 {:qname "unified.verification.dispatch"
                                  :event {}
                                  ;; every 5 minutes
                                  :delay 300000}])
                               [:config :sentry])
   :webserver (component/using (components/new-webserver)
                               [:config :http :router :database :publisher :sentry])
   :workers (component/using
             (components/new-consumer p.workers/workers false)
             [:config :database :publisher :sentry])))

(defn start-system! [system-map]
  (components/setup-logger [["*" :info]] :auto :prod)
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
