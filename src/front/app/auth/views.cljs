(ns front.app.auth.views
  (:require
   [front.app.components.alerts :refer [Error]]
   [front.app.components.button :refer [Button]]
   [front.app.components.loading :refer [LoadingSpinner]]
   [front.app.components.navlink :refer [NavLink]]
   [front.app.lib :refer [defnc]]
   [helix.core :refer [$]]
   [helix.dom :as d]
   [helix.hooks :as hooks]
   [refx.alpha :as refx]
   [reitit.frontend.easy :as rfe]))

(defnc SignInBtn []
  (d/div
   {:class-name "hidden md:block"}
   ($ NavLink {:children "Sign In"
               :href (rfe/href :app.core/login)})))

(defnc LogOutBtn []
  (d/div
   {:class-name "hidden md:block"}
   ($ NavLink {:on-click (fn [e]
                           (.preventDefault e)
                           (refx/dispatch-sync [:app.auth/logout])
                           (refx/dispatch-sync [:app.routes/push-state :app.core/home]))
               :children "Logout"
               :href "#"})))

(defnc AuthMenu
  [{:keys [user]}]
  (if user
    ($ LogOutBtn)
    ($ SignInBtn)))

(defnc login-view []
  (let [loading? (refx/use-sub [:app.auth/login-loading])
        [error error-res] (refx/use-sub [:app.auth/login-error])
        email-sent? (refx/use-sub [:app.auth/email-sent])
        [state set-state] (hooks/use-state {:email ""})]
    (d/body {:class-name "bg-gray-50 dark:bg-gray-800"}
            (d/main {:class-name "bg-gray-50 dark:bg-gray-900"}
                    (d/div {:class-name "flex flex-col justify-center items-center px-6 pt-8 mx-auto md:h-screen pt:mt-0 dark:bg-gray-900"}
                           (d/div {:class-name "justify-center items-center w-full bg-white rounded-lg shadow lg:flex md:mt-0 lg:max-w-screen-lg 2xl:max:max-w-screen-lg xl:p-0 dark:bg-gray-800"}
                                  (d/div {:class-name "hidden w-2/3 lg:flex"}
                                         (d/img {:src "./images/authentication/login.svg" :class-name "rounded-l-lg"}))
                                  (if email-sent?
                                    (d/div {:id "login-email-sent"
                                            :class-name ""}
                                           (d/h2
                                            {:class-name "font-semibold text-gray-900"}
                                            "Check your email, and click on the link.")
                                           (d/div
                                            (d/div
                                             {:class-name "ml-3 "}
                                             "Didn't received it?"
                                             ($ NavLink
                                                {:children " Try again."
                                                 :on-click (fn [e]
                                                             (.preventDefault e)
                                                             (refx/dispatch [:app.auth/send-email-again]))
                                                 :href "#"}))))
                                    (d/div {:class-name "p-6 space-y-8 w-full sm:p-8 lg:p-16 lg:py-0"}
                                           (d/h2 {:class-name "text-2xl font-bold text-gray-900 lg:text-3xl dark:text-white"}
                                                 "Sign in to moclojer")
                                           (d/form {:disabled loading?
                                                    :on-submit (fn [e]
                                                                 (prn e)
                                                                 (.preventDefault e)
                                                                 (when (:email state)
                                                                   (refx/dispatch [:app.auth/send-email state])))
                                                    :class-name "mt-8 space-y-6"}
                                                   (d/div
                                                    (d/label
                                                     {:for "email"
                                                      :class-name "block mb-2 text-sm font-medium text-gray-900 dark:text-white"}
                                                     "Your Email")
                                                    (d/input
                                                     {:for "email"
                                                      :placeholder "name@company.com"
                                                      :name "email"
                                                      :value (:email state)
                                                      :required true
                                                      :on-change #(set-state assoc :email (.. % -target -value))
                                                      :class-name "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"}))
                                                   (d/div {:class-name "flex items-start"}
                                                          (d/div {:class-name "flex items-center h-5"}))
                                                   ($ Button
                                                      {:type "submit"
                                                       :disabled loading?
                                                       :variant "solid-blue"
                                                       :color "pink"}
                                                      (if loading?
                                                        (d/span {:class-name "inline-flex"}
                                                                ($ LoadingSpinner {})
                                                                "Loading...")
                                                        (d/span "Login to your account")))
                                                   (d/div {:class-name "text-sm font-medium text-gray-500 dark:text-gray-400"}
                                                          (if error
                                                            ($ Error
                                                               {:id "login-error"
                                                                :error "Error... try it again."
                                                                :description (:message error-res)})
                                                            "if you don't have an account, it is created automatically")))))))))))

