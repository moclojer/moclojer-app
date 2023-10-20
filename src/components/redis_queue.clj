(ns components.redis-queue
  (:require [components.config :as config]
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
          _ (println "Starting redis workers ")
          ws (doall (for [{:keys [queue-name handler]} workers]
                      (do
                        (println "Starting worker:" queue-name)
                        (mq/worker conn queue-name
                                   {:handler (fn [{:keys [message attempt]}]
                                               (try
                                                 (println "Received" (:event message) "attempt" attempt)
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
  (def workers [{:handler (fn [{:keys [message attempt]} components]
                            (clojure.pprint/pprint :received)
                            (clojure.pprint/pprint components)
                            (clojure.pprint/pprint message))
                 :queue-name :mock.changed}])

  (defn map-s []
    (component/system-map
     :config (config/new-config)
     :workers (component/using
               (new-redis-queue workers)
               [:config])))

  (def system-atom (atom nil))
  (def s (->>  (map-s)
               component/start
               (reset! system-atom)))

  #_(def system @system-atom)

  #_(carmine/wcar {:spec {:password "redislocal"}} :mock.changed
                  (mq/enqueue :mock.changed {:event (name (gensym)) :iter "1"}))

  #_(swap!
     system-atom
     (fn [s] (when s (component/stop s))))
  #_(let [queue (component/start (new-redis-queue :xs [{:f (fn [component]
                                                             (fn [{:keys [message attempt]}]
                                                               (println "Received" (:event message))
                                                               {:status :success}))
                                                        :q :testing}]))]
      (dotimes [n 10] (carmine/wcar (:conn queue) (car-mq/enqueue :testing {:event (name (gensym)) :iter n})))
      (Thread/sleep 30000)

      (component/stop queue))
;
  )




