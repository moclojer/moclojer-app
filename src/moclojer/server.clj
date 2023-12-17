(ns moclojer.server
  (:require [com.stuartsierra.component :as component]
            [components.config :as config]
            [components.logs :as logs]
            [components.moclojer :as moclojer]
            [components.redis-publisher :as redis-publisher]
            [components.redis-queue :as redis-queue]
            [components.storage :as storage]
            [moclojer.ports.workers :as p.workers]))

(def system-atom (atom nil))

(defn build-system-map []
  (component/system-map
   :config (config/new-config)
   :storage (component/using (storage/new-storage) [:config])
   :publisher (component/using
               (redis-publisher/new-redis-publisher) [:config])
   :workers (component/using
             (redis-queue/new-redis-queue p.workers/workers) [:config :storage])
   :moclojer (component/using
              (moclojer/new-moclojer) [:storage])))

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
  (start-system! (build-system-map))
  (stop-system!)
  ;
  )

