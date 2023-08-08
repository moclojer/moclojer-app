(ns back.api.ports.http-in
  (:require [back.api.controllers.login :as controllers.login]
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
    components :components}]
  (let [user-saved (controllers.user/get-user-by-id id components)
        user (controllers.user/edit-user! user-saved username components)]
    {:status 201
     :body {:user user}}))
