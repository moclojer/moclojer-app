(ns back.api.healthcheck.ports.http-in
  (:require
   [back.components.database :as database]))

(defn live-db
  [{:keys [database]}]
  (database/execute
   database
   ["select 1"]))

(defn live [{components :components}]
  (live-db components)
  {:status 200
   :body {:data {:content "live db"}}})

(defn health [_i]
  {:status 200
   :body {:data {:content "Live api"}}})

