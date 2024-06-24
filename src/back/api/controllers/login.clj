(ns back.api.controllers.login
  (:require [back.api.adapters.customers :as adapter.customers]
            [back.api.db.customers :as db.customers]
            [back.api.logic.customers :as logic.customers]
            [back.api.ports.http-out :as http-out]))

(defn create-customer!
  [token {:keys [database config]} ctx]
  (let [customer (http-out/supabase-get-user! token config)
        customer-saved (db.customers/get-by-external-id (parse-uuid (:id customer))
                                                        database
                                                        ctx)]
    (if customer-saved
      (adapter.customers/->wire customer-saved)
      (-> (logic.customers/create customer)
          (db.customers/insert! database ctx)
          (adapter.customers/->wire)))))
