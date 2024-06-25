(ns back.integration.yaml-generator.yaml-unified-mock-test
  (:require [back.api.routes :as routes]
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
            [yaml-generator.logic.yml :as logic.yml]
            [yaml-generator.ports.workers :as p.workers]))

(defn publish-message [msg queue-name]
  (flow "publish a message"
    [publisher (state-flow.api/get-state :publisher)]

    (-> publisher
        (publisher/publish!
         queue-name
         msg)
        state-flow.api/return)))

(defn create-bucket-on-localstack [n]
  (flow "create a bucket on localstack"
    [storage (state-flow.api/get-state :storage)]

    (-> storage
        (storage/create-bucket! n)
        state-flow.api/return)))

(defn delete-bucket-on-localstack [n]
  (flow "delte bucket on localstack"
    [storage (state-flow.api/get-state :storage)]

    (-> storage
        (storage/delete-bucket! n)
        state-flow.api/return)))

(defn cleaning-up-localstack-all-files [n]
  (flow "cleaning up localstack"
    [storage (state-flow.api/get-state :storage)]

    (->>  (storage/list-files storage n)
          (map :Key)
          (map #(storage/delete-file! storage n %))
          state-flow.api/return)))

(defn setup-file-on-localstack [bucket k v]
  (flow "setup a file on localstack"
    [storage (state-flow.api/get-state :storage)]

    (-> storage
        (storage/upload! bucket k v {})
        state-flow.api/return)))

(defn get-file-on-localstack [n k]
  (flow "get a file on localstack"
    [storage (state-flow.api/get-state :storage)]
    (state-flow.api/return
     (let [timeout 5000 ;; 5 seconds
           deadline (+ (System/currentTimeMillis) timeout)]
       (loop []
         (Thread/sleep 500)
         (if (< (System/currentTimeMillis) deadline)
           (if-let [content (some-> (storage/get-file storage n k)
                                    io/reader slurp
                                    logic.yml/parse-yaml-&-body)]
             (if-not (= content [])
               content
               (recur))
             (recur))
           (throw (Exception. "Failed to retrieve file content within the 5-second timeout"))))))))

(defn- create-and-start-components []
  (component/start-system
   (component/system-map
    :config (components/new-config "back/config.edn")
    :http (components/new-http-mock {})
    :router (components/new-router routes/routes)
    :database (component/using (components/new-database) [:config])
    ;; this test should have redis up to run!
    ;; docker-compose -f docker/docker-compose.yml redis up 
    :publisher (component/using (components/new-publisher) [:config])
    ;; docker-compose -f docker/docker-compose.yml localstack up 
    :storage (component/using (components/new-storage) [:config])
    :workers (component/using (components/new-consumer p.workers/workers false)
                              [:config :database :storage :publisher]))))

(def yml "
- endpoint:
    # Note: the method could be omitted because GET is the default
    method: GET
    path: /hello/:username
    hots: test.chico.moclojer.com
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
  {:init (utils/start-system! create-and-start-components)
   :cleanup utils/stop-system!
   :fail-fast? true}

  (flow "create a bucket"
    [create (create-bucket-on-localstack "moclojer")]

    (match? create {:Location "/moclojer"})

    (flow "setup mock on bucket for path"

      [_ (setup-file-on-localstack "moclojer"
                                   (str "cd989358-af38-4a2f-a1a1-88096aa425a7/" mock-id "/mock.yml")
                                   yml)
       _ (publish-message {:event
                           {:path (str "cd989358-af38-4a2f-a1a1-88096aa425a7/" mock-id "/mock.yml")}} "mock-unified")]
      (flow "check retrieved unified yml"

        (match?
         (matchers/embeds (logic.yml/parse-yaml-&-body expected-yml-with-host))
         (get-file-on-localstack "moclojer" (str "cd989358-af38-4a2f-a1a1-88096aa425a7/" mock-id "/mock.yml")))))))
