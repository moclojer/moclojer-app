(ns back.api.controllers.orgs
  (:require [back.api.adapters.orgs :as adapter.orgs]
            [back.api.db.orgs :as db.orgs]
            [back.api.logic.orgs :as logic.orgs]
            [com.moclojer.components.logs :as logs]))

(defn slug-available?
  [slug {:keys [database]} ctx]
  (logs/log :info "checking org slug availability")
  (nil? (db.orgs/get-by-slug slug database ctx)))

(defn get-org-by-id
  [id {:keys [database]} ctx]
  (logs/log :info "retrieving org by id"
            :ctx (assoc ctx :org-id id))
  (or (adapter.orgs/->wire (db.orgs/get-by-id (parse-uuid (str id)) database ctx))
      (throw (ex-info "Org with given id doesn't exist"
                      {:status-code 412
                       :cause :invalid-id}))))

(defn get-orgs-by-user-id
  [user-id {:keys [database]} ctx]
  (logs/log :info "retrieving orgs by user id"
            :ctx (assoc ctx :user-id user-id))
  (map adapter.orgs/->wire (db.orgs/get-by-user-id user-id database ctx)))

(defn create-org!
  [org {:keys [database]} ctx]
  (logs/log :info "creating org"
            :ctx (assoc ctx :org org))
  (-> (logic.orgs/create org)
      (db.orgs/insert! database ctx)
      (adapter.orgs/->wire)))

(defn update-org!
  [org {:keys [database]} ctx]
  (logs/log :info "updating org"
            :ctx (assoc ctx :org org))
  (-> (logic.orgs/->db-update org)
      (db.orgs/update! database ctx)
      (adapter.orgs/->wire)))

(defn delete-org!
  [org {:keys [database]} ctx]
  (logs/log :info "deleting org"
            (assoc ctx :org org))
  (-> (logic.orgs/->db-delete org)
      (db.orgs/delete! database ctx))
  ;; TODO: dispatch org.deleted event for yml generator
  true)

(defn add-org-user!
  "If we're pasing an `org-id` that we're sure already `exists?`, for
   example after creating the org, we don't need to retrieve it again."
  [org user-id org-exists? {:keys [database] :as components} ctx]
  (logs/log :info "adding user into org"
            (merge ctx {:org-id (:id org)
                        :user-id user-id
                        :org-exists? org-exists?}))
  (let [{:keys [id]} (if-not org-exists?
                       (get-org-by-id (parse-uuid (str (:id org))) components ctx)
                       org)]
    (-> (logic.orgs/create-org-user id user-id)
        (db.orgs/insert-user! database ctx)
        (adapter.orgs/->wire-org-user))))

(defn remove-org-user!
  [org-id user-id {:keys [database] :as components} ctx]
  (logs/log :info "removing user from org"
            (merge ctx {:org-id org-id
                        :user-id user-id}))
  (-> (get-org-by-id (parse-uuid (str org-id)) components ctx)
      (:id)
      (logic.orgs/create-org-user user-id)
      (db.orgs/delete-user! database ctx))
  true)

(defn get-by-slug
  [slug {:keys [database]} ctx]
  (logs/log :info "retrieving org by its slug"
            (merge ctx {:slug slug}))
  (or (-> (db.orgs/get-by-slug slug database)
          (adapter.orgs/->wire))
      (throw (ex-info "No organization with given slug was found"
                      {:status-code 412
                       :cause :invalid-slug
                       :value slug}))))

(defn enable-sync
  "Updates org install id field"
  [install_id org {:keys [database]} ctx]
  (logs/log :info "enabling git sync"
            :ctx (merge ctx {:org org}))
  (-> org
      (logic.orgs/enable-sync install_id)
      (adapter.orgs/->wire)
      (update-org! database ctx)))
