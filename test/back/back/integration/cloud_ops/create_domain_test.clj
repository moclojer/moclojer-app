(ns back.integration.cloud-ops.create-domain-test
  (:require
   [back.integration.components.utils :as utils]
   [cloud-ops.api.ports.workers :as workers]
   [com.stuartsierra.component :as component]
   [components.config :as config]
   [components.http :as http]
   [components.redis-publisher :as redis-publisher]
   [matcher-combinators.matchers :as matchers]
   [muuntaja.core :as m]
   [state-flow.api :refer [defflow]]
   [state-flow.assertions.matcher-combinators :refer [match?]]
   [state-flow.core :refer [flow]]
   [state-flow.state :as state]))

(def mocked-responses
  {"https://api.cloudflare.com/client/v4/zones/c6f10cf4dd7ace4b979d60c22066be23/dns_records"
   {:status 200
    :body (m/encode "application/json"
                    {:result [{:name "teste-1.moclojer.com"}
                              {:name "teste-2.moclojer.com"}]})}
   "https://api.digitalocean.com/v2/apps/4dd19675-0b62-4b9a-8082-8ee5d9eab99a"
   {:status 200
    :body (m/encode "application/json"
                    {:app {:spec {:domains [{:domain "teste-1.moclojer.com"}
                                            {:domain "teste-2.moclojer.com"}]}}})}})

(defn- create-and-start-components! []
  (component/system-map
   :config (config/new-config)
   :http (http/new-http-mock mocked-responses)
   :publisher (component/using
               (redis-publisher/mock-redis-publisher)
               [:config])))

(defn fcreate-domain []
  (flow
   "should create a domain"
   [:let [domain "teste-3-j0suetm"]
    components (state-flow.api/get-state)]
   (state/invoke
    #(workers/create-domain-handler {:event {:domain domain}}
                                    components))
   (match?
    (matchers/embeds (-> @redis-publisher/mock-publisher
                         :domain.verify first))
    {:event {:domain domain
             :attempt 1}})

   (match?
    (matchers/embeds (-> @redis-publisher/mock-publisher
                         :mock.publication first))
    {:event {:domain domain
             :new-status "publishing"}})))

(defflow
  flow-create-domain
  {:init (utils/start-system! create-and-start-components!)
   :cleanup utils/stop-system!
   :fail-fast? true}
  (fcreate-domain))
