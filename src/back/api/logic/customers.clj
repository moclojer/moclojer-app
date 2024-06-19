(ns back.api.logic.customers
  (:require [clojure.string :as str]))

(defn create
  [{:keys [email id]}]
  {:customer/uuid (random-uuid)
   :customer/email email
   :customer/external-uuid (parse-uuid id)})

(defn add-username [user username]
  [user username]
  (assoc user :customer/username (str/lower-case username)))
