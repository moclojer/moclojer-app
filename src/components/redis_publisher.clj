(ns components.redis-publisher
  (:require [components.config :as config]
            [com.stuartsierra.component :as component]
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
    (carmine/wcar (:publish-conn this)
                  queue-name
                  (mq/enqueue
                   queue-name
                   message))))

(defn new-redis-publisher []
  (->RedisPublisher {}))

(comment

  #_(carmine/wcar {:spec {:password "redislocal"}} :mock.changed
                  (mq/enqueue :mock.changed {:event (name (gensym)) :iter "1"}))

  #_(publish!
   (:publisher @system-atom)
   :mock.changed
   {:event (name (gensym)) :iter "1"})
  #_(swap!
     system-atom
     (fn [s] (when s (component/stop s))))

;
  )

