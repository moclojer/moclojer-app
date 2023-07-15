(ns back.api.controllers.mocks
  (:require
   [back.api.adapters.mocks :as adapter.mocks]
   [back.api.db.mocks :as db.mocks]
   [back.api.logic.mocks :as logic.mocks]))

(defn create-mock!
  [org-id user-id subdomain url {:keys [database]}]
  (-> (logic.mocks/create {:org-id org-id
                           :user-id user-id
                           :subdomain subdomain
                           :url url})
      (db.mocks/insert! database)
      (adapter.mocks/->wire)))

(defn get-mocks
  [filter {:keys [database]}]
  (->> (db.mocks/get-mocks filter database)
       (map adapter.mocks/->wire)))

(defn enable-mock!
  [id {:keys [database]}]
  (-> (db.mocks/get-mock-by-id id database)
      logic.mocks/enable
      (db.mocks/update! database))
  true)

(defn disable-mock!
  [id {:keys [database]}]
  (-> (db.mocks/get-mock-by-id id database)
      logic.mocks/disable
      (db.mocks/update! database))
  true)
