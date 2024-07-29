(ns job-ops.db.mocks
  (:require [honey.sql :as sql]
            [honey.sql.helpers :as sql.helpers]
            [job-ops.db.utils :as db.utils]))

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
