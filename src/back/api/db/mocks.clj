(ns back.api.db.mocks
  (:require [com.moclojer.components.database :as database]
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
  (let [pub-stt (:mock/publication mock)
        casted-mock (if pub-stt
                      (->> [:cast pub-stt :publication_status]
                           (assoc mock :mock/publication))
                      mock)]
    (->> (-> (sql.helpers/update :mock)
             (sql.helpers/set casted-mock)
             (sql.helpers/where [:= :id (:mock/id mock)])
             (sql.helpers/returning :*)
             (sql/format {:quoted false}))
         (database/execute db)
         first)))

(defn get-mock-by-id [id db]
  (->> (database/execute
        db
        (-> (sql.helpers/select :*)
            (sql.helpers/from :mock)
            (sql.helpers/where [:= :id id])
            sql/format))
       first))

(defn get-mock-by-wildcard
  [{:keys [wildcard subdomain & user-id]} db]
  (first (database/execute
          db
          (let [where [:and
                       [:= :wildcard wildcard]
                       [:= :subdomain subdomain]]]
            (-> (sql.helpers/select :*)
                (sql.helpers/from :mock)
                (sql.helpers/where (if user-id
                                     (conj where [:= :user_id user-id])
                                     where))
                sql/format)))))

(defn get-mocks [{:keys [user-id]} db]
  (->> (database/execute
        db
        (-> (sql.helpers/select :*)
            (sql.helpers/from :mock)
            (sql.helpers/where [:or
                                [:= :user_id user-id]])
            sql/format))))

(defn get-mocks-by-publication [pub-statuses db & [user-id]]
  (let [where-pub-status (->> (map
                               #(identity [:= :publication [:cast % :publication_status]])
                               pub-statuses)
                              vec
                              (into [:or]))]
    (database/execute
     db
     (-> (sql.helpers/select :*)
         (sql.helpers/from :mock)
         (sql.helpers/where (if (some? user-id)
                              (conj [:and [:= :user_id user-id]] where-pub-status)
                              where-pub-status))
         sql/format))))

(defn delete-mock-by-id [id db]
  (database/execute
   db
   (-> (sql.helpers/delete-from :mock)
       (sql.helpers/where [:= :id id])
       (sql/format))))
