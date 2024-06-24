(ns back.api.ports.http-in
  (:require [back.api.adapters.customers :as adapters.customers]
            [back.api.controllers.login :as controllers.login]
            [back.api.controllers.mocks :as controllers.mocks]
            [back.api.controllers.user :as controllers.user]))

(defn handler-create-user!
  [{{{:keys [access-token]} :body} :parameters
    components :components
    ctx :ctx}]
  (let [user (controllers.login/create-customer! access-token components ctx)]
    {:status 201
     :body {:user user}}))

(defn edit-user!
  [{{{:keys [id]} :path
     {:keys [username]} :body} :parameters
    {:keys [database]} :components
    ctx :ctx}]
  (let [user-saved (controllers.user/get-user-by-id id database ctx)
        user (controllers.user/edit-user! user-saved username database ctx)]
    {:status 200
     :body {:user user}}))

(defn handler-get-user
  [{{{:keys [id]} :path} :parameters
    {:keys [database]} :components
    ext-user :user
    ctx :ctx}]
  ;; since we're already fetching the current session user,
  ;; it doesn't make sense to make another request, incase the
  ;; user being retrieved, is the same one in the session.
  ;; So we just return the extracted user.
  (let [same-user? (= (some-> ext-user :customer/uuid str) id)
        user (if same-user?
               ext-user
               (controllers.user/get-user-by-id id database ctx))
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

(defn handler-create-mock!
  [{{body :body} :parameters
    {:keys [user-id]} :session-data
    components :components
    ctx :ctx}]
  (if-let [mock (controllers.mocks/create-mock! user-id body components ctx)]
    {:status 201
     :body {:mock mock}}
    {:status 400
     :body {:error (str "mock " (:wildcard body) "." (:subdomain body)
                        ".moclojer.com already exists")}}))

(defn handler-update-mock!
  [{{{:keys [id content]} :body} :parameters
    components :components
    ctx :ctx}]
  (let [mock (controllers.mocks/update-mock! (java.util.UUID/fromString id)
                                             content
                                             components
                                             ctx)]
    {:status 200
     :body {:mock mock}}))

(defn handler-get-mocks
  [{filters :session-data
    components :components
    ctx :ctx}]
  (let [mocks (controllers.mocks/get-mocks filters components ctx)]
    {:status 200
     :body {:mocks mocks}}))

(defn handler-publish-mock!
  [{{{:keys [id]} :path} :parameters
    components :components
    ctx :ctx}]
  (controllers.mocks/publish-mock! id components ctx)
  {:status 200 :body {}})

(defn handler-unpublish-mock!
  [{{{:keys [id]} :path} :parameters
    components :components
    ctx :ctx}]
  (controllers.mocks/unpublish-mock! id components ctx)
  {:status 200 :body {}})

(defn handler-delete-mock!
  [{{{id :id} :body} :parameters
    session :session-data
    components :components
    ctx :ctx}]
  (if (controllers.mocks/delete-mock! session id components ctx)
    {:status 200 :body {}}
    {:status 401 :body {}}))

(defn handler-username-available?
  [{{{:keys [username]} :path} :parameters
    {:keys [database]} :components
    ctx :ctx}]
  (let [available (controllers.user/username-available? username database ctx)]
    {:status 200
     :body available}))

(defn handler-wildcard-available?
  [{{mock :path} :parameters
    {:keys [user-id]} :session-data
    components :components
    ctx :ctx}]
  (let [available (controllers.mocks/wildcard-available? (merge mock {:user-id user-id})
                                                         components
                                                         ctx)]
    {:status 200
     :body {:available available}}))

(defn handler-get-mock-publication-status
  [{params :parameters
    {:keys [database]} :components
    ctx :ctx}]
  (let [id (get-in params [:path :id])
        pub-stts (controllers.mocks/get-mock-publication-status id database ctx)]
    {:status 200
     :body pub-stts}))
