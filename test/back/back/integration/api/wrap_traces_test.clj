(ns back.integration.api.wrap-traces-test
  (:require
   [back.api.routes :as routes]
   [back.api.controllers.mocks :as mocks]
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
    :logger (component/using (components/new-logger) [:config])
    :http (components/new-http-mock [])
    :router (components/new-router routes/routes)
    :database (component/using (components/new-database) [:config])
    :mq (components/new-mq-mock)
    :webserver (component/using (components/new-webserver)
                                [:config :http :router :database :mq]))))
(defn- save-local-fns []
  (let [a-ns (mocks/get-allowed-ns)
        m (atom [])]
    (doseq [d-ns a-ns]
      (doseq [[func _] (ns-publics d-ns)]  
        (swap! m conj (str func))))       
    @m))  

(defflow
  flow-wrap-all-ns-functions
  {:init (utils/start-system! create-and-start-components)
   :cleanup utils/stop-system!
   :fail-fast? true}

  (flow
    "will try to wrap all desired ns functions into a trace container"
    (let [local-fns (save-local-fns)
          expected-fns (mocks/trace-all-ns-test)]
      (match? (matchers/equals local-fns) expected-fns))))
