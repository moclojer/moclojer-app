(ns dev.api.dev
  (:require [back.api.ports.workers :as p.workers]
            [back.api.routes :as routes]
            [com.moclojer.components.core :as components]
            [com.moclojer.components.publisher :as publisher]
            [com.stuartsierra.component :as component]
            [dev.utils :as utils])
  (:gen-class))

;; This namespace is used for development purposes only;
;; it is not included in the uberjar.
(def sys-atom (atom nil))

(defn build-system-map []
  (component/system-map
   :config (components/new-config "back/config.edn")
   :sentry (components/new-sentry-mock)
   :http (components/new-http)
   :router (components/new-router routes/routes)
   :database (component/using (components/new-database) [:config])
   :publisher (component/using (components/new-publisher
                                #_[{:qname "mocks.verify"
                                    :event {}
                                    ;; every other minute
                                    :delay 120000}
                                   {:qname "yml.verify"
                                    :event {}
                                    ;; every 5 minutes
                                    :delay 300000}])
                               [:config])
   :webserver (component/using (components/new-webserver)
                               [:config :http :router :database :publisher])
   :workers (component/using (components/new-consumer p.workers/workers false)
                             [:config :database :publisher])))

(comment
  ;; init
  (utils/start-system-dev! sys-atom (build-system-map))

  (publisher/publish! (:publisher @sys-atom) "mock.publication"
                      {:event {:domain "test-josue"
                               :new-status "published"}})

  (publisher/publish! (:publisher @sys-atom) "unified.verification.dispatch" {})

  ;; iterate
  (utils/stop-system-dev! sys-atom false)
  ;; re-eval file then
  (utils/start-system-dev! sys-atom (build-system-map) false)

  ;; finish
  (utils/stop-system-dev! sys-atom))
