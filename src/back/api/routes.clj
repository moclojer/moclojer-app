(ns back.api.routes
  (:require
   [back.api.ports.http-in :as auth.ports.http-in]
   [back.api.schemas.wire-in :as auth.schemas.wire-in]
   [back.api.schemas.wire-out :as auth.schemas.wire-out]
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

   ["/login/auth"
    {:swagger {:tags ["login"]}
     :post {:summary "Login supabase retrieve user"
            :parameters {:body auth.schemas.wire-in/AuthLogin}
            :responses {201 {:body {:user auth.schemas.wire-out/User}}}
            :handler auth.ports.http-in/handler-create-user!}}]

   ["/user/:id"
    {:swagger {:tags ["login"]}
     :post {:summary "Update user"
            :parameters {:path {:id uuid?}
                         :body {:username string?}}
            :responses {200 {:body {:user auth.schemas.wire-out/User}}}
            :handler auth.ports.http-in/edit-user!}
     :get {:summary "Retrieve user"
           :parameters {:path {:id uuid?}}
           :responses {200 {:body {:user auth.schemas.wire-out/User}}}
           :handler auth.ports.http-in/get-user-by-id}}]])

