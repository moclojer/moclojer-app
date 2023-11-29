(ns dev.api.dev
  (:require [back.api.routes :as routes]
            [com.stuartsierra.component :as component]
            [components.config :as config]
            [components.database :as database]
            [components.http :as http]
            [components.logs :as logs]
            [components.migrations :as migrations]
            [components.redis-publisher :as redis-publisher]
            [components.router :as router]
            [components.webserver :as webserver]
            [pg-embedded-clj.core :as pg-emb])
  (:gen-class))

;;this namespace is used for development purposes only
;;it is not included in the uberjar
;;refactoring to reuse components
(def system-atom (atom nil))

(defn build-system-map []
  (component/system-map
   :config (config/new-config)
   :http (http/new-http)
   :router (router/new-router routes/routes)
   :database (component/using (database/new-database) [:config])
   :publisher (component/using (redis-publisher/new-redis-publisher) [:config])
   :webserver (component/using (webserver/new-webserver) [:config :http :router :database :publisher])))

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

(comment

  (stop-system-dev!)
  (start-system-dev! (build-system-map))
  )
