(ns back.api.controllers.user
  (:require [back.api.adapters.customers :as adapter.customers]
            [back.api.db.customers :as db.customers]
            [back.api.logic.customers :as logic.customers]
            [com.moclojer.components.logs :as logs]))

(defn username-available?
  [username {:keys [database]} ctx]
  (nil? (db.customers/get-by-username username database ctx)))

(defn get-user-by-id
  [id database ctx]
  (adapter.customers/->wire
   (or (db.customers/get-by-id id database ctx)
       (throw (ex-info "No user with given id was found"
                       {:status-code 412
                        :cause :invalid-id
                        :value (assoc ctx :user-id id)})))))

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
  (logs/log :info "retrieving users by org id"
            :ctx (assoc ctx :org-id org-id))
  (map adapter.customers/->wire (db.customers/get-by-org-id org-id database ctx)))

(defn get-user-by-username
  [username {:keys [database]} ctx]
  (logs/log :info "retrieving user by its username"
            :ctx (merge ctx {:username username}))
  (or (-> (db.customers/get-by-username username database ctx)
          (adapter.customers/->wire))
      (throw (ex-info "No user with given username was found"
                      {:status-code 412
                       :cause :invalid-username
                       :value (assoc ctx :username username)}))))

(defn get-user-by-email
  [email {:keys [database]} ctx]
  (logs/log :info "retrieving user by its email"
            :ctx (merge ctx {:email email}))
  (or (-> (db.customers/get-by-email email database ctx)
          (adapter.customers/->wire))
      (throw (ex-info "No user with given email was found"
                      {:status-code 412
                       :cause :invalid-email
                       :value (assoc ctx :email email)}))))

(defn enable-sync
  "Updates org install id field"
  [install_id user {:keys [database]} ctx]
  (logs/log :info "enabling git sync"
            :ctx (merge ctx {:id user}))
  (let [org (assoc user :git-install-id install_id)]
    (-> (logic.customers/update-install-id user install_id)
        (db.customers/update! database ctx)
        (adapter.customers/->wire))))
