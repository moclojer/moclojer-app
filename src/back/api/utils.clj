(ns back.api.utils
  (:require
   [clojure.string :as str]
   [com.moclojer.components.logs :as logs])
  (:import [java.util Base64]))

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

(defn encode [content]
  (let [content-str (str content)
        bytes (.getBytes content-str "UTF-8")
        encoder (Base64/getEncoder)]
    (.encodeToString encoder bytes)))

(defn sha256?
  "Checks if the input string is a valid SHA-256 hash."
  [s]
  (and (string? s)
       (= 64 (count s))
       (re-matches #"^[0-9a-fA-F]{64}$" s)))

(defn github-link?
  "Checks if the input string correctly represents a github repo link"
  [s]
  (and (string? s)
       (not-empty s)
       (str/starts-with? s "https://github.com/")))

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
