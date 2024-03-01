(ns cron-jobs.ports.workers)

(defn check-event
  [{{:keys [_job-id sent-at]} :event} _]
  (let [elapsed-time (- (quot (System/currentTimeMillis) 1000)
                        sent-at)]
    (when (> elapsed-time 5000)
      (comment "TODO"))
    #_(stop-job! thread-id)))
