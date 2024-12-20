(ns back.api.server
  (:require
   [back.api.ports.workers :as p.workers]
   [back.api.routes :as routes]
   [back.api.utils :as utils]
   [clojure.string :as str]
   [com.moclojer.components.core :as components]
   [com.moclojer.components.logs :as logs]
   [com.moclojer.components.migrations :as migrations]
   [com.stuartsierra.component :as component])
  (:gen-class))

(defn get-allowed-ns
  "Returns all ns of this project filtered"
  []
  (->> (all-ns)
       (into []
             (comp
              (map (comp name ns-name))
              (filter #(and (str/starts-with? % "com.moclojer")
                            (not (str/ends-with? % "logs"))))
              (map symbol)))))

(defn trace-all-ns
  "Alter all defined fns inside all ns gathered from get-allowed-ns 
  and wrap them into a logs/trace context."
  ([]
   (trace-all-ns {:config {:env :dev}}))
  ([config]
   (let [env (get-in config [:config :env])
         a-ns (get-allowed-ns)
         fn-names (atom [])]
     (doseq [curr-ns a-ns]
       (doseq [[sym v] (ns-publics curr-ns)]
         (when (var? v)
           (let [arglists (-> v meta :arglists first)
                 arg-names (map keyword (or arglists []))]
             (swap! fn-names conj (str curr-ns "/" sym))
             (try
               (alter-var-root v
                               (fn [f]
                                 (if (fn? f)
                                   (fn [& args]
                                     (logs/trace
                                      (keyword "traced-fn" (str curr-ns "/" sym))
                                      {:location curr-ns
                                       :fn (str sym)
                                       :args (zipmap arg-names args)}
                                      (apply f args)))
                                   f)))
               (catch Exception e
                 (println "Failed to trace" sym (.getMessage e))))))))
     (utils/inspect-if (= env :dev) @fn-names))))

(def system-atom (atom nil))

(defn build-system-map []
  (component/system-map
   :config (components/new-config "back/config.edn")
   :logger (component/using (components/new-logger) [:config])
   :http (components/new-http)
   :sentry (component/using (components/new-sentry) [:config])
   :router (components/new-router routes/routes)
   :database (component/using (components/new-database) [:config])
   :mq (component/using
        (components/new-mq
         p.workers/workers
         [{:channel "domains.verification.fired"
           :event {}
           ;; every 2 minutes
           :sleep 120000}
          {:channel "yml.unified.verification.fired"
           :event {}
           ;; every 5 minutes
           :sleep 300000}]
         false)
        [:config :database :sentry])
   :webserver (component/using (components/new-webserver)
                               [:config :http :router :database :mq :sentry])))

(defn start-system! [system-map]
  (migrations/migrate (migrations/build-complete-db-config "back/config.edn"))
  (->> system-map
       component/start
       (reset! system-atom))
  (trace-all-ns @system-atom))

(defn stop-system! []
  (logs/log :info "stopping system")
  (swap!
   system-atom
   (fn [s]
     (when s (component/stop s)))))

(defn -main
  "The entry-point for 'gen-class'"
  [& _args]
  ;; Graceful shutdown
  (.addShutdownHook (Runtime/getRuntime)
                    (Thread. ^Runnable stop-system!))
  (start-system! (build-system-map)))

(comment
  (stop-system!)
  (start-system! (build-system-map)))
