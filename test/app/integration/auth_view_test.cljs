(ns app.integration.auth-view-test
  (:require [app.auth.events]
            [app.auth.subs]
            [app.auth.views :as auth.views]
            [app.aux :as aux]
            [cljs.test :refer [async deftest is testing use-fixtures]]
            [dev.msw.core :as mock]
            [promesa.core :as p]
            [refx.alpha :as refx]))

(refx/reg-event-db
 :test/initialize-db
 (fn [_ _]
   {:current-route nil
    :current-user nil
    :login-loading? false
    :login-error nil
    :login-email-sent nil}))

(use-fixtures :each
  {:before #(async done
                   (refx/clear-subscription-cache!)
                   (refx/dispatch-sync [:test/initialize-db])
                   (aux/cleanup)
                   (done))
   :after (fn []
            (aux/cleanup))})

(def login-error-msw
  {"/login/send-email"
   {:post {:lag 300
           :status 500
           :content-type :json
           :body #js {:ok false}}}})

(def login-sucess-msw
  {"/login/send-email"
   {:post {:lag 300
           :status 201
           :content-type :json
           :body #js {:ok true}}}})

(deftest auth-view-email-send-error-test
  (testing "auth email send view should error"
    (async done
           (p/let [_ (mock/start! login-error-msw)
                   render (aux/wait-for #(-> auth.views/login-view aux/render))
                   container (aux/wait-for #(.-container render))
                   button (-> container (aux/tag "button") first)
                   input (-> container (aux/query "#login-email"))
                   _change (aux/wait-for #(-> input (aux/change "err@ee.cc")))
                   _click (aux/wait-for #(-> button aux/click))
                   error-msg (aux/wait-for #(-> container (aux/query "#login-error") aux/text))]
             (is (= "Error... try it again." error-msg))
             (aux/cleanup)
             (done)))))

(deftest auth-view-email-send-success-test
  (testing "auth email send view should work and show next panel"
    (async done
           (p/let [_ (mock/start! login-sucess-msw)
                   render (aux/wait-for #(-> auth.views/login-view aux/render))
                   container (aux/wait-for #(.-container render))
                   button (-> container (aux/tag "button") first)
                   input (-> container (aux/query "#login-email"))
                   _change (aux/wait-for #(-> input (aux/change "nice@email.cc")))
                   _click (aux/wait-for #(-> button aux/click))
                   success-msg (aux/wait-for #(-> container (aux/query "#login-email-sent") aux/text))]
             (is (= "Check your email, and click on the link.Didn't received it? Try again." success-msg))
             (aux/cleanup)
             (done)))))
