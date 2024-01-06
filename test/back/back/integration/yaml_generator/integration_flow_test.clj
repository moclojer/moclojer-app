(ns back.integration.yaml-generator.integration-flow-test
  (:require [back.api.routes :as routes]
            [back.integration.components.utils :as utils]
            [clojure.java.io :as io]
            [com.stuartsierra.component :as component]
            [components.config :as config]
            [components.database :as database]
            [components.http :as http]
            [components.redis-publisher :as redis-publisher]
            [components.redis-queue :as redis-queue]
            [components.router :as router]
            [components.storage :as storage]
            [state-flow.api :refer [defflow]]
            [state-flow.assertions.matcher-combinators :refer [match?]]
            [state-flow.cljtest]
            [state-flow.core :refer [flow]]
            [state-flow.state :as state]
            [yaml-generator.ports.workers :as p.workers]
            [yaml.core :as yaml]))

(defn publish-message [msg queue-name]
  (flow "publish a message"
    [publisher (state-flow.api/get-state :publisher)]

    (-> publisher
        (redis-publisher/publish!
         queue-name
         msg)
        state-flow.api/return)))

(defn create-bucket-on-localstack [n]
  (flow "create a bucket on localstack"
    [storage (state-flow.api/get-state :storage)]

    (-> storage
        (storage/create-bucket! n)
        state-flow.api/return)))

(defn get-file-on-localstack [n k]
  (flow "get a file on localstack"
    [storage (state-flow.api/get-state :storage)]

    (-> storage
        (storage/get-file n k)
        io/reader
        slurp
        state-flow.api/return)))

(defn cleaning-up-localstack [n]
  (flow "cleaning up localstack"
    [storage (state-flow.api/get-state :storage)]

    (let [exist (storage/get-bucket storage n)]
      (when exist
        (-> storage
            (storage/delete-bucket! n)
            state-flow.api/return)))))

(defn- create-and-start-components! []
  (component/start-system
   (component/system-map
    :config (config/new-config)
    :http (http/new-http-mock {})
    :router (router/new-router routes/routes)
    :database (component/using (database/new-database)
                               [:config])
    ;; this test should have redis up to run!
    ;; docker-compose -f docker/docker-compose.yml redis up 
    :publisher (component/using (redis-publisher/new-redis-publisher)
                                [:config])
    ;; docker-compose -f docker/docker-compose.yml localstack up 
    :storage (component/using (storage/new-storage)
                              [:config])
    :workers (component/using
              (redis-queue/new-redis-queue p.workers/workers) [:config :database :storage :publisher]))))

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

(def expected-yml-with-host "
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
        }")

(def mock-id (random-uuid))

(defflow integration-flow-test-updated-yml-publish-and-read
  {:init (utils/start-system! create-and-start-components!)
   :cleanup utils/stop-system!
   :fail-fast? true}

  (flow "deleting if exist"
    (cleaning-up-localstack "moclojer")

    (flow "create a bucket and consuming message"

      [create (create-bucket-on-localstack "moclojer")
       _ (publish-message {:event
                           {:user-id #uuid "cd989358-af38-4a2f-a1a1-88096aa425a7",
                            :id mock-id
                            :wildcard "test",
                            :subdomain "chico",
                            :enabled true,
                            :content yml}} :mock.changed)]
      (match? create {:Location "/moclojer"})

    ;;
      (flow "sleeping and check get the file inside the bucket"

        (state/invoke (fn [] (Thread/sleep 15000)))
        [file-result (get-file-on-localstack "moclojer" (str "cd989358-af38-4a2f-a1a1-88096aa425a7/" mock-id "/mock.yml"))]

      ; #TODO for now we are parsing to check the content
        (match? (yaml/parse-string
                 expected-yml-with-host)
                (yaml/parse-string
                 file-result))
        (cleaning-up-localstack "moclojer")))))
