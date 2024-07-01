(ns back.api.logic.orgs
  (:require [slugify.core :refer [slugify]]))

(defn create [{:keys [orgname]}]
  (let [org-id (random-uuid)
        safe-orgname (slugify orgname)]
    {:org/id org-id
     :org/slug (->> (str org-id)
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
  {:org_user/org_id org-id
   :org_user/user_id user-id})

(defn group-org-with-users [org users]
  (assoc org :users users))
