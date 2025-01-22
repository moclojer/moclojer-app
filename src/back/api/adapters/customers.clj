(ns back.api.adapters.customers
  (:require
   [back.api.utils :refer [assoc-if]]))

(defn ->wire
  [{:customer/keys [uuid email external_uuid org-id username
                    git-install-id git-username]}]
  (-> {:uuid (str uuid)
       :email email
       :external-id external_uuid}
      (assoc-if :org-id (str org-id))
      (assoc-if :username username)
      (assoc-if :git-install-id git-install-id)
      (assoc-if :git-username git-username)))
