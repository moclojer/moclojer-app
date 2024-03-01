(ns components.scheduler
  (:require
   [clojurewerkz.quartzite.conversion :as qc]
   [clojurewerkz.quartzite.jobs :as qj]
   [clojurewerkz.quartzite.schedule.simple :as qss]
   [clojurewerkz.quartzite.scheduler :as qs]
   [clojurewerkz.quartzite.triggers :as qt]
   [com.stuartsierra.component :as component]
   [components.config :as config]))

(defprotocol IScheduler
  (start-job [this job-key])
  (stop-job [this job-key]))

(defn build-job [{:keys [type key trigger system-atom]}]
  {:job (qj/build
         (qj/of-type type)
         (qj/using-job-data {"system-atom" system-atom})
         (qj/with-identity (qj/key key)))
   :trigger (let [{:keys [id repeat-count interval-ms]
                   :or {repeat-count 0 ;; execute once
                        interval-ms 1000}} trigger]
              (qt/build
               (qt/with-identity id)
               (qt/start-now)
               (qt/with-schedule
                 (qss/schedule
                  (qss/with-repeat-count repeat-count)
                  (qss/with-interval-in-milliseconds interval-ms)))))})

(defrecord Scheduler [config publisher workers jobs]
  component/Lifecycle
  (start [this]
    (println "Started scheduler")
    (merge this {:scheduler (qs/start (qs/initialize))
                 :jobs jobs}))
  (stop [this]
    (dissoc this :jobs))

  IScheduler
  (start-job [this job-key]
    (when-let [job (->> (:jobs this)
                        (filter #(= (:key %) job-key))
                        first)]
      (let [built-job (->> (component/start (:system-map job))
                           (assoc job :system-atom)
                           build-job
                           vals)]
        (apply (partial qs/schedule (:scheduler this)) built-job))))
  (stop-job [this job-key]
    (when-let [_job (->> (:jobs this)
                         (filter #(= (get-in % [:spec :job :key])
                                     job-key))
                         first)]
      #_(qs/unschedule-job (:scheduler this) (-> job :job :trigger :key)))))

(defn new-scheduler [jobs]
  (->Scheduler {} {} {} jobs))

(comment
  (defrecord NoOpJob []
    org.quartz.Job
    (execute [_ ctx]
      (println (qc/from-job-data ctx))
      (comment "does nothing")))

  (defrecord AnotherJob []
    org.quartz.Job
    (execute [_ _]
      (comment "does nothing as well")))

  (def jobs
    [{:type NoOpJob
      :key "jobs.noop.1"
      :system-map (component/system-map
                   :config (config/new-config))
      :trigger {:id "triggers.noop.1"
                :repeat-count 0}}
     {:type AnotherJob
      :key "jobs.anotherjob.1"
      :system-map (component/system-map
                   :config (config/new-config))
      :trigger {:id "triggers.anotherjob.1"
                :repeat-count 0}}])

  (def scheduler (component/start (new-scheduler jobs)))

  scheduler

  (start-job scheduler "jobs.noop.1")
  ;; (stop-job scheduler "jobs.noop.1")

  (component/stop scheduler)
  ;;
  )
