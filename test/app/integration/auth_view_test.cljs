(ns app.integration.auth-view-test
  (:require [app.auth.events]
            [app.auth.subs]
            [app.auth.views :as auth.views]
            [app.aux :as aux]
            [cljs.test :refer [async deftest is testing use-fixtures]]
            [dev.msw.core :as mock]
            [promesa.core :as p]
            [refx.alpha :as refx]))

(use-fixtures :each
  {:before (fn []
             (refx/reg-event-db
              ::initialize-db
              (fn [db _]
                (if db
                  db
                  {:current-route nil
                   :current-user nil
                   :login-email-sent nil})))
             (aux/cleanup))
   :after (fn []
            (aux/cleanup))})

(def login-error-mock
  {"/login/send-email"
   {:post {:lag 300
           :status 500
           :content-type :json
           :body #js {:ok false}}}})

(def login-sucess-mock
  {"/login/send-email"
   {:post {:lag 300
           :status 201
           :content-type :json
           :body #js {:ok true}}}})

(deftest auth-view-email-send-error-test
  (testing "auth email send view should error"
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
                 (is (= "Error... try it again." error-msg))
                 (aux/cleanup)
                 (done)))))))

(deftest auth-view-email-send-success-test
  (testing "auth email send view should work and show next panel"
    (async done
           (p/do
             (mock/start! login-sucess-mock)
             (aux/wait-for
              #(p/let [render (-> auth.views/login-view aux/render)
                       container (.-container render)
                       button (-> container (aux/tag "button") first)
                       input (-> container (aux/query "#login-email"))
                       _change (-> input (aux/change "nice@email.cc"))
                       _click (-> button aux/click)
                       success-msg (-> container (aux/query "#login-email-sent") aux/text)]
                 (is (= "Check your email, and click on the link." success-msg))
                 (aux/cleanup)
                 (done)))))))
