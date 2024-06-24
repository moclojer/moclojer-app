(ns back.api.healthcheck
  (:require [com.moclojer.components.database :as database]))

(def Content
  [:map
   [:content string?]])

(def HealthResponse
  [:map
   [:data Content]])

(defn live-db
  [{:keys [database]}]
  (database/execute
   database
   ["select 1"]
   {}))

(defn live [{components :components}]
  (live-db components)
  {:status 200
   :body {:data {:content "live db"}}})

(defn health [_i]
  {:status 200
   :body {:data {:content "Live api"}}})

