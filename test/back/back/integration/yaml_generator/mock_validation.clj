(ns back.integration.yaml-generator.mock-validation
  (:require
   [back.integration.components.utils :as utils]
   [com.stuartsierra.component :as component]
   [components.config :as config]
   [components.redis-publisher :as redis-publisher]
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
    :publisher (component/using (redis-publisher/mock-redis-publisher)
                                [:config])
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
  (flow
   "should block invalid yaml"
   [components (state-flow.api/get-state)]
   (state/invoke
    #(workers/generate-yml-handler {:event {:id (random-uuid)
                                            :user-id (random-uuid)
                                            :wildcard "test"
                                            :subdomain "j0suetm"
                                            :content invalid-mock-yaml
                                            :enabled false
                                            :publication "offline"}}
                                   components))
   (match?
    (matchers/embeds (-> @redis-publisher/mock-publisher
                         :mock.publication first))
    {:event {:domain "test-j0suetm"
             :new-status "offline-invalid"}})))

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
  (flow
   "should allow valid yaml"
   [components (state-flow.api/get-state)]
   (state/invoke
    #(workers/generate-yml-handler {:event {:id (random-uuid)
                                            :user-id (random-uuid)
                                            :wildcard "test2"
                                            :subdomain "j0suetm"
                                            :content valid-mock-yaml
                                            :enabled true
                                            :publication "offline"}}
                                   components))
   (match?
    (matchers/embeds (-> @redis-publisher/mock-publisher
                         :mock.unified first))
    {:event {:path string?
             :domain "test2-j0suetm"
             :create-domain? true
             :valid-again? false}})))

(defflow
  flow-block-invalid-yaml
  {:init (utils/start-system! create-and-start-components!)
   :cleanup utils/stop-system!
   :fail-fast? true}
  (fblock-invalid-yaml)
  (fallow-valid-yaml))
