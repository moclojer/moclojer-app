(ns back.integration.api.customer-test
  (:require [back.api.db.customers :as db.customers]
            [back.api.routes :as routes]
            [back.integration.api.helpers :as helpers]
            [back.integration.components.utils :as utils]
            [com.moclojer.components.core :as components]
            [com.stuartsierra.component :as component]
            [matcher-combinators.matchers :as matchers]
            [state-flow.api :refer [defflow] :as flow]
            [state-flow.assertions.matcher-combinators :refer [match?]]
            [state-flow.cljtest]
            [state-flow.core :refer [flow]]
            [state-flow.state :as state]))

(defn- create-and-start-components []
  (component/start-system
   (component/system-map
    :config (components/new-config "back/config.edn")
    :http (components/new-http-mock {})
    :router (components/new-router routes/routes)
    :database (component/using (components/new-database) [:config])
    :webserver (component/using (components/new-webserver)
                                [:config :http :router :database]))))

(def token "Beare eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkY2ZmNGMwNi0xYzllLTRhYmItYTQ5Yi00MzhlMTg2OWVjNWIifQ.Gd42MG5EQCVvQwsvlhRQWHuEr-BBo4GB7Pd9di8w_No")

(defflow
  flow-save-customer-username
  {:init (utils/start-system! create-and-start-components)
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
                               :headers {"authorization" token}
                               :uri "/user/cd989358-af38-4a2f-a1a1-88096aa425a7"
                               :body {:username "chico"}})]
      (match?
       (matchers/embeds {:status 200
                         :body {:user {:username "chico"
                                       :email "test@gmail.com"
                                       :uuid "cd989358-af38-4a2f-a1a1-88096aa425a7"}}})
       resp))

    (flow "setup new customer"
      (state/invoke
       #(db.customers/insert! {:customer/uuid #uuid "cd989351-af31-4a2f-a1a1-88096aa425a7"
                               :customer/email "test@gmail.com"
                               :customer/external-uuid #uuid "dcf34306-1c9e-4abb-a49b-438e1869ec5b"}
                              database)))
    (flow "retrieve user"
      [resp (helpers/request! {:method :get
                               :headers {"authorization" token}
                               :uri "/user/cd989351-af31-4a2f-a1a1-88096aa425a7"})]
      (match?
       (matchers/embeds {:status 200
                         :body {:user {:email "test@gmail.com"}}})
       resp))

    (flow "retrieve user by external id"
      [resp (helpers/request! {:method :get
                               :headers {"authorization" token}
                               :uri "/user-external"})]
      (match?
       (matchers/embeds {:status 200
                         :body {:user {:email "test@gmail.com"}}})
       resp))))
