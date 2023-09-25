(ns back.api.controllers.user
  (:require [back.api.adapters.customers :as adapter.customers]
            [back.api.db.customers :as db.customers]
            [back.api.logic.customers :as logic.customers]))

(defn username-available?
  [username database]
  (let [user (db.customers/get-by-username
              username database)]
    (if user
      {:available false}
      {:available true})))

(defn get-user-by-id
  [id database]
  (let [user (db.customers/get-by-id
              id database)]
    user))

(defn edit-user! [user username database]
  (let [user (logic.customers/add-username user username)
        _ (db.customers/update! user database)
        user-updated (db.customers/get-by-id
                      (:customer/uuid user)
                      database)]
    (-> user-updated
        (adapter.customers/->wire))))

