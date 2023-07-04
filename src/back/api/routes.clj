(ns back.api.routes
  (:require
   [back.api.auth.ports.http-in :as auth.ports.http-in]
   [back.api.auth.schemas.wire-in :as auth.schemas.wire-in]
   [back.api.auth.schemas.wire-out :as auth.schemas.wire-out]
   [back.api.healthcheck :as healthcheck]
   [reitit.swagger :as swagger]))

(def routes
  [["/swagger.json"
    {:get {:no-doc true
           :swagger {:info {:title "api"
                            :description "Api"}}
           :handler (swagger/create-swagger-handler)}}]
   ["/healthcheck"
    {:swagger {:tags ["healthcheck"]}
     :get {:summary "Health check api"
           :responses {200 {:body healthcheck/HealthResponse}}
           :handler healthcheck/health}}]

   ["/healthcheck/live"
    {:swagger {:tags ["healthcheck"]}
     :get {:summary "Health check api"
           :responses {200 {:body healthcheck/HealthResponse}}
           :handler healthcheck/live}}]

   ["/auth/login"
    {:swagger {:tags ["login"]}
     :post {:summary "Login supabase retrieve user"
            :parameters {:body auth.schemas.wire-in/AuthLogin}
            :responses {201 {:body auth.schemas.wire-out/User}}
            :handler auth.ports.http-in/create-user!}}]])

