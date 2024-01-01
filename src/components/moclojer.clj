(ns components.moclojer
  (:require [com.moclojer.server :as server]
            [com.moclojer.adapter :as m.adapters]
            [com.moclojer.io-utils :as m.io-utils]
            [com.stuartsierra.component :as component]
            [components.logs :as logs]
            [moclojer.controllers.moclojer :as controller.moclojer]))

(defn service-startup! [storage]
  (controller.moclojer/write-on-disk storage))

(defn moclojer-server! [{:keys [config-path join?]}]
  (let [*router (m.adapters/generate-routes (m.io-utils/open-file config-path))]

    (server/create-wathcer *router {:config-path config-path})
    (server/start-server! *router {:join? join?})))

;; #TODO add some tests for this component
(defrecord Moclojer [storage config]
  component/Lifecycle
  (start [this]
    (let [{:keys [config-path join?]} (-> config :config :moclojer)]
      (logs/log :info :moclojer-start
                :info-server {:config-path config-path
                              :join? join?})
      (service-startup! storage)
      (assoc this :moclojer-foss
             (moclojer-server!
              {:config-path config-path
               :join? join?}))))

  (stop [this]
    (assoc this :moclojer-thread nil)))

(defn new-moclojer
  "Creates a new Moclojer component."
  []
  (map->Moclojer {}))
