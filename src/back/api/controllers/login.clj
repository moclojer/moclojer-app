(ns back.api.controllers.login
  (:require [back.api.adapters.customers :as adapter.customers]
            [back.api.db.customers :as db.customers]
            [back.api.logic.customers :as logic.customers]
            [back.api.ports.http-out :as http-out]))

(defn create-customer!
  [token {:keys [database]}]
  (let [customer (http-out/supabase-get-user! token)
        entry (logic.customers/create customer)]
    (adapter.customers/->wire 
      (db.customers/insert! entry database))))
