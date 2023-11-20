(ns back.unit.yml-generator.logic.yml-test
  (:require [clj-yaml.core :as yaml]
            [clojure.test :refer [deftest is testing]]
            [state-flow.assertions.matcher-combinators :refer [match?]]
            [yaml-generator.logic.yml :as logic.yml]))

(def yml-without-host "
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
        }
  
- endpoint:
    method: GET
    path: /hello/:username/:lastname
    response:
      status: 200
      headers:
        Content-Type: application/json
      body: >
        {
          \"hello\": \"{{path-params.username}}!\"
        }
  ")

(def yml-with-host "
- endpoint:
    method: GET
    path: /hello/:username
    host: test.chico.moclojer.com
    response:
      status: 200
      headers:
        Content-Type: application/json
      body: >
        {
          \"hello\": \"{{path-params.username}}!\"
        }
  
- endpoint:
    method: GET
    path: /hello/:username/:lastname
    host: test.chico.moclojer.com
    response:
      status: 200
      headers:
        Content-Type: application/json
      body: >
        {
          \"hello\": \"{{path-params.username}}!\"
        }
  ")

(def moclojer-yaml "
- endpoint:
    method: GET
    path: /hello/:username
    host: test1.chico.moclojer.com
    response:
      status: 200
      headers:
        Content-Type: application/json
      body: >
        {
          \"hello\": \"hello!\"
        }
  
- endpoint:
    method: GET
    path: /hello/
    host: test1.chico.moclojer.com
    response:
      status: 200
      headers:
        Content-Type: application/json
      body: >
        {
          \"hello\": \"hello!\"
        }
  ")

(def unified-expected "
- endpoint:
    method: GET
    path: /hello/:username
    host: test.chico.moclojer.com
    response:
      status: 200
      headers:
        Content-Type: application/json
      body: >
        {
          \"hello\": \"{{path-params.username}}!\"
        }
  
- endpoint:
    method: GET
    path: /hello/:username/:lastname
    host: test.chico.moclojer.com
    response:
      status: 200
      headers:
        Content-Type: application/json
      body: >
        {
          \"hello\": \"{{path-params.username}}!\"
        }
- endpoint:
    method: GET
    path: /hello/:username
    host: test1.chico.moclojer.com
    response:
      status: 200
      headers:
        Content-Type: application/json
      body: >
        {
          \"hello\": \"hello!\"
        }
  
- endpoint:
    method: GET
    path: /hello/
    host: test1.chico.moclojer.com
    response:
      status: 200
      headers:
        Content-Type: application/json
      body: >
        {
          \"hello\": \"hello!\"
        }
  ")

(deftest yaml-test
  (testing "should add the host into the yaml"
    (is (match?
         (yaml/parse-string
          yml-with-host)
         (yaml/parse-string
          (logic.yml/add-host
           "test.chico.moclojer.com"
           yml-without-host))))))

(deftest yaml-unified-test
  (testing "should merge two yaml"
    (is
     (match?
      (yaml/parse-string unified-expected)
      (yaml/parse-string 
        (logic.yml/unified-yaml yml-with-host moclojer-yaml))))))
