(ns back.api.logic.customers
  (:require [clojure.string :as str]
            [slugify.core :refer [slugify]]))

(defn create
  [{:keys [email id]}]
  {:customer/uuid (random-uuid)
   :customer/email email
   :customer/external-uuid (parse-uuid id)})

;; since sub-domains are the ones we worry about separating
;; with `-`, the username shouldn't have `-`s, or it will clash
;; with the sub-domains. This is why we remove them.
(defn add-username [user username]
  [user username]
  (assoc user :customer/username (str/replace (slugify username) #"-" "")))
