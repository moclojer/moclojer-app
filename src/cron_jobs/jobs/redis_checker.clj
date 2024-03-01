(ns cron-jobs.jobs.redis-checker
  (:require
   [clojurewerkz.quartzite.conversion :as qc]
   [com.stuartsierra.component :as component]
   [components.config :as config]
   [components.redis-publisher :as redis-publisher]
   [components.redis-queue :as redis-queue]
   [cron-jobs.ports.producers :as p.producers]
   [cron-jobs.ports.workers :as p.workers]))

(def system-map
  (component/system-map
   :config (config/new-config)
   :publisher (component/using (redis-publisher/new-redis-publisher)
                               [:config])
   :workers (component/using (redis-queue/new-redis-queue
                              [{:handler p.workers/check-event
                                :queue-name :event.check}])
                             [:config])))

(defrecord RedisQueueChecker []
  org.quartz.Job
  (execute [_ ctx]
    (let [ctxd (qc/from-job-data ctx)
          job-key (get ctxd "job-key")
          {:keys [publisher]} (get ctx "system-map")]
      (p.producers/check-event! job-key publisher))))

(def spec
  {:type RedisQueueChecker
   :key "jobs.redis-checker.1"
   :trigger {:id "triggers.redis-checker.1"
             :repeat-count 0}})
