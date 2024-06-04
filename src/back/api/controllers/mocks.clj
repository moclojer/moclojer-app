(ns back.api.controllers.mocks
  (:require [back.api.adapters.mocks :as adapter.mocks]
            [back.api.db.mocks :as db.mocks]
            [back.api.logic.mocks :as logic.mocks]
            [back.api.ports.producers :as ports.producers]
            [com.moclojer.components.logs :as logs]))

(defn create-mock!
  [user-id mock {:keys [database publisher]}]
  (let [uid {:user-id user-id}
        existing-mock (-> (select-keys mock [:wildcard :subdomain])
                          (merge uid)
                          (db.mocks/get-mock-by-wildcard database))]
    (if (empty? existing-mock)
      (let [new-mock (-> (logic.mocks/create (merge uid mock))
                         (db.mocks/insert! database)
                         (adapter.mocks/->wire))]
        (when (:enabled new-mock)
          (ports.producers/publish-mock-changed-event (:id new-mock) publisher))
        new-mock)
      (throw (ex-info "Mock with given wildcard and subdomain invalid"
                      {:status-code 412
                       :cause :invalid-wildcard
                       :value (adapter.mocks/->wire existing-mock)})))))

(defn wildcard-available?
  [mock {:keys [database]}]
  (empty? (db.mocks/get-mock-by-wildcard mock database)))

(defn update-mock!
  [id content {:keys [database publisher]}]
  (if-let [mock (db.mocks/get-mock-by-id id database)]
    (let [updated-mock (-> mock
                           (logic.mocks/update {:content content})
                           (db.mocks/update! database)
                           (adapter.mocks/->wire))]
      (when (:enabled updated-mock)
        (ports.producers/publish-mock-changed-event (:id updated-mock) publisher))
      updated-mock)
    (throw (ex-info "Mock with given id invalid"
                    {:status-code 412
                     :cause :invalid-id}))))

(defn inspect [a]
  (prn :a a)
  a)

(defn get-mocks
  [filters {:keys [database]}]
  (->> (db.mocks/get-mocks filters database)
       (map adapter.mocks/->wire)
       (logic.mocks/group "personal")
       inspect))

(defn publish-mock!
  [id {:keys [database publisher]}]
  (-> (db.mocks/get-mock-by-id id database)
      logic.mocks/publish
      (db.mocks/update! database)
      (adapter.mocks/->wire)
      :id
      (ports.producers/publish-mock-changed-event publisher))
  true)

(defn unpublish-mock!
  [id {:keys [database publisher]}]
  (-> (db.mocks/get-mock-by-id id database)
      logic.mocks/unpublish
      (db.mocks/update! database)
      (adapter.mocks/->wire)
      :id
      (ports.producers/publish-mock-changed-event publisher))
  true)

(defn delete-mock!
  [session id {:keys [database publisher]}]
  ;; filtering so we can check if the session user
  ;; owns the mock to be deleted.
  (if-let [mock (-> (db.mocks/get-mocks session database)
                    (logic.mocks/filter-by-id id)
                    (adapter.mocks/->wire)
                    (select-keys [:id :user-id]))]
    (do
      (db.mocks/delete-mock-by-id (:id mock) database)
      (ports.producers/publish-mock-event mock "mock.deleted" publisher)
      (constantly true))
    false))

(defn get-mock-publication-status
  [id db]
  (if-let [mock (db.mocks/get-mock-by-id id db)]
    (:mock/publication mock)
    (throw (ex-info "No mock found with given id"
                    {:status-code 400
                     :cause :invalid-id
                     :value id}))))

(defn update-mock-dns-status!
  [domain new-status db]
  (if-let [mock (-> (logic.mocks/unpack-domain domain)
                    (db.mocks/get-mock-by-wildcard db))]
    (-> (logic.mocks/update-dns-status mock new-status)
        (select-keys [:mock/id :mock/dns_status])
        (db.mocks/update! db))
    (throw (ex-info "No mock found with given domain"
                    {:cause :invalid-domain
                     :value domain}))))

(def ^:private still-verifying-all? (atom false))

(defn dispatch-domains-verification!
  "Dispatches a batch of 10 mock domains for verification at a time.
  This is so we don't overload our providers. After sending every
  batch, sleeps for 30 seconds, which is the overall median time
  that a mock domain takes to be verified."
  [{:keys [database publisher]}]
  (if-not @still-verifying-all?
    (do
      (reset! still-verifying-all? true)
      (let [defective-mocks (db.mocks/get-mocks-by-publication
                             ["offline" "offline-invalid" "publishing"]
                             database)]
        (future
          (loop [batch 0]
            (let [cur-mocks (->> (drop (* batch 10) defective-mocks)
                                 (take 10))]
              (if (>= (count cur-mocks) 1)
                (do
                  (doseq [mock cur-mocks]
                    (ports.producers/verify-domain! (logic.mocks/pack-domain mock)
                                                    true false publisher))
                  (Thread/sleep 30)
                  (recur (inc batch)))
                (reset! still-verifying-all? false)))))))
    (logs/log :info "still verifying all. skipping for now...")))

(defn dispatch-unified-yml-verification!
  "Gathers published mocks and sends them dispatches them to be verified."
  [{:keys [database publisher]}]
  (let [published-mocks (db.mocks/get-mocks-by-publication ["published"] database)
        grouped-mocks (logic.mocks/group-by-user published-mocks)]
    (ports.producers/verify-unified! grouped-mocks publisher)))
