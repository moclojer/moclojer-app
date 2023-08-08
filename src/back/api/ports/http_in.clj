(ns back.api.ports.http-in
  (:require [back.api.adapters.customers :as adapter.customers]
            [back.api.controllers.login :as controllers.login]
            [back.api.controllers.user :as controllers.user]))

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
