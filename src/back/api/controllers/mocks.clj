(ns back.api.controllers.mocks
  (:refer-clojure :exclude [ref])
  (:require
   [back.api.adapters.mocks :as adapter.mocks]
   [back.api.db.mocks :as db.mocks]
   [back.api.logic.mocks :as logic.mocks]
   [back.api.ports.producers :as ports.producers]
   [com.moclojer.components.logs :as logs]))

(defn create-mock!
  [user-id mock {:keys [database mq]} ctx]
  (logs/log :info "creating mock"
            :ctx (assoc ctx
                        :mock mock
                        :user-id user-id))
  (let [owner (assoc {:user-id (parse-uuid (str user-id))}
                     :org-id (parse-uuid (str (:org-id mock))))
        ?existing-mock (-> (select-keys mock [:wildcard :subdomain])
                           (merge owner)
                           (logic.mocks/->db-by-wildcard)
                           (db.mocks/get-mock-by-wildcard database ctx))]
    (if (seq ?existing-mock)
      (throw (ex-info "Mock with given wildcard and subdomain invalid"
                      {:status-code 412
                       :cause :invalid-wildcard
                       :value (adapter.mocks/->wire ?existing-mock)}))
      (let [new-mock (-> (logic.mocks/create (merge mock owner))
                         (db.mocks/insert! database ctx)
                         (adapter.mocks/->wire))]
        (ports.producers/generate-single-yml! (:id new-mock) mq ctx)
        (when (:enabled new-mock)
          (ports.producers/create-domain! (logic.mocks/pack-domain new-mock)
                                          mq ctx))
        new-mock))))

(defn wildcard-available?
  [mock {:keys [database]} ctx]
  (-> (logic.mocks/->db-by-wildcard mock)
      (db.mocks/get-mock-by-wildcard database ctx)
      (empty?)))

(defn update-mock!
  ([id content {:keys [database mq] :as components} ctx]
   (update-mock! id content nil components ctx))
  ([id content sha {:keys [database mq]} ctx]
   (if-let [mock (db.mocks/get-mock-by-id id database ctx)]
     (let [updated-mock (-> mock
                            (logic.mocks/update-content content)
                            (db.mocks/update! database ctx)
                            (adapter.mocks/->wire))
           ->wired-old-mock (adapter.mocks/->wire mock)]
       (ports.producers/generate-single-yml! (:id updated-mock) mq ctx)
       (when (and (= (:dns-status ->wired-old-mock) "offline")
                  (:enabled ->wired-old-mock))
         (ports.producers/create-domain! (logic.mocks/pack-domain ->wired-old-mock) mq ctx))
       updated-mock)
     (throw (ex-info "Mock with given id invalid"
                     {:status-code 412
                      :cause :invalid-id})))))

(defn get-mocks
  [{:keys [uuid username]} {:keys [database]} ctx]
  (logs/log :info "retrieving mocks"
            :ctx (assoc ctx
                        :user/uuid uuid
                        :user/username username))
  (logic.mocks/group
   (->> (db.mocks/get-mocks (parse-uuid (str uuid)) database ctx)
        (map adapter.mocks/->wire))
   username))

(defn publish-mock!
  [id {:keys [database mq]} ctx]
  (-> (db.mocks/get-mock-by-id id database ctx)
      logic.mocks/publish
      (db.mocks/update! database ctx)
      (adapter.mocks/->wire)
      :id
      (ports.producers/generate-single-yml! mq ctx))
  true)

(defn unpublish-mock!
  [id {:keys [database mq]} ctx]
  (-> (db.mocks/get-mock-by-id id database ctx)
      logic.mocks/unpublish
      (db.mocks/update! database ctx)
      (adapter.mocks/->wire)
      :id
      (ports.producers/generate-single-yml! mq ctx))
  true)

(defn delete-mock!
  [{:keys [user-id]} id {:keys [database mq]} ctx]
  (logs/log :info "deleting mock"
            :ctx (assoc ctx :mock-id id))
  (if-let [{:keys [id org-id user-id] :as ?mock}
           (some-> (db.mocks/get-mocks user-id database ctx)
                   (logic.mocks/filter-by-id id)
                   (adapter.mocks/->wire))]
    (do
      (db.mocks/delete-mock-by-id id database ctx)
      (ports.producers/delete-single-yml! id (or org-id user-id) mq ctx)
      (ports.producers/delete-domain! (logic.mocks/pack-domain ?mock) mq ctx)
      true)
    (throw (ex-info "No mock found with given id"
                    {:status-code 400
                     :cause :invalid-id
                     :value :id}))))

(defn get-mock-publication-status
  [id db ctx]
  (if-let [mock (db.mocks/get-mock-by-id (parse-uuid (str id)) db ctx)]
    (-> (adapter.mocks/->wire mock)
        (select-keys [:dns-status :unification-status]))
    (throw (ex-info "No mock found with given id"
                    {:status-code 400
                     :cause :invalid-id
                     :value id}))))

(defn update-mock-dns-status!
  [domain new-status db ctx]
  (if-let [mock (-> (logic.mocks/unpack-domain domain)
                    (logic.mocks/->db-by-wildcard)
                    (db.mocks/get-mock-by-wildcard db ctx))]
    (-> (logic.mocks/update-dns-status mock new-status)
        (select-keys [:mock/id :mock/dns_status])
        (db.mocks/update! db ctx))
    (throw (ex-info "No mock found with given domain"
                    {:cause :invalid-domain
                     :value domain}))))

(defn update-mock-unification-status!
  [mock-id new-status db ctx]
  (if-let [mock (db.mocks/get-mock-by-id (parse-uuid (str mock-id)) db ctx)]
    (-> (logic.mocks/update-unification-status mock new-status)
        (select-keys [:mock/id :mock/unification_status])
        (db.mocks/update! db ctx))
    (throw (ex-info "No mock found with given id"
                    {:status-code 400
                     :cause :invalid-id
                     :value mock-id}))))

