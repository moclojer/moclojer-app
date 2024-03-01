(ns cron-jobs.server
  (:require
   [com.stuartsierra.component :as component]
   [components.logs :as logs]
   [components.scheduler :as scheduler]
   [cron-jobs.jobs.redis-checker :as jobs.rc]))

(def system-atom (atom nil))

(def system-map
  (component/system-map
   :scheduler (scheduler/new-scheduler [jobs.rc/spec])))

(defn start-system! []
  (logs/setup [["*" :info]] :auto)
  (->> system-map
       component/start
       (reset! system-atom))

  (let [{:keys [scheduler]} @system-atom]
    (scheduler/start-all-jobs scheduler)))

(defn stop-system! []
  (logs/log :info :system-stop)
  (let [{:keys [scheduler]} @system-atom]
    (scheduler/stop-all-jobs scheduler))
  (swap!
   system-atom
   (fn [s] (when s (component/stop s)))))

(defn -main
  "The entry-point for 'gen-class'"
  [& _args]
  (.addShutdownHook (Runtime/getRuntime) (stop-system!))
  (start-system!))

(comment
  (start-system!)
  (stop-system!)
  ;;
  )
