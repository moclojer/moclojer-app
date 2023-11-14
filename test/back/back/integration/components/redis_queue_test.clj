(ns back.integration.components.redis-queue-test
  (:require [back.integration.components.utils :as utils]
            [clojure.test :refer [is]]
            [com.stuartsierra.component :as component]
            [components.config :as config]
            [components.database :as database]
            [components.redis-publisher :as redis-publisher]
            [components.redis-queue :as redis-queue]
            [components.storage :as storage]
            [state-flow.api :refer [defflow]]
            [state-flow.assertions.matcher-combinators :refer [match?]]
            [state-flow.core :refer [flow]]
            [state-flow.state :as state]))

(def state (atom nil))

(defn fake-worker
  [message _]
  (is (= message {:event "test"}))
  (swap! state (fn [_] message)))


(def workers [{:handler fake-worker
               :queue-name :test}])

(defn publish-message [msg queue-name]
  (flow "publish a message"
    [publisher (state-flow.api/get-state :publisher)]

    (-> publisher
        (redis-publisher/publish!
         queue-name
         msg)
        state-flow.api/return)))

(defn- create-and-start-system
  []
  (component/start-system
   (component/system-map
    :config (config/new-config)
    :database (component/using (database/new-database) [:config])
    :publisher (component/using
                (redis-publisher/new-redis-publisher) [:config])
    :storage (component/using (storage/new-storage) [:config])
    :workers (component/using
              (redis-queue/new-redis-queue workers) [:config :database :storage]))))

(defflow flow-integration-db-test
  {:init (utils/start-system! create-and-start-system)
   :cleanup utils/stop-system!
   :fail-fast? true}
  (flow "creates a table and insert a row and retreive"

    [_ (publish-message {:event "test"} :test)]

    (state/invoke (fn [] (Thread/sleep 1000)))
    (flow "sleeping and check the state"

      (match? @state
              {:event "test"}))))

