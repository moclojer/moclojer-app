(ns back.api.adapters.mocks
  (:require
   [back.api.utils :refer [assoc-if]]))

(defn ->wire
  [{:mock/keys [id user_id wildcard subdomain content enabled publication]}]
  (-> {:id id
       :user-id user_id
       :wildcard wildcard
       :subdomain subdomain
       :enabled enabled
       :publication publication}
      (assoc-if :content content)))
