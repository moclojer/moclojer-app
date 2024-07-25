(ns front.app.auth.views
  (:require
    [front.app.components.alerts :as alerts]
    [front.app.components.button :refer [button]]
    [front.app.components.container :refer [view-container]]
    [front.app.components.loading :refer [loading-spinner]]
    [front.app.components.navlink :refer [nav-link]]
    [front.app.lib :refer [defnc]]
    [helix.core :refer [$]]
    [helix.dom :as d]
    [helix.hooks :as hooks]
    [refx.alpha :as refx]
    [reitit.frontend.easy :as rfe]))

(defnc not-found-view []
  (d/div "404"))

(defnc login [{:keys [sent? loading?
                      state set-state
                      error error-res]}]
  (d/div {:class-name "flex flex-col justify-center items-center px-6 pt-8 mx-auto md:h-screen pt:mt-0 dark:bg-gray-900"}
         (d/div {:class-name (str "justify-center items-center w-full bg-white rounded-lg shadow lg:flex"
                                  "md:mt-0 lg:max-w-screen-lg 2xl:max:max-w-screen-lg xl:p-0 dark:bg-gray-800")}
                (d/div {:class-name "hidden w-2/3 lg:flex"}
                       (d/img {:src "/images/authentication/login.svg" :class-name "rounded-l-lg"}))
                (if sent?
                  (d/div {:id "login-email-sent"
                          :class-name "p-6 space-y-8 w-full sm:p-8 lg:p-16 lg:py-0"}
                         (d/h2 
                           {:class-name "font-semibold text-gray-900"}
                           "Sign in to moclojer")
                         (d/div
                           {:class-name "font-semibold text-gray-900"}
                           "Check your email")
                         (d/div
                           (d/div
                             {:class-name "ml-3 "}
                             "If you have an account with us, we’ve sent an email to "
                             (:email state)
                             " with a link that you can use to sign in.")
                           (d/div
                             {:class-name "ml-3 "}
                             "You can also "
                             ($ nav-link
                                {:children "try again."
                                 :on-click (fn [e]
                                             (.preventDefault e)
                                             (refx/dispatch [:app.auth/send-email-again]))
                                 :href "#"}))))
                  (d/div {:class-name "p-6 space-y-8 w-full sm:p-8 lg:p-16 lg:py-0"}
                         (d/h2 {:class-name "text-2xl font-bold text-gray-900 lg:text-3xl dark:text-white"}
                               "sign in to moclojer")
                         (d/form {:disabled loading?
                                  :on-submit (fn [e]
                                               (.preventDefault e)
                                               (when (:email state)
                                                 (refx/dispatch [:app.auth/send-email state])))
                                  :class-name "mt-8 space-y-6"}
                                 (d/div
                                   (d/label
                                     {:for "email"
                                      :class-name "block mb-2 text-sm font-medium text-gray-900 dark:text-white"}
                                     "your email")
                                   (d/input
                                     {:for "email"
                                      :placeholder "name@company.com"
                                      :name "email"
                                      :value (:email state)
                                      :required true
                                      :on-change #(set-state assoc :email (.. % -target -value))
                                      :class-name (str "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500"
                                                       "block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                                                       "dark:focus:ring-primary-500 dark:focus:border-primary-500")}))
                                 (d/div {:class-name "flex items-start"}
                                        (d/div {:class-name "flex items-center h-5"}))
                                 ($ button
                                    {:type "submit"
                                     :disabled loading?
                                     :variant "solid-blue"
                                     :color "pink"}
                                    (if loading?
                                      (d/span {:class-name "inline-flex"}
                                              ($ loading-spinner {})
                                              "loading...")
                                      (d/span "login to your account")))
                                 (d/div {:class-name "text-sm font-medium text-gray-500 dark:text-gray-400"}
                                        (if error
                                          ($ alerts/error
                                             {:id "login-error"
                                              :error "Error... try it again."
                                              :description (:message error-res)})
                                          "if you don't have an account, it is created automatically"))))))))

(defnc first-login [{:keys [sent? loading?]}]
  (let [username (refx/use-sub [:app.auth/username-to-save])
        available? (refx/use-sub [:app.auth/is-username-available?])]
    (d/div {:class-name "flex flex-col justify-center items-center px-6 pt-8 mx-auto md:h-screen pt:mt-0 dark:bg-gray-900"}
           (d/div {:class-name (str "justify-center items-center w-full bg-white rounded-lg shadow lg:flex md:mt-0"
                                    "lg:max-w-screen-lg 2xl:max:max-w-screen-lg xl:p-0 dark:bg-gray-800")}
                  (d/div {:class-name "hidden w-2/3 lg:flex"}
                         (d/img {:src "/images/authentication/login.svg" :class-name "rounded-l-lg"}))
                  (if sent?
                    (d/div ($ loading-spinner)
                           "loading ...")
                    (d/div {:class-name "p-6 space-y-8 w-full sm:p-8 lg:p-16 lg:py-0"}
                           (if (and loading?
                                    (nil? username))
                             (d/div ($ loading-spinner)
                                    "loading ...")
                             (d/div
                              (d/h2 {:class-name "text-2xl font-bold text-gray-900 lg:text-3xl dark:text-white"}
                                    "welcome, enter your username.")
                              (d/form {:disabled loading?
                                       :on-submit (fn [e]
                                                    (.preventDefault e)
                                                    (when (and (not-empty username) available?)
                                                      (refx/dispatch [:app.auth/save-username username])))
                                       :class-name "mt-8 space-y-6"}
                                      (d/div
                                       (d/label
                                        {:for "username"
                                         :class-name "block mb-2 text-sm font-medium text-gray-900 dark:text-white"}
                                        "Your username")
                                       (d/input
                                        {:for "username"
                                         :placeholder "username"
                                         :name "username"
                                         :value username
                                         :required true
                                         :on-change (fn [e]
                                                      (.preventDefault e)
                                                      (refx/dispatch-sync [:app.auth/username-available?
                                                                           (.. e -target -value)]))

                                         :class-name "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"}))
                                      (d/div {:class-name "text-sm font-medium text-gray-500 dark:text-gray-400"}
                                             (d/b {:class-name "text-gray-900"} "*.<username>.")
                                             (d/span {:class-name "text-gray-500"} "moclojer.com"))

                                      ($ button
                                         {:class-name (if available? "" " cursor-not-allowed")
                                          :type "submit"
                                          :disabled (or loading? (not available?))
                                          :variant "solid-blue"
                                          :color (if available?
                                                   "pink"
                                                   "grey")}
                                         (if loading?
                                           (d/span {:class-name "inline-flex"}
                                                   ($ loading-spinner {})
                                                   "loading...")
                                           (d/span "Save"))))))))))))



(defnc first-login-view []
  (let [loading? (refx/use-sub [:app.auth/login-loading])
        sent? (refx/use-sub [:app.auth/username-sent])
        [error error-res] (refx/use-sub [:app.auth/login-error])]
    (hooks/use-effect
     [sent?]
     (when sent?
       (rfe/push-state :app.core/dashboard)))

    (d/div
     ($ view-container
        ($ first-login {:sent? sent?
                        :loading? loading?
                        :error error
                        :error-res error-res})))))

(defnc login-view []
  (let [loading? (refx/use-sub [:app.auth/login-loading])
        [error error-res] (refx/use-sub [:app.auth/login-error])
        email-sent? (refx/use-sub [:app.auth/email-sent])
        [state set-state] (hooks/use-state {:email ""})]
    ($ view-container
       ($ login {:sent? email-sent?
                 :loading? loading?
                 :error error
                 :error-res error-res
                 :state state
                 :set-state set-state}))))
