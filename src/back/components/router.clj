(ns back.components.router
  (:require [back.api.db.customers :as db.customers]
            [back.components.logs :as logs]
            [buddy.sign.jwt :as jwt]
            [clojure.string :as string]
            [com.stuartsierra.component :as component]
            [muuntaja.core :as m]
            [reitit.coercion.malli :as reitit.malli]
            [reitit.dev.pretty :as pretty]
            [reitit.http :as http]
            [reitit.http.coercion :as coercion]
            [reitit.http.interceptors.exception :as exception]
            [reitit.http.interceptors.multipart :as multipart]
            [reitit.http.interceptors.muuntaja :as muuntaja]
            [reitit.http.interceptors.parameters :as parameters]
            [reitit.pedestal :as pedestal]
            [reitit.ring :as ring]
            [reitit.swagger :as swagger]
            [reitit.swagger-ui :as swagger-ui]))

(defn- coercion-error-handler [status]
  (fn [exception _request]
    ;; (logs/log :error exception :coercion-errors (:errors (ex-data exception)))
    {:status status
     :body (if (= 400 status)
             (str "Invalid path or request parameters, with the following errors: "
                  (:errors (ex-data exception)))
             "Error checking path or request parameters.")}))

(defn- exception-info-handler [exception _request]
  (logs/log :error exception "Server exception:" :exception exception)
  {:status 500
   :body   "Internal error."})

(defn- session-interceptor []
  {:enter (fn [{:keys [request] :as ctx}]
            (if-let [auth (get-in request [:headers "authorization"])]
              (let [secret (get-in request [:components :config :config :supabase-jwt-secret])
                    token (second (string/split auth #" "))
                    decoded (jwt/unsign token secret {:alg :hs26})
                    database (get-in request [:components :database])
                    external-id (-> decoded :sub parse-uuid)
                    user (db.customers/get-by-external-id external-id database)
                    session-data {:user-id (:customer/uuid user)
                                  :org-id (:customer/org_id user)}]
                (prn "external-id" external-id "user" user "session-data" session-data)
                (assoc-in ctx [:request :session-data] session-data))
              ctx))})

(def router-settings
  {;:reitit.interceptor/transform dev/print-context-diffs ;; pretty context diffs
   ;;:validate spec/validate ;; enable spec validation for route data
   ;;:reitit.spec/wrap spell/closed ;; strict top-level validation
   :exception pretty/exception
   :data {:coercion reitit.malli/coercion
          :muuntaja (m/create
                     (-> m/default-options
                         (assoc-in [:formats "application/json" :decoder-opts :bigdecimals] true)))
          :interceptors [;; swagger feature
                         swagger/swagger-feature
                         ;; query-params & form-params
                         (parameters/parameters-interceptor)
                         (session-interceptor)
                         ;; content-negotiation
                         (muuntaja/format-negotiate-interceptor)
                         ;; encoding response body
                         (muuntaja/format-response-interceptor)
                         ;; exception handling
                         (exception/exception-interceptor
                          (merge
                           exception/default-handlers
                           {:reitit.coercion/request-coercion  (coercion-error-handler 400)
                            :reitit.coercion/response-coercion (coercion-error-handler 00)
                            clojure.lang.ExceptionInfo exception-info-handler}))
                             ;; decoding request body
                         (muuntaja/format-request-interceptor)
                             ;; coercing response bodys
                         (coercion/coerce-response-interceptor)
                             ;; coercing request parameters
                         (coercion/coerce-request-interceptor)
                             ;; multipart
                         (multipart/multipart-interceptor)]}})

(defn router [routes]
  (pedestal/routing-interceptor
   (http/router routes router-settings)
    ;; optional default ring handler (if no routes have matched)
   (ring/routes
    (swagger-ui/create-swagger-ui-handler
     {:path "/"
      :config {:validatorUrl nil
               :operationsSorter "alpha"}})
    (ring/create-resource-handler)
    (ring/create-default-handler))))

(defrecord Router [router]
  component/Lifecycle
  (start [this] this)
  (stop  [this] this))

(defn new-router
  [routes]
  (map->Router {:router (router routes)}))
