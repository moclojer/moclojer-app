(ns cron-jobs.ports.producers
  (:require
   [components.logs :as logs]
   [components.redis-publisher :as redis-publisher]))

(defn check-event!
  [job-key publisher]
  (try
    (redis-publisher/publish!
     publisher :event.check
     {:event {:job-key job-key
              :sent-at (quot (System/currentTimeMillis) 1000)}})
    (catch Exception e
      (logs/log :error :check-event e))))
