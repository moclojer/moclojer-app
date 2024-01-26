(ns back.unit.cloud-ops.logic.digital-ocean-test
  (:require
   [clojure.test :refer [deftest is testing]]
   [cloud-ops.api.logic.digital-ocean :as logic.do]
   [state-flow.assertions.matcher-combinators :refer [match?]]))

(deftest domain-exists?
  (testing "should verify that domain exists already"
    (is (match?
         true
         (logic.do/domain-exists? [{:domain "my-domain.moclojer.com"}
                                   {:domain "my-other-domain.moclojer.com"}
                                   {:domain "this-one-exists.moclojer.com"}]
                                  "this-one-exists.moclojer.com"))))
  (testing "should verify that domain doesnt exist"
    (is (match?
         false
         (logic.do/domain-exists? [{:domain "hello-domain.moclojer.com"}]
                                  "this-one-doesnt-exist.moclojer.com")))))
(deftest add-domain-to-spec
  (let [spec {:domains [{:domain "hello.com"}]}
        new-domain {:domain "bye.com"}]
    (testing "should append domain to spec domain list"
      (is
       (match? {:domain [{:domain "hello.com"}
                         {:domain "bye.com"}]}
               (logic.do/add-domain-to-spec spec new-domain))))))
