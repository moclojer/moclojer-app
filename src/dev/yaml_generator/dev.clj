(ns dev.yaml-generator.dev
  (:require [com.moclojer.components.core :as components]
            [com.moclojer.components.storage :as storage]
            [com.stuartsierra.component :as component]
            [dev.utils :as utils]
            [yaml-generator.ports.workers :as p.workers])
  (:gen-class))

(def sys-atom (atom nil))

(defn build-system-map []
  (component/system-map
   :config (components/new-config "back/config.edn")
   :sentry (components/new-sentry-mock)
   :database (component/using (components/new-database) [:config])
   :storage (component/using (components/new-storage) [:config])
   :publisher (component/using (components/new-publisher) [:config])
   :workers (component/using (components/new-consumer p.workers/workers false)
                             [:config :database :storage :publisher])))

(comment
  ;; init
  (utils/start-system-dev! sys-atom (build-system-map) false)

  (storage/delete-file! (:storage @sys-atom) "moclojer" "moclojer.yml")
  (slurp (storage/get-file (:storage @sys-atom) "moclojer" "moclojer.yml"))

  ;; iterate
  (utils/stop-system-dev! sys-atom false)
  ;; reload then
  (utils/start-system-dev! sys-atom (build-system-map) false)

  ;; finish
  (utils/stop-system-dev! sys-atom false))
