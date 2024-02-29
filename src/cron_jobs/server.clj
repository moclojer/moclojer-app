(ns cron-jobs.server
  (:require
   [clojurewerkz.quartzite.jobs :as qj]
   [clojurewerkz.quartzite.schedule.simple :as qss]
   [clojurewerkz.quartzite.scheduler :as qs]
   [clojurewerkz.quartzite.triggers :as qt]
   [cron-jobs.jobs.redis-queue-checker :as jobs.rq]))

(defn build-job [{:job/keys [type key trigger]}]
  {:job (qj/build
         (qj/of-type type)
         (qj/with-identity (qj/key key)))
   :trigger (let [{:keys [id repeat-count interval-ms]
                   :or {repeat-count 1
                        interval-ms 1000}} trigger]
              (qt/build
               (qt/with-identity id)
               (qt/start-now)
               (qt/with-schedule
                 (qss/schedule
                  (qss/with-repeat-count repeat-count)
                  (qss/with-interval-in-milliseconds interval-ms)))))})

(defn start-jobs []
  (let [sc (qs/start (qs/initialize))
        job-specs [jobs.rq/spec]
        jobs (map build-job job-specs)]
    (doseq [{:keys [job trigger]} jobs]
      (qs/schedule sc job trigger))))

(defn -main
  "The entry-point for 'gen-class'"
  [& _args]
  (.addShutdownHook (Runtime/getRuntime))
  (start-jobs))

(comment
  (start-jobs)
  ;;
  )
