(ns back.api.adapters.customers
  (:require
   [back.api.utils :refer [assoc-if]]))

(defn ->wire
  [{:customer/keys [uuid email external_uuid org_id username
                    git_install_id git_username]}]
  (-> {:uuid (str uuid)
       :email email
       :external-id external_uuid}
      (assoc-if :org-id (str org_id))
      (assoc-if :username username)
      (assoc-if :git-install-id git_install_id)
      (assoc-if :git-username git_username)))
