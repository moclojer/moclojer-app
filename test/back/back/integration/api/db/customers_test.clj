(ns back.integration.api.db.customers-test
  (:require [back.api.db.customers :as db.customers]
            [components.config :as config]
            [components.database :as database]
            [back.integration.components.utils :as utils]
            [com.stuartsierra.component :as component]
            [state-flow.api :refer [defflow]]
            [state-flow.assertions.matcher-combinators :refer [match?]]
            [state-flow.core :refer [flow]]
            [state-flow.state :as state]))

(defn- create-and-start-components! []
  (component/start-system
   (component/system-map
    :config (config/new-config)
    :database (component/using (database/new-database)
                               [:config]))))

(defflow flow-db-insert-user-test
  {:init (utils/start-system! create-and-start-components!)
   :cleanup utils/stop-system!
   :fail-fast? true}

  (flow "create a user in the database"
    [database (state-flow.api/get-state :database)]

    (state/invoke
     #(db.customers/insert! {:customer/uuid #uuid "cd989358-af38-4a2f-a1a1-88096aa425a7"
                             :customer/email "test@gmail.com"
                             :customer/external-uuid #uuid "dcff4c06-1c9e-4abb-a49b-438e1869ec5b"}
                            database))

    (flow "then get by external id"
      (match? {:customer/uuid #uuid "cd989358-af38-4a2f-a1a1-88096aa425a7"
               :customer/email "test@gmail.com"
               :customer/external_uuid #uuid "dcff4c06-1c9e-4abb-a49b-438e1869ec5b"}
              (db.customers/get-by-external-id #uuid "dcff4c06-1c9e-4abb-a49b-438e1869ec5b" database)))

    (flow "then get the user from db"
      (match? [{:customer/uuid #uuid "cd989358-af38-4a2f-a1a1-88096aa425a7"
                :customer/email "test@gmail.com"
                :customer/external_uuid #uuid "dcff4c06-1c9e-4abb-a49b-438e1869ec5b"}]
              (db.customers/get-customers database)))

    (flow "get a invalid id from db return nil"
      (match? nil
              (db.customers/get-by-external-id (java.util.UUID/randomUUID) database)))))

(defflow flow-db-update-username-test
  {:init (utils/start-system! create-and-start-components!)
   :cleanup utils/stop-system!
   :fail-fast? true}

  (flow "create a user in the database"
    [database (state-flow.api/get-state :database)]

    (state/invoke
     #(db.customers/insert! {:customer/uuid #uuid "cd989358-af38-4a2f-a1a1-88096aa425a7"
                             :customer/email "test@gmail.com"
                             :customer/external-uuid #uuid "dcff4c06-1c9e-4abb-a49b-438e1869ec5b"}
                            database))

    (flow "then update the username"
      (state/invoke
       #(db.customers/update! {:customer/uuid #uuid "cd989358-af38-4a2f-a1a1-88096aa425a7"
                               :customer/email "test@gmail.com"
                               :customer/username "chico"
                               :customer/external-uuid #uuid "dcff4c06-1c9e-4abb-a49b-438e1869ec5b"}
                              database))

      (flow "get user by id"
        (match? {:customer/uuid #uuid "cd989358-af38-4a2f-a1a1-88096aa425a7"
                 :customer/email "test@gmail.com"
                 :customer/username "chico"
                 :customer/external_uuid #uuid "dcff4c06-1c9e-4abb-a49b-438e1869ec5b"}
                (db.customers/get-by-external-id #uuid "dcff4c06-1c9e-4abb-a49b-438e1869ec5b" database))))))
