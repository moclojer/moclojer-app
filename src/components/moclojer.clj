(ns components.moclojer
  (:require [com.moclojer.server :as server]
            [com.stuartsierra.component :as component]
            [moclojer.controllers.moclojer :as controller.moclojer]))

(defn service-startup! [storage]
  (controller.moclojer/write-on-disk storage))

(defn start-moclojer-process
  []
  (server/start-server-with-file-watcher! {:config-path "resources/moclojer.yml"
                                           :mocks-path ""}))


(defrecord Moclojer [storage]
  component/Lifecycle
  (start [this]
    (prn "Moclojer started")
    (service-startup! storage)
    (assoc this :moclojer-foss (start-moclojer-process)))

  (stop [this]
    (assoc this :moclojer-thread nil)))

(defn new-moclojer
  "Creates a new Moclojer component."
  []
  (map->Moclojer {}))
