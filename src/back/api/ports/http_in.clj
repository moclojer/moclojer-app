(ns back.api.ports.http-in
  (:require
   [back.api.controllers.login :as controllers.login]))

(defn handler-create-user!
  [{{{:keys [access-token]} :body} :parameters
    components :components}]
  (let [user (controllers.login/create-customer!
              access-token components)]

    {:status 201
     :body {:user user}}))
