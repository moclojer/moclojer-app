(ns dev.cloud-ops.dev
  (:require [cloud-ops.api.ports.workers :as p.workers]
            [com.stuartsierra.component :as component]
            [components.config :as config]
            [components.http :as http]
            [components.redis-publisher :as redis-publisher]
            [components.redis-queue :as redis-queue]
            [components.sentry :as sentry]
            [dev.utils :as utils]
            [muuntaja.core :as m])
  (:gen-class))

(def sys-atom (atom nil))

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

(defn build-system-map []
  (component/system-map
   :config (config/new-config)
   ;; :http (http/new-http)
   :http (http/new-http-mock
          (->> (select-keys
                mocked-responses
                ;; modify this list for different results
                [:cf-data-ok :do-data-ok
                 :cf-create-ok :do-create-ok
                 :domain-ok])
               vals
               (reduce #(conj %1 %2) [])))
   :sentry (sentry/new-mock-sentry)
   :publisher (component/using
               (redis-publisher/new-redis-publisher)
               [:config :sentry])
   :workers (component/using
             (redis-queue/new-redis-queue p.workers/workers false)
             [:config :http :publisher :sentry])))

(comment
  ;; init
  (utils/start-system-dev! sys-atom (build-system-map) false)

  @mocked-provider-data

  ;; will verify only once
  (redis-publisher/publish! (:publisher @sys-atom)
                            "domain.create"
                            {:event {:domain "test-j0suetm"}})

  ;; will fallback and try to recreate
  (redis-publisher/publish! (:publisher @sys-atom)
                            "domain.create"
                            {:event {:domain "test-j0suetm"}})
  ;; iterate
  (utils/stop-system-dev! sys-atom false)
  ;; re-eval file then
  (utils/start-system-dev! sys-atom (build-system-map) false)

  ;; finish
  (utils/stop-system-dev! sys-atom))
