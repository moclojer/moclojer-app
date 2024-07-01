(ns back.api.adapters.mocks
  (:require [back.api.utils :refer [assoc-if]]))

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
