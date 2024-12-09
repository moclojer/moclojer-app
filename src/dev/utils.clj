(ns dev.utils
  (:require
   [back.api.utils :as utils]
   [clojure.string :as str]
   [com.moclojer.components.logs :as logs]
   [com.moclojer.components.migrations :as migrations]
   [com.stuartsierra.component :as component]
   [pg-embedded-clj.core :as pg-emb]))

(defn get-allowed-ns []
  (->> (all-ns)
       (into []
             (comp
              (map (comp name ns-name))
              (filter #(and (str/starts-with? % "com.moclojer")
                            (not (str/ends-with? % "logs"))))
              (map symbol)))))

(defn trace-all-ns
  ([]
   (trace-all-ns {:config {:env :dev}}))
  ([config]
   (let [env (get-in config [:config :env])
         a-ns (get-allowed-ns)
         fn-names (atom [])]
     (doseq [curr-ns a-ns]
       (doseq [[sym v] (ns-interns curr-ns)]
         (when (and (var? v) (fn? @v))
           (let [arglists (-> v meta :arglists first)
                 arg-names (map keyword (or arglists []))
                 solved-fn (str curr-ns "/" sym)]
             (swap! fn-names conj solved-fn)
             (try
               (alter-var-root v
                               (fn [f]
                                 (with-meta
                                   (fn [& args]
                                     (com.moclojer.components.logs/trace
                                      ::traced-fn
                                      {:ns (str curr-ns)
                                       :fn (str sym)
                                       :args (zipmap arg-names args)}
                                      (if (> (count args) 0)
                                        (apply f args)
                                        (f))))
                                   (meta f))))
               (catch Exception e
                 (println "Failed to trace" sym (.getMessage e))))))))
     (utils/inspect-if (= env :dev) @fn-names))))

(defn start-system-dev!
  ([sys-atom sys-map]
   (start-system-dev! sys-atom sys-map true)
   (trace-all-ns @sys-atom))
  ([sys-atom sys-map init-pg?]
   (when init-pg?
     (pg-emb/init-pg)
     (migrations/migrate (migrations/build-complete-db-config "back/config.edn")))
   (->> sys-map
        component/start
        (reset! sys-atom))))

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

  (let [args []]
    (com.moclojer.components.logs/trace
     ::traced-fn
     {:namespace (str 'dev.utils)
      :function (str get-allowed-ns)
      :arguments {:test? :test}}
     (if (> (count args) 0)
       (apply get-allowed-ns args)
       (get-allowed-ns))))

  (com.moclojer.components.logs/trace
   ::testing-stuff
   {:testing? :definitely}
   (get-allowed-ns)))
