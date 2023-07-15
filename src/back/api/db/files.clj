(ns back.api.db.files
  (:require
   [back.components.database :as database]
   [honey.sql :as sql]
   [honey.sql.helpers :as sql.helpers]))

(defn insert! [file db]
  (->> (-> (sql.helpers/insert-into :file)
           (sql.helpers/values [file])
           (sql.helpers/returning :*)
           sql/format)
       (database/execute db)
       first))

(defn get-by-id [id db]
  (-> (database/execute
       db
       (-> (sql.helpers/select :*)
           (sql.helpers/from :file)
           (sql.helpers/where [:= :id id])
           sql/format))
      first))
