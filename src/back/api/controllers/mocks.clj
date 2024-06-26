(ns back.api.controllers.mocks
  (:require [back.api.adapters.mocks :as adapter.mocks]
            [back.api.db.mocks :as db.mocks]
            [back.api.logic.mocks :as logic.mocks]
            [back.api.ports.producers :as ports.producers]
            [com.moclojer.components.logs :as logs]))

(defn create-mock!
  [user-id mock {:keys [database publisher]} ctx]
  (let [uid {:user-id user-id}
        existing-mock (-> (select-keys mock [:wildcard :subdomain])
                          (merge uid)
                          (db.mocks/get-mock-by-wildcard database ctx))]
    (if (empty? existing-mock)
      (let [new-mock (-> (logic.mocks/create (merge uid mock))
                         (db.mocks/insert! database ctx)
                         (adapter.mocks/->wire))]
        (ports.producers/generate-single-yml! (:id new-mock) publisher ctx)
        (when (:enabled new-mock)
          (ports.producers/create-domain! (logic.mocks/pack-domain new-mock)
                                          publisher ctx))
        new-mock)
      (throw (ex-info "Mock with given wildcard and subdomain invalid"
                      {:status-code 412
                       :cause :invalid-wildcard
                       :value (adapter.mocks/->wire existing-mock)})))))

(defn wildcard-available?
  [mock {:keys [database]} ctx]
  (empty? (db.mocks/get-mock-by-wildcard mock database ctx)))

(defn update-mock!
  [id content {:keys [database publisher]} ctx]
  (if-let [mock (db.mocks/get-mock-by-id id database ctx)]
    (let [updated-mock (-> mock
                           (logic.mocks/update {:content content})
                           (db.mocks/update! database ctx)
                           (adapter.mocks/->wire))
          ->wired-old-mock (adapter.mocks/->wire mock)]

      (ports.producers/generate-single-yml! (:id updated-mock) publisher ctx)

      (when (and (= (:dns-status ->wired-old-mock) "offline")
                 (:enabled ->wired-old-mock))
        (ports.producers/create-domain! (logic.mocks/pack-domain ->wired-old-mock)
                                        publisher
                                        ctx))

      updated-mock)
    (throw (ex-info "Mock with given id invalid"
                    {:status-code 412
                     :cause :invalid-id}))))

(defn get-mocks
  [user-id {:keys [database]} ctx]
  (->> (db.mocks/get-mocks user-id database ctx)
       (map adapter.mocks/->wire)
       (logic.mocks/group "personal")))

(defn publish-mock!
  [id {:keys [database publisher]} ctx]
  (-> (db.mocks/get-mock-by-id id database ctx)
      logic.mocks/publish
      (db.mocks/update! database ctx)
      (adapter.mocks/->wire)
      :id
      (ports.producers/generate-single-yml! publisher ctx))
  true)

(defn unpublish-mock!
  [id {:keys [database publisher]} ctx]
  (-> (db.mocks/get-mock-by-id id database ctx)
      logic.mocks/unpublish
      (db.mocks/update! database ctx)
      (adapter.mocks/->wire)
      :id
      (ports.producers/generate-single-yml! publisher ctx))
  true)

(defn delete-mock!
  [session id {:keys [database publisher]} ctx]
  ;; filtering so we can check if the session user
  ;; owns the mock to be deleted.
  (if-let [mock (-> (db.mocks/get-mocks session database ctx)
                    (logic.mocks/filter-by-id id)
                    (adapter.mocks/->wire))]
    (let [{:keys [id user-id]} mock]
      (db.mocks/delete-mock-by-id id database ctx)
      (ports.producers/delete-single-yml! id user-id publisher ctx)
      (ports.producers/delete-domain! (logic.mocks/pack-domain mock) publisher ctx)
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

(def ^:private still-verifying-all? (atom false))

(defn dispatch-domains-verification!
  "Dispatches a batch of 10 mock domains for verification at a time.
  This is so we don't overload our providers. After sending every
  batch, sleeps for 30 seconds, which is the overall median time
  that a mock domain takes to be verified."
  [{:keys [database publisher]} ctx]
  (if-not @still-verifying-all?
    (do
      (reset! still-verifying-all? true)
      (let [defective-mocks (db.mocks/get-mocks-by-publication
                             :dns_status
                             ["offline" "offline-invalid" "publishing"]
                             database
                             ctx)]
        (future
          (loop [batch 0]
            (let [cur-mocks (->> (drop (* batch 10) defective-mocks)
                                 (take 10))]
              (if (>= (count cur-mocks) 1)
                (do
                  (doseq [mock cur-mocks]
                    (-> (adapter.mocks/->wire mock)
                        logic.mocks/pack-domain
                        (ports.producers/verify-domain! true false publisher ctx)))
                  (Thread/sleep 30000)
                  (recur (inc batch)))
                (reset! still-verifying-all? false)))))))
    (logs/log :info "still verifying all. skipping for now...")))

(defn dispatch-unified-yml-verification!
  "Gathers published mocks and sends them dispatches them to be verified."
  [{:keys [database publisher]} ctx]
  (let [published-mocks (db.mocks/get-mocks-by-publication :unification_status
                                                           ["published"]
                                                           database
                                                           ctx)
        grouped-mocks (logic.mocks/group-by-user published-mocks)]
    (ports.producers/verify-unified-yml! grouped-mocks publisher ctx)))
