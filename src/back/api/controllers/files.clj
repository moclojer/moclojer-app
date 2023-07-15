(ns back.api.controllers.files
  (:require
   [back.api.adapters.files :as adapter.files]
   [back.api.db.files :as db.files]
   [back.api.logic.files :as logic.files]))

(defn save-file!
  [user-id content {:keys [database config]}]
  (-> (logic.files/create {:user-id user-id
                           :content content})
      (db.files/insert! database)
      (adapter.files/->wire config)))

(defn get-file!
  [id {:keys [database]}]
  (let [file (db.files/get-by-id id database)]
    (:file file)))
