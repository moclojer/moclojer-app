(ns back.integration.cloud-ops.create-domain-test
  (:require [back.integration.components.utils :as utils]
            [cloud-ops.api.ports.workers :as workers]
            [com.moclojer.components.core :as components]
            [com.moclojer.components.mq :as mq]
            [com.stuartsierra.component :as component]
            [matcher-combinators.matchers :as matchers]
            [muuntaja.core :as m]
            [state-flow.api :refer [defflow]]
            [state-flow.assertions.matcher-combinators :refer [match?]]
            [state-flow.core :refer [flow]]
            [state-flow.state :as state]))

(def mocked-provider-data
  (atom {:cf {:result []}
         :do {:app {:spec {:domains []}}}}))

(def mocked-responses
  {:cf-data-ok {:url "https://api.cloudflare.com/client/v4/zones/c6f10cf4dd7ace4b979d60c22066be23/dns_records"
                :method :get
                :response
                (fn [_]
                  {:status 200
                   :body (slurp (m/encode "application/json" (:cf @mocked-provider-data)))})}
   :do-data-ok {:url "https://api.digitalocean.com/v2/apps/4dd19675-0b62-4b9a-8082-8ee5d9eab99a"
                :method :get
                :response
                (fn [_]
                  {:status 200
                   :body (slurp (m/encode "application/json" (:do @mocked-provider-data)))})}
   :cf-create-ok {:url "https://api.cloudflare.com/client/v4/zones/c6f10cf4dd7ace4b979d60c22066be23/dns_records"
                  :method :post
                  :response
                  (fn [{:keys [body]}]
                    (swap! mocked-provider-data #(update-in % [:cf :result] conj (m/decode "application/json" body)))
                    {:status 200 :body "\"ok\""})}
   :do-create-ok {:url "https://api.digitalocean.com/v2/apps/4dd19675-0b62-4b9a-8082-8ee5d9eab99a"
                  :method :put
                  :response
                  (fn [{:keys [body]}]
                    (swap! mocked-provider-data
                           #(assoc-in % [:do :app] (m/decode "application/json" body)))
                    {:status 200 :body "\"ok\""})}
   :domain-ok {:url "https://test-j0suetm.moclojer.com"
               :method :get
               :response
               {:status 200
                :body "{\"created\": true}"}}})

(defn- create-and-start-components []
  (component/system-map
   :config (components/new-config "back/config.edn")
   :http (components/new-http-mock
          (vals (select-keys mocked-responses
                             ;; modify this list for different results
                             [:cf-data-ok :do-data-ok
                              :cf-create-ok :do-create-ok
                              :domain-ok])))
   :mq (components/new-mq-mock)))

(defn fcreate-domain [domain]
  (flow
   "should create domain"
   [components (state-flow.api/get-state)]
   (state/invoke
    #(workers/create-domain-handler {:event {:domain.create {:domain domain}}}
                                    components))

   (match?
    (matchers/embeds {:event {:domain domain
                              :new-status "publishing"}})
    (update-in (first (get @mq/mock-channels "domain.updated"))
               [:event] dissoc :ctx))

   (match?
    (matchers/embeds {:event {:domain domain
                              :retrying? true
                              :skip-data? false}})
    (update-in (first (get @mq/mock-channels "domain.verification.dispatched"))
               [:event] dissoc :ctx))))

(defflow
  flow-create-domain
  {:init (utils/start-system! create-and-start-components)
   :cleanup utils/stop-system!
   :fail-fast? true}
  (fcreate-domain "test-j0suetm"))
