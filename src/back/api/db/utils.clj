(ns back.api.db.utils
  (:require [com.moclojer.components.database :as database]))

(defn build-execute-with-ctx [db ctx]
  (fn [command]
    (database/execute db command ctx)))
