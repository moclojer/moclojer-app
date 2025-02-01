(ns back.api.adapters.orgs
  (:require [back.api.utils :refer [assoc-if]]))

(defn ->wire
  [{:org/keys [id slug orgname created_at updated_at
               git_install_id git_orgname]}]
  (-> {:id (str id)
       :slug slug
       :orgname orgname
       :created-at created_at
       :updated-at updated_at}
      (assoc-if :git-install-id git_install_id)
      (assoc-if :git-orgname git_orgname)))

(defn ->wire-org-user
  [{:org_user/keys [id org_id user_id created_at updated_at
                    git_install_id git_orgname]}]
  (-> {:id (str id)
       :org-id org_id
       :user-id user_id
       :created-at created_at
       :updated-at updated_at}
      (assoc-if :git-install-id git_install_id)
      (assoc-if :git-orgname git_orgname)))

