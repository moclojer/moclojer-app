(ns back.integration.api.db.mocks-test
  (:require
   [back.api.db.mocks :as db.mocks]
   [back.components.config :as config]
   [back.components.database :as database]
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

(defflow flow-db-insert-mock-test
  {:init (utils/start-system! create-and-start-components!)
   :cleanup utils/stop-system!
   :fail-fast? true}

  (flow "save a mock in the database"
    [database (state-flow.api/get-state :database)]

    (state/invoke
     #(db.mocks/insert! {:mock/id #uuid "41571d31-d9c2-4216-b6f6-d3c7bcc27570"
                         :mock/org_id #uuid "e8b85087-dbc8-4fc8-bd60-67eda8d1c2d1"
                         :mock/user_id #uuid "916d0b8b-af1b-4178-8aa1-0531c582dcd1"
                         :mock/subdomain "test"
                         :mock/url "https://api.moclojer.com/files/download?id=c36c798d-879e-4da0-9182-74da0a87ac1a"
                         :mock/enabled true}
                        database))

    (flow "then get by uuid"
      (match? [{:mock/id #uuid "41571d31-d9c2-4216-b6f6-d3c7bcc27570"
                :mock/org_id #uuid "e8b85087-dbc8-4fc8-bd60-67eda8d1c2d1"
                :mock/user_id #uuid "916d0b8b-af1b-4178-8aa1-0531c582dcd1"
                :mock/subdomain "test"
                :mock/url "https://api.moclojer.com/files/download?id=c36c798d-879e-4da0-9182-74da0a87ac1a"
                :mock/enabled true}]
              (db.mocks/get-mocks {:org-id #uuid "e8b85087-dbc8-4fc8-bd60-67eda8d1c2d1"
                                   :user-id #uuid "916d0b8b-af1b-4178-8aa1-0531c582dcd1"} database)))))
