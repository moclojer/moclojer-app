(ns back.integration.api.db.mocks-test
  (:require [back.api.db.mocks :as db.mocks]
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
    :config (components/new-config "~/back/config.edn")
    :database (component/using (components/new-database) [:config]))))

(defflow flow-db-insert-mock-test
  {:init (utils/start-system! create-and-start-components)
   :cleanup utils/stop-system!
   :fail-fast? true}

  (flow "save a mock in the database"
    [database (state-flow.api/get-state :database)]

    (state/invoke
     #(db.mocks/insert! {:mock/id #uuid "41571d31-d9c2-4216-b6f6-d3c7bcc27570"
                         :mock/user_id #uuid "916d0b8b-af1b-4178-8aa1-0531c582dcd1"
                         :mock/wildcard "test"
                         :mock/subdomain "chico"
                         :mock/enabled true
                         :mock/publication "offline"}
                        database))

    (flow "then get by uuid"
      (match? [{:mock/id #uuid "41571d31-d9c2-4216-b6f6-d3c7bcc27570"
                :mock/user_id #uuid "916d0b8b-af1b-4178-8aa1-0531c582dcd1"
                :mock/subdomain "chico"
                :mock/wildcard "test"
                :mock/enabled true
                :mock/publication "offline"}]
              (db.mocks/get-mocks {:user-id #uuid "916d0b8b-af1b-4178-8aa1-0531c582dcd1"} database)))))

(defflow flow-db-get-mock-by-id
  {:init (utils/start-system! create-and-start-components)
   :cleanup utils/stop-system!
   :fail-fast? true}

  (flow "save a mock in the database"
    [database (state-flow.api/get-state :database)]

    (state/invoke
     #(db.mocks/insert! {:mock/id #uuid "41571d31-d9c2-4216-b6f6-d3c7bcc27570"
                         :mock/user_id #uuid "916d0b8b-af1b-4178-8aa1-0531c582dcd1"
                         :mock/wildcard "test"
                         :mock/subdomain "chico"
                         :mock/enabled true
                         :mock/publication "offline"}
                        database))

    (flow "then get by uuid"
      (match? {:mock/id #uuid "41571d31-d9c2-4216-b6f6-d3c7bcc27570"
               :mock/user_id #uuid "916d0b8b-af1b-4178-8aa1-0531c582dcd1"
               :mock/subdomain "chico"
               :mock/wildcard "test"
               :mock/enabled true
               :mock/publication "offline"}
              (db.mocks/get-mock-by-id
               #uuid "41571d31-d9c2-4216-b6f6-d3c7bcc27570"
               database)))))

(defflow flow-db-update-mock-by-id
  {:init (utils/start-system! create-and-start-components)
   :cleanup utils/stop-system!
   :fail-fast? true}

  (flow "save a mock in the database"
    [database (state-flow.api/get-state :database)]

    (state/invoke
     #(db.mocks/insert! {:mock/id #uuid "41571d31-d9c2-4216-b6f6-d3c7bcc27570"
                         :mock/user_id #uuid "916d0b8b-af1b-4178-8aa1-0531c582dcd1"
                         :mock/wildcard "test"
                         :mock/subdomain "chico"
                         :mock/enabled true
                         :mock/publication "offline"}
                        database))

    (flow "then get by uuid"
      (match? {:mock/id #uuid "41571d31-d9c2-4216-b6f6-d3c7bcc27570"
               :mock/user_id #uuid "916d0b8b-af1b-4178-8aa1-0531c582dcd1"
               :mock/subdomain "chico"
               :mock/wildcard "test"
               :mock/content "chico string content"
               :mock/enabled true
               :mock/publication "offline"}
              (db.mocks/update! {:mock/id #uuid "41571d31-d9c2-4216-b6f6-d3c7bcc27570"
                                 :mock/user_id #uuid "916d0b8b-af1b-4178-8aa1-0531c582dcd1"
                                 :mock/wildcard "test"
                                 :mock/content "chico string content"
                                 :mock/subdomain "chico"
                                 :mock/enabled true
                                 :mock/publication "offline"}
                                database)))))
