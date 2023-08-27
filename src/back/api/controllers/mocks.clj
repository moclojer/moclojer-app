(ns back.api.controllers.mocks
  (:require
   [back.api.adapters.mocks :as adapter.mocks]
   [back.api.db.mocks :as db.mocks]
   [back.api.logic.mocks :as logic.mocks]))

(defn create-mock!
  [subdomain content {:keys [database]}]
  (-> (logic.mocks/create {:subdomain subdomain
                           :content content})
      (db.mocks/insert! database)
      (adapter.mocks/->wire)))

(defn update-mock!
  [id content {:keys [database]}]
  (-> (db.mocks/get-mock-by-id id database)
      (logic.mocks/update {:content content})
      (db.mocks/update! database)
      (adapter.mocks/->wire)))

(defn get-mocks
  [filters {:keys [database]}]
  (->> (db.mocks/get-mocks filters database)
       (map adapter.mocks/->wire)))

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
