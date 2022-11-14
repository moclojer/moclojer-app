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
   {:get {:status 500
          :content-type :json
          :body #js {:ok false}}}})

(deftest auth-view-test
  (async done
         (p/do
           (aux/wait-for
            #(p/let [_ (mock/start! login-error-mock)
                     render (-> auth.views/login-view aux/render)
                     container (.-container render)
                     button (-> container (aux/tag "button") first)
                     input (-> container (aux/query "#login-email"))
                     _change (-> input (aux/change "err@ee.cc"))
                     _click (-> button aux/click)
                     error-msg (-> render (aux/find-by-text "Error... Try again"))]
               (is (= "Error... Try again" (aux/text error-msg)))
               (aux/cleanup done)
               (mock/stop!))))))
