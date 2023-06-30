(ns back.api.routes
  (:require
   [back.api.auth.ports.http-in :as auth.ports.http-in]
   [back.api.auth.schemas.wire-in :as auth.schemas.wire-in]
   [back.api.healthcheck.ports.http-in :as healthcheck.ports.http-in]
   [back.api.healthcheck.schemas.http-in :as healthcheck.schemas.http-in]
   [reitit.swagger :as swagger]))

(defn testin []
  {:enter (fn [ctx] 
            (prn ctx)
            )})
(def routes
  [["/swagger.json"
    {:get {:no-doc true
           :swagger {:info {:title "api"
                            :description "Api"}}
           :handler (swagger/create-swagger-handler)}}]
   ["/healthcheck"
    {:swagger {:tags ["healthcheck"]}
     :get {:summary "Health check api"
           :responses {200 {:body healthcheck.schemas.http-in/HealthResponse}}
           :handler healthcheck.ports.http-in/health}}]

   ["/healthcheck/live"
    {:swagger {:tags ["healthcheck"]}
     :get {:summary "Health check api"
           :responses {200 {:body healthcheck.schemas.http-in/HealthResponse}}
           :handler healthcheck.ports.http-in/live}}]

   ["/login"
    {:swagger {:tags ["login"]}
     :post {:summary "Login supabase"
            :parameters {:body auth.schemas.wire-in/Login}
            :responses {200 {}}
            :handler auth.ports.http-in/login}}]

   ["/auth/login"
    {:swagger {:tags ["login"]}
     :get {:summary "Login supabase"
           :interceptors [(testin)]
           :responses {200 {}}
           :handler auth.ports.http-in/create-user!}}]])

