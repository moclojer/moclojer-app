(ns back.api.db.users
  (:require
   [back.components.database :as database]
   [honey.sql :as sql]
   [honey.sql.helpers :as sql.helpers]))

(defn insert!
  [transaction db]
  (->> (-> (sql.helpers/insert-into :users)
           (sql.helpers/values [transaction])
           (sql.helpers/returning :*)
           sql/format)
       (database/execute db)
       first))

(defn get-users [db]
  (database/execute
   db
   (-> (sql.helpers/select :*)
       (sql.helpers/from :users)
       sql/format)))
