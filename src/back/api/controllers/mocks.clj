(ns back.api.controllers.mocks
  (:require
   [back.api.adapters.mocks :as adapter.mocks]
   [back.api.db.mocks :as db.mocks]
   [back.api.logic.mocks :as logic.mocks]
   [back.api.ports.producers :as ports.producers]))

(defn create-mock!
  [user-id mock {:keys [database]}]
  (-> (logic.mocks/create (merge {:user-id user-id} mock))
      (db.mocks/insert! database)
      (adapter.mocks/->wire)))

(defn update-mock!
  [id content {:keys [database publisher]}]
  (-> (db.mocks/get-mock-by-id id database)
      (logic.mocks/update {:content content})
      (db.mocks/update! database)
      (adapter.mocks/->wire)
      (ports.producers/publish-mock-event publisher)))

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
      (ports.producers/publish-mock-event publisher))
  true)

(defn unpublish-mock!
  [id {:keys [database publisher]}]
  (-> (db.mocks/get-mock-by-id id database)
      logic.mocks/unpublish
      (db.mocks/update! database)
      (adapter.mocks/->wire)
      (ports.producers/publish-mock-event publisher))
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
