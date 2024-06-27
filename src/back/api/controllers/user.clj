(ns back.api.controllers.user
  (:require [back.api.adapters.customers :as adapter.customers]
            [back.api.db.customers :as db.customers]
            [back.api.logic.customers :as logic.customers]))

(defn username-available?
  [username database ctx]
  (let [user (db.customers/get-by-username username database ctx)]
    (if user
      {:available false}
      {:available true})))

(defn get-user-by-id
  [id database ctx]
  (let [user (db.customers/get-by-id
              id database ctx)]
    user))

(defn get-user-by-external-id
  [id database ctx]
  (db.customers/get-by-external-id id database ctx))

(defn edit-user! [user username database ctx]
  (let [user (logic.customers/add-username user username)
        _ (db.customers/update! user database ctx)
        user-updated (db.customers/get-by-id (:customer/uuid user) database ctx)]
    (-> user-updated
        (adapter.customers/->wire))))

(defn get-users-by-org-id
  [org-id {:keys [database]} ctx]
  (map adapter.customers/->wire (db.customers/get-by-org-id org-id database ctx)))
