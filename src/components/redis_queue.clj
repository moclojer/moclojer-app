(ns components.redis-queue
  (:require
   [components.logs :as logs]
   [com.stuartsierra.component :as component]
   [taoensso.carmine.message-queue :as mq]))

(defrecord RedisWorkers [config database workers]
  component/Lifecycle
  (start [this]
    (let [{:keys [password host port]} (-> config :config :redis-worker)
          conn {:spec {:password password
                       :host host
                       :port port}}
          components  (-> {}
                          (assoc :database database
                                 :config config))
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
                                                   (println "Error in worker" e)
                                                   {:status :error
                                                    :throwable e})))}))))]

      (println "Started redis workers")
      (assoc this :workers ws :conn conn)))
  (stop [this]
    (doseq [worker (:workers this)]
      (println "Stopping worker" worker)
      (mq/stop worker))
    (assoc this :conn nil :workers nil)))

(defn new-redis-queue [workers]
  (->RedisWorkers {} {} workers))

(comment

  #_(carmine/wcar {:spec {:password "redislocal"}} :mock.changed
                  (mq/enqueue :mock.changed {:event (name (gensym)) :iter "1"})))




