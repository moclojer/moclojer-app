(ns back.integration.api.create-conflicting-mock-test
  (:require
   [back.api.db.customers :as db.customers]
   [back.api.routes :as routes]
   [back.integration.api.helpers :as helpers]
   [back.integration.components.utils :as utils]
   [com.stuartsierra.component :as component]
   [components.config :as config]
   [components.database :as database]
   [components.http :as http]
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
    :database (component/using (database/new-database) [:config])
    :webserver (component/using (webserver/new-webserver)
                                [:config :http :router :database]))))

(def flow-consts
  {:base-req {:headers
              {"authorization"
               (str "Bearer "
                    "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkY2ZmNGMwNi0"
                    "xYzllLTRhYmItYTQ5Yi00MzhlMTg2OWVjNWIifQ.Gd42M"
                    "G5EQCVvQwsvlhRQWHuEr-BBo4GB7Pd9di8w_No")}
              :uri "/mocks"}
   :user {:customer/uuid (random-uuid)
          :customer/email "test@gmail.com"
          :customer/username "my-user"
          :customer/external-uuid (random-uuid)}
   :mock {:subdomain "my-user"
          :wildcard "test"
          :enabled false}})

(defn fcreate-conflicting-mocks []
  (flow
   "should block creation of conflicting mocks"
   [:let [req (merge (:base-req flow-consts)
                     {:method :post
                      :body (:mock flow-consts)})
          fst-exp-body {:mock (merge (:mock flow-consts)
                                     {:id string?
                                      :user-id string?})}
          snd-exp-body {:error {:message string?
                                :cause "invalid-wildcard"
                                :value (:mock fst-exp-body)}}]
    fst-resp (helpers/request! req)
    snd-resp (helpers/request! req)]
   (match?
    (matchers/embeds {:status 201 :body fst-exp-body})
    fst-resp)
   (match?
    (matchers/embeds {:status 412 :body snd-exp-body})
    snd-resp)))

(defflow
  flow-create-conflicting-mock
  {:init (utils/start-system! create-and-start-components!)
   :cleanup utils/stop-system!
   :fail-fast? true}
  (flow
   "will try to create two conflicting mocks"
   [db (state-flow.api/get-state :database)]
   (state/invoke #(db.customers/insert! (:user flow-consts) db))
   (fcreate-conflicting-mocks)))
