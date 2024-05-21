(ns dev.api.dev
  (:require [back.api.ports.workers :as p.workers]
            [back.api.routes :as routes]
            [com.stuartsierra.component :as component]
            [components.config :as config]
            [components.database :as database]
            [components.http :as http]
            [components.redis-publisher :as redis-publisher]
            [components.redis-queue :as redis-queue]
            [components.router :as router]
            [components.sentry :as sentry]
            [components.webserver :as webserver]
            [dev.utils :as utils])
  (:gen-class))

;; This namespace is used for development purposes only;
;; it is not included in the uberjar.
(def sys-atom (atom nil))

(defn build-system-map []
  (component/system-map
   :config (config/new-config)
   :sentry (sentry/new-mock-sentry)
   :http (http/new-http)
   :router (router/new-router routes/routes)
   :database (component/using (database/new-database) [:config])
   :publisher (component/using (redis-publisher/new-redis-publisher
                                #_[{:qname "mocks.verify"
                                    :event {}
                                    ;; every other minute
                                    :delay 120000}
                                   {:qname "yml.verify"
                                    :event {}
                                    ;; every 5 minutes
                                    :delay 300000}])
                               [:config])
   :webserver (component/using (webserver/new-webserver)
                               [:config :http :router :database :publisher])
   :workers (component/using
             (redis-queue/new-redis-queue p.workers/workers false)
             [:config :database :publisher])))

(comment
  ;; init
  (utils/start-system-dev! sys-atom (build-system-map))

  (redis-publisher/publish! (:publisher @sys-atom) "mock.publication"
                            {:event {:domain "test-josue"
                                     :new-status "published"}})

  (redis-publisher/publish! (:publisher @sys-atom) "unified.verification.dispatch" {})

  ;; iterate
  (utils/stop-system-dev! sys-atom false)
  ;; re-eval file then
  (utils/start-system-dev! sys-atom (build-system-map) false)

  ;; finish
  (utils/stop-system-dev! sys-atom))
