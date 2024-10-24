(ns back.api.controllers.user
  (:require
   [back.api.adapters.customers :as adapter.customers]
   [back.api.db.customers :as db.customers]
   [back.api.logic.customers :as logic.customers]
   [com.moclojer.components.logs :as logs]))

(defn username-available?
  [username {:keys [database]} ctx]
  (logs/trace
   ::username-available?
   {:username username}
   (nil? (db.customers/get-by-username username database ctx))))

(defn get-user-by-id
  [id database ctx]
  (logs/trace
   ::get-user-by-id
   {:user-id id}
   (adapter.customers/->wire
   (or (db.customers/get-by-id id database ctx)
       (throw (ex-info "No user with given id was found"
                       {:status-code 412
                        :cause :invalid-id
                        :value (assoc ctx :user-id id)}))))))

(defn get-user-by-external-id
  [id database ctx]
  (logs/trace
   ::get-user-by-external-id
   {:user-id id}
   (db.customers/get-by-external-id id database ctx)))

(defn edit-user! [user-id username database ctx]
  (logs/trace
   ::edit-user!
   {:user-id user-id
    :new-username username}
   (-> {:customer/uuid user-id}
      (logic.customers/add-username username)
      (db.customers/update! database ctx)
      (adapter.customers/->wire))))

(defn get-users-by-org-id
  [org-id {:keys [database]} ctx]
  (logs/trace
   ::get-users-by-org-id
   {:org-id org-id}
   (map
    adapter.customers/->wire
    (db.customers/get-by-org-id org-id database ctx))))
