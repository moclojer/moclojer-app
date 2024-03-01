(ns cron-jobs.jobs.redis-checker
  (:require
   [com.stuartsierra.component :as component]
   [components.config :as config]
   [components.logs :as logs]
   [components.redis-publisher :as redis-publisher]
   [components.redis-queue :as redis-queue]))

(def job-atom (atom {:thread-id nil
                     :system-map nil}))

(defn stop-job! [thread-id]
  (when (= thread-id (:thread-id @job-atom))
    (component/stop (:system-map @job-atom))
    (reset! job-atom {:thread-id nil
                      :system-map nil})))

(defn produce-check-event!
  [thread-id publisher]
  (try
    (redis-publisher/publish!
     publisher :event.check
     {:event {:thread-id thread-id
              :sent-at (quot (System/currentTimeMillis) 1000)}})
    (catch Exception e
      (logs/log :error :check-event e))))

(defn check-event-handler
  [{{:keys [thread-id sent-at]} :event} _]
  (let [elapsed-time (- (quot (System/currentTimeMillis) 1000)
                        sent-at)]
    (when (> elapsed-time 5000)
      (comment "TODO"))
    (stop-job! thread-id)))

(def system-map
  (component/system-map
   :config (config/new-config)
   :publisher (component/using (redis-publisher/new-redis-publisher)
                               [:config])
   :workers (component/using (redis-queue/new-redis-queue
                              [{:handler check-event-handler
                                :queue-name :event.check}])
                             [:config])))

(defn start-job! []
  (->> (component/start system-map)
       (swap! job-atom assoc :system-map))

  job-atom)

(defrecord RedisQueueChecker []
  org.quartz.Job
  (execute [_ _]
    (if (:system-map @job-atom)
      (println "something went wrong")
      (let [{{:keys [publisher]} :system-map} @(start-job!)
            thread-id (.getName (Thread/currentThread))]
        (swap! job-atom assoc :thread-id thread-id)
        (produce-check-event! thread-id publisher)))))

(def spec
  {:type RedisQueueChecker
   :key "jobs.redis-queue-checker.1"
   :trigger {:id "triggers.redis-queue-checker.1"
             :repeat-count 0}})
