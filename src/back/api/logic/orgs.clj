(ns back.api.logic.orgs)

(defn create [{:keys [subdomain]}]
  {:org/id (random-uuid)
   :org/subdomain subdomain})

(defn create-org-user [org-id user-id]
  {:org_user/org_id org-id
   :org_user/user_id user-id})
