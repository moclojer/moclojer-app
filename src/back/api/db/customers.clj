(ns back.api.db.customers
  (:require [back.api.db.utils :as db.utils]
            [honey.sql :as sql]
            [honey.sql.helpers :as sql.helpers]))

(defn insert!
  [transaction db ctx]
  (-> (sql.helpers/insert-into :customer)
      (sql.helpers/values [transaction])
      (sql.helpers/returning :*)
      sql/format
      ((db.utils/build-execute-with-ctx db ctx))))

(defn update!
  [{:customer/keys [uuid] :as user} db ctx]
  (-> (sql.helpers/update :customer)
      (sql.helpers/set user)
      (sql.helpers/where [:= :uuid uuid])
      sql/format
      ((db.utils/build-execute-with-ctx db ctx))))

(defn get-customers [db ctx]
  (-> (sql.helpers/select :*)
      (sql.helpers/from :customer)
      sql/format
      ((db.utils/build-execute-with-ctx db ctx))))

(defn get-by-external-id [id db ctx]
  (-> (sql.helpers/select :*)
      (sql.helpers/from :customer)
      (sql.helpers/where [:= :external_uuid id])
      sql/format
      ((db.utils/build-execute-with-ctx db ctx))
      first))

(defn get-by-id [id db ctx]
  (-> (sql.helpers/select :*)
      (sql.helpers/from :customer)
      (sql.helpers/where [:= :uuid id])
      sql/format
      ((db.utils/build-execute-with-ctx db ctx))
      first))

(defn get-by-username [username db ctx]
  (-> (sql.helpers/select :*)
      (sql.helpers/from :customer)
      (sql.helpers/where [:= :username username])
      sql/format
      ((db.utils/build-execute-with-ctx db ctx))
      first))
