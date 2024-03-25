(ns back.integration.yaml-generator.block-invalid-mock
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
    {:event {:event {:domain "test-j0suetm"
                     :new-status "offline-invalid"}}})))
(defflow
  flow-block-invalid-yaml
  {:init (utils/start-system! create-and-start-components!)
   :cleanup utils/stop-system!
   :fail-fast? true}
  (fblock-invalid-yaml))
