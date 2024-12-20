(ns dev.utils
  (:require
   [back.api.utils :as utils]
   [clojure.string :as str]
   [com.moclojer.components.logs :as logs]
   [com.moclojer.components.migrations :as migrations]
   [com.stuartsierra.component :as component]
   [pg-embedded-clj.core :as pg-emb]))

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

(defn start-system-dev!
  ([sys-atom sys-map]
   (start-system-dev! sys-atom sys-map true))
  ([sys-atom sys-map init-pg?]
   (when init-pg?
     (pg-emb/init-pg)
     (migrations/migrate (migrations/build-complete-db-config "back/config.edn")))
   (->> sys-map
        component/start
        (reset! sys-atom))
   (trace-all-ns @sys-atom)))

(defn stop-system-dev!
  ([sys-atom]
   (stop-system-dev! sys-atom true))
  ([sys-atom halt-pg?]
   (logs/log :info "stopping system")
   (swap!
    sys-atom
    (fn [s] (when s (component/stop s))))
   (when halt-pg? (pg-emb/halt-pg!))))

(comment
  (trace-all-ns)

  (trace-all-ns {:config {:env :prod}})

  (defn f [& args]
    (logs/trace
     (keyword "traced-fn" (str 'dev.utils "/" 'prn))
     {:test? :test}
     (prn args)))

  (f)

  (logs/trace
   ::testing-stuff
   {:testing? :definitely}
   (get-allowed-ns)))
