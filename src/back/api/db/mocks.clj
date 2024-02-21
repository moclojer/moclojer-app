(ns back.api.db.mocks
  (:require
   [components.database :as database]
   [honey.sql :as sql]
   [honey.sql.helpers :as sql.helpers]))

(defn insert!
  [mock db]
  (let [pub-stt (:mock/publication mock)
        casted-mock (->> [:cast pub-stt :publication_status]
                         (assoc mock :mock/publication))]
    (->> (-> (sql.helpers/insert-into :mock)
             (sql.helpers/values [casted-mock])
             (sql.helpers/returning :*)
             (sql/format {:quoted false}))
         (database/execute db)
         first)))

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

(defn get-mock-by-wildcard
  [{:keys [wildcard subdomain user-id]} db]
  (first (database/execute
          db
          (-> (sql.helpers/select :*)
              (sql.helpers/from :mock)
              (sql.helpers/where [:and
                                  [:= :wildcard wildcard]
                                  [:= :subdomain subdomain]
                                  [:= :user_id user-id]])
              sql/format))))

(defn get-mocks [{:keys [user-id]} db]
  (->> (database/execute
        db
        (-> (sql.helpers/select :*)
            (sql.helpers/from :mock)
            (sql.helpers/where [:or
                                [:= :user_id user-id]])
            sql/format))))

(defn delete-mock-by-id [id db]
  (database/execute
   db
   (-> (sql.helpers/delete-from :mock)
       (sql.helpers/where [:= :id id])
       (sql/format))))
