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
  [v & a]
  (if (instance? clojure.lang.Atom v)
    (prn "Deref atom: " @v)
    (prn v))
  (if a
    (let [c (count a)]
      (dotimes [i c]
        (if (instance? clojure.lang.Atom a)
          (prn (nth @a i))
          (prn (nth a i)))))
    v))

(defn inspect-if
  "Inspects if condition is met"
  [c v & a]
  (when c
    (inspect v (when a a))))
