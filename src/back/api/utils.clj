(ns back.api.utils)

(defn assoc-if [m k v]
  (if v
    (assoc m k v)
    m))

