(ns components.moclojer
  (:require [com.moclojer.server :as server]
            [com.moclojer.adapters :as m.adapters]
            [com.moclojer.io-utils :as m.io-utils]
            [io.pedestal.http :as http]
            [com.stuartsierra.component :as component]
            [components.logs :as logs]
            [moclojer.controllers.moclojer :as controller.moclojer]))

(defn service-startup! [storage]
  (controller.moclojer/write-on-disk storage))

(defn moclojer-server! [{:keys [config-path join?]}]
  (let [*router (m.adapters/generate-routes (m.io-utils/open-file config-path))]
    {:stop-future (server/create-wathcer *router {:config-path config-path})
     :server (server/start-server! *router {:join? join?})}))

(defrecord Moclojer [storage config]
  component/Lifecycle
  (start [this]
    (let [{:keys [config-path join?]} (-> config :config :moclojer)]
      (logs/log :info :moclojer-start
                :info-server {:config-path config-path
                              :join? join?})
      (service-startup! storage)
      (assoc this :moclojer
             (moclojer-server!
              {:config-path config-path
               :join? join?}))))

  (stop [this]
    (let [stop-fn (-> this :moclojer :stop-future)]
      (stop-fn)
      (http/stop (-> this :moclojer :server))
      (assoc this :moclojer nil))))

(defn new-moclojer
  "Creates a new Moclojer component."
  []
  (map->Moclojer {}))
