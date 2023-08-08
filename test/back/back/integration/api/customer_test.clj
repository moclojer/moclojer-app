(ns back.integration.api.customer-test
  (:require [back.api.db.customers :as db.customers]
            [back.api.routes :as routes]
            [back.components.config :as config]
            [back.components.database :as database]
            [back.components.http :as http]
            [back.components.router :as router]
            [back.components.webserver :as webserver]
            [back.integration.api.helpers :as helpers]
            [back.integration.components.utils :as utils]
            [com.stuartsierra.component :as component]
            [matcher-combinators.matchers :as matchers]
            [state-flow.assertions.matcher-combinators :refer [match?]]
            [state-flow.api :refer [defflow]]
            [state-flow.core :refer [flow]]
            [state-flow.state :as state]))

(defn- create-and-start-components! []
  (component/start-system
   (component/system-map
    :config (config/new-config)
    :http (http/new-http-mock {})
    :router (router/new-router routes/routes)
    :database (component/using (database/new-database)
                               [:config])
    :webserver (component/using (webserver/new-webserver)
                                [:config :http :router :database]))))
(defflow
  flow-save-customer-username

  {:init (utils/start-system! create-and-start-components!)
   :cleanup utils/stop-system!
   :fail-fast? true}
  (flow "setup a customer"

    [database (state-flow.api/get-state :database)]

    (state/invoke
     #(db.customers/insert! {:customer/uuid #uuid "cd989358-af38-4a2f-a1a1-88096aa425a7"
                             :customer/email "test@gmail.com"
                             :customer/external-uuid #uuid "dcff4c06-1c9e-4abb-a49b-438e1869ec5b"}
                            database))
    (flow "send the username to be added"
      [resp (helpers/request! {:method :post
                               :uri "user/cd989358-af38-4a2f-a1a1-88096aa425a7"
                               :body {:username "chico"}})]
      (match?
       (matchers/embeds {:status 200
                         :body {:data {:username "chico"}}})
       resp))))
