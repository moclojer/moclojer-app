(ns back.integration.components.utils
  (:require
   [com.stuartsierra.component :as component]
   [com.moclojer.components.logs :as logs]
   [com.moclojer.components.migrations :as migrations]
   [pg-embedded-clj.core :as pg-emb]))

(defn start-system!
  [system-start-fn]
  (fn []
    #_(logs/setup :info :auto :dev)
    (pg-emb/init-pg)
    (migrations/migrate (migrations/build-complete-db-config "back/config.edn"))
    (system-start-fn)))

(defn stop-system!
  [system]
  (component/stop-system system)
  (pg-emb/halt-pg!))

