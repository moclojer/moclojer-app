(ns components.redis-queue
  (:require [com.stuartsierra.component :as component]
            [components.logs :as logs]
            [components.sentry :as sentry]
            [taoensso.carmine :as car]
            [taoensso.carmine.message-queue :as mq]))

(defrecord RedisWorkers [config database storage publisher http workers]
  component/Lifecycle
  (start [this]
    (let [{:keys [uri]} (-> config :config :redis-worker)
          pool (car/connection-pool {:test-on-borrow? true
                                     :test-on-return? true
                                     :test-while-idle? true})
          conn {:pool pool
                :spec {:uri uri}}
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
                                                   (sentry/send-event e)
                                                   (println "Error in worker" e)
                                                   {:status :error
                                                    :throwable e})))}))))]

      (println "Started redis workers")
      (merge this {:workers ws
                   :conn conn
                   :pool pool})))
  (stop [this]
    (doseq [worker (:workers this)]
      (println "Stopping worker" worker)
      (mq/stop worker))
    (.close (:pool this))
    (merge this {:conn nil
                 :pool nil
                 :workers nil})))

(defn new-redis-queue [workers]
  (->RedisWorkers {} {} {} {} {} workers))

