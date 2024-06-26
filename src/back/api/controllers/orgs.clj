(ns back.api.controllers.orgs
  (:require [back.api.adapters.orgs :as adapter.orgs]
            [back.api.db.orgs :as db.orgs]
            [back.api.logic.orgs :as logic.orgs]))

(defn get-org-by-id
  [id {:keys [database]} ctx]
  (or (adapter.orgs/->wire (db.orgs/get-by-id id database ctx))
      (throw (ex-info "Org with given id doesn't exist"
                      {:status-code 412
                       :cause :invalid-id}))))

(defn get-orgs-by-user-id
  [user-id {:keys [database]} ctx]
  (map adapter.orgs/->wire (db.orgs/get-by-user-id user-id database ctx)))

(defn create-org!
  [org {:keys [database]} ctx]
  (if-let [?existing-org (db.orgs/get-by-subdomain (:subdomain org) database ctx)]
    (throw (ex-info "Org with given subdomain invalid"
                    {:status-code 412
                     :cause :invalid-wildcard
                     :value (adapter.orgs/->wire ?existing-org)}))
    (-> (logic.orgs/create org)
        (db.orgs/insert! database ctx)
        (adapter.orgs/->wire))))

(defn add-user-to-org!
  [org-id user-id {:keys [database] :as components} ctx]
  (-> (get-org-by-id org-id components ctx)
      (:org/id)
      (logic.orgs/create-org-user user-id)
      (db.orgs/insert-user! database ctx)))
