(ns back.integration.cloud-ops.fail-retrieve-data-test
  (:require [back.integration.components.utils :as utils]
            [cloud-ops.api.ports.workers :as workers]
            [com.moclojer.components.core :as components]
            [com.stuartsierra.component :as component]
            [state-flow.api :as sf]))

(def mocked-responses
  [{:url "https://api.cloudflare.com/client/v4/zones/c6f10cf4dd7ace4b979d60c22066be23/dns_records"
    :method :get
    :response {:status 500
               :body ""}}])

(defn- create-and-start-components []
  (component/system-map
   :config (components/new-config "~/back/config.edn")
   :http (components/new-http-mock mocked-responses)
   :publisher (component/using (components/new-publisher-mock)
                               [:config])))

(sf/defflow
  flow-fail-retrieve-data
  {:init (utils/start-system! create-and-start-components)
   :cleanup utils/stop-system!
   :fail-fast? true}
  (sf/flow
    "should fail to retrieve current cloudflare records"
    [components (sf/get-state)
     err-url (sf/invoke #(try
                           (workers/create-domain-handler
                            {:event {:domain "test-j0suetm"}} components)
                           (catch Throwable e
                             (-> e ex-data :req :url))))]
    (sf/match? "https://api.cloudflare.com/client/v4/zones/c6f10cf4dd7ace4b979d60c22066be23/dns_records"
               err-url)))
