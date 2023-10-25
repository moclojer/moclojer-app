(ns components.redis-publisher
  (:require [com.stuartsierra.component :as component]
            [components.logs :as logs]
            [taoensso.carmine :as carmine]
            [taoensso.carmine.message-queue :as mq]))

(defprotocol IPublisher
  (publish! [this queue-name message]))

(defrecord RedisPublisher [config]
  component/Lifecycle
  (start [this]
    (let [{:keys [password host port]} (-> config :config :redis-worker)
          conn {:spec {:password password
                       :host host
                       :port port}}]
      (assoc this :publish-conn conn)))
  (stop [this]
    (assoc this :publish-conn nil))

  IPublisher
  (publish! [this queue-name message]
    (logs/log :info :queue-name :massage message)
    (try (carmine/wcar (:publish-conn this)
                       queue-name
                       (mq/enqueue
                        queue-name
                        message))

         (catch Exception e
           (logs/log :error :publish :e e)))))

(defn new-redis-publisher []
  (->RedisPublisher {}))

;; mock in memory publisher for testing 
(def mock-publisher (atom {}))

(defrecord MockRedisPublisher [config]

  component/Lifecycle
  (start [this]
    (assoc this :publish-conn nil))

  (stop [this]
    (dissoc this :publish-conn)
    (reset! mock-publisher {}))

  IPublisher
  (publish! [_this queue-name message]
    (let [state (get @mock-publisher queue-name)]
      (if state
        (swap! mock-publisher assoc queue-name (conj state message))
        (swap! mock-publisher assoc queue-name [message])))))

(defn mock-redis-publisher []
  (->MockRedisPublisher {}))



