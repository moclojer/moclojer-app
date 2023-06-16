(ns front.app.routes.bookmarks
  (:require [front.app.auth.views :as auth]
            [front.app.features.views :as features]
            [front.app.home.views :as home]
            [front.app.pricing.views :as pricing]
            [front.app.dashboard.views :as d.views]))

(def routes
  [""
   ["/"
    {:name :app.core/home
     :view home/home-page
     :public? true}]

   ["/features"
    {:name :app.core/features
     :view features/features-page
     :public? true}]

   ["/pricing"
    {:name :app.core/pricing
     :view pricing/pricing-page
     :public? true}]

   ["/login"
    {:name :app.core/login
     :view auth/login-view
     :dashboard true
     :public? true}]

   ["/logout"
    {:name :app.core/logout
     :view auth/logout-view
     :dashboard true
     :public? true}]

   ;; Added here only to see the layout http://localhost:8000/#/dashboard"
   ["/dashboard"
    [""
     {:name :app.core/dashboard
      :view d.views/Index
      :dashboard true
      :public? true}]]])

