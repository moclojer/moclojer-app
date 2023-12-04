(ns components.database
  (:require [com.stuartsierra.component :as component]
            [components.db-utils :refer [to-jdbc-uri]]
            [components.logs :as logs]
            [next.jdbc :as jdbc]
            [next.jdbc.connection :as connection])
  (:import (com.zaxxer.hikari HikariDataSource)))

(defprotocol DatabaseProvider
  (execute [self command]
    "Low-level API to execute a command in the database"))

(defrecord Database [config ^HikariDataSource datasource]
  component/Lifecycle
  (start [this]
    (let [{:keys [jdbc-url]} (get-in config [:config :database])]
      (logs/log :info :database :start {:jdbc-url (to-jdbc-uri jdbc-url)})
      (if datasource
        this
        (assoc this :datasource (connection/->pool HikariDataSource {:jdbcUrl (to-jdbc-uri jdbc-url)})))))
  (stop [this]
    (logs/log :info :database :stop)
    (if datasource
      (do
        (.close datasource)
        (assoc this :datasource nil))
      this))

  DatabaseProvider
  (execute [this commands]
    (jdbc/execute! (:datasource this) commands)))

(defn new-database []
  (map->Database {}))
