(ns front.app.unit.utils-test
  (:require
   [cljs.test :refer [deftest is testing]]
   [front.app.utils :as utils]))

(deftest check-in-callback?-test
  (testing "should validate real callback uris"
    (let [test-set {"/#access_token=1&expires_at=1&token_type=1&type=1" true
                    "/#token_type=1&access_token=1&expires_at=1&type=1" true
                    "/#access_token=1&expires_at=1&token_type=1" false
                    "/#access_token=1&expires_at=1" false
                    "/#access_token=1" false
                    "" false}]
      (for [[uri expect] test-set]
        (is (= (utils/check-in-callback? uri) expect))))))
