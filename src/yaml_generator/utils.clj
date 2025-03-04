(ns yaml-generator.utils
  (:require
   [clojure.string :as str]
   [com.moclojer.components.logs :as logs]))

(defn inspect
  "Inspects a variable's contents and returns it without modifying its value."
  [v & a]
  (let [v (if (instance? clojure.lang.Atom v) @v v)]
    (if (and (seq? v) (> (count v) 0))
      (doseq [val v]
        (logs/log :info val))
      (logs/log :info "Inspect value: " v))
    (when a
      (doseq [arg a]
        (logs/log :info "Additional arg:"
                  (if (instance? clojure.lang.Atom arg)
                    @arg
                    arg))))
    v))

(defn inspect-if
  "Inspects if condition is met"
  [c v & a]
  (when c
    (apply inspect v a)))

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
     (inspect-if (= env :dev) @fn-names))))
