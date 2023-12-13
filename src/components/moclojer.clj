(ns components.moclojer
  (:require [com.stuartsierra.component :as component]
            [com.moclojer.server :as server]))

;  get the mock file from storage and write on disk, then start the moclojer process
; passing that mock file as argument
(defn start-moclojer-process
  [storage]
  (let [mock-file (storage :mock-file)]
    (server/start-server-with-file-watcher! {:config-path ""
                                             :mocks-path "resources/moclojer.yml"})))

; get the reference for this thread and kill it .
(defn stop-moclojer-process
  [thread-reference])

(defrecord Moclojer [storage]
  component/Lifecycle
  (start [this]
    (if (:moclojer-thread this)
      ;;(restart-moclojer-process)

      (assoc this :moclojer-thread
      ;;#TODO add future to strat moclojer in a new thread
             (start-moclojer-process storage))))

  (stop [this]
    (when (this :moclojer-thread)
      (stop-moclojer-process (this :moclojer-thread))
      ;;#TODO  get the reference for this thread and kill it 
      )
    (assoc this :moclojer-thread nil)))

(defn new-moclojer
  "Creates a new Moclojer component."
  []
  (map->Moclojer {}))
