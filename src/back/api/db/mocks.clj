(ns back.api.db.mocks
  (:require
   [components.database :as database]
   [honey.sql :as sql]
   [honey.sql.helpers :as sql.helpers]))

(defn insert!
  [mock db]
  (->> (-> (sql.helpers/insert-into :mock)
           (sql.helpers/values [mock])
           (sql.helpers/returning :*)
           sql/format)
       (database/execute db)
       first))

(defn update!
  [mock db]
  (->> (-> (sql.helpers/update :mock)
           (sql.helpers/set mock)
           (sql.helpers/where [:= :id (:mock/id mock)])
           (sql.helpers/returning :*)
           sql/format)
       (database/execute db)
       first))

(defn get-mock-by-id [id db]
  (->> (database/execute
        db
        (-> (sql.helpers/select :*)
            (sql.helpers/from :mock)
            (sql.helpers/where [:= :id id])
            sql/format))
       first))

(defn get-mocks [{:keys [user-id]} db]
  (->> (database/execute
        db
        (-> (sql.helpers/select :*)
            (sql.helpers/from :mock)
            (sql.helpers/where [:or
                                [:= :user_id user-id]])
            sql/format))))
