(ns back.api.adapters.orgs)

(defn ->wire
  [{:org/keys [id subdomain created_at updated_at]}]
  {:id id
   :subdomain subdomain
   :created-at created_at
   :updated-at updated_at})
