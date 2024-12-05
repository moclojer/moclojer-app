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
         (let [arglists (or (:arglists (meta v)) [])
               arg-names (map keyword (or (first arglists) []))]
           (swap! fn-names conj (str sym))
           (alter-var-root v
                           (fn [orig-fn]
                             (if (fn? orig-fn)
                               (with-meta
                                 (fn [& args]
                                   (com.moclojer.components.logs/trace
                                    sym (zipmap arg-names args) (apply orig-fn args)))
                                 (meta v))
                               orig-fn))))))
     (utils/inspect-if (= env :dev) fn-names))))

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

  (trace-all-ns {:config {:env :prod}}))
