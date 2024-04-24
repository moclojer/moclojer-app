(ns components.redis-publisher
  (:require [com.stuartsierra.component :as component]
            [components.logs :as logs]
            [components.sentry :as sentry]
            [taoensso.carmine :as carmine]
            [taoensso.carmine.message-queue :as mq]))

(defprotocol IPublisher
  (publish! [this queue-name message]))

(defrecord RedisPublisher [config sentry]
  component/Lifecycle
  (start [this]
    (let [{:keys [uri]} (-> config :config :redis-worker)
          conn {:spec {:uri uri}}]
      (merge this {:publish-conn conn
                   :sentry sentry})))
  (stop [this]
    (merge this {:publish-conn nil
                 :sentry nil}))

  IPublisher
  (publish! [this queue-name message]
    (logs/log :info :queue-name queue-name :message message)
    (logs/log :info :conn (:publish-conn this))
    (try
      (let [msg-resp (carmine/wcar (:publish-conn this)
                                   queue-name
                                   (mq/enqueue queue-name message))]
        (logs/log :info :queue-name queue-name :message-resp msg-resp))
      (catch Exception e
        (logs/log :error :publish :e e)
        (sentry/send-event! (:sentry this) e)))))

(defn new-redis-publisher []
  (->RedisPublisher {} {}))

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
  (publish! [_ queue-name message]
    (if-let [state (get @mock-publisher queue-name)]
      (swap! mock-publisher assoc queue-name (conj state message))
      (swap! mock-publisher assoc queue-name [message]))))

(defn mock-redis-publisher []
  (->MockRedisPublisher {}))

(comment
  ;;invoke stop system
  (carmine/wcar {:spec {:host "localhost"
                        :port 6379}}
                :domain.create
                (mq/enqueue
                 :mock.publication
                 {:event {:domain "test-j0suetm"
                          :new-status "offline"}}))
  ;;
  )
