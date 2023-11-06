(ns yaml-generator.logic.yml
  (:require [clj-yaml.core :as yaml]))

(defn generate-yaml [data]
  (yaml/parse-string data))

(defn concat-yaml [mock data])

(comment
  (def yml "
- endpoint:
    # Note: the method could be omitted because GET is the default
    method: GET
    path: /hello/:username
    response:
      # Note: the status could be omitted because 200 is the default
      status: 200
      headers:
        Content-Type: application/json
      # Note: the body will receive the value passed in the url using the
      # :username placeholder
      body: >
        {
          \"hello\": \"{{path-params.username}}!\"
        }")

  (spit "test.yml" yml)

  (generate-yaml yml))
