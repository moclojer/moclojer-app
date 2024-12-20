(ns back.api.utils
  (:require
   [com.moclojer.components.logs :as logs]))

(defn assoc-if
  "This function returns a map with a respective associated key and value 
  if it is given as argument."
  [m k v]
  (if v
    (assoc m k v)
    m))

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
