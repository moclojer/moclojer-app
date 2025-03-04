(ns cloud-ops.api.server
  (:require
   [cloud-ops.api.ports.workers :as p.workers]
   [com.moclojer.components.core :as components]
   [com.moclojer.components.logs :as logs]
   [com.moclojer.components.mq :as mq]
   [cloud-ops.api.utils :refer [trace-all-ns]]
   [com.stuartsierra.component :as component])
  (:gen-class))

(def system-atom (atom nil))

(defn build-system-map []
  (component/system-map
   :config (components/new-config "back/config.edn")
   :http (components/new-http)
   :sentry (component/using (components/new-sentry) [:config])
   ;; :sentry (components/new-sentry-mock)
   :mq (component/using
        (components/new-mq p.workers/workers true)
        [:config :http :sentry])))

(defn start-system! [system-map]
  (->> system-map
       component/start
       (reset! system-atom))
  ;; enable tracing
  (trace-all-ns @system-atom))

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

  (mq/try-op! :publish! (:mq @system-atom) "domain.create"
              {:event {:domain "nao-existe-123-j0suetm"
                       :retrying? false}})

  (stop-system!)
  ;;
  )
