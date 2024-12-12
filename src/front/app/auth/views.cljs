(ns front.app.auth.views
  (:require
   [mockingbird.components.button :refer [button]]
   [mockingbird.components.image :refer [image]]
   [mockingbird.components.input :refer [input]]
   [front.app.components.alerts :as alerts]
   [front.app.components.container :refer [container]]
   [front.app.components.section :refer [section]]
   [front.app.components.loading :refer [loading-spinner]]
   [front.app.components.navlink :refer [nav-link]]
   [front.app.components.svg :refer [github]]
   [front.app.lib :refer [defnc]]
   [helix.core :refer [$]]
   [helix.dom :as d]
   [helix.hooks :as hooks]
   [refx.alpha :as refx]
   [reitit.frontend.easy :as rfe]))

(defn inspect [a] (js/console.log a) a)
(defnc not-found-view []
  (d/div "404"))

(defnc login [{:keys [sent? loading?
                      state set-state
                      error error-res]}]
  ($ container {}
     (d/div {:class (str "flex justify-center items-center w-full bg-white rounded-lg shadow lg:flex "
                         "md:mt-0 lg:max-w-screen-lg 2xl:max:max-w-screen-lg xl:p-0 dark:bg-gray-800")}
            (d/div {:class "hidden w-2/3 lg:flex"}
                   (d/div {:class " "}
                          ($ image {:src "/images/authentication/login.svg"
                                    :class "rounded-l-lg "})))
            (if sent?
              (d/div {:id "login-email-sent"
                      :class "p-6 space-y-8 w-full sm:p-8 lg:p-16 lg:py-0"}
                     (d/h2
                      {:class "font-semibold text-gray-900"}
                      "Sign in to moclojer")
                     (d/div
                      {:class "font-semibold text-gray-900"}
                      "Check your email")
                     (d/div
                      (d/div
                       {:class "ml-3 "}
                       "If you have an account with us, we’ve sent an email to "
                       (:email state)
                       " with a link that you can use to sign in.")
                      (d/div
                       {:class "ml-3 "}
                       "You can also "
                       ($ nav-link
                          {:children "try again."
                           :on-click (fn [e]
                                       (.preventDefault e)
                                       (refx/dispatch [:app.auth/send-email-again]))
                           :href "#"}))))
              ($ section {:class "p-6 space-y-8 w-full sm:p-8 lg:p-16 lg:py-0"}
                 (d/h2 {:class "text-2xl font-bold text-gray-900 lg:text-3xl dark:text-white"}
                       "sign in to moclojer")
                 (d/form {:disabled loading?
                          :on-submit (fn [e]
                                       (.preventDefault e)
                                       (if (and (not (= (:email state) "")) (= (:provider state) ""))
                                         (refx/dispatch [:app.auth/send-email state])
                                         (refx/dispatch [:app.auth/send-oauth state])))
                          :class "mt-8 space-y-8 "}

                         (d/div 
                          ($ input
                             {:for "email"
                              :label "your email"
                              :placeholder "name@company.com"
                              :on-change #(set-state assoc :email (.. % -target -value) :provider "")})

                          (d/div {:class "w-8 lg:w-full h-8 lg:h-6 flex flex-row justify-center items-center mt-4 lg:mt-2  lg:justify-start lg:items-start "}
                                 (d/span {:class "hidden text-gray-300 lg:flex justify-start items-start m-0 lg:mr-2 lg:ml-1"} "or")
                                 ($ button {:roundness :full
                                            :class "flex justify-center flex-col items-center w-8 h-8 lg:w-6 lg:h-6"
                                            :on-click #(set-state assoc :provider "github" :email "")}

                                    (d/div {:class "flex text-gray-400 "}
                                           ($ github)))))

                         (d/div {:class "flex items-start "}
                                (d/div {:class "flex items-center h-6 lg:h-12"}))

                         (d/div
                          ($ button {:class (str (if loading?
                                                   "bg-gray-700 "
                                                   "bg-mockingbird-main ")
                                                 "hover:bg-mockingbird-400 ")
                                     :type :submit
                                     :theme :mockingbird
                                     :size :full
                                     :label "login to your account"}
                             (if loading?
                               (d/span {:class "inline-flex"}
                                       ($ loading-spinner {})
                                       "loading...")
                               (d/span "login to your account"))))

                         (d/div {:class "text-sm font-medium text-gray-500 dark:text-gray-400"}
                                (if (inspect error)
                                  ($ alerts/error
                                     {:id "login-error"
                                      :error "Error... try it again."
                                      :description (:message error-res)})
                                  "if you don't have an account, it is created automatically"))))))))

(defnc first-login [{:keys [sent? loading?]}]
  (let [username (refx/use-sub [:app.auth/username-to-save])
        available? (refx/use-sub [:app.auth/is-username-available?])]
    (d/div {:class "flex flex-col justify-center items-center px-6 pt-8 mx-auto md:h-screen pt:mt-0 dark:bg-gray-900"}
           (d/div {:class (str "flex justify-center items-center w-full bg-white rounded-lg shadow lg:flex "
                               "md:mt-0 lg:max-w-screen-lg 2xl:max:max-w-screen-lg xl:p-0 dark:bg-gray-800")}
                  (d/div {:class "hidden w-2/3 lg:flex"}
                         ($ image {:src "/images/authentication/login.svg"
                                   :class "rounded-l-lg "}))
                  (if sent?
                    (d/div ($ loading-spinner)
                           "loading ...")
                    (d/div {:class "p-6 space-y-8 w-full sm:p-8 lg:p-16 lg:py-0"}
                           (if (and loading?
                                    (nil? username))
                             (d/div ($ loading-spinner)
                                    "loading ...")
                             (d/div
                              (d/h2 {:class "text-2xl font-bold text-gray-900 lg:text-3xl dark:text-white"}
                                    "welcome, enter your username.")
                              (d/form {:disabled loading?
                                       :on-submit (fn [e]
                                                    (.preventDefault e)
                                                    (when (and (not-empty username) available?)
                                                      (refx/dispatch [:app.auth/save-username username])))
                                       :class "mt-8 space-y-6 "}
                                      (d/div
                                       ($ input
                                          {:for "username"
                                           :name "username"
                                           :label "your username"
                                           :placeholder "username"
                                           :input-template "login"
                                           :label-template "default"
                                           :on-change (fn [e]
                                                        (.preventDefault e)
                                                        (refx/dispatch-sync [:app.auth/username-available?
                                                                             (.. e -target -value)]))}))

                                      (d/div {:class "text-sm font-medium text-gray-500 dark:text-gray-400"}
                                             (d/b {:class "text-gray-900"} "*.<username>.")
                                             (d/span {:class "text-gray-500"} "moclojer.com"))

                                      ($ button {:class (str (if loading?
                                                               "bg-gray-700 "
                                                               "bg-mockingbird-main ")
                                                             "hover:bg-mockingbird-400 "
                                                             (when (not available?) " cursor-not-allowed "))
                                                 :type :submit
                                                 :theme :mockingbird
                                                 :size :full
                                                 :disabled (if (or loading? (not available?))
                                                             true
                                                             false)}
                                         (if loading? (d/span {:class "inline-flex"}
                                                              ($ loading-spinner {}) "loading...")
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
     ($ section
        ($ first-login {:sent? sent?
                        :loading? loading?
                        :error error
                        :error-res error-res})))))

(defnc login-view []
  (let [loading? (refx/use-sub [:app.auth/login-loading])
        [error error-res] (refx/use-sub [:app.auth/login-error])
        email-sent? (refx/use-sub [:app.auth/email-sent])
        [state set-state] (hooks/use-state {:email "" :provider ""})]
    ($ section
       ($ login {:sent? email-sent?
                 :loading? loading?
                 :error error
                 :error-res error-res
                 :state state
                 :set-state set-state}))))
