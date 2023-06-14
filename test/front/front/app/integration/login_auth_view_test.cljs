(ns front.app.integration.login-auth-view-test
  (:require [front.app.auth.events]
            [front.app.auth.subs]
            [front.app.auth.views :as auth.views]
            [front.app.aux :as aux]
            [front.app.integration.aux :refer [after-fn before-fn]]
            [front.app.routes.subs]
            [cljs.test :refer [async deftest is testing use-fixtures]]
            [dev.msw.core :as mock]
            [promesa.core :as p]
            [refx.alpha :as refx]
            [refx.subs :as subs]))

(use-fixtures :each
  {:before before-fn
   :after after-fn})

;; events

(refx/reg-event-db
 :app.routes/navigated-fake
 (fn [db [_ current-route]]
   (assoc db :current-route current-route)))

(refx/reg-fx :push-state (fn [_]))

(refx/reg-event-fx :app.routes/push-state (fn [_ [_ _]]))

(refx/reg-event-db :app.routes/navigated (fn [_ [_ _]]))

;; http mocks

(def login-auth-fail-msw
  {"/login/auth"
   {:post {:status 401
           :content-type :json
           :body #js {:message "Invalid credentials"}}}})

(def login-return
  {:profile {:email "msw.mock@email.com"
             :name "Msw Mock"}
   :token "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1za0BlbWFpbC5jb20ifQ._M8ecsfRagfoZhCxLiCSWr9j7JVRyrOKPf-VTKsinU8"
   :expires_in 1})

(def login-auth-sucess-msw
  {"/login/auth"
   {:post {:status 201
           :content-type :json
           :body (clj->js login-return)}}})

#_(deftest login-auth-view-test-fail-workos-test
  (testing "auth login code redirect view should show error from WORKOS"
    (async done
           (p/let [_route (refx/dispatch [:app.routes/navigated-fake
                                          {:query-params
                                           {:error_description "some err message."}}])
                   _msw (mock/start! login-auth-fail-msw)
                   _render (aux/wait-for #(-> auth.views/login-auth-view aux/render .-container))
                   error-msg (p/delay 250 (subs/sub [:app.auth/login-error]))]
             (is (= "some err message." (last (subs/-value error-msg))))
             (aux/cleanup)
             (done)))))

#_(deftest login-auth-view-test-fail-api-test
  (testing "auth login code redirect view should show error from internal API"
    (async done
           (p/let [_route (refx/dispatch [:app.routes/navigated-fake
                                          {:query-params {:code "1234"}}])
                   _msw (mock/start! login-auth-fail-msw)
                   _render (aux/wait-for #(-> auth.views/login-auth-view aux/render .-container))
                   error-msg (p/delay 250 (subs/sub [:app.auth/login-error]))]
             (is (= "Invalid credentials" (:message (last (subs/-value error-msg)))))
             (aux/cleanup)
             (done)))))

#_(deftest login-auth-view-test-success-api-test
  (testing "auth login code redirect view should show error from internal API"
    (async done
           (p/let [_route (refx/dispatch [:app.routes/navigated-fake
                                          {:query-params {:code "1234"}}])
                   _msw (mock/start! login-auth-sucess-msw)
                   _render (aux/wait-for #(-> auth.views/login-auth-view aux/render .-container))
                   current-user (p/delay 250 (subs/sub [:app.auth/current-user]))]
             (is (= login-return (subs/-value current-user)))
             (aux/cleanup)
             (done)))))
