(ns back.api.controllers.login
  (:require [back.api.adapters.customers :as adapter.customers]
            [back.api.db.customers :as db.customers]
            [back.api.logic.customers :as logic.customers]
            [back.api.ports.http-out :as http-out]
            [back.api.utils :as utils]))

(defn create-customer!
  ([token  {:keys [database config]} ctx]
   (let [customer (http-out/supabase-get-user! token config)
         git-username (-> customer :user-metadata :user-name)
         customer-saved (db.customers/get-by-external-id (parse-uuid (:id customer))
                                                         database
                                                         ctx)]
     (if customer-saved
       (adapter.customers/->wire customer-saved)
       (-> customer
           (logic.customers/create)
           (utils/assoc-if :customer/git-username git-username)
           (db.customers/insert! database ctx)
           (adapter.customers/->wire))))))
