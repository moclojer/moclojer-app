(ns back.api.routes
  (:require
   [back.api.ports.http-in :as ports.http-in]
   [back.api.schemas.wire-in :as schemas.wire-in]
   [back.api.schemas.wire-out :as schemas.wire-out]
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
            :parameters {:body schemas.wire-in/AuthLogin}
            :responses {201 {:body {:user schemas.wire-out/User}}}
            :handler ports.http-in/handler-create-user!}}]

   ["/user/:id"
    {:swagger {:tags ["login"]}
     :post {:summary "Update user"
            :parameters {:path {:id uuid?}
                         :body {:username string?}}
            :responses {200 {:body {:user schemas.wire-out/User}}}
            :handler ports.http-in/edit-user!}
     :get {:summary "Retrieve user"
           :parameters {:path {:id uuid?}}
           :responses {200 {:body {:user schemas.wire-out/User}}}
           :handler ports.http-in/get-user-by-id}}]
   ["/mocks"
    {:swagger {:tags ["mocks"]}
     :post {:summary "Create a mock"
            :parameters {:body schemas.wire-in/Mock}
            :responses {201 {:body {:mock schemas.wire-out/Mock}}}
            :handler ports.http-in/handler-create-mock!}
     :get {:summary "Get mocks"
           :responses {200 {:body {:mocks schemas.wire-out/Mocks}}}
           :handler ports.http-in/handler-get-mocks}}

    ["/:id"
     {:patch {:summary "Update a mock"
              :parameters {:path {:id uuid?}
                           :body schemas.wire-in/MockUpdate}
              :responses {200 {:body {:mock schemas.wire-out/Mock}}}
              :handler ports.http-in/handler-update-mock!}}]]

   ["/mocks/:id/publish"
    {:post {:summary "Publish mock"
            :parameters {:path {:id uuid?}}
            :responses {200 {:body {}}}
            :handler ports.http-in/handler-publish-mock!}}]

   ["/mocks/:id/unpublish"
    {:post {:summary "Unpublish mock"
            :parameters {:path {:id uuid?}}
            :responses {200 {:body {}}}
            :handler ports.http-in/handler-unpublish-mock!}}]])
