(ns back.api.adapters.orgs)

(defn ->wire
  [{:org/keys [id slug orgname created_at updated_at]}]
  {:id (str id)
   :slug slug
   :orgname orgname
   :created-at created_at
   :updated-at updated_at})

(defn ->wire-org-user
  [{:org_user/keys [id org_id user_id created_at updated_at]}]
  {:id (str id)
   :org-id org_id
   :user-id user_id
   :created-at created_at
   :updated-at updated_at})
