(ns back.api.logic.orgs
  (:require [slugify.core :refer [slugify]]))

(defn create
  [{:keys [id orgname]}]
  (let [org-id (or id (random-uuid))
        safe-orgname (slugify orgname)]
    {:org/id org-id
     :org/slug (->> (str org-id)
                    ;; takes the first section of the uuid
                    ;; `11111111-22222222-33333333-44444444` => `11111111`
                    (take 8)
                    (reduce #(str %1 %2) (str safe-orgname "-")))
     :org/orgname safe-orgname}))

(comment
  (create {:orgname "buser brasil **&&"})
  ;;=> {:org/id #uuid "a59bd33c-2c0e-4646-9919-f8b3af3b19a0"
  ;;    :org/slug "buser-brasil-a59bd33c"
  ;;    :org/orgname "buser-brasil"}
  )

(defn create-org-user [org-id user-id]
  {:org_user/org_id (parse-uuid (str org-id))
   :org_user/user_id (parse-uuid (str user-id))})

(defn group-org-with-users [org users]
  (assoc org :users users))

(defn ->db-update [{:keys [id orgname]}]
  {:org/id (parse-uuid (str id))
   :org/orgname orgname})

(defn ->db-delete [{:keys [id]}]
  {:org/id (parse-uuid (str id))})
