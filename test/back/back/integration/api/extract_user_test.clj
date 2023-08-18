(ns back.integration.api.extract-user-test
  (:require
   [back.api.interceptors.extract-user :refer [extract-user-interceptor]]
   [clojure.test :refer [deftest is testing]]))

(defn- run-with-context [context]
  (let [{:keys [enter]} (extract-user-interceptor)]
    (enter context)))

(deftest test-extract-user-interceptor
  (testing "returns context when route is public"
    (let [context {:request {:public true}}]
      (is (= (run-with-context context) context))))

  (testing "returns unauthorized when authorization header is missing"
    (let [context {:request {:headers {}}}]
      (is (= (run-with-context context) {:status 401 :body "Unauthorized"})))))
