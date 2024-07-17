(ns back.integration.api.add-org-user-test
  (:require [back.api.db.customers :as db.customers]
            [back.api.db.orgs :as db.orgs]
            [back.api.routes :as routes]
            [back.integration.api.helpers :as helpers]
            [back.integration.components.utils :as utils]
            [com.moclojer.components.core :as components]
            [com.stuartsierra.component :as component]
            [matcher-combinators.matchers :as matchers]
            [state-flow.api :refer [defflow]]
            [state-flow.assertions.matcher-combinators :refer [match?]]
            [state-flow.core :refer [flow]]
            [state-flow.state :as state]))

(defn- create-and-start-components []
  (component/start-system
   (component/system-map
    :config (components/new-config "back/config.edn")
    :http (components/new-http-mock [])
    :router (components/new-router routes/routes)
    :database (component/using (components/new-database) [:config])
    :mq (components/new-mq-mock)
    :webserver (component/using (components/new-webserver)
                                [:config :http :router :database :mq]))))

(defn fcreate-org-user
  [org user]
  (flow
    "should add an user to an organization"
    [:let [req {:headers {"authorization"
                          (str "Bearer "
                               "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkY2ZmNGMwNi0"
                               "xYzllLTRhYmItYTQ5Yi00MzhlMTg2OWVjNWIifQ.Gd42M"
                               "G5EQCVvQwsvlhRQWHuEr-BBo4GB7Pd9di8w_No")}
                :uri (str "/orgs/" (:org/id org) "/users")
                :method :post
                :body {:user-id (:customer/uuid user)}}
           resp (helpers/request! req)]]
    (match?
     (matchers/embeds
      {:status 200
       :body {:users [{:uuid (str (:customer/uuid user))}]}})
     resp)))

(defflow
  flow-add-org-user
  {:init (utils/start-system! create-and-start-components)
   :cleanup utils/stop-system!
   :fail-fast? true}
  (flow
    ""
    [:let [user #:customer{:uuid #uuid "cd989358-af38-4a2f-a1a1-88096aa425a7"
                           :email "test@gmail.com"
                           :username "foobar123"
                           :external-uuid #uuid "dcff4c06-1c9e-4abb-a49b-438e1869ec5b"}
           org #:org{:id #uuid "d50f35a1-cba2-4d62-88aa-0c3df71c410c"
                     :slug "my-org-d50f35a1"
                     :orgname "my-org"}]
     {:keys [database]} (state-flow.api/get-state)]
    (state/invoke #(db.customers/insert! user database))
    (state/invoke #(db.orgs/insert! org database))

    (fcreate-org-user org user)))
