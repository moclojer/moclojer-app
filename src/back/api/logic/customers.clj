(ns back.api.logic.customers
  (:import [java.util UUID]))

(defn uuid-from-string
  {:malli/schema [:=> [:cat :string] :uuid]}
  [seed]
  (-> seed
      .getBytes
      UUID/nameUUIDFromBytes))

(defn ->uuid []
  (UUID/randomUUID))

(defn create
  [{:keys [email id]}]
  {:customer/uuid (->uuid)
   :customer/email email
   :customer/external-uuid (parse-uuid id)})

(defn add-username [user username]
  [user username]
  (assoc user :customer/username username))
