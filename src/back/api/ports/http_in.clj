(ns back.api.ports.http-in
  (:require [back.api.adapters.customers :as adapters.customers]
            [back.api.controllers.login :as controllers.login]
            [back.api.controllers.mocks :as controllers.mocks]
            [back.api.controllers.orgs :as controllers.orgs]
            [back.api.controllers.user :as controllers.user]
            [back.api.logic.orgs :as logic.orgs]))

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
               (adapters.customers/->wire ext-user)
               (controllers.user/get-user-by-id id database ctx))
        valid-user? (some-> user :uuid uuid?)]
    (if valid-user?
      {:status 200
       :body {:user user}}
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
  [{session :session-data
    components :components
    ctx :ctx}]
  (let [mocks (controllers.mocks/get-mocks (:user-id session) components ctx)]
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

(defn handler-get-orgs
  [{:keys [session-data components ctx]}]
  (let [user-id (:user-id session-data)
        orgs (controllers.orgs/get-orgs-by-user-id user-id components ctx)]
    {:status 200
     :body {:orgs (map #(->> (controllers.user/get-users-by-org-id
                              (:id %) components ctx)
                             (logic.orgs/group-org-with-users %))
                       orgs)}}))

(defn handler-create-org
  [{:keys [session-data parameters components ctx]}]
  (let [{:keys [database]} components
        org (get-in parameters [:body :org])
        user-id (:user-id session-data)
        new-org (controllers.orgs/create-org! org components ctx)
        {:keys [user-id]} (controllers.orgs/add-org-user!
                           new-org user-id true components ctx)
        new-user (controllers.user/get-user-by-id user-id database ctx)]
    {:status 201
     :body {:org (logic.orgs/group-org-with-users new-org [new-user])}}))
