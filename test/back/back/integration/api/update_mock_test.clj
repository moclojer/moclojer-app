(ns back.integration.api.update-mock-test
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
            [state-flow.api :refer [defflow]]
            [state-flow.assertions.matcher-combinators :refer [match?]]
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

(def token "Beare eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkY2ZmNGMwNi0xYzllLTRhYmItYTQ5Yi00MzhlMTg2OWVjNWIifQ.Gd42MG5EQCVvQwsvlhRQWHuEr-BBo4GB7Pd9di8w_No")

(defflow
  flow-update-mock
  {:init (utils/start-system! create-and-start-components!)
   :cleanup utils/stop-system!
   :fail-fast? true}
  (flow ""

    [database (state-flow.api/get-state :database)]

    (state/invoke
     #(db.customers/insert! {:customer/uuid #uuid "cd989358-af38-4a2f-a1a1-88096aa425a7"
                             :customer/email "test@gmail.com"
                             :customer/username "chico"
                             :customer/external-uuid #uuid "dcff4c06-1c9e-4abb-a49b-438e1869ec5b"}
                            database))

    (flow "it will send a mock and save it"
      [resp (helpers/request! {:method :post
                               :headers {"authorization" token}
                               :uri "/mocks"
                               :body {:subdomain "chico"
                                      :wildcard "test"}})]
      (match?
       (matchers/embeds {:status 201
                         :body {:mock {:subdomain "chico"
                                       :id string?
                                       :wildcard "test"
                                       :user-id "cd989358-af38-4a2f-a1a1-88096aa425a7"
                                       :enabled true}}})
       resp)
      (flow "then will update the content"
        [resp-get (helpers/request! {:method :put
                                     :headers {"authorization" token}
                                     :uri "/mocks"
                                     :body {:id (-> resp :body :mock :id str)
                                            :content "test chico string"}})]
        (match?
         (matchers/embeds {:mock {:id #(uuid? (java.util.UUID/fromString %))
                                  :subdomain "chico"
                                  :wildcard "test"
                                  :content "test chico string"
                                  :user-id "cd989358-af38-4a2f-a1a1-88096aa425a7"
                                  :enabled true}})
         (-> resp-get :body))))))
