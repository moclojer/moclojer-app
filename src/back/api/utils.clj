(ns back.api.utils)

(defn assoc-if
  "This function returns a map with a respective associated key and value 
  if it is given as argument."
  [m k v]
  (if v
    (assoc m k v)
    m))

(defn inspect
  "Inspects a variable's contents and returns it without modifying its value."
  [v]
  (if (instance? clojure.lang.Atom v)
    (prn @v)
    (prn v))
  v)
