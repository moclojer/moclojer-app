(ns cloud-ops.api.server
  (:require [cloud-ops.api.ports.workers :as p.workers]
            [com.moclojer.components.core :as components]
            [com.moclojer.components.logs :as logs]
            [com.stuartsierra.component :as component]
            [com.moclojer.components.publisher :as publisher])
  (:gen-class))

(def system-atom (atom nil))

(defn build-system-map []
  (component/system-map
   :config (components/new-config "back/config.edn")
   :http (components/new-http)
   :sentry (component/using (components/new-sentry) [:config])
   ;; :sentry (components/new-sentry-mock)
   :publisher (component/using
               (components/new-publisher)
               [:config :sentry])
   :workers (component/using
             (components/new-consumer p.workers/workers true)
             [:config :http :publisher :sentry])))

(defn start-system! [system-map]
  (components/setup-logger [["*" :info]] :auto :prod)
  (->> system-map
       component/start
       (reset! system-atom)))

(defn stop-system! []
  (logs/log :info "stopping system")
  (swap!
   system-atom
   (fn [s] (when s (component/stop s)))))

(defn -main
  "The entry-point for 'gen-class'"
  [& _args]
  ;; Graceful shutdown
  (.addShutdownHook (Runtime/getRuntime)
                    (Thread. ^Runnable stop-system!))
  (start-system! (build-system-map)))

(comment
  (start-system! (build-system-map))

  (publisher/publish! (:publisher @system-atom) "domain.create"
                      {:event {:domain "nao-existe-123-j0suetm"
                               :retrying? false}})

  (stop-system!)
  ;;
  )
