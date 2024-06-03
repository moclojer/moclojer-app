(ns back.integration.api.healthcheck-test
  (:require [back.api.routes :as routes]
            [back.integration.api.helpers :as helpers]
            [back.integration.components.utils :as utils]
            [com.moclojer.components.core :as components]
            [com.stuartsierra.component :as component]
            [matcher-combinators.matchers :as matchers]
            [state-flow.api :refer [defflow]]
            [state-flow.assertions.matcher-combinators :refer [match?]]
            [state-flow.core :refer [flow]]))

(defn- create-and-start-components []
  (component/start-system
   (component/system-map
    :config (components/new-config "back/config.edn")
    :http (components/new-http-mock {})
    :router (components/new-router routes/routes)
    :database (component/using (components/new-database)
                               [:config])
    :webserver (component/using (components/new-webserver)
                                [:config :http :router :database]))))

(defflow
  flow-integration-endpoints-test
  {:init (utils/start-system! create-and-start-components)
   :cleanup utils/stop-system!
   :fail-fast? true}

  (flow "makes a healthcheck request"
    (match? (matchers/embeds {:status 200
                              :body  {:data {:content "Live api"}}})
            (helpers/request! {:method :get
                               :uri    "/healthcheck"
                               :body   {}}))))
