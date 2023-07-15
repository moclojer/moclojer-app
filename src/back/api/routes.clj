(ns back.api.routes
  (:require
   [back.api.ports.http-in :as ports.http-in]
   [back.api.schemas.wire-in :as schemas.wire-in]
   [back.api.schemas.wire-out :as schemas.wire-out]
   [back.api.healthcheck :as healthcheck]
   [reitit.swagger :as swagger]
   [reitit.ring.middleware.multipart :as multipart]))

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
           :handler auth.ports.http-in/get-user-by-id}}]

   ;; TODO: Fix malli schema for multipart
   ["/files/upload"
    {:swagger {:tags ["files"]}
     :post {:summary "Upload a file"
            :parameters {:multipart {:file schemas.wire-in/MultipartFile}}
            :responses {200 {:body {:file schemas.wire-out/File}}}
            :handler ports.http-in/handler-upload!}}]

   ["/files/download"
    {:swagger {:tags ["files"]}
     :get {:summary "Download a file"
           :swagger {:produces ["application/yaml"]}
           :parameters {:query {:uuid string?}}
           :handler ports.http-in/handler-download}}]

   ["/mocks"
    {:swagger {:tags ["mocks"]}
     :post {:summary "Create a mock"
            :parameters {:body schemas.wire-in/Mock}
            :responses {201 {:body {:mock schemas.wire-out/Mock}}}
            :handler ports.http-in/handler-create-mock!}
     :get {:summary "Get mocks"
           :responses {200 {:body {:mocks schemas.wire-out/Mocks}}}
           :handler ports.http-in/handler-get-mocks}}]

   ["/mocks/:id/enable"
    {:post {:summary "Enable a mock"
            :parameters {:path {:id uuid?}}
            :responses {200 {:body {}}}
            :handler ports.http-in/handler-enable-mock!}}]

   ["/mocks/:id/disable"
    {:post {:summary "Disable a mock"
            :parameters {:path {:id uuid?}}
            :responses {200 {:body {}}}
            :handler ports.http-in/handler-disable-mock!}}]])
