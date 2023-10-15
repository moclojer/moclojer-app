(ns back.components.redis-publisher
  (:require [com.stuartsierra.component :as component]
            [taoensso.carmine :as carmine]
            [taoensso.carmine.message-queue :as mq]))

(defrecord RedisPublisher [config workers]
  component/Lifecycle
  (start [this]
    (let [{:keys [password host port]} (-> config :config :redis-worker)
          conn {:spec {:password password
                       :host host
                       :port port}}]
      (assoc this :publish-conn conn)))
  (stop [this]
    (assoc this :publish-conn nil))

  (publish! [this queue-name message]
    (carmine/wcar (:publish-conn this)
                  queue-name
                  (mq/enqueue
                   queue-name
                   message))))
