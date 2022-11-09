(ns app.auth.views
  (:require [app.lib :refer [defnc]]
            [helix.dom :as d]
            [helix.hooks :as hooks]
            [refx.alpha :as refx]))

(defnc login-view []
  (let [loading? (refx/use-sub [:app.auth/login-loading])
        error? (refx/use-sub [:app.auth/login-error])
        [state set-state] (hooks/use-state {:email ""})]
    (d/div
     (d/form
      {:disabled loading?
       :on-submit (fn [e]
                    (.preventDefault e)
                    (when (:email state)
                      (refx/dispatch [:app.auth/login state])))}

      (d/label "E-mail")
      (d/input
       {:id "login-email"
        :value (:email state)
        :disabled loading?
        :on-change #(set-state assoc :email (.. % -target -value))})

      (d/button
       {:type "submit"}
       "Login")

      (when loading?
        (d/p
         {:id "login-loading"}
         "Loading..."))

      (when error?
        (d/p
         {:id "login-error"}
         "Error... Try again"))))))
