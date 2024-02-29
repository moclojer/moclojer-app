(ns cron-jobs.jobs.redis-queue-checker)

(defrecord RedisQueueChecker []
  org.quartz.Job
  (execute [_ ctx]
    (println "checking redis queue" ctx)))

(def spec
  {:job/type RedisQueueChecker
   :job/key "jobs.redis-queue-checker.1"
   :job/trigger {:id "triggers.redis-queue-checker.1"
                 :repeat-count 1}})
