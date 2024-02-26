(ns back.api.controllers.mocks
  (:require
   [back.api.adapters.mocks :as adapter.mocks]
   [back.api.db.mocks :as db.mocks]
   [back.api.logic.mocks :as logic.mocks]
   [back.api.ports.producers :as ports.producers]))

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
          (ports.producers/publish-mock-event new-mock
                                              :mock.changed publisher))
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
    (let [upd-mock (-> mock
                       (logic.mocks/update {:content content})
                       (db.mocks/update! database)
                       (adapter.mocks/->wire))]
      (when (and (:enabled upd-mock)
                 (= (:publication upd-mock) "offline"))
        (ports.producers/publish-mock-event upd-mock :mock.changed publisher)))
    (throw (ex-info "Mock with given id invalid"
                    {:status-code 412
                     :cause :invalid-id}))))

(defn get-mocks
  [filters {:keys [database]}]
  (->> (db.mocks/get-mocks filters database)
       (map adapter.mocks/->wire)
       (logic.mocks/group "personal")))

(defn publish-mock!
  [id {:keys [database publisher]}]
  (-> (db.mocks/get-mock-by-id id database)
      logic.mocks/publish
      (db.mocks/update! database)
      (adapter.mocks/->wire)
      (ports.producers/publish-mock-event :mock.changed publisher))
  true)

(defn unpublish-mock!
  [id {:keys [database publisher]}]
  (-> (db.mocks/get-mock-by-id id database)
      logic.mocks/unpublish
      (db.mocks/update! database)
      (adapter.mocks/->wire)
      (ports.producers/publish-mock-event :mock.changed publisher))
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
      (ports.producers/publish-mock-event mock :mock.deleted publisher)
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

(defn set-mock-publication-status!
  [domain new-status db]
  (if-let [mock (-> (logic.mocks/unpack-domain domain)
                    (db.mocks/get-mock-by-wildcard db))]
    (-> (logic.mocks/update-publication-status mock new-status)
        (select-keys [:mock/id :mock/publication])
        (db.mocks/update! db))
    (throw (ex-info "No mock found with given domain"
                    {:cause :invalid-domain
                     :value domain}))))
