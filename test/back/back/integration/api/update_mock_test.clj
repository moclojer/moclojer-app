(ns back.integration.api.update-mock-test
  (:require
   [back.api.db.customers :as db.customers]
   [back.api.routes :as routes]
   [back.integration.api.helpers :as helpers]
   [back.integration.components.utils :as utils]
   [com.stuartsierra.component :as component]
   [components.config :as config]
   [components.database :as database]
   [components.http :as http]
   [components.redis-publisher :as redis-publisher]
   [components.router :as router]
   [components.webserver :as webserver]
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
    :publisher (component/using (redis-publisher/mock-redis-publisher)
                                [:config])
    :webserver (component/using (webserver/new-webserver)
                                [:config :http :router :database :publisher]))))

(def token "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkY2ZmNGMwNi0xYzllLTRhYmItYTQ5Yi00MzhlMTg2OWVjNWIifQ.Gd42MG5EQCVvQwsvlhRQWHuEr-BBo4GB7Pd9di8w_No")

(def yml "
- endpoint:
    # Note: the method could be omitted because GET is the default
    method: GET
    path: /hello/:username
    response:
      # Note: the status could be omitted because 200 is the default
      status: 200
      headers:
        Content-Type: application/json
      # Note: the body will receive the value passed in the url using the
      # :username placeholder
      body: >
        {
          \"hello\": \"{{path-params.username}}!\"
        }")

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
                                              :wildcard "test"
                                              :enabled true}})]
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
                                                        :content yml}})]
                    (match?
                     (matchers/embeds {:mock {:id #(uuid? (java.util.UUID/fromString %))
                                              :subdomain "chico"
                                              :wildcard "test"
                                              :content yml
                                              :user-id "cd989358-af38-4a2f-a1a1-88096aa425a7"
                                              :enabled true}})
                     (-> resp-get :body))

                    (flow "then retreive all mocks"
                          [resp-get (helpers/request! {:method :get
                                                       :headers {"authorization" token}
                                                       :uri "/mocks"
                                                       :body {}})]
                          (match?
                           (matchers/embeds {:mocks [{:subdomain "chico"
                                                      :mock-type "personal"
                                                      :apis [{:id #(uuid? (java.util.UUID/fromString %))
                                                              :subdomain "chico"
                                                              :url "test.chico.moclojer.com"
                                                              :content yml
                                                              :wildcard "test"
                                                              :enabled true}]}]})
                           (-> resp-get :body)))

                    (flow "should have publish a mock calling publisher"
                          (match? (matchers/embeds (first (:mock.changed @redis-publisher/mock-publisher)))
                                  {:event
                                   {:user-id #uuid "cd989358-af38-4a2f-a1a1-88096aa425a7",
                                    :id  (-> resp-get :body :mock :id (java.util.UUID/fromString))
                                    :wildcard "test",
                                    :subdomain "chico",
                                    :enabled true,
                                    :content yml}}))))))
