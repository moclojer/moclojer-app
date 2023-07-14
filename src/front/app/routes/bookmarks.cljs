(ns front.app.routes.bookmarks
  (:require
   [front.app.auth.views :as auth]
   [front.app.dashboard.views :as d.views]))

(def routes
  [""
   ["/"
    {:name :app.core/login
     :view auth/login-view
     :public? true}]

   ["/auth/callback"
    {:name :app.core/callback
     :view auth/callback-view
     :public? true}]

   ["/dashboard"
    {:name :app.core/dashboard
     :view d.views/index
     :public? false}]])

