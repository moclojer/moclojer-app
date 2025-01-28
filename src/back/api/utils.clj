(ns back.api.utils
  (:require [clojure.string :as str]))

(defn assoc-if
  "This function returns a map with a respective associated key and value 
  if it is given as argument."
  [m k v]
  (if v
    (assoc m k v)
    m))

(defn decode
  "Decodes a given string from base64 format"
  [s]
  (let [cleaned-str (str/replace s #"\s+" "")
        decoder (java.util.Base64/getDecoder)]
    (String. (.decode decoder cleaned-str) "UTF-8")))

(defn encode
  "Encodes a given string into base64 format"
  [s]
  (let [encoder (java.util.Base64/getEncoder)]
    (.encodeToString encoder (.getBytes s "UTF-8"))))

(defn sha256?
  "Checks if the input string is a valid SHA-256 hash."
  [s]
  (and (string? s)
       (= 64 (count s))
       (re-matches #"^[0-9a-fA-F]{64}$" s)))
