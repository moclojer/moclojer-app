(ns dev.utils
  (:require [com.moclojer.components.core :as components]
            [com.moclojer.components.logs :as logs]
            [com.moclojer.components.migrations :as migrations]
            [com.stuartsierra.component :as component]
            [pg-embedded-clj.core :as pg-emb]))

(defn start-system-dev!
  ([sys-atom sys-map]
   (start-system-dev! sys-atom sys-map true))
  ([sys-atom sys-map init-pg?]
   (components/setup-logger [["*" :info]] :auto :dev)
   (when init-pg?
     (pg-emb/init-pg)
     (migrations/migrate (migrations/build-complete-db-config "back/config.edn"))
   (->> sys-map
        component/start
        (reset! sys-atom))))

(defn stop-system-dev!
  ([sys-atom]
   (stop-system-dev! sys-atom true))
  ([sys-atom halt-pg?]
   (logs/log :info "stopping system")
   (swap!
    sys-atom
    (fn [s] (when s (component/stop s))))
   (when halt-pg? (pg-emb/halt-pg!))))
