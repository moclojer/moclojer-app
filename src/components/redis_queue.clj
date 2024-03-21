(ns components.redis-queue
  (:require
   [com.stuartsierra.component :as component]
   [components.logs :as logs]
   [taoensso.carmine.message-queue :as mq]))

(defrecord RedisWorkers [config database storage publisher http workers]
  component/Lifecycle
  (start [this]
    (let [{:keys [uri]} (-> config :config :redis-worker)
          conn {:spec {:uri uri}}
          components {:database database
                      :storage storage
                      :publisher publisher
                      :config config
                      :http http}
          _ (logs/log :info :redis-worker :start-workers)
          ws (doall (for [{:keys [queue-name handler]} workers]
                      (do
                        (logs/log :info :queue-name queue-name)
                        (mq/worker conn queue-name
                                   {:handler (fn [{:keys [message attempt]}]
                                               (try
                                                 (logs/log :info :receive-message attempt)
                                                 (handler message components)
                                                 {:status :success}
                                                 (catch Throwable e
                                                   (logs/log :error :error-message message)
                                                   (logs/log :error :error-message-error e)
                                                   (println "Error in worker" e)
                                                   {:status :error
                                                    :throwable e})))
                                    :eoq-backoff-ms 1
                                    #_#_:monitor (fn [{:keys [worker] :as event}]
                                                   (logs/log :info :monitor-event event)
                                                   (logs/log :info :worker @worker))}))))]

      (println "Started redis workers")
      (assoc this :workers ws :conn conn)))
  (stop [this]
    (doseq [worker (:workers this)]
      (println "Stopping worker" worker)
      (mq/stop worker))
    (assoc this :conn nil :workers nil)))

(defn new-redis-queue [workers]
  (->RedisWorkers {} {} {} {} {} workers))

