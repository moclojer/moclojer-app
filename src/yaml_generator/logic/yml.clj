(ns yaml-generator.logic.yml
  (:require
   [clj-yaml.core :as yaml]))

(defn to-yaml-string [data]
  (yaml/generate-string data))

(defn parse-yaml [yml-string]
  (yaml/parse-string yml-string))

(defn add-host [host content]
  (let [yml (parse-yaml content)]
    (->>
     yml
     (map #(update-in % [:endpoint :host] (constantly host)))
     to-yaml-string)))

(defn unified-yaml [content-yaml unified-yaml]
  (let [data1 (parse-yaml content-yaml)
        data2 (parse-yaml unified-yaml)]
    (to-yaml-string
     (concat data1 data2))))
