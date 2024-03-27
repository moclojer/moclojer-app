(ns back.unit.yml-generator.logic.yml-test
  (:require
   [clojure.test :refer [deftest is testing]]
   [matcher-combinators.matchers :as matchers]
   [state-flow.assertions.matcher-combinators :refer [match?]]
   [yaml-generator.logic.yml :as logic.yml]
   [yaml.core :as yaml]))

(def mocks
  {:without-host "
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
  "
   :with-host "
- endpoint:
    method: GET
    path: /hello/:username
    host: test-chico.moclojer.com
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
    host: test-chico.moclojer.com
    response:
      status: 200
      headers:
        Content-Type: application/json
      body: >
        {
          \"hello\": \"{{path-params.username}}!\"
        }
  "
   :normal "
- endpoint:
    method: GET
    path: /hello/:username
    host: test1-chico.moclojer.com
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
    host: test1-chico.moclojer.com
    response:
      status: 200
      headers:
        Content-Type: application/json
      body: >
        {
          \"hello\": \"hello!\"
        }
  "
   :expected-unified "
- endpoint:
    method: GET
    path: /hello/:username
    host: test-chico.moclojer.com
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
    host: test-chico.moclojer.com
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
    host: test1-chico.moclojer.com
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
    host: test1-chico.moclojer.com
    response:
      status: 200
      headers:
        Content-Type: application/json
      body: >
        {
          \"hello\": \"hello!\"
        }
  "
   :unmodified "
- endpoint:
    method: POST
    path: /bye/:username
    host: test-chico.moclojer.com
    response:
      status: 200
      headers:
        Content-Type: application/json
      body: >
        {
          \"hello\": \"{{path-params.username}}!\"
        }
  "
   :expected-modified "
- endpoint:
    method: POST
    path: /bye/:username
    host: test-chico.moclojer.com
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
    host: test1-chico.moclojer.com
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
    host: test1-chico.moclojer.com
    response:
      status: 200
      headers:
        Content-Type: application/json
      body: >
        {
          \"hello\": \"hello!\"
        }
  "
   :expected-deleted "
- endpoint:
    method: GET
    path: /hello/:username
    host: test1-chico.moclojer.com
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
    host: test1-chico.moclojer.com
    response:
      status: 200
      headers:
        Content-Type: application/json
      body: >
        {
          \"hello\": \"hello!\"
        }
  "})

(deftest yaml-test
  (testing "should add the host into the yaml"
    (is
     (match?
      (matchers/embeds (yaml/parse-string (:with-host mocks)))
      (yaml/parse-string
       (logic.yml/add-host
        :host "test-chico.moclojer.com"
        (:without-host mocks)))))))

(deftest yaml-unified-test
  (testing "should merge two yaml"
    (is
     (match?
      (matchers/embeds (yaml/parse-string (:expected-unified mocks)))
      (yaml/parse-string
       (logic.yml/unified-yaml (:with-host mocks)
                               (:normal mocks)
                               true :host))))))

(deftest modified-yaml-unified-test
  (testing "should modify unified yaml"
    (println :m (:expected-modified mocks) :n (:normal mocks) :u (:unmodified mocks))
    (is
     (match?
      (matchers/embeds (yaml/parse-string (:expected-modified mocks)))
      (yaml/parse-string
       (logic.yml/unified-yaml (:normal mocks) (:unmodified mocks)
                               true :host))))))

(deftest deleted-yaml-unified-test
  (testing "should delete mock from unified yaml"
    (is
     (match?
      (matchers/embeds (yaml/parse-string (:expected-deleted mocks)))
      (yaml/parse-string
       (logic.yml/unified-yaml (:normal mocks)
                               (:unmodified mocks)
                               false :host))))))

(def test-yaml
  "
- this:
    should:
      work: true
    maybe: not
- this:
    hello: bye
")

(def test-edn
  [{:this {:should {:work true}
           :maybe "not"}}
   {:this {:hello "bye"}}])

(deftest parse-read-yaml-literal-test
  (testing "should read #ordered literal correctly"
    (is
     (match?
      (matchers/embeds (logic.yml/parse-yaml-read-literal test-yaml))
      test-edn))))

(def valid-mock
  "- endpoint:
    method: GET
    path: /hello/:username
    response:
      status: 200
      headers:
        Content-Type: application/json
      body: |
        {
          \"hello\": \"{{path-params.username}}!\"
        }")

(def invalid-mock
  "- endpoint:
    method: DELETETETETET
    path: /hello/:username
    response:
      status: 200
      headers:
        Content-Type: application/json
      body2: |
        {
          \"hello\": \"{{path-params.username}}!\"
        }")

(deftest mock-validation
  (testing "should validate valid mock"
    (is (logic.yml/validate-mock valid-mock)))
  (testing "should invalidate invalid mock"
    (is (not (logic.yml/validate-mock invalid-mock)))))
