(ns back.api.controllers.mocks
  (:require
   [back.api.adapters.mocks :as adapter.mocks]
   [back.api.db.mocks :as db.mocks]
   [back.api.logic.mocks :as logic.mocks]
   [back.api.ports.producers :as ports.producers]))

(defn create-mock!
  [user-id mock {:keys [database]}]
  (let [uid {:user-id user-id}
        wuid (merge (select-keys mock [:wildcard]) uid)
        existing-mock (db.mocks/get-mock-by-wildcard wuid database)]
    (if (nil? existing-mock)
      (-> (logic.mocks/create (merge uid mock))
          (db.mocks/insert! database)
          (adapter.mocks/->wire))
      false)))

(defn update-mock!
  [id content {:keys [database publisher]}]
  (-> (db.mocks/get-mock-by-id id database)
      (logic.mocks/update {:content content})
      (db.mocks/update! database)
      (adapter.mocks/->wire)
      (ports.producers/mock-updated publisher)))

(defn get-mocks
  [filters {:keys [database]}]
  (->> (db.mocks/get-mocks filters database)
       (map adapter.mocks/->wire)
       (logic.mocks/group "personal")))

(defn publish-mock!
  [id {:keys [database]}]
  (-> (db.mocks/get-mock-by-id id database)
      logic.mocks/publish
      (db.mocks/update! database))
  true)

(defn unpublish-mock!
  [id {:keys [database]}]
  (-> (db.mocks/get-mock-by-id id database)
      logic.mocks/unpublish
      (db.mocks/update! database))
  true)

