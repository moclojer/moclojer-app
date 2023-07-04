(ns back.api.auth.ports.http-in
  (:require
   [back.api.auth.ports.http-out :as http-out]))

(defn create-user!
  [{{{:keys [access-token]} :body} :parameters
    _components :components}]
  (let [user (http-out/supabase-get-user! 
               access-token)]
    {:status 201
     :body {:user user}}))
