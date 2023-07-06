(ns back.api.db.customers
  (:require
   [back.components.database :as database]
   [honey.sql :as sql]
   [honey.sql.helpers :as sql.helpers]))

(defn insert!
  [transaction db]
  (->> (-> (sql.helpers/insert-into :customer)
           (sql.helpers/values [transaction])
           (sql.helpers/returning :*)
           sql/format)
       (database/execute db)
       first))

(defn get-customers [db]
  (database/execute
   db
   (-> (sql.helpers/select :*)
       (sql.helpers/from :customer)
       sql/format)))

(defn get-by-external-id [id db]
  (-> (database/execute
       db
       (-> (sql.helpers/select :*)
           (sql.helpers/from :customer)
           (sql.helpers/where [:= :external_uuid id])
           sql/format))
      first))
