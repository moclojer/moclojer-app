(ns back.api.adapters.mocks)

(defn ->wire
  [{:mock/keys [id org_id user_id subdomain url enabled]}]
  {:id id
   :org-id org_id
   :user-id user_id
   :subdomain subdomain
   :url url
   :enabled enabled})
