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
         should-oauth (#{"github"} (-> customer :identities first :provider))
         saved-customer (db.customers/get-by-external-id (parse-uuid (:id customer))
                                                         database
                                                         ctx)
         customer (select-keys customer [:email :id])]
     (if saved-customer
       (adapter.customers/->wire saved-customer)
       (-> customer
           (logic.customers/create)
           (cond-> should-oauth
             (assoc :customer/git-username git-username))
           (db.customers/insert! database ctx)
           (adapter.customers/->wire))))))
