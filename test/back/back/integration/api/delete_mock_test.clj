(ns back.integration.api.delete-mock-test
  (:require [back.api.db.customers :as db.customers]
            [back.api.routes :as routes]
            [back.integration.api.helpers :as helpers]
            [back.integration.components.utils :as utils]
            [com.moclojer.components.core :as components]
            [com.moclojer.components.publisher :as publisher]
            [com.moclojer.components.storage :as storage]
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
    :storage (component/using (components/new-storage) [:config])
    :database (component/using (components/new-database) [:config])
    :publisher (component/using (components/new-publisher-mock) [:config])
    :webserver (component/using (components/new-webserver)
                                [:config :http :router :database :publisher]))))

(def flow-consts
  {:base-req {:headers
              {"authorization"
               (str "Bearer "
                    "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkY2ZmNGMwNi0"
                    "xYzllLTRhYmItYTQ5Yi00MzhlMTg2OWVjNWIifQ.Gd42M"
                    "G5EQCVvQwsvlhRQWHuEr-BBo4GB7Pd9di8w_No")}
              :uri "/mocks"}
   :user {:customer/uuid #uuid "cd989358-af38-4a2f-a1a1-88096aa425a7"
          :customer/email "test@gmail.com"
          :customer/username "j0suetm"
          :customer/external-uuid #uuid "dcff4c06-1c9e-4abb-a49b-438e1869ec5b"}
   :mock {:subdomain "j0suetm"
          :wildcard "test"
          :enabled true}})

(defn fcheck-mock-deletion-publisher [{:keys [id user-id]}]
  (flow
    "should have published a :mock.deleted event"
    [deleted-evt (state/invoke
                  #(first (get @publisher/mock-publisher "mock.deleted")))]
    (match?
     (matchers/embeds deleted-evt)
     {:event {:yml.single.delete {:mock-id (parse-uuid id)
                                  :user-id user-id}}})))

(defn fcheck-mock-deletion-storage [{:keys [id user-id]}]
  (flow
    "should have deleted mock from storage"
    [:let [file-path (str user-id "/" id "/mock.yml")]
     strg (state-flow.api/get-state :storage)
     mock-file (state/invoke #(storage/get-file strg "moclojer" file-path))]
    (match? nil mock-file)))

(defn fdelete-mock [id]
  (flow
    "should delete given mock"
    [:let [req (merge (:base-req flow-consts)
                      {:method :delete
                       :body {:id id}})]
     resp (helpers/request! req)]
    (match?
     (matchers/embeds {:status 200 :body empty?})
     resp)
    [:let [mock {:id id
                 :user-id (get-in flow-consts [:user :customer/uuid])}]]
    (fcheck-mock-deletion-publisher mock)
    (fcheck-mock-deletion-storage mock)))

(defn fcreate-mock []
  (flow
    "should create a mock"
    [:let [req (merge (:base-req flow-consts)
                      {:method :post
                       :body (:mock flow-consts)})
           exp-body {:mock (merge (:mock flow-consts)
                                  {:id string?
                                   :user-id string?})}]
     resp (helpers/request! req)]
    (match?
     (matchers/embeds {:status 201 :body exp-body})
     resp)
    (fdelete-mock (get-in resp [:body :mock :id]))))

(defflow
  flow-delete-mock
  {:init (utils/start-system! create-and-start-components)
   :cleanup utils/stop-system!
   :fail-fast? true}
  (flow
    "should create and delete mock"
    [db (state-flow.api/get-state :database)]
    (state/invoke #(db.customers/insert! (:user flow-consts) db))
    (fcreate-mock)))
