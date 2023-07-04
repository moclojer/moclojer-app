(ns back.api.routes
  (:require
   [back.api.auth.ports.http-in :as auth.ports.http-in]
   [back.api.auth.schemas.wire-in :as auth.schemas.wire-in]
   [back.api.healthcheck.ports.http-out :as healthcheck.ports.http-out]
   [back.api.healthcheck.schemas.http-out :as healthcheck.schemas.http-out]
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
           :responses {200 {:body healthcheck.schemas.http-out/HealthResponse}}
           :handler healthcheck.ports.http-out/health}}]

   ["/healthcheck/live"
    {:swagger {:tags ["healthcheck"]}
     :get {:summary "Health check api"
           :responses {200 {:body healthcheck.schemas.http-out/HealthResponse}}
           :handler healthcheck.ports.http-out/live}}]

   ["/login"
    {:swagger {:tags ["login"]}
     :post {:summary "Login supabase"
            :parameters {:body auth.schemas.wire-in/Login}
            :responses {200 {}}
            :handler auth.ports.http-in/login}}]

   ["/auth/login"
    {:swagger {:tags ["login"]}
     :get {:summary "Login supabase"
           :parameters {:query {:url string?}}
           :responses {200 {}}
           :handler auth.ports.http-in/create-user!}}]])

