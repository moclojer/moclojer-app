(ns app.integration.auth-view-test
  (:require [app.auth.events]
            [app.auth.subs]
            [app.auth.views :as auth.views]
            [app.aux :as aux]
            [cljs.test :refer [async deftest is]]
            [dev.msw.core :as mock]
            [promesa.core :as p]))

(def login-error-mock
  {"/login"
   {:post {:status 500
           :content-type :json
           :body #js {:ok false}}}})

(deftest auth-view-test
  (async done
         (p/do
           (mock/start! login-error-mock)
           (aux/wait-for
            #(p/let [render (-> auth.views/login-view aux/render)
                     container (.-container render)
                     button (-> container (aux/tag "button") first)
                     input (-> container (aux/query "#login-email"))
                     _change (-> input (aux/change "err@ee.cc"))
                     _click (-> button aux/click)
                     error-msg (-> container (aux/query "#login-error") aux/text)]
               (is (= "Error... try it again" error-msg))
               (aux/cleanup)
               (done))))))
