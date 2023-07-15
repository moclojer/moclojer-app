(ns back.integration.api.db.files-test
  (:require
   [back.api.db.files :as db.files]
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

(defflow flow-db-insert-file-test
  {:init (utils/start-system! create-and-start-components!)
   :cleanup utils/stop-system!
   :fail-fast? true}

  (flow "save a file in the database"
    [database (state-flow.api/get-state :database)]

    (state/invoke
     #(db.files/insert! {:file/id #uuid "881556ec-f3f0-4f1e-97a6-04d079b9518f"
                         :file/user_id #uuid "eb8a5866-8027-480f-89a8-10f1433c88c0"
                         :file/content "some content"
                         :file/expires_at nil}
                        database))

    (flow "then get by uuid"
      (match? {:file/id #uuid "881556ec-f3f0-4f1e-97a6-04d079b9518f"
               :file/user_id #uuid "eb8a5866-8027-480f-89a8-10f1433c88c0"
               :file/content "some content"
               :file/expires_at nil}
              (db.files/get-by-id #uuid "881556ec-f3f0-4f1e-97a6-04d079b9518f" database)))

    (flow "return nil if not found"
      (match? nil (db.files/get-by-id #uuid "00000000-0000-0000-0000-000000000000" database)))))
