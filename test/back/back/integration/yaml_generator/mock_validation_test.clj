(ns back.integration.yaml-generator.mock-validation
  (:require [back.api.db.customers :as db.customers]
            [back.api.db.mocks :as db.mocks]
            [back.integration.components.utils :as utils]
            [com.stuartsierra.component :as component]
            [components.config :as config]
            [components.database :as database]
            [components.redis-publisher :as redis-publisher]
            [components.sentry :as sentry]
            [components.storage :as storage]
            [matcher-combinators.matchers :as matchers]
            [state-flow.api :refer [defflow]]
            [state-flow.assertions.matcher-combinators :refer [match?]]
            [state-flow.core :refer [flow]]
            [state-flow.state :as state]
            [yaml-generator.ports.workers :as workers]))

(defn- create-and-start-components! []
  (component/start-system
   (component/system-map
    :config (config/new-config)
    :sentry (component/using (sentry/new-mock-sentry) [:config])
    ;; this test should have redis up to run!
    ;; docker-compose -f docker/docker-compose.yml redis up 
    :database (component/using (database/new-database)
                               [:config])
    :publisher (component/using (redis-publisher/mock-redis-publisher)
                                [:config :sentry])
    :storage (component/using (storage/new-storage)
                              [:config]))))

(def invalid-mock-yaml
  "- endpoint:
    method: DELETING
    patho: /hello/:username
    resssssponseeeee:
      status: 9000
      headers:
        Content-Type: application/json
      body2: |
        {
          \"hello\": \"{{path-params.username}}!\"
        }
  ")

(defn fblock-invalid-yaml []
  (flow ""
    [:let [mock-id (random-uuid)]
     database (state-flow.api/get-state :database)]
    (state/invoke
     #(db.customers/insert! {:customer/uuid #uuid "cd989358-af38-4a2f-a1a1-88096aa425a7"
                             :customer/email "test@gmail.com"
                             :customer/username "chico"
                             :customer/external-uuid #uuid "dcff4c06-1c9e-4abb-a49b-438e1869ec5b"}
                            database))

    (state/invoke #(db.mocks/insert!
                    {:mock/subdomain "chico"
                     :mock/id mock-id
                     :mock/content invalid-mock-yaml
                     :mock/wildcard "test"
                     :mock/user_id #uuid "cd989358-af38-4a2f-a1a1-88096aa425a7"
                     :mock/enabled true
                     :mock/publication "offline"}
                    database))
    (flow
      "should block invalid yaml"
      [components (state-flow.api/get-state)]
      (state/invoke
       #(workers/generate-yml-handler {:event {:mock-id mock-id}}
                                      components))
      (match?
       (matchers/embeds (-> (get @redis-publisher/mock-publisher
                                 "mock.publication") first))
       {:event {:domain "test-chico"
                :new-status "offline-invalid"}}))))

(def valid-mock-yaml
  "- endpoint:
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
      body: |
        {
          \"hello\": \"{{path-params.username}}!\"
        }")

(defn fallow-valid-yaml []
  (flow ""
    [:let [mock-id (random-uuid)]
     database (state-flow.api/get-state :database)]
    (state/invoke
     #(db.customers/insert! {:customer/uuid #uuid "cd989358-af38-4a2f-a1a1-88096aa425a7"
                             :customer/email "test@gmail.com"
                             :customer/username "chico"
                             :customer/external-uuid #uuid "dcff4c06-1c9e-4abb-a49b-438e1869ec5b"}
                            database))

    (state/invoke #(db.mocks/insert!
                    {:mock/subdomain "chico"
                     :mock/id mock-id
                     :mock/content valid-mock-yaml
                     :mock/wildcard "test"
                     :mock/user_id #uuid "cd989358-af38-4a2f-a1a1-88096aa425a7"
                     :mock/enabled true
                     :mock/publication "offline"}
                    database))
    (flow
      "should allow valid yaml"
      [components (state-flow.api/get-state)]
      (state/invoke
       #(workers/generate-yml-handler {:event {:mock-id mock-id}}
                                      components))
      (match?
       (matchers/embeds (-> (get @redis-publisher/mock-publisher
                                 "mock.unified") first))
       {:event {:path (str "cd989358-af38-4a2f-a1a1-88096aa425a7/" mock-id "/mock.yml")
                :domain "test-chico"
                :create-domain? true
                :valid-again? false}}))))

(defflow
  flow-block-valid-yaml
  {:init (utils/start-system! create-and-start-components!)
   :cleanup utils/stop-system!
   :fail-fast? true}
  (fallow-valid-yaml))

(defflow
  flow-block-invalid-yaml
  {:init (utils/start-system! create-and-start-components!)
   :cleanup utils/stop-system!
   :fail-fast? true}
  (fblock-invalid-yaml))
