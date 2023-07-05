(ns back.api.controllers.login
  (:require [back.api.ports.http-out :as http-out]
            [back.api.db.users :as db.users]
            [back.api.logic.users :as logic.users]))

(defn create-user!
  [token {:keys [database]}]
  (let [user (http-out/supabase-get-user! token)
        entry (logic.users/create user)]
    (db.users/insert! entry database)))
