(ns back.integration.moclojer.moclojer-integratoin-test
  (:require [back.api.routes :as routes]
            [back.integration.api.helpers :as helpers]
            [back.integration.components.utils :as utils]
            [clojure.java.io :as io]
            [com.stuartsierra.component :as component]
            [components.config :as config]
            [components.database :as database]
            [components.http :as http]
            [components.moclojer :as moclojer]
            [components.redis-publisher :as redis-publisher]
            [components.redis-queue :as redis-queue]
            [components.router :as router]
            [components.storage :as storage]
            [moclojer.ports.workers :as p.moclojer.workers]
            [state-flow.api :refer [defflow]]
            [state-flow.assertions.matcher-combinators :refer [match?]]
            [state-flow.cljtest]
            [state-flow.core :refer [flow]]
            [state-flow.state :as state]
            [yaml-generator.ports.workers :as p.workers]))

(defn publish-message [msg queue-name]
  (flow "publish a message"
    [publisher (state-flow.api/get-state :publisher)]

    (-> publisher
        (redis-publisher/publish!
         queue-name
         msg)
        state-flow.api/return)))

(defn delete-bucket-on-localstack [n]
  (flow "delte bucket on localstack"
    [storage (state-flow.api/get-state :storage)]

    (-> storage
        (storage/delete-bucket! n)
        state-flow.api/return)))

(defn create-bucket-on-localstack [n]
  (flow "create a bucket on localstack"
    [storage (state-flow.api/get-state :storage)]

    (-> storage
        (storage/create-bucket! n)
        state-flow.api/return)))

(defn cleaning-up-localstack [n]
  (flow "cleaning up localstack"
    [storage (state-flow.api/get-state :storage)]

    (flow "files"
      [:let [files (->> (storage/list-files storage n)
                        (map :Key))]]
      (flow "delete")
      (some->> files
               (map #(storage/delete-file! storage n %))
               state-flow.api/return))))

(defn delelte-file [n f]
  (flow "cleaning up localstack"
    [storage (state-flow.api/get-state :storage)]
    (-> (storage/delete-file! storage n f)
        state-flow.api/return)))

(defn cleaning-up-localstack-all-files [n]
  (flow "cleaning up localstack"
    [storage (state-flow.api/get-state :storage)]

    (->>  (storage/list-files storage n)
          (map :Key)
          (map #(storage/delete-file! storage n %))
          state-flow.api/return)))

(def start-mock-yaml "
- endpoint:
    method: GET
    path: /version
    response:
      status: 200
      headers:
        Content-Type: application/json
      body: >
        {
          \"version\": \"v0.0.1!\"
        }")

(def mock-yaml "
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
              (redis-queue/new-redis-queue (concat
                                            p.workers/workers
                                            p.moclojer.workers/workers))
              [:config
               :database
               :storage
               :publisher])
    :moclojer (component/using (moclojer/new-moclojer) [:config
                                                        :storage]))))

(def mock-id (random-uuid))

(defflow start-moclojer-with-yaml-generator
  {:init (utils/start-system!
          create-and-start-components!)
   :cleanup utils/stop-system!
   :fail-fast? true}

  (flow "cleaning up localstack"
    [:let [_r (spit "resources/moclojer.yml" start-mock-yaml)
           _ (cleaning-up-localstack "moclojer")]]
    (state/invoke (fn [] (Thread/sleep 15000)))

    (flow "request the moclojer server up with default mock"
      [resp (helpers/request-moclojer! {:method :get
                                        :uri "/version"})]

      (match? {:status 200
               :body {:version "v0.0.1!"}}
              resp)

      (flow "create a bucket and consuming message"

        [create (create-bucket-on-localstack "moclojer")
         _ (publish-message {:event
                             {:user-id #uuid "cd989358-af38-4a2f-a1a1-88096aa425a7",
                              :id mock-id
                              :wildcard "test",
                              :subdomain "chico",
                              :enabled true,
                              :content mock-yaml}} :mock.changed)]
        (match? create {:Location "/moclojer"})

    ;;
        (flow "sleeping and check if the file change"

          (state/invoke (fn [] (Thread/sleep 25000)))
          [resp (helpers/request-moclojer! {:method :get
                                            :uri "/hello/chico"})]

          (match? {:status 200
                   :body {:hello "chico!"}} resp)

          (flow "deleting"
            [:let [_ (spit "resources/moclojer.yml" start-mock-yaml)]]
            (flow "cleaning up localstack"
              [r (cleaning-up-localstack-all-files "moclojer")]
              (match? (list {} {}) r)
              (flow "delete bucket"
                [r (delete-bucket-on-localstack "moclojer")]
                (match? {} r)))))))))
