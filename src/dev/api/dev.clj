(ns dev.api.dev
  (:require [back.api.ports.workers :as p.workers]
            [back.api.routes :as routes]
            [com.moclojer.components.core :as components]
            [com.moclojer.components.mq :as mq]
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
   :mq (component/using
        (components/new-mq
         p.workers/workers
         #_[{:channel "mocks.verify"
             :event {}
             ;; every other minute
             :sleep 120000}
            {:qname "yml.verify"
             :event {}
             ;; every 5 minutes
             :sleep 300000}]
         false)
        [:config :database :sentry])
   :webserver (component/using (components/new-webserver)
                               [:config :http :router :database :mq])))

(comment
  ;; init
  (utils/start-system-dev! sys-atom (build-system-map))

  (mq/try-op! (:mq @sys-atom) :publish! ["yml.unified.verification.fired" {}] {})
  (mq/try-op! (:mq @sys-atom) :publish! ["domains.verification.fired" {}] {})

  ;; iterate
  (utils/stop-system-dev! sys-atom false)
  ;; re-eval file then
  (utils/start-system-dev! sys-atom (build-system-map) false)

  ;; finish
  (utils/stop-system-dev! sys-atom))
