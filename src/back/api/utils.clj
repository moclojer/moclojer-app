(ns back.api.utils)

(defn assoc-if
  "This function returns a map with a respective associated key and value 
  if it is given as argument."
  [m k v]
  (if v
    (assoc m k v)
    m))

(defn decode [encoded-str]
  (let [cleaned-str (clojure.string/replace encoded-str #"\s+" "")
        decoder (java.util.Base64/getDecoder)]
    (String. (.decode decoder cleaned-str) "UTF-8")))

(defn encode [str]
  (let [encoder (java.util.Base64/getEncoder)]
    (.encodeToString encoder (.getBytes str "UTF-8"))))
