 (ns back.integration.yaml-generator.yaml-generation-test
   (:require [back.api.db.customers :as db.customers]
             [back.api.db.mocks :as db.mocks]
             [back.api.routes :as routes]
             [back.integration.components.utils :as utils]
             [clojure.java.io :as io]
             [com.moclojer.components.core :as components]
             [com.moclojer.components.publisher :as publisher]
             [com.moclojer.components.storage :as storage]
             [com.stuartsierra.component :as component]
             [matcher-combinators.matchers :as matchers]
             [state-flow.api :refer [defflow]]
             [state-flow.assertions.matcher-combinators :refer [match?]]
             [state-flow.cljtest]
             [state-flow.core :refer [flow]]
             [state-flow.state :as state]
             [yaml-generator.logic.yml :as logic.yml]
             [yaml-generator.ports.workers :as p.workers]))

(defn- create-and-start-components []
  (component/start-system
   (component/system-map
    :config (components/new-config "back/config.edn")
    :http (components/new-http-mock {})
    :router (components/new-router routes/routes)
    :database (component/using (components/new-database) [:config])
    :sentry (components/new-sentry-mock)
    :publisher (component/using (components/new-publisher) [:config :sentry])
    :storage (component/using (components/new-storage) [:config])
    :workers (component/using (components/new-consumer p.workers/workers false)
                              [:config :database :storage :publisher :http :sentry]))))

(def yml-consts
  {:sample "
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
        }"
   :with-host "
- endpoint:
    method: GET
    path: /hello/:username
    response:
      status: 200
      headers:
        Content-Type: application/json
      body: >
        {
          \"hello\": \"{{path-params.username}}!\"
        }"})

(def flow-consts
  {:user {:customer/uuid #uuid "cd989358-af38-4a2f-a1a1-88096aa425a7"
          :customer/email "test@gmail.com"
          :customer/username "my-user"
          :customer/external-uuid #uuid "dcff4c06-1c9e-4abb-a49b-438e1869ec5b"}
   :mock {:mock/subdomain "my-user"
          :mock/id #uuid "10f62424-c8f7-4793-bc7c-bfe5d26655a5"
          :mock/content (:sample yml-consts)
          :mock/wildcard "test"
          :mock/user_id #uuid "cd989358-af38-4a2f-a1a1-88096aa425a7"
          :mock/enabled false
          :mock/dns_status "offline"
          :mock/unification_status "offline"}})

(defn fgenerate-and-save-mock []
  (flow
    "should save generated yml to storage"
    [publisher (state-flow.api/get-state :publisher)
     storage (state-flow.api/get-state :storage)]
    (state-flow.api/invoke
     #(do
        (publisher/publish! publisher "mock.updated"
                            {:event
                             {:yml.single.generate
                              {:mock-id (get-in flow-consts [:mock :mock/id])}}})
        (Thread/sleep 5000)))

    (match?
     (matchers/embeds (logic.yml/parse-yaml-&-body (:sample yml-consts)))
     (state-flow.api/return
      (let [timeout 5000 ;; 5 seconds
            deadline (+ (System/currentTimeMillis) timeout)]
        (loop []
          (Thread/sleep 500)
          (if (< (System/currentTimeMillis) deadline)
            (if-let [content (some-> (storage/get-file storage "moclojer"
                                                       (logic.yml/gen-path
                                                        (get-in flow-consts
                                                                [:user :customer/uuid])
                                                        (get-in flow-consts
                                                                [:mock :mock/id])))
                                     io/reader slurp
                                     logic.yml/parse-yaml-&-body)]
              (if-not (= content [])
                content
                (recur))
              (recur))
            (throw (Exception. "Timeout reached while waiting for file content")))))))))

(defflow
  flow-yaml-generation-test
  {:init (utils/start-system! create-and-start-components)
   :cleanup utils/stop-system!
   :fail-fast? true}
  (flow
    "will try to generate a yaml and save it to storage"
    [db (state-flow.api/get-state :database)]
    (state/invoke #(db.customers/insert! (:user flow-consts) db))
    (state/invoke #(db.mocks/insert! (:mock flow-consts) db))
    (fgenerate-and-save-mock)))
