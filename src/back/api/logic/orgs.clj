(ns back.api.logic.orgs)

(defn create [{:keys [orgname]}]
  {:org/id (random-uuid)
   :org/orgname orgname})

(defn create-org-user [org-id user-id]
  {:org_user/org_id org-id
   :org_user/user_id user-id})

(defn group-org-with-users [org users]
  (assoc org :users users))
