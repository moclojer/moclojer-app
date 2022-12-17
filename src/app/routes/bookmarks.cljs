(ns app.routes.bookmarks
  (:require [app.auth.views :as auth]
            [app.features.views :as features]
            [app.home.views :as home]
            [app.pricing.views :as pricing]))

(def routes
  ["/"
   [""
    {:name :app.core/home
     :view home/home-page
     :public? true}]

   ["features"
    {:name :app.core/features
     :view features/features-page
     :public? true}]

   ["pricing"
    {:name :app.core/pricing
     :view pricing/pricing-page
     :public? true}]

   ["login"
    [""
     {:name :app.core/login
      :view auth/login-view
      :public? true}]
    ["/auth"
     {:name :app.core/login-auth
      :view auth/login-auth-view
      :public? true}]]])


