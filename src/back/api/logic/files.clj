(ns back.api.logic.files
  (:import [java.util UUID]))

(defn ->uuid []
  (UUID/randomUUID))

(defn ->expires-at []
  (-> (java.util.Date.)
      (.setTime (+ (System/currentTimeMillis) (* 1000 60 60 24 7)))))

(defn create
  [{:keys [user-id content]}]
  (let [uuid (->uuid)]
    {:file/id uuid
     :file/content (str content)
     :file/user-id (parse-uuid user-id)
     :file/expires-at (->expires-at)}))
