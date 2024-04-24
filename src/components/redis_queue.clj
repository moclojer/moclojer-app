(ns components.redis-queue
  (:require [com.stuartsierra.component :as component]
            [components.logs :as logs]
            [components.sentry :as sentry]
            [taoensso.carmine :as car]
            [taoensso.carmine.message-queue :as mq]))

(defn create-queue-handler-fn [handler components sentry]
  (fn [{:keys [message attempt]}]
    (try
      (logs/log :info "received a message"
                :ctx {:mid (:mid message)
                      :attempt attempt})
      (handler message components)
      {:status :success}
      (catch Throwable e
        (logs/log :error "failed to handle message"
                  :ctx {:mid (:mid message)
                        :ex-message (.getMessage e)})
        (sentry/send-event! sentry e)
        {:status :error
         :throwable e}))))

(defrecord RedisWorkers [config database storage publisher
                         http workers sentry]
  component/Lifecycle
  (start [this]
    (logs/log :info "starting redis workers")
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
                      :http http
                      :sentry sentry}
          ws (doall (for [{:keys [queue-name handler]} workers]
                      (do
                        (logs/log :info "starting redis queue"
                                  :ctx {:queue-name queue-name})
                        (mq/worker
                          conn queue-name {:handler (create-queue-handler-fn
                                                      handler components sentry)}))))]

      (println "Started redis workers")
      (merge this {:workers ws
                   :conn conn
                   :pool pool})))
  (stop [this]
    (doseq [worker (:workers this)]
      (logs/log :info "stopping worker"
                :ctx {:queue-name (:queue-name worker)})
      (mq/stop worker))
    (.close (:pool this))
    (merge this {:conn nil
                 :pool nil
                 :workers nil})))

(defn new-redis-queue [workers]
  (->RedisWorkers {} {} {} {} {} workers {}))
