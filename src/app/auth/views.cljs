(ns app.auth.views
  (:require
   [app.components.alerts :refer [Error]]
   [app.components.button :refer [Button]]
   [app.components.loading :refer [LoadingSpinner]]
   [app.components.navlink :refer [NavLink]]
   [app.lib :refer [defnc]]
   [helix.core :refer [$]]
   [helix.dom :as d]
   [helix.hooks :as hooks]
   [refx.alpha :as refx]))

(def form-classes
  "block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm")

(defnc text-field
  [{:keys [required name-field label class-name value disabled on-change id type-field]}]
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
           :value value
           :on-change on-change
           :disabled disabled
           :required required})))

(defnc AuthLayout
  [{:keys [children]}]
  (d/div {:class-name "relative flex min-h-full justify-center md:px-12 lg:px-0"}
         (d/div {:class-name "relative z-10 flex flex-1 flex-col bg-white py-10 px-4 shadow-2xl sm:justify-center md:flex-none md:px-28"}
                (d/div {:class-name "mx-auto w-full max-w-md sm:px-4 md:w-96 md:max-w-sm md:px-0"}
                       children))))

(defnc login-view []
  (let [loading? (refx/use-sub [:app.auth/login-loading])
        [error error-res] (refx/use-sub [:app.auth/login-error])
        email-sent? (refx/use-sub [:app.auth/email-sent])
        [state set-state] (hooks/use-state {:email ""})]
    ($ AuthLayout
       (d/div
        (if email-sent?
          (d/div {:id "login-email-sent"
                  :class-name "flex flex-col"}
                 (d/h2
                  {:class-name "text-lg font-semibold text-gray-900"}
                  "Check your email, and click on the link.")
                 (d/div
                  (d/div
                   {:class-name "mt-2 text-sm text-gray-700"}
                   "Didn't received it?"
                   ($ NavLink
                      {:children " Try again."
                       :on-click (fn [e]
                                   (.preventDefault e)
                                   (refx/dispatch [:app.auth/send-email-again]))
                       :href "#"}))))

          (d/div {:class-name "flex flex-col"}
                 (d/a {:href "/"}
                      (d/img {:class-name "h-10 w-auto"})
                      "Home")
                 (d/div {:class-name "mt-20"}
                        (d/h2 {:class-name "text-lg font-semibold text-gray-900"}
                              "Sign in to your account")
                        (d/p {:class-name "mt-2 text-sm text-gray-700"}
                             "Don't have an account? "))
                 (d/form {:disabled loading?
                          :class-name "mt-10 grid grid-cols-1 gap-y-8"
                          :on-submit  (fn [e]
                                        (.preventDefault e)
                                        (when (:email state)
                                          (refx/dispatch [:app.auth/send-email state])))}
                         ($ text-field {:label "Email address"
                                        :id "login-email"
                                        :name "email"
                                        :type-field "email"
                                        :required true
                                        :value (:email state)
                                        :disabled loading?
                                        :on-change #(set-state assoc :email (.. % -target -value))})
                         (when error
                           ($ Error
                              {:id "login-error"
                               :error "Error... try it again."}))
                         (d/div
                          ($ Button
                             {:disabled loading?
                              :type "submit"
                              :variant "solid"
                              :color "blue"
                              :class-name "w-full"}
                             (if loading?
                               (d/span {:class-name "inline-flex"}
                                       ($ LoadingSpinner {})
                                       "Loading...")
                               (d/span "Sign in")))))))))))
