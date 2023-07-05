(ns back.api.logic.users
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
  [user]
  {:user/uuid (->uuid)
   :user/email (:email user)
   :user/external-uuid (:id user)})
