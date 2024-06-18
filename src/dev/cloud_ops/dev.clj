(ns dev.cloud-ops.dev
  (:require [cloud-ops.api.ports.workers :as p.workers]
            [com.moclojer.components.core :as components]
            [com.moclojer.components.publisher :as publisher]
            [com.stuartsierra.component :as component]
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
                   :body (slurp (m/encode "application/json"
                                          (:cf @mocked-provider-data)))})}
   :do-data-ok {:url "https://api.digitalocean.com/v2/apps/4dd19675-0b62-4b9a-8082-8ee5d9eab99a"
                :method :get
                :response
                (fn [_]
                  {:status 200
                   :body (slurp (m/encode "application/json"
                                          (:do @mocked-provider-data)))})}
   :cf-create-ok {:url "https://api.cloudflare.com/client/v4/zones/c6f10cf4dd7ace4b979d60c22066be23/dns_records"
                  :method :post
                  :response
                  (fn [{:keys [body]}]
                    (swap! mocked-provider-data
                           #(update-in % [:cf :result]
                                       conj (-> (m/decode "application/json" body)
                                                (update :name str ".moclojer.com")
                                                (assoc :id "1234"))))
                    {:status 200 :body "\"ok\""})}
   :do-update-ok {:url "https://api.digitalocean.com/v2/apps/4dd19675-0b62-4b9a-8082-8ee5d9eab99a"
                  :method :put
                  :response
                  (fn [{:keys [body]}]
                    (swap! mocked-provider-data
                           #(assoc-in % [:do :app] (m/decode "application/json" body)))
                    {:status 200 :body "\"ok\""})}
   :domain-ok {:url "https://teste-josue.moclojer.com"
               :method :get
               :response
               {:status 200
                :body "{\"created\": true}"}}
   :cf-delete-ok {:url "https://api.cloudflare.com/client/v4/zones/c6f10cf4dd7ace4b979d60c22066be23/dns_records/1234"
                  :method :delete
                  :response
                  (fn [_]
                    (swap! mocked-provider-data
                           update-in [:cf :result]
                           (fn [records]
                             (remove #(= (:id %) "1234") records)))
                    {:status 200
                     :body "{}"})}})

(defn build-system-map []
  (component/system-map
   :config (components/new-config "back/config.edn")
   ;; :http (http/new-http)
   :http (components/new-http-mock
          (vals (select-keys
                 mocked-responses
                 ;; modify this list for different results
                 [:cf-data-ok :do-data-ok
                  :cf-create-ok :do-update-ok
                  :domain-ok :cf-delete-ok])))
   :sentry (components/new-sentry-mock)
   :publisher (component/using (components/new-publisher)
                               [:config :sentry])
   :workers (component/using (components/new-consumer p.workers/workers false)
                             [:config :http :publisher :sentry])))

(comment
  ;; init
  (utils/start-system-dev! sys-atom (build-system-map) false)

  (:publisher @sys-atom)

  @mocked-provider-data

  ((get-in mocked-responses [:cf-data-ok :response]) nil)

  (publisher/publish! (:publisher @sys-atom)
                      "mock.updated"
                      {:event {:domain.create {:domain "teste-josue"}}})

  ;; iterate
  (utils/stop-system-dev! sys-atom false)
  ;; re-eval file then
  (utils/start-system-dev! sys-atom (build-system-map) false)

  ;; finish
  (utils/stop-system-dev! sys-atom))
