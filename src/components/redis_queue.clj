(ns components.redis-queue
  (:require [clojure.core.async :as async]
            [clojure.data.json :as json]
            [com.stuartsierra.component :as component]
            [components.logs :as logs]
            [components.sentry :as sentry])
  (:import [redis.clients.jedis JedisPooled JedisPubSub]))

(defprotocol ISubscriber
  (unarchive-queue! [this qname on-msg-fn])
  (subscribe-workers [this workers]))

(defrecord RedisWorkers [config database storage publisher
                         http workers sentry]
  component/Lifecycle
  (start [this]
    (logs/log :info "starting redis workers")
    (let [{:keys [host port]} (get-in config [:config :redis])
          conn (JedisPooled. host port)
          comps {:database  database  :storage storage
                 :publisher publisher :config  config
                 :http      http      :sentry  sentry}]
      (subscribe-workers
       (merge this {:conn conn
                    :components comps})
       workers)))
  (stop [this]
    (update-in this [:pubsub] #(.unsubscribe %))
    (update-in this [:conn] #(.close %)))

  ISubscriber
  (unarchive-queue! [this qname on-msg-fn]
    (loop [unarchived-cnt 0]
      (if-let [msg (.rpop (:conn this) (str "pending." qname))]
        (do
          (on-msg-fn msg)
          (recur (inc unarchived-cnt)))
        (logs/log :info "unarchived queue"
                  :ctx {:qname qname
                        :count unarchived-cnt}))))
  (subscribe-workers [this workers]
    (let [workers-by-qname (reduce
                            (fn [acc {:keys [queue-name handler]}]
                              (assoc acc queue-name handler))
                            {} workers)
          qnames (vec (map :queue-name workers))
          pubsub (proxy [JedisPubSub] []
                   (onMessage [qname json-msg]
                     (logs/log :info "received a message"
                               :ctx {:qname qname})
                     (if-let [whandler (get workers-by-qname qname)]
                       (try
                         (whandler
                          (json/read-str json-msg
                                         :key-fn keyword)
                          (:components this))
                         (catch Throwable e
                           (logs/log :error "failed to handle message"
                                     :ctx {:ex-message (.getMessage e)})
                           (some-> (get-in this [:components :sentry])
                                   (sentry/send-event!
                                    {:status "error"
                                     :message "failed to handle message"
                                     :throwable e}))))
                       (logs/log :warn "no work handler for queue"
                                 :ctx {:qname qname}))))]

      (doseq [qname qnames]
        (unarchive-queue! this qname #(.onMessage pubsub qname %)))

      (logs/log :info "subscribing workers"
                :ctx {:workers qnames})

      (async/thread
        (.subscribe (:conn this) pubsub (into-array qnames)))

      (assoc this :pubsub pubsub))))

(defn new-redis-queue [workers]
  (->RedisWorkers {} {} {} {} {} workers {}))

(comment
  (def rw
    (component/start
     (->RedisWorkers {:config {:redis {:host "localhost"
                                       :port 6379}}}
                     nil nil nil nil
                     [{:handler (fn [ev _cmp] (prn :ev ev))
                       :queue-name "test.test"}]
                     nil)))

  (component/stop rw)

  ;;
  )
