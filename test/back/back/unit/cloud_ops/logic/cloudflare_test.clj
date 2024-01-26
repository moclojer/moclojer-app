(ns back.unit.cloud-ops.logic.cloudflare-test
  (:require
   [clojure.test :refer [deftest is testing]]
   [cloud-ops.api.logic.cloudflare :as logic.cf]
   [state-flow.assertions.matcher-combinators :refer [match?]]))

(deftest domain-exists?
  (testing "should verify that domain exists already"
    (is (match?
         true
         (logic.cf/domain-exists? [{:name "domain-1"}
                                   {:name "domain-2"}] "domain-2"))))
  (testing "should verify that domain does not exist"
    (is (match?
         false
         (logic.cf/domain-exists? [{:name "domain-1"}] "domain-2")))))
