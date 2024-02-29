(ns cron-jobs.jobs.redis-checker
  (:require
   [com.stuartsierra.component :as component]
   [components.config :as config]
   [components.redis-publisher :as redis-publisher]
   [components.redis-queue :as redis-queue]
   [cron-jobs.ports.producers :as p.producers]
   [cron-jobs.ports.workers :as p.workers]))

(def system-atom (atom nil))

(defn build-system-map []
  (component/system-map
   :config (config/new-config)
   :publisher (component/using (redis-publisher/new-redis-publisher)
                               [:config])
   :workers (component/using (redis-queue/new-redis-queue
                              [{:handler p.workers/check-event
                                :queue-name :event.check}])
                             [:config])))

(defn start-system! [system-map]
  (->> system-map
       component/start
       (reset! system-atom)))

(defn stop-system! []
  (swap! system-atom #(when % (component/stop %))))

(defn run-job [_ctx {:keys [publisher]}]
  ;; TODO: check event and stop system
  (p.producers/check-event! "lorem ipsum" publisher))

(defrecord RedisQueueChecker []
  org.quartz.Job
  (execute [_ ctx]
    (run-job ctx (start-system! (build-system-map)))))

(def spec
  {:job/type RedisQueueChecker
   :job/key "jobs.redis-queue-checker.1"
   :job/trigger {:id "triggers.redis-queue-checker.1"
                 :repeat-count 0}})
