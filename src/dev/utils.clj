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
                 solved-fn (str curr-ns "/" sym)
                 traced-fn (fn [f]
                             (fn [n]
                               (com.moclojer.components.logs/trace
                                ::traced-fn
                                (zipmap arg-names n)
                                (f n))))]
             (swap! fn-names conj solved-fn)
             (try
               (alter-var-root v traced-fn)
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
   (trace-all-ns (utils/inspect (:logger @sys-atom)))))

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
     {:test? :test}
     (trace-all-ns args)))

  (com.moclojer.components.logs/trace
   ::testing-stuff
   {:testing? :definitely}
   (get-allowed-ns)))
