(ns components.moclojer
  (:require [clojure.java.io :as io]
            [com.moclojer.adapters :as m.adapters]
            [com.moclojer.io-utils :as m.io-utils]
            [com.moclojer.server :as server]
            [com.stuartsierra.component :as component]
            [components.logs :as logs]
            [components.storage :as storage]
            [io.pedestal.http :as http]))

(defn write-on-disk [storage]
  (let [string-mock (storage/get-file storage "moclojer" "moclojer.yml")]
    (logs/log :info :moclojer :found string-mock)
    (when string-mock
      (->>
       (slurp
        (io/reader string-mock))
       (spit "resources/moclojer.yml")))))

(defn service-startup! [storage]
  (write-on-disk storage))

(defn moclojer-server! [{:keys [config-path join?]}]
  (let [*router (m.adapters/generate-routes (m.io-utils/open-file config-path))]
    {:stop-future (server/create-watcher *router {:config-path config-path})
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
