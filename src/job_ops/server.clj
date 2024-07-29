(ns job-ops.server
  (:require [com.moclojer.components.core :as components]
            [com.moclojer.components.logs :as logs]
            [com.stuartsierra.component :as component]
            [job-ops.ports.workers :refer [workers]])
  (:gen-class))

(def system-atom (atom nil))

(defn build-system-map []
  (component/system-map
   :config (components/new-config "back/config.edn")
   :sentry (component/using (components/new-sentry) [:config])
   :mq (component/using
        (components/new-mq workers false)
        [:config :sentry])))

(defn start-system! [system-map]
  (components/setup-logger [["*" :info]] :auto :prod)
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
  (start-system! (build-system-map))
  ;;
  )
