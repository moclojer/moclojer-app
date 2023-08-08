(ns back.api.controllers.user
  (:require [back.api.adapters.customers :as adapter.customers]
            [back.api.db.customers :as db.customers]
            [back.api.logic.customers :as logic.customers]))

(defn get-user-by-id
  [id {:keys [db]}]
  (let [user (db.customers/get-by-id
              id db)]
    user))

(defn edit-user! [user username {:keys [db]}]
  (let [user (logic.customers/add-username user username)]
    (-> (db.customers/update! user db)
        (adapter.customers/->wire))))
