(ns back.api.server
  (:require
   [back.api.routes :as routes]
   [components.config :as config]
   [components.database :as database]
   [components.http :as http]
   [components.logs :as logs]
   [components.migrations :as migrations]
   [components.router :as router]
   [components.webserver :as webserver]
   [com.stuartsierra.component :as component]
   [pg-embedded-clj.core :as pg-emb])
  (:gen-class))

(def system-atom (atom nil))

(defn build-system-map []
  (component/system-map
   :config (config/new-config)
   :http (http/new-http)
   :router (router/new-router routes/routes)
   :database (component/using (database/new-database) [:config])
   :webserver (component/using (webserver/new-webserver) [:config :http :router :database])))

(defn start-system! [system-map]
  (logs/setup [["*" :info]] :auto)
  (migrations/migrate (migrations/configuration-with-db))
  (->> system-map
       component/start
       (reset! system-atom)))

(defn start-system-dev! [system-map]
  (logs/setup [["*" :info]] :auto)
  (pg-emb/init-pg)
  (migrations/migrate (migrations/configuration-with-db))
  (->> system-map
       component/start
       (reset! system-atom)))

(defn stop-system-dev! []
  (logs/log :info :system-stop)
  (swap!
   system-atom
   (fn [s] (when s (component/stop s))))
  (pg-emb/halt-pg!))

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

  (stop-system-dev!)
  (start-system-dev! (build-system-map))

  )

(comment
  (stop-system!)
  (start-system! (build-system-map))
  )
