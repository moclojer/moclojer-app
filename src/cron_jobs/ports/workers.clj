(ns cron-jobs.ports.workers)

(defn check-event
  [{:keys [event]} _]
  (println :received event))
