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
       (map ns-name)
       (map name)
       (filter #(and (str/starts-with? % "com.moclojer")
                     (not (str/ends-with? % "logs"))))
       (map symbol)
       (into [])))

(defn trace-all-ns-1
  "Iterate over *ns* functions and replace them with themselves within
  a `logs/trace` call that uses each function's arglist as context."
  []
  (let [desired-ns
        (get-allowed-ns)]
    (doseq [current-ns desired-ns]
      (doseq [[fsym func] (ns-publics current-ns)]
        (let [sym (keyword (symbol (str current-ns) (name fsym)))
              m (meta func)
              args  (first (:arglists m))
              pre-argmap (fn [acc v]
                           (cond
                             ;; Arg with a :as alias, making it not necessary to
                             ;; get the inner deconstructed keys.
                             (and (map? v) (:as v))
                             (acc (keyword (:as v)) (:as v))
                             ;; Arg with only the :keys vec declared.
                             (and (map? v) (:keys v))
                             (into {} (map (fn [k]
                                             [(keyword k) k])
                                           (:keys v)))
                             ;; Normal arg types.
                             :else (assoc acc (keyword v) v)))
              argmap (reduce pre-argmap {} (drop-last 2 args))
              callargs (map
                        (fn [arg]
                          (cond
                            (and (map? arg) (:as arg))
                            (:as arg)
                            (and (map? arg) (:keys arg))
                            (into {} (map (fn [a] [(keyword a) a]) (:keys arg)))
                            :else arg))
                        args)]
          (if-not (some #(= % '&) args)
            (intern
             *ns* fsym
             (with-meta (eval `(fn [~@args]
                                 (com.moclojer.components.logs/trace ~sym ~argmap
                                                                     (~func ~@callargs)))) m))
            (prn "--> could not convert" func "args:" args)))))))

(defn trace-all-ns
  ([]
   (trace-all-ns {:config {:env :dev}}))
  ([config]
   (let [env (get-in config [:config :env])
         a-ns (get-allowed-ns)
         fn-names (atom [])]
     (doseq [curr-ns a-ns]
       (doseq [[sym v] (ns-publics curr-ns)]
         (when (fn? (var-get v))
           (let [f (var-get v)
                 arglists (:arglists (meta v))
                 arg-names (map keyword (or (first arglists) []))]
             (swap! fn-names conj (str (:name (meta v))))

             (alter-var-root v
                             (fn [_]
                               (with-meta
                                 (fn [& args]
                                   (com.moclojer.components.logs/trace
                                    sym
                                    (zipmap arg-names args)
                                    (apply f args)))
                                 (meta v))))))))
     (utils/inspect-if
      (= env :dev)
      "Traced functions:" fn-names))))

(defn start-system-dev!
  ([sys-atom sys-map]
   (start-system-dev! sys-atom sys-map true)
   (trace-all-ns))
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
