(ns back.integration.api.db.get-username-test
  (:require [back.api.db.customers :as db.customers]
            [back.integration.components.utils :as utils]
            [com.moclojer.components.core :as components]
            [com.stuartsierra.component :as component]
            [state-flow.api :refer [defflow]]
            [state-flow.assertions.matcher-combinators :refer [match?]]
            [state-flow.core :refer [flow]]
            [state-flow.state :as state]))

(defn- create-and-start-components []
  (component/start-system
   (component/system-map
    :config (components/new-config "back/config.edn")
    :database (component/using (components/new-database) [:config]))))

(defflow flow-db-get-username
  {:init (utils/start-system! create-and-start-components)
   :cleanup utils/stop-system!
   :fail-fast? true}

  (flow "get username"

    [database (state-flow.api/get-state :database)]

    (state/invoke
     #(db.customers/insert!
       {:customer/uuid #uuid "cd989358-af38-4a2f-a1a1-88096aa425a7"
        :customer/email "test@gmail.com"
        :customer/external-uuid #uuid "dcff4c06-1c9e-4abb-a49b-438e1869ec5b"
        :customer/username "chico"}
       database))

    (flow "get by username"
      (match? {:customer/uuid #uuid "cd989358-af38-4a2f-a1a1-88096aa425a7"
               :customer/email "test@gmail.com"
               :customer/username "chico"
               :customer/external_uuid #uuid "dcff4c06-1c9e-4abb-a49b-438e1869ec5b"}
              (db.customers/get-by-username "chico" database)))

    (flow "get by username"
      (match? nil
              (db.customers/get-by-username "chicoo" database)))))
