(ns cron-jobs.server
  (:require
   [cron-jobs.jobs.redis-checker :as jobs.rc]))

(defn start-jobs []
  (let [sc
        job-specs [jobs.rc/spec]
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
