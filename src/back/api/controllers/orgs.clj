(ns back.api.controllers.orgs
  (:require [back.api.adapters.orgs :as adapter.orgs]
            [back.api.db.orgs :as db.orgs]
            [back.api.logic.orgs :as logic.orgs]
            [com.moclojer.components.logs :as logs]))

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
  (logs/log :info "creating org"
            :ctx (assoc ctx :org org))
  (-> (logic.orgs/create org)
      (db.orgs/insert! database ctx)
      (adapter.orgs/->wire)))

(defn add-org-user!
  "If we're pasing an `org-id` that we're sure already `exists?`, for
   example after creating the org, we don't need to retrieve it again."
  [org user-id exists? {:keys [database] :as components} ctx]
  (logs/log :info "adding user into org"
            (merge ctx {:org-id (:id org)
                        :user-id user-id
                        :exists? exists?}))
  (let [{:keys [id]} (if exists? org (get-org-by-id (:id org) components ctx))]
    (-> (logic.orgs/create-org-user id user-id)
        (db.orgs/insert-user! database ctx)
        (adapter.orgs/->wire-org-user))))

(defn slug-available?
  [slug {:keys [database]} ctx]
  (logs/log :info "checking org slug availability")
  (nil? (db.orgs/get-by-slug slug database ctx)))
