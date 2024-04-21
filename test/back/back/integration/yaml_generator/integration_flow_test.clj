(ns back.integration.yaml-generator.integration-flow-test
  (:require [back.api.db.customers :as db.customers]
            [back.api.db.mocks :as db.mocks]
            [back.api.routes :as routes]
            [back.integration.components.utils :as utils]
            [clojure.java.io :as io]
            [com.stuartsierra.component :as component]
            [components.config :as config]
            [components.database :as database]
            [components.http :as http]
            [components.redis-publisher :as redis-publisher]
            [components.redis-queue :as redis-queue]
            [components.router :as router]
            [components.sentry :as sentry]
            [components.storage :as storage]
            [state-flow.api :refer [defflow]]
            [state-flow.assertions.matcher-combinators :refer [match?]]
            [state-flow.cljtest]
            [state-flow.core :refer [flow]]
            [state-flow.state :as state]
            [yaml-generator.ports.workers :as p.workers]
            [yaml.core :as yaml]))

(defn delete-bucket-on-localstack [n]
  (flow "delte bucket on localstack"
    [storage (state-flow.api/get-state :storage)]

    (-> storage
        (storage/delete-bucket! n)
        state-flow.api/return)))

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

(defn cleaning-up-localstack-all-files [n]
  (flow "cleaning up localstack"
    [storage (state-flow.api/get-state :storage)]

    (->>  (storage/list-files storage n)
          (map :Key)
          (map #(storage/delete-file! storage n %))
          state-flow.api/return)))

(defn- create-and-start-components! []
  (component/start-system
   (component/system-map
    :config (config/new-config)
    :http (http/new-http-mock {})
    :router (router/new-router routes/routes)
    :database (component/using (database/new-database)
                               [:config])
    :sentry (component/using (sentry/new-mock-sentry) [:config])
    ;; this test should have redis up to run!
    ;; docker-compose -f docker/docker-compose.yml redis up 
    :publisher (component/using (redis-publisher/new-redis-publisher)
                                [:config :sentry])
    ;; docker-compose -f docker/docker-compose.yml localstack up 
    :storage (component/using (storage/new-storage)
                              [:config])
    :workers (component/using
              (redis-queue/new-redis-queue p.workers/workers) [:config :database :storage :publisher :sentry]))))

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

  (flow ""
    [database (state-flow.api/get-state :database)]

    (state/invoke
     #(db.customers/insert! {:customer/uuid #uuid "cd989358-af38-4a2f-a1a1-88096aa425a7"
                             :customer/email "test@gmail.com"
                             :customer/username "chico"
                             :customer/external-uuid #uuid "dcff4c06-1c9e-4abb-a49b-438e1869ec5b"}
                            database))

    (state/invoke #(db.mocks/insert!
                    {:mock/subdomain "chico"
                     :mock/id mock-id
                     :mock/content yml
                     :mock/wildcard "test"
                     :mock/user_id #uuid "cd989358-af38-4a2f-a1a1-88096aa425a7"
                     :mock/enabled true
                     :mock/publication "offline"}
                    database))

    (flow "create a bucket and consuming message"

      [create (create-bucket-on-localstack "moclojer")
       _ (publish-message {:event
                           {:mock-id mock-id}} "mock.changed")]
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
        (flow "cleaning up localstack"
          [r (cleaning-up-localstack-all-files "moclojer")]
          (match? (list {} {}) r)
          (flow "delete bucket"
            [r (delete-bucket-on-localstack "moclojer")]
            (match? {} r)))))))
