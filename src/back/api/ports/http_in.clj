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
  [{{{:keys [subdomain url]} :body} :parameters
    {:keys [user-id org-id]} :session-data
    components :components}]
  (prn ">>handler-create-mock!" user-id org-id subdomain url)
  (let [mock (controllers.mocks/create-mock!
              org-id
              user-id
              subdomain
              url
              components)]

    {:status 201
     :body {:mock mock}}))

(defn handler-get-mocks
  [{session :session-data components :components}]
  (prn ">>handler-get-mocks" session)
  (let [mocks (controllers.mocks/get-mocks session components)]

    {:status 200
     :body {:mocks mocks}}))

(defn handler-enable-mock!
  [{{{:keys [id]} :path} :parameters
    components :components}]
  (prn ">>handler-enable-mock!" id)

  (controllers.mocks/enable-mock! id components)
  {:status 200 :body {}})

(defn handler-disable-mock!
  [{{{:keys [id]} :path} :parameters
    components :components}]
  (prn ">>handler-disable-mock!" id)

  (controllers.mocks/disable-mock! id components)
  {:status 200 :body {}})
