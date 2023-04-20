(ns api.server
  (:require
   [api.routes :as routes]
   [com.stuartsierra.component :as component]
   [components.config :as config]
   [components.http :as http]
   [components.logs :as logs]
   [components.router :as router]
   [components.webserver :as webserver])
  (:gen-class))

(def system-atom (atom nil))

(defn- build-system-map []
  (component/system-map
   :config (config/new-config)
   :http (http/new-http)
   :router (router/new-router routes/routes)
   ; #TODO add database component in the future
   #_#_:database (component/using (database/new-database) [:config])
   :webserver (component/using (webserver/new-webserver) [:config :http :router])))

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
  ; Graceful shutdown
  (.addShutdownHook (Runtime/getRuntime)
                    (Thread. ^Runnable stop-system!))
  (start-system! (build-system-map)))

(comment
  (stop-system!)
  (start-system! (build-system-map))
  )
