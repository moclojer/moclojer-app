(ns back.api.controllers.orgs
  (:require
   [taoensso.telemere :as t]
   [back.api.adapters.orgs :as adapter.orgs]
   [back.api.db.orgs :as db.orgs]
   [back.api.logic.orgs :as logic.orgs]
   [com.moclojer.components.logs :as logs]))

(defn slug-available?
  [slug {:keys [database]} ctx]
  (logs/trace
   ::slug-available?
   {:org-slug slug}
   (nil? (db.orgs/get-by-slug slug database ctx))))

(defn get-org-by-id
  [id {:keys [database]} ctx]
  (logs/trace
   ::get-org-by-id
   {:org-id id}
   (or (adapter.orgs/->wire (db.orgs/get-by-id (parse-uuid (str id)) database ctx))
       (throw (ex-info "Org with given id doesn't exist"
                       {:status-code 412
                        :cause :invalid-id})))))

(defn get-orgs-by-user-id
  [user-id {:keys [database]} ctx]
  (logs/trace
   ::get-orgs-by-user-id
   {:user-id user-id}
   (map adapter.orgs/->wire (db.orgs/get-by-user-id user-id database ctx))))

(defn create-org!
  [org {:keys [database]} ctx]
  (logs/trace
   ::create-org!
   {:org org}
   (-> (logic.orgs/create org)
       (db.orgs/insert! database ctx)
       (adapter.orgs/->wire))))

(defn update-org!
  [org {:keys [database]} ctx]
  (logs/trace
   ::update-org!
   {:org-id (:id org)}
   (-> (logic.orgs/->db-update org)
       (db.orgs/update! database ctx)
       (adapter.orgs/->wire))))

(defn delete-org!
  [org {:keys [database]} ctx]
  (logs/trace
   ::delete-org!
   {:org-id (:id org)}
   (-> (logic.orgs/->db-delete org)
       (db.orgs/delete! database ctx)))
  true)

(defn add-org-user!
  "If we're pasing an `org-id` that we're sure already `exists?`, for
   example after creating the org, we don't need to retrieve it again."
  [org user-id org-exists? {:keys [database] :as components} ctx]
  (let [{:keys [id]} (if-not org-exists?
                       (get-org-by-id (parse-uuid (str (:id org))) components ctx)
                       org)]
    (logs/trace
     ::add-org-user!
     {:org-id (:id org)
      :user-id user-id}
     (-> (logic.orgs/create-org-user id user-id)
         (db.orgs/insert-user! database ctx)
         (adapter.orgs/->wire-org-user)))))

(defn remove-org-user!
  [org-id user-id {:keys [database] :as components} ctx]
  (when-let [{:keys [id]} (get-org-by-id (parse-uuid (str org-id)) components ctx)]
    (logs/trace
     ::remove-org-user!
     {:org-id org-id
      :user-id user-id}
     (-> (logic.orgs/create-org-user id user-id)
         (db.orgs/delete-user! database ctx))))
  true)
