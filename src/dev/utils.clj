(ns dev.utils
  (:require [com.stuartsierra.component :as component]
            [components.logs :as logs]
            [components.migrations :as migrations]
            [pg-embedded-clj.core :as pg-emb]))

(defn start-system-dev!
  ([sys-atom sys-map]
   (start-system-dev! sys-atom sys-map true))
  ([sys-atom sys-map init-pg?]
   (logs/setup [["*" :info]] :auto :prod)
   (when init-pg?
     (pg-emb/init-pg)
     (migrations/migrate (migrations/configuration-with-db)))
   (->> sys-map
        component/start
        (reset! sys-atom))))

(defn stop-system-dev!
  ([sys-atom] (stop-system-dev! sys-atom true))
  ([sys-atom halt-pg?]
   (logs/log :info "stopping system")
   (swap!
    sys-atom
    (fn [s] (when s (component/stop s))))
   (when halt-pg? (pg-emb/halt-pg!))))
