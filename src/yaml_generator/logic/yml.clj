(ns yaml-generator.logic.yml
  (:require [clj-yaml.core :as yaml]))

(def yml "
- endpoint:
    method: GET
    path: /hello/:username
    response:
      status: 200
      headers:
        Content-Type: application/json
      body: >
        {
          \"hello\": \"{{path-params.username}}!\"
        }")

(def yml2 "
- endpoint:
    method: GET
    path: /hello/:username
    response:
      status: 200
      headers:
        Content-Type: application/json
      body: >
        {
          \"hello\": \"{{path-params.username}}!\"
        }")

(defn parse-yaml [yml-string]
  (yaml/parse-string yml-string))

(defn merge-yaml [yml1 yml2]
  (let [data1 (parse-yaml yml1)
        data2 (parse-yaml yml2)]
    ;; Assuming you want to concatenate the lists
    (concat data1 data2)))

(defn to-yaml-string [data]
  (yaml/generate-string data))

(def merged-yaml (merge-yaml yml yml2))
(def yaml-string (to-yaml-string merged-yaml))

;; Print the result
(println yaml-string)
