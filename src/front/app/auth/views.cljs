(ns front.app.auth.views
  (:require
   [front.app.auth.db :as auth.db]
   [front.app.auth.supabase :as supabase]
   [front.app.components.alerts :as alerts]
   [front.app.components.button :refer [button]]
   [front.app.components.loading :refer [loading-spinner]]
   [front.app.components.navlink :refer [nav-link]]
   [front.app.lib :refer [defnc]]
   [helix.core :refer [$]]
   [helix.dom :as d]
   [helix.hooks :as hooks]
   [promesa.core :as p]
   [refx.alpha :as refx]
   [reitit.frontend.easy :as rfe]))

(defn- js->cljs-key [obj]
  (js->clj obj :keywordize-keys true))

(defnc login-view []
  (let [loading? (refx/use-sub [:app.auth/login-loading])
        [error error-res] (refx/use-sub [:app.auth/login-error])
        email-sent? (refx/use-sub [:app.auth/email-sent])
        [state set-state] (hooks/use-state {:email ""})
        [session set-session] (hooks/use-state nil)]

    (hooks/use-effect
     [session]
     (prn "window.location" (.-href (.-location js/window)))
     (when (and session (not (nil? (-> session :data :session))))
       (refx/dispatch [:app.auth/set-user-session session])))

    (hooks/use-effect
     :once
     (let [auth (.-auth supabase/client)]
       (-> (.getSession auth)
           (p/then
            (fn [resp]
              (prn :session (js->cljs-key resp))
              ;; user session is nil, redirect to login
              (if-not (-> (js->cljs-key resp) :data)
                (rfe/push-state :app.core/login)
                (set-session (js->cljs-key resp))))))))

    (hooks/use-effect
     :once
     (supabase/event-changes
      (fn [event s]
        (case event
          "SIGNED_IN" (refx/dispatch-sync [:app.auth/save-user s])
          "SIGNED_OUT" (do
                         (auth.db/remove-cookie "current-user")
                         (set-session s))))))

    (d/body {:class-name "bg-gray-50 dark:bg-gray-800"}
            (d/main {:class-name "bg-gray-50 dark:bg-gray-900"}
                    (d/div {:class-name "flex flex-col justify-center items-center px-6 pt-8 mx-auto md:h-screen pt:mt-0 dark:bg-gray-900"}
                           (d/div {:class-name "justify-center items-center w-full bg-white rounded-lg shadow lg:flex md:mt-0 lg:max-w-screen-lg 2xl:max:max-w-screen-lg xl:p-0 dark:bg-gray-800"}
                                  (d/div {:class-name "hidden w-2/3 lg:flex"}
                                         (d/img {:src "/images/authentication/login.svg" :class-name "rounded-l-lg"}))
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
                                             ($ nav-link
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
                                                   ($ button
                                                      {:type "submit"
                                                       :disabled loading?
                                                       :variant "solid-blue"
                                                       :color "pink"}
                                                      (if loading?
                                                        (d/span {:class-name "inline-flex"}
                                                                ($ loading-spinner {})
                                                                "Loading...")
                                                        (d/span "Login to your account")))
                                                   (d/div {:class-name "text-sm font-medium text-gray-500 dark:text-gray-400"}
                                                          (if error
                                                            ($ alerts/error
                                                               {:id "login-error"
                                                                :error "Error... try it again."
                                                                :description (:message error-res)})
                                                            "if you don't have an account, it is created automatically")))))))))))

