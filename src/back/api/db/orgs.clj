(ns back.api.db.orgs
  (:require [back.api.db.utils :as db.utils]
            [honey.sql :as sql]
            [honey.sql.helpers :as sql.helpers]))

(defn insert!
  ([org db]
   (insert! org db {}))
  ([org db ctx]
   (-> (sql.helpers/insert-into :org)
       (sql.helpers/values [org])
       (sql.helpers/returning :*)
       (sql/format {:quoted false})
       ((db.utils/build-execute-with-ctx db ctx))
       first)))

(defn get-by-id
  ([id db]
   (get-by-id id db {}))
  ([id db ctx]
   (-> (sql.helpers/select :*)
       (sql.helpers/from :org)
       (sql.helpers/where [:= :id id])
       sql/format
       ((db.utils/build-execute-with-ctx db ctx))
       first)))

(defn get-by-subdomain
  ([subdomain db]
   (get-by-subdomain subdomain db {}))
  ([subdomain db ctx]
   (-> (sql.helpers/select :*)
       (sql.helpers/from :org)
       (sql.helpers/where [:= :subdomain subdomain])
       sql/format
       ((db.utils/build-execute-with-ctx db ctx))
       first)))

(defn insert-user!
  ([org-user db]
   (insert-user! org-user db {}))
  ([org-user db ctx]
   (-> (sql.helpers/insert-into :org_user)
       (sql.helpers/values [org-user])
       (sql.helpers/returning :*)
       sql/format
       ((db.utils/build-execute-with-ctx db ctx))
       first)))

(defn get-by-user-id
  ([user-id db]
   (get-by-user-id user-id db {}))
  ([user-id db ctx]
   (-> (sql.helpers/select :*)
       (sql.helpers/from [:org :o])
       (sql.helpers/left-join [:org_user :ou] [:= :ou.org_id :o.id])
       (sql.helpers/where [:= :ou.user_id user-id])
       sql/format
       ((db.utils/build-execute-with-ctx db ctx)))))
