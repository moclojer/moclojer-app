(ns front.app.routes.bookmarks
  (:require
   [front.app.auth.views :as auth]
   [front.app.dashboard.editor :as editor]
   [front.app.dashboard.mocks :as mocks]
   [front.app.dashboard.views :as d.views]))

(def routes
  [""
   ["/"
    {:name :app.core/auth
     :public? true}]

   ["/first-login"
    {:name :app.core/first-login
     :view auth/first-login-view
     :public? true}]

   ["/login"
    {:name :app.core/login
     :view auth/login-view
     :public? true}]

   ["/dashboard"
    {:name :app.core/dashboard
     :view d.views/welcome
     :public? false}]

   ["/dashboard/mocks"
    {:name :app.core/mocks
     :view mocks/mocks
     :public? false}]

   ["/dashboard/mocks/:mock-id"
    {:name :app.core/mocks-view
     :view editor/index
     :public? false}]

   ["/404"
    {:name :app.core/not-found
     :view auth/not-found-view
     :public? true}]])

