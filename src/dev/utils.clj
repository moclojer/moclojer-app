(ns dev.utils
  (:require
   [clojure.string :as str]
   [com.moclojer.components.logs :as logs]
   [com.moclojer.components.migrations :as migrations]
   [com.stuartsierra.component :as component]
   [dev.utils :as utils]
   [pg-embedded-clj.core :as pg-emb]))

(defn start-system-dev!
  ([sys-atom sys-map]
   (start-system-dev! sys-atom sys-map true)
   (utils/trace-all-ns))
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

(defn- get-allowed-ns []
  (->> (all-ns)
       (map ns-name)
       (map name)
       (filter #(and (str/starts-with? % "com.moclojer")
                     (not (str/ends-with? % "logs"))))
       (map symbol)
       (into [])))

(defn trace-all-ns
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
                                 (logs/trace ~sym ~argmap
                                             (~func ~@callargs)))) m))
            (logs/log "--> could not convert" func "args:" args)))))))
