(ns back.unit.auth.logic
  (:require
   [back.api.auth.logic :as auth.logic]
   [clojure.test :refer [deftest is testing]]))

(deftest extract-params-test
  (testing "should get params from url"

    (let [url "https://tgvdfxurgsddxouxmugs.supabase.co/auth/v1/verify?redirect_to=http://localhost:3000&token=a27fe98463e353df2c81dff9689e1ba8e5e0e18541c82b4fcae3a789&type=magiclink/"]
      (is (= {:token "a27fe98463e353df2c81dff9689e1ba8e5e0e18541c82b4fcae3a789"
              :redirect-to "http://localhost:3000"
              :type "magiclink"}
             (auth.logic/extract-params url))))))
