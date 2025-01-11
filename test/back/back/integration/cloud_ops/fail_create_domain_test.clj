(ns back.integration.cloud-ops.fail-create-domain-test
  (:require [back.integration.components.utils :as utils]
            [cloud-ops.api.ports.workers :as workers]
            [com.moclojer.components.core :as components]
            [com.stuartsierra.component :as component]
            [muuntaja.core :as m]
            [state-flow.api :as sf]))

(def mocked-provider-data
  (atom {:cf {:result []}
         :do {:app {:spec {:domains []}}}}))

(def mocked-responses
  [{:url "https://api.cloudflare.com/client/v4/zones/c6f10cf4dd7ace4b979d60c22066be23/dns_records"
    :method :get
    :response
    (fn [_]
      {:status 200
       :body (slurp (m/encode "application/json" (:cf @mocked-provider-data)))})}
   {:url "https://api.digitalocean.com/v2/apps/4dd19675-0b62-4b9a-8082-8ee5d9eab99a"
    :method :get
    :response
    (fn [_]
      {:status 200
       :body (slurp (m/encode "application/json" (:do @mocked-provider-data)))})}
   {:url "https://api.cloudflare.com/client/v4/zones/c6f10cf4dd7ace4b979d60c22066be23/dns_records"
    :method :post
    :response {:status 500}}])

(defn- create-and-start-components []
  (component/system-map
   :config (components/new-config "back/config.edn")
   :http (components/new-http-mock mocked-responses)
   :mq (components/new-mq-mock)))

(sf/defflow
  flow-fail-create-domain
  {:init (utils/start-system! create-and-start-components)
   :cleanup utils/stop-system!
   :fail-fast? true}
  (sf/flow
   "should fail to create cloudflare record"
   [components (sf/get-state)
    err-url (sf/invoke #(try
                          (workers/create-domain-handler
                           {:event {:domain.create {:domain "test-j0suetm"}}}
                           components)
                          (catch Throwable e
                            (-> e ex-data :req :url))))]
   (sf/match? "https://api.cloudflare.com/client/v4/zones/c6f10cf4dd7ace4b979d60c22066be23/dns_records"
              err-url)))
