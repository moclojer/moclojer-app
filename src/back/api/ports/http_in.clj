(ns back.api.ports.http-in
  (:require
   [back.api.adapters.customers :as adapters.customers]
   [back.api.controllers.login :as controllers.login]
   [back.api.controllers.mocks :as controllers.mocks]
   [back.api.controllers.user :as controllers.user]))

(defn handler-create-user!
  [{{{:keys [access-token]} :body} :parameters
    components :components}]
  (let [user (controllers.login/create-customer!
              access-token components)]
    {:status 201
     :body {:user user}}))

(defn edit-user!
  [{{{:keys [id]} :path
     {:keys [username]} :body} :parameters
    {:keys [database]} :components}]
  (let [user-saved (controllers.user/get-user-by-id id database)
        user (controllers.user/edit-user! user-saved username database)]
    {:status 200
     :body {:user user}}))

(defn handler-get-user
  [{{{:keys [id]} :path} :parameters
    {:keys [database]} :components
    ext-user :user}]
  ;; since we're already fetching the current session user,
  ;; it doesn't make sense to make another request, incase the
  ;; user being retrieved, is the same one in the session.
  ;; So we just return the extracted user.
  (let [same-user? (= (some-> ext-user :customer/uuid str) id)
        user (if same-user?
               ext-user
               (controllers.user/get-user-by-id id database))
        valid-user? (some-> user :customer/uuid uuid?)]
    (if valid-user?
      {:status 200
       :body {:user (adapters.customers/->wire user)}}
      {:status 404})))

(defn handler-get-user-by-external-id
  [{:keys [user]}]
  (if (some-> user :customer/uuid uuid?)
    {:status 200
     :body {:user (adapters.customers/->wire user)}}
    {:status 404}))

;; TODO: Create an interceptor to get customer-id and org-id from cookies
;; TODO: Get customer-id and org-id from interceptor
(defn handler-create-mock!
  [{{body :body} :parameters
    {:keys [user-id]} :session-data
    components :components}]
  (if-let [mock (controllers.mocks/create-mock! user-id body components)]
    {:status 201
     :body {:mock mock}}
    {:status 400
     :body {:error (str "mock " (:wildcard body) "." (:subdomain body)
                        ".moclojer.com already exists")}}))

(defn handler-update-mock!
  [{{{:keys [id content]} :body} :parameters
    components :components}]
  (let [mock (controllers.mocks/update-mock!
              (java.util.UUID/fromString id)
              content
              components)]
    {:status 200
     :body {:mock mock}}))

(defn handler-get-mocks
  [{filters :session-data components :components}]
  (let [mocks (controllers.mocks/get-mocks filters components)]
    {:status 200
     :body {:mocks mocks}}))

(defn handler-publish-mock!
  [{{{:keys [id]} :path} :parameters
    components :components}]
  (controllers.mocks/publish-mock! id components)
  {:status 200 :body {}})

(defn handler-unpublish-mock!
  [{{{:keys [id]} :path} :parameters
    components :components}]
  (controllers.mocks/unpublish-mock! id components)
  {:status 200 :body {}})

(defn handler-delete-mock!
  [{{{id :id} :body} :parameters
    session :session-data
    components :components}]
  (if (controllers.mocks/delete-mock! session id components)
    {:status 200 :body {}}
    {:status 401 :body {}}))

(defn handler-username-available?
  [{{{:keys [username]} :path} :parameters
    {:keys [database]} :components}]
  (let [available (controllers.user/username-available? username database)]
    {:status 200
     :body available}))

(defn handler-wildcard-available?
  [{{mock :path} :parameters
    {:keys [user-id]} :session-data
    components :components}]
  (let [available (controllers.mocks/wildcard-available?
                   (merge mock {:user-id user-id})
                   components)]
    {:status 200
     :body {:available available}}))

(defn handler-get-mock-publication-status
  [{params :parameters
    {:keys [database]} :components}]
  (let [id (get-in params [:path :id])
        pub-stts (controllers.mocks/get-mock-publication-status id database)]
    {:status 200
     :body {:publication pub-stts}}))
