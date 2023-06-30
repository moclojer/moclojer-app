(ns back.integration.api.healthcheck-test
  (:require
   [back.api.routes :as routes]
   [back.components.config :as config]
   [back.components.database :as database]
   [back.components.http :as http]
   [back.components.router :as router]
   [back.components.webserver :as webserver]
   [back.integration.api.helpers :as helpers]
   [back.integration.components.utils :as utils]
   [com.stuartsierra.component :as component]
   [state-flow.api :refer [defflow]]
   [matcher-combinators.matchers :as matchers]
   [state-flow.assertions.matcher-combinators :refer [match?]]
   [state-flow.core :refer [flow]]))

(defn- create-and-start-components! []
  (component/start-system
   (component/system-map
    :config (config/new-config)
    :http (http/new-http-mock {})
    :router (router/new-router routes/routes)
    :database (component/using (database/new-database)
                               [:config])
    :webserver (component/using (webserver/new-webserver)
                                [:config :http :router :database]))))
(defflow
  flow-integration-endpoints-test
  {:init (utils/start-system! create-and-start-components!)
   :cleanup utils/stop-system!
   :fail-fast? true}

  (flow "makes a healthcheck request"
        (match? (matchers/embeds {:status 200
                                  :body  {:data {:content "Live api"}}})
                (helpers/request! {:method :get
                                   :uri    "/healthcheck"
                                   :body   {:btc -1M}})))
  
  (flow ""
        (match? (matchers/embeds {:status 200
                                  :body {:a {:a ""}}})
                (helpers/request! {:method :get}))))
