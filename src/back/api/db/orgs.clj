(ns back.api.db.orgs
  (:require
   [back.api.db.utils :as db.utils]
   [honey.sql :as sql]
   [honey.sql.helpers :as sql.helpers]
   [com.moclojer.components.logs :as logs]))

(defn insert!
  ([org db]
   (insert! org db {}))
  ([org db ctx]
   (logs/trace
    ::insert!
    {:org-id (:org/id org)}
    (-> (sql.helpers/insert-into :org)
        (sql.helpers/values [org])
        (sql.helpers/returning :*)
        (sql/format {:quoted false})
        ((db.utils/build-execute-with-ctx db ctx))
        first))))

(defn get-by-id
  ([id db]
   (get-by-id id db {}))
  ([id db ctx]
   (logs/trace
    ::get-by-id
    {:org-id id}
    (-> (sql.helpers/select :*)
        (sql.helpers/from :org)
        (sql.helpers/where [:= :id id])
        sql/format
        ((db.utils/build-execute-with-ctx db ctx))
        first))))

(defn get-by-git-org-name
  ([git-orgname db]
   (get-by-git-org-name git-orgname db {}))
  ([git-orgname db ctx]
   (-> (sql.helpers/select :*)
       (sql.helpers/from :org)
       (sql.helpers/where [:= :git_orgname git-orgname])
       sql/format
       ((db.utils/build-execute-with-ctx db ctx))
       first)))

(defn get-by-slug
  ([slug db]
   (get-by-slug slug db {}))
  ([slug db ctx]
   (logs/trace
    ::get-by-slug
    {:org-slug slug}
    (-> (sql.helpers/select :*)
       (sql.helpers/from :org)
       (sql.helpers/where [:= :slug slug])
       sql/format
       ((db.utils/build-execute-with-ctx db ctx))
       first))))

(defn get-by-user-id
  ([user-id db]
   (get-by-user-id user-id db {}))
  ([user-id db ctx]
   (logs/trace
    ::get-by-user-id
    {:user-id user-id}
    (-> (sql.helpers/select :*)
       (sql.helpers/from [:org :o])
       (sql.helpers/left-join [:org_user :ou] [:= :ou.org_id :o.id])
       (sql.helpers/where [:= :ou.user_id user-id])
       sql/format
       ((db.utils/build-execute-with-ctx db ctx))))))

(defn update!
  ([new-org db]
   (update! new-org db {}))
  ([{:org/keys [id] :as new-org} db ctx]
   (logs/trace
    ::update!
    {:org-id id}
    (-> (sql.helpers/update :org)
       (sql.helpers/set new-org)
       (sql.helpers/where [:= :id id])
       (sql.helpers/returning :*)
       sql/format
       ((db.utils/build-execute-with-ctx db ctx))
       first))))

(defn delete!
  ([org db]
   (delete! org db {}))
  ([{:org/keys [id]} db ctx]
   (logs/trace
    ::delete!
    {:org-id id}
    (-> (sql.helpers/delete-from :org)
       (sql.helpers/where [:= :id id])
       sql/format
       ((db.utils/build-execute-with-ctx db ctx))))))

(defn insert-user!
  ([org-user db]
   (insert-user! org-user db {}))
  ([org-user db ctx]
   (logs/trace
    ::insert-user!
    {:org-id (:org_user/org_id org-user)
     :user-id (:org_user/user_id org-user)}
    (-> (sql.helpers/insert-into :org_user)
        (sql.helpers/values [org-user])
        (sql.helpers/returning :*)
        sql/format
        ((db.utils/build-execute-with-ctx db ctx))
        first))))

(defn delete-user!
  ([org-user db]
   (delete-user! org-user db {}))
  ([{:org_user/keys [org_id user_id]} db ctx]
   (logs/trace
    ::delete-user!
    {:org-id org_id
     :user-id user_id}
    (-> (sql.helpers/delete-from :org_user)
       (sql.helpers/where [:and
                           [:= :org_id org_id]
                           [:= :user_id user_id]])
       sql/format
       ((db.utils/build-execute-with-ctx db ctx))))))
