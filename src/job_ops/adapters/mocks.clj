(ns job-ops.adapters.mocks)

(defn assoc-if [m k v]
  (if v
    (assoc m k v)
    m))

(defn ->wire
  [{:mock/keys [id user_id org_id wildcard subdomain content
                enabled dns_status unification_status]}]
  (-> {:id id
       :user-id user_id
       :wildcard wildcard
       :subdomain subdomain
       :enabled enabled
       :dns-status dns_status
       :unification-status unification_status}
      (assoc-if :org-id org_id)
      (assoc-if :content content)))
