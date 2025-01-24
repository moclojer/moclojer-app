(ns back.api.logic.customers
  (:require
   [clojure.string :as str]
   [slugify.core :refer [slugify]]))

(defn create
  [{:keys [email id]}]
  {:customer/uuid (random-uuid)
   :customer/email email
   :customer/external-uuid (parse-uuid id)})

;; since sub-domains are the ones we worry about separating
;; with `-`, the username shouldn't have `-`s, or it will clash
;; with the sub-domains. This is why we remove them.
(defn update-username
  ([user username]
   (assoc user :username (str/replace (slugify username) #"-" ""))))

(defn update-install-id
  ([user install-id]
   (assoc user :git-install-id install-id)))

(defn exists?
  [users id]
  (some? (seq (filter #(= (str (:uuid %)) (str id)) users))))

(comment
  (exists? [{:uuid 123}] 123)
  ;; => true
  (exists? [{:uuid 123}] 1234)
  ;; => false
  )
