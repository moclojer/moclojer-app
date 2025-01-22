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

(defn get-by-git-org-name
  ([git-org-name db]
   (get-by-git-org-name git-org-name db {}))
  ([git-org-name db ctx]
   (-> (sql.helpers/select :*)
       (sql.helpers/from :org)
       (sql.helpers/where [:= :git_orgname git-org-name])
       sql/format
       ((db.utils/build-execute-with-ctx db ctx))
       first)))

(defn get-by-slug
  ([slug db]
   (get-by-slug slug db {}))
  ([slug db ctx]
   (-> (sql.helpers/select :*)
       (sql.helpers/from :org)
       (sql.helpers/where [:= :slug slug])
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

(defn update!
  ([new-org db]
   (update! new-org db {}))
  ([{:org/keys [id] :as new-org} db ctx]
   (-> (sql.helpers/update :org)
       (sql.helpers/set new-org)
       (sql.helpers/where [:= :id id])
       (sql.helpers/returning :*)
       sql/format
       ((db.utils/build-execute-with-ctx db ctx))
       first)))

(defn delete!
  ([org db]
   (delete! org db {}))
  ([{:org/keys [id]} db ctx]
   (-> (sql.helpers/delete-from :org)
       (sql.helpers/where [:= :id id])
       sql/format
       ((db.utils/build-execute-with-ctx db ctx)))))

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

(defn delete-user!
  ([org-user db]
   (delete-user! org-user db {}))
  ([{:org_user/keys [org_id user_id]} db ctx]
   (-> (sql.helpers/delete-from :org_user)
       (sql.helpers/where [:and
                           [:= :org_id org_id]
                           [:= :user_id user_id]])
       sql/format
       ((db.utils/build-execute-with-ctx db ctx)))))
