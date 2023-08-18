(ns back.api.ports.http-in
  (:require [back.api.adapters.customers :as adapter.customers]
            [back.api.controllers.login :as controllers.login]
            [back.api.controllers.user :as controllers.user]
            [back.api.controllers.mocks :as controllers.mocks]))

(defn handler-create-user!
  [{{{:keys [access-token]} :body} :parameters
    components :components}]
  (let [user (controllers.login/create-customer!
              access-token components)]

    (prn :here-user user)
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

(defn get-user-by-id
  [{{{:keys [id]} :path} :parameters
    {:keys [database]} :components}]
  (let [user (controllers.user/get-user-by-id id database)]
    {:status 200
     :body {:user (adapter.customers/->wire user)}}))

;; TODO: Create an interceptor to get customer-id and org-id from cookies
;; TODO: Get customer-id and org-id from interceptor
(defn handler-create-mock!
  [{{{:keys [subdomain content]} :body} :parameters
    {:keys [org]} :session-data
    components :components}]
  (let [mock (controllers.mocks/create-mock!
              org
              subdomain
              content
              components)]
    {:status 201
     :body {:mock mock}}))

(defn handler-update-mock!
  [{{{:keys [id]} :path {:keys [content]} :body} :parameters
    components :components}]
  (let [mock (controllers.mocks/update-mock!
              id
              content
              components)]
    {:status 200
     :body {:mock mock}}))

(defn handler-get-mocks
  [{filter :session-data components :components}]
  (let [mocks (controllers.mocks/get-mocks filter components)]
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
