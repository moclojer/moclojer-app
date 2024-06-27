(ns back.api.controllers.user
  (:require [back.api.adapters.customers :as adapter.customers]
            [back.api.db.customers :as db.customers]
            [back.api.logic.customers :as logic.customers]))

(defn username-available?
  [username {:keys [database]} ctx]
  (nil? (db.customers/get-by-username username database ctx)))

(defn get-user-by-id
  [id database ctx]
  (adapter.customers/->wire (db.customers/get-by-id id database ctx)))

(defn get-user-by-external-id
  [id database ctx]
  (db.customers/get-by-external-id id database ctx))

(defn edit-user! [user-id username database ctx]
  (-> {:customer/uuid user-id}
      (logic.customers/add-username username)
      (db.customers/update! database ctx)
      (adapter.customers/->wire)))

(defn get-users-by-org-id
  [org-id {:keys [database]} ctx]
  (map adapter.customers/->wire (db.customers/get-by-org-id org-id database ctx)))
