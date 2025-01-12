(ns back.api.db.customers
  (:require [back.api.db.utils :as db.utils]
            [honey.sql :as sql]
            [honey.sql.helpers :as sql.helpers]))

(defn insert!
  ([user db]
   (insert! user db {}))
  ([user db ctx]
   (-> (sql.helpers/insert-into :customer)
       (sql.helpers/values [user])
       (sql.helpers/returning :*)
       sql/format
       ((db.utils/build-execute-with-ctx db ctx))
       first)))

(defn update!
  ([user db]
   (update! user db {}))
  ([{:customer/keys [uuid] :as user} db ctx]
   (-> (sql.helpers/update :customer)
       (sql.helpers/set user)
       (sql.helpers/where [:= :uuid uuid])
       (sql.helpers/returning :*)
       sql/format
       ((db.utils/build-execute-with-ctx db ctx))
       first)))

(defn get-customers
  ([db]
   (get-customers db {}))
  ([db ctx]
   (-> (sql.helpers/select :*)
       (sql.helpers/from :customer)
       sql/format
       ((db.utils/build-execute-with-ctx db ctx)))))

(defn get-by-external-id
  ([id db]
   (get-by-external-id id db {}))
  ([id db ctx]
   (-> (sql.helpers/select :*)
       (sql.helpers/from :customer)
       (sql.helpers/where [:= :external_uuid id])
       sql/format
       ((db.utils/build-execute-with-ctx db ctx))
       first)))

(defn get-by-id
  ([id db]
   (get-by-id id db {}))
  ([id db ctx]
   (-> (sql.helpers/select :*)
       (sql.helpers/from :customer)
       (sql.helpers/where [:= :uuid id])
       sql/format
       ((db.utils/build-execute-with-ctx db ctx))
       first)))

(defn get-by-username
  ([username db]
   (get-by-username username db {}))
  ([username db ctx]
   (-> (sql.helpers/select :*)
       (sql.helpers/from :customer)
       (sql.helpers/where [:= :username username])
       sql/format
       ((db.utils/build-execute-with-ctx db ctx))
       first)))

(defn get-by-org-id
  ([id db]
   (get-by-org-id id db {}))
  ([id db ctx]
   (-> (sql.helpers/select :*)
       (sql.helpers/from [:customer :c])
       (sql.helpers/left-join [:org_user :ou] [:= :ou.user_id :c.uuid])
       (sql.helpers/where [:= :ou.org_id [:cast id :uuid]])
       sql/format
       ((db.utils/build-execute-with-ctx db ctx)))))

(defn get-by-email
  ([email db]
   (get-by-email email db {}))
  ([email db ctx]
   (-> (sql.helpers/select :*)
       (sql.helpers/from :customer)
       (sql.helpers/where [:= :email email])
       sql/format
       ((db.utils/build-execute-with-ctx db ctx))
       first)))
