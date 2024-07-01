(ns back.api.db.mocks
  (:require [back.api.db.utils :as db.utils]
            [honey.sql :as sql]
            [honey.sql.helpers :as sql.helpers]))

(defn- cast-mock [mock]
  (letfn [(cast-if [m status]
            (if (get m status)
              (update-in m [status] #(identity [:cast % :publication_status]))
              m))]
    (-> mock
        (cast-if :mock/dns_status)
        (cast-if :mock/unification_status))))

(comment
  (cast-mock {:mock/dns_status "test"})
  ;;
  )

(defn insert!
  ([mock db]
   (insert! mock db {}))
  ([mock db ctx]
   (-> (sql.helpers/insert-into :mock)
       (sql.helpers/values [(cast-mock mock)])
       (sql.helpers/returning :*)
       (sql/format {:quoted false})
       ((db.utils/build-execute-with-ctx db ctx))
       first)))

(defn update!
  ([mock db]
   (update! mock db {}))
  ([mock db ctx]
   (-> (sql.helpers/update :mock)
       (sql.helpers/set (cast-mock mock))
       (sql.helpers/where [:= :id (:mock/id mock)])
       (sql.helpers/returning :*)
       (sql/format {:quoted false})
       ((db.utils/build-execute-with-ctx db ctx))
       first)))

(defn get-mock-by-id
  ([id db]
   (get-mock-by-id id db {}))
  ([id db ctx]
   (-> (sql.helpers/select :*)
       (sql.helpers/from :mock)
       (sql.helpers/where [:= :id id])
       sql/format
       ((db.utils/build-execute-with-ctx db ctx))
       first)))

(defn get-mock-by-wildcard
  ([mock db]
   (get-mock-by-wildcard mock db {}))
  ([{:mock/keys [wildcard subdomain user_id org_id]} db ctx]
   (let [where [:and
                [:= :wildcard wildcard]
                [:= :subdomain subdomain]]]
     (-> (sql.helpers/select :*)
         (sql.helpers/from :mock)
         (sql.helpers/where (conj where (if org_id
                                          [:= :org_id org_id]
                                          [:= :user_id user_id])))
         sql/format
         ((db.utils/build-execute-with-ctx db ctx))
         first))))

(defn get-mocks
  ([user-id db]
   (get-mocks user-id db {}))
  ([user-id db ctx]
   (-> (sql.helpers/select :m.*)
       (sql.helpers/from [:mock :m])
       (sql.helpers/left-join [:org_user :ou] [:= :ou.org_id :m.org_id])
       (sql.helpers/where [:or
                           [:= :m.user_id user-id]
                           [:= :ou.user_id user-id]])
       sql/format
       ((db.utils/build-execute-with-ctx db ctx)))))

(defn get-mocks-by-publication
  [stt-type pub-stts db ctx & [user-id]]
  (let [where-pub-status (->> (map
                               #(identity [:= stt-type [:cast % :publication_status]])
                               pub-stts)
                              vec
                              (into [:or]))]
    (-> (sql.helpers/select :*)
        (sql.helpers/from :mock)
        (sql.helpers/where (if (some? user-id)
                             (conj [:and [:= :user_id user-id]] where-pub-status)
                             where-pub-status))
        sql/format
        ((db.utils/build-execute-with-ctx db ctx)))))

(defn delete-mock-by-id
  ([id db]
   (delete-mock-by-id id db {}))
  ([id db ctx]
   (-> (sql.helpers/delete-from :mock)
       (sql.helpers/where [:= :id id])
       sql/format
       ((db.utils/build-execute-with-ctx db ctx)))))
