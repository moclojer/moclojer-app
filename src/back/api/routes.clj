(ns back.api.routes
  (:require
   [back.api.healthcheck :as healthcheck]
   [back.api.interceptors.error-handler :refer [error-handler-interceptor]]
   [back.api.interceptors.extract-user :refer [extract-user-interceptor]]
   [back.api.interceptors.verify-webhook :refer [verify-webhook-signature]]
   [back.api.ports.http-in :as ports.http-in]
   [back.api.schemas.wire-in :as schemas.wire-in]
   [back.api.schemas.wire-out :as schemas.wire-out]
   [reitit.http.interceptors.parameters :as parameters]
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

   ["/webhook"
    {:post {:summary "Handles a webhook"
            :parameters {:body map?}
            :interceptors [(parameters/parameters-interceptor)
                           (verify-webhook-signature)]
            :handler ports.http-in/handler-webhook}}]

   ["/login/auth"
    {:swagger {:tags ["login"]}
     :post {:summary "Login supabase retrieve user"
            :parameters {:body schemas.wire-in/AuthLogin}
            :responses {201 {:body {:user schemas.wire-out/User}}}
            :handler ports.http-in/handler-create-user!}}]

   ["/repos"
    {:get {:summary "Returns a user repos linked by its installation"
           :interceptors [(error-handler-interceptor)
                          (extract-user-interceptor)]
           :responses {200 {:body [map?]}}
           :handler ports.http-in/handler-get-repos}}]

   ["/sync"
    {:get {:summary "Returns true if sync is enabled"
           :interceptors [(error-handler-interceptor)
                          (extract-user-interceptor)]
           :responses {200 {:body [map?]}}
           :handler ports.http-in/handler-sync-status}}]

   ["/user/:id"
    {:swagger {:tags ["login"]}
     :post {:summary "Update user"
            :interceptors [(error-handler-interceptor)
                           (extract-user-interceptor)]
            :parameters {:path {:id uuid?}
                         :body schemas.wire-in/UserUpdate}
            :responses {200 {:body {:user schemas.wire-out/User}}}
            :handler ports.http-in/edit-user!}
     :get {:summary "Retrieve user"
           :parameters {:path {:id uuid?}}
           :interceptors [(error-handler-interceptor)
                          (extract-user-interceptor)]
           :responses {200 {:body {:user schemas.wire-out/User}}
                       404 {}}
           :handler ports.http-in/handler-get-user}}]

   ;; not using /user/external so it doesn't conflict with
   ;; /user/:id. Since the only customer data a user can retrieve
   ;; using an external id, is themselves, for security reasons.
   ;; Any other operation should be done using the /user/:id route.
   ["/user-external"
    {:swagger {:tags ["login"]}
     :get {:summary "Retrieve user by external id"
           :interceptors [(error-handler-interceptor)
                          (extract-user-interceptor)]
           :responses {200 {:body {:user schemas.wire-out/User}}}
           :handler ports.http-in/handler-get-user-by-external-id}}]

   ["/user/username/:username"
    {:swagger {:tags ["get username"]}
     :get {:summary "Check if username is available"
           :parameters {:path {:username string?}}
           :interceptors [(error-handler-interceptor)
                          (extract-user-interceptor)]
           :responses {200 {:body schemas.wire-out/Available}}
           :handler ports.http-in/handler-username-available?}}]

   ["/orgs"
    {:get {:summary "Get orgs user is in"
           :interceptors [(error-handler-interceptor)
                          (extract-user-interceptor)]
           :responses {200 {:body {:orgs schemas.wire-out/OrgsWithUsers}}}
           :handler ports.http-in/handler-get-orgs}
     :post {:summary "Create an org"
            :parameters {:body {:org schemas.wire-in/OrgCreate}}
            :interceptors [(error-handler-interceptor)
                           (extract-user-interceptor)]
            :responses {201 {:body {:org schemas.wire-out/OrgWithUsers}}}
            :handler ports.http-in/handler-create-org}}]

   ["/orgs/:id"
    {:get {:summary "Get an org"
           :parameters {:path {:id uuid?}}
           :interceptors [(error-handler-interceptor)
                          (extract-user-interceptor)]
           :responses {200 {:body {:org schemas.wire-out/OrgWithUsers}}}
           :handler ports.http-in/handler-get-org}
     :put {:summary "Update an org"
           :parameters {:path {:id uuid?}
                        :body {:org schemas.wire-in/OrgUpdate}}
           :interceptors [(error-handler-interceptor)
                          (extract-user-interceptor)]
           :responses {200 {:body {:org schemas.wire-out/Org}}}
           :handler ports.http-in/handler-update-org}
     :delete {:summary "delete an org"
              :parameters {:path {:id uuid?}}
              :interceptors [(error-handler-interceptor)
                             (extract-user-interceptor)]
              :responses {200 {:body {:success boolean?}}}
              :handler ports.http-in/handler-delete-org}}]

   ["/orgs/:id/users"
    {:get {:summary "Get an org's users"
           :interceptors [(error-handler-interceptor)
                          (extract-user-interceptor)]
           :parameters {:path {:id string?}}
           :responses {200 {:body {:users schemas.wire-out/Users}}}
           :handler ports.http-in/handler-get-org-users}
     :post {:summary "Add user to org"
            :interceptors [(error-handler-interceptor)
                           (extract-user-interceptor)]
            :parameters {:path {:id string?}
                         :body {:user-id string?}}
            :responses {201 {:body {:users schemas.wire-out/Users}}}
            :handler ports.http-in/handler-add-org-user}}]

   ["/orgs/:org-id/users/:user-id"
    {:delete {:summary "Remove user from org"
              :interceptors [(error-handler-interceptor)
                             (extract-user-interceptor)]
              :parameters {:path {:org-id string?
                                  :user-id string?}}
              :responses {200 {:body {:success boolean?
                                      :users schemas.wire-out/Users}}}
              :handler ports.http-in/handler-delete-org-user}}]

   ["/mocks"
    {:swagger {:tags ["mocks"]}
     :post {:summary "Create a mock"
            :parameters {:body schemas.wire-in/MockCreate}
            :interceptors [(error-handler-interceptor)
                           (extract-user-interceptor)]
            :responses {201 {:body {:mock schemas.wire-out/Mock}}
                        412 {:body {:error schemas.wire-out/APIError}}}
            :handler ports.http-in/handler-create-mock!}
     :get {:summary "Get mocks"
           :interceptors [(error-handler-interceptor)
                          (extract-user-interceptor)]
           :responses {200 {:body {:mocks schemas.wire-out/GroupedMocks}}}
           :handler ports.http-in/handler-get-mocks}
     :put {:summary "Update a mock"
           :interceptors [(error-handler-interceptor)
                          (extract-user-interceptor)]
           :parameters {:body schemas.wire-in/MockUpdate}
           :responses {200 {:body {:mock schemas.wire-out/Mock}}}
           :handler ports.http-in/handler-update-mock!}
     :delete {:summary "Delete a mock"
              :interceptors [(error-handler-interceptor)
                             (extract-user-interceptor)]
              :parameters {:body schemas.wire-in/MockDelete}
              :responses {200 {:body {}}}
              :handler ports.http-in/handler-delete-mock!}}]

   ["/mocks/wildcard/:subdomain/:wildcard"
    {:swagger {:tags ["get wildcard"]}
     :get {:summary "Check if wildcard is available"
           :parameters {:path {:subdomain string?
                               :wildcard string?}}
           :interceptors [(error-handler-interceptor)
                          (extract-user-interceptor)]
           :responses {200 {:body schemas.wire-out/Available}}
           :handler ports.http-in/handler-wildcard-available?}}]

   ["/mocks/:id"
    {:get {:summary "Gets a specific mock"
           :parameters {:path {:id string?}}
           :interceptors [(error-handler-interceptor)
                          (extract-user-interceptor)]
           :responses {200 {:body {:mock map?}}
                       404 {:body {:error string?}}}
           :handler ports.http-in/handler-get-mock-by-id}}]

   ["/mocks/:id/publication"
    {:swagger {:tags ["mocks"]}
     :get {:summary "Get mock publication status"
           :parameters {:path {:id uuid?}}
           :interceptors [(error-handler-interceptor)
                          (extract-user-interceptor)]
           :responses {200 {:body schemas.wire-out/MockPublicationStatus}}
           :handler ports.http-in/handler-get-mock-publication-status}}]

   ["/mocks/:id/publish"
    {:post {:summary "Publish mock"
            :parameters {:path {:id uuid?}}
            :interceptors [(error-handler-interceptor)
                           (extract-user-interceptor)]
            :responses {200 {:body {}}}
            :handler ports.http-in/handler-publish-mock!}}]

   ["/mocks/:id/unpublish"
    {:post {:summary "Unpublish mock"
            :parameters {:path {:id uuid?}}
            :interceptors [(error-handler-interceptor)
                           (extract-user-interceptor)]
            :responses {200 {:body {}}}
            :handler ports.http-in/handler-unpublish-mock!}}]

   ["/mocks/:id/push"
    {:post {:summary "Push mock to GitHub"
            :parameters {:path {:id uuid?}
                         :body schemas.wire-in/MockPush}
            :interceptors [(error-handler-interceptor)
                           (extract-user-interceptor)]
            :responses {200 {:body [map?]}}
            :handler ports.http-in/handler-push-mock!}}]])
