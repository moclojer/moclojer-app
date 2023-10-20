(ns back.integration.components.db-test
  (:require
   [components.config :as config]
   [components.database :as database]
   [back.integration.components.utils :as utils]
   [state-flow.assertions.matcher-combinators :refer [match?]]
   [com.stuartsierra.component :as component]
   [state-flow.api :refer [defflow]]
   [state-flow.core :refer [flow]]))

(defn execute!
  [commands]
  (flow "makes database execution"
        [database (state-flow.api/get-state :database)]
        (-> database
            (database/execute commands)
            state-flow.api/return)))

(defn- create-and-start-system
  []
  (component/start-system
   (component/system-map
    :config (config/new-config)
    :database (component/using (database/new-database) [:config]))))

(defflow flow-integration-db-test
  {:init (utils/start-system! create-and-start-system)
   :cleanup utils/stop-system!
   :fail-fast? true}

  (flow "creates a table and insert a row and retreive"
        (execute! ["CREATE TABLE test (id SERIAL PRIMARY KEY, name VARCHAR(255))"])

        (execute! ["INSERT INTO test (name) VALUES ('test')"])

        (match? [#:test {:name "test"
                         :id 1}]
                (execute! ["SELECT * FROM test"]))))
