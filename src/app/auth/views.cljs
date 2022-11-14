(ns app.auth.views
  (:require [app.lib :refer [defnc]]
            [helix.dom :as d]
            [helix.hooks :as hooks]
            ["moclojer-components" :as mc]
            [helix.core :refer [$]]
            [refx.alpha :as refx]))

(def form-classes
  "block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm")

(defnc text-field
  [{:keys [required name-field label class-name id type-field]}]
  (d/div {:class-name class-name}
         (when label
           (d/label {:html-for id
                     :class-name "mb-3 block text-sm font-medium text-gray-700"}
                    label))
         (d/input
          {:id id
           :type type-field
           :class-name form-classes
           :name name-field
           :required required})))

(defnc login-view []
  (let [loading? (refx/use-sub [:app.auth/login-loading])
        error? (refx/use-sub [:app.auth/login-error])
        [state set-state] (hooks/use-state {:email ""})]
    ($ mc/AuthLayout
       (d/div {:class-name "flex flex-col"}
              (d/a {:href "/"}
                   (d/img {:class-name "h-10 w-auto"})
                   "Home")
              (d/div {:class-name "mt-20"}
                     (d/h2 {:class-name "text-lg font-semibold text-gray-900"}
                           "Sign in to your account")
                     (d/p {:class-name "mt-2 text-sm text-gray-700"}
                          "Don't have an account? ")))
       (d/form {:action "#"
                :class-name "mt-10 grid grid-cols-1 gap-y-8"}
               ($ text-field {:label "Email address"
                              :id "email"
                              :name "email"
                              :type-field "email"
                              :required true})
               (d/div
                ($ mc/Button
                   {:type "submit"
                    :variant "solid"
                    :color "blue"
                    :class-name "w-full"}
                   (d/span "Sign in")))))))
#_(d/div
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
       "Error... Try again"))))
