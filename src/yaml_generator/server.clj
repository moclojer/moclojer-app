(ns yaml-generator.server
  (:require [com.stuartsierra.component :as component]
            [components.config :as config]
            [components.database :as database]
            [components.logs :as logs]
            [components.migrations :as migrations]
            [components.redis-publisher :as redis-publisher]
            [components.redis-queue :as redis-queue]
            [components.storage :as storage]
            [pg-embedded-clj.core :as pg-emb]
            [yaml-generator.ports.workers :as p.workers])
  (:gen-class))

(def system-atom (atom nil))

(defn build-system-map []
  (component/system-map
   :config (config/new-config)
   :database (component/using (database/new-database) [:config])
   :storage (component/using (storage/new-storage) [:config])
   :publisher (component/using 
                (redis-publisher/new-redis-publisher) [:config])
   :workers (component/using
             (redis-queue/new-redis-queue p.workers/workers) [:config :database :storage :publisher])))

(defn start-system! [system-map]
  (logs/setup [["*" :info]] :auto)
  (migrations/migrate (migrations/configuration-with-db))
  (->> system-map
       component/start
       (reset! system-atom)))

(defn start-system-dev! [system-map]
  (logs/setup [["*" :info]] :auto)
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

  ;in memory
  (stop-system-dev!)
  (start-system-dev! (build-system-map))
  ;with db
  (stop-system!)
  (start-system! (build-system-map))
  ;;
  
  )
