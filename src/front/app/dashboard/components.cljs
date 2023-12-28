(ns front.app.dashboard.components
  (:require
   [front.app.auth.supabase :as supabase]
   [front.app.components.svg :as svg]
   [front.app.lib :refer [defnc]]
   [helix.core :refer [$]]
   [helix.dom :as d]
   [helix.hooks :as hooks]
   [refx.alpha :as refx]
   [reitit.frontend.easy :as rfe]))

(defnc nav-bar [{:keys [toggle-sidebar set-toggle user-data]}]
  (d/nav
   {:class-name "fixed z-30 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700"}
   (d/div
    {:class-name "py-3 px-3 lg:px-5 lg:pl-3"}
    (d/div
     {:class-name "flex justify-between items-center"}
     (d/div {:class-name "flex justify-start items-center"}
            (d/button {:id "toggleSidebar"
                       :aria-expanded "true"
                       :aria-controls "sidebar"
                       :on-click (fn [_e]
                                   (refx/dispatch [:app.dashboard.events/toggle-menu])
                                   (set-toggle (not toggle-sidebar)))
                       :class-name "hidden p-2 mr-3 text-gray-600 rounded cursor-pointer lg:inline hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700"}
                      (d/svg
                       {:class-name "w-6 h-6" :fill "currentColor"
                        :viewBox "0 0 20 20"}
                       (d/path {:fill-rule "evenodd"
                                :d "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                :clip-rule "evenodd"})))
            (d/button {:id "toggleSidebarMobile"
                       :class-name "p-2 mr-2 text-gray-600 rounded cursor-pointer lg:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                       :aria-expanded "true"

                       :aria-controls  "sidebar"}
                      (d/svg {:id "toggleSidebarMobileHamburger"
                              :class-name "w-6 h-6"
                              :viewBox "0 0 20 20"
                              :fill "currentColor"}
                             (d/path {:fill-rule "evenodd"
                                      :d "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                      :clip-rule "evenodd"}))
                      (d/svg {:id "toggleSidebarMobileClose"
                              :class-name "hidden w-6 h-6"
                              :fill "currentColor"
                              :viewBox "0 0 20 20"}
                             (d/path {:fill-rule "evenodd"
                                      :d "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                      :clip-rule "evenodd"})))
            (d/a {:href "#" :class-name "flex mr-14"}
                 (d/img {:src "/images/logo.png"
                         :class-name "mr-3 h-8"})
                 (d/span {:class-name "self-center text-2xl font-semibold whitespace-nowrap dark:text-white"})))
     (d/div {:class-name "flex items-center lg:gap-3"}
            (d/div {:class-name "px-3 py-2 bg-pink-600 rounded-lg justify-end items-center gap-2 flex btn-add"}
                   (d/svg {:width "16"
                           :height "17"
                           :viewBox "0 0 16 17"
                           :fill "none"}
                          (d/path {:fill-rule "evenodd"
                                   :clip-rule "evenodd"
                                   :d "M8 4.5C8.21217 4.5 8.41566 4.58429 8.56569 4.73431C8.71571 4.88434 8.8 5.08783 8.8 5.3V7.7H11.2C11.4122 7.7 11.6157 7.78429 11.7657 7.93431C11.9157 8.08434 12 8.28783 12 8.5C12 8.71217 11.9157 8.91566 11.7657 9.06569C11.6157 9.21571 11.4122 9.3 11.2 9.3H8.8V11.7C8.8 11.9122 8.71571 12.1157 8.56569 12.2657C8.41566 12.4157 8.21217 12.5 8 12.5C7.78783 12.5 7.58434 12.4157 7.43431 12.2657C7.28429 12.1157 7.2 11.9122 7.2 11.7V9.3H4.8C4.58783 9.3 4.38434 9.21571 4.23431 9.06569C4.08429 8.91566 4 8.71217 4 8.5C4 8.28783 4.08429 8.08434 4.23431 7.93431C4.38434 7.78429 4.58783 7.7 4.8 7.7H7.2V5.3C7.2 5.08783 7.28429 4.88434 7.43431 4.73431C7.58434 4.58429 7.78783 4.5 8 4.5V4.5Z"
                                   :fill "white"}))
                   (d/button {:class-name "text-white text-xs font-bold leading-[18px]"
                              :on-click (fn [_] (refx/dispatch [:app.dashboard/toggle-mock-modal]))}
                             " new mock")
                   ($ svg/box))
            (d/div {:class-name "hidden lg:block"}
                   (d/button {:type "button"
                              :class-name "flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                              :id "user-menu-button-2"
                              :aria-expanded "false"
                              :data-dropdown-toggle "dropdown-2"}
                             (d/span {:class-name "sr-only"} "Open user menu")
                             (d/img {:class-name "w-8 h-8 rounded-full" :src "/images/users/avatar.png"}))
                   (d/div {:class-name "hidden z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                           :id "dropdown-2"}
                          (d/div {:class-name "py-3 px-4" :role "none"}
                                 (d/p {:class-name "text-sm font-medium text-gray-900 truncate dark:text-gray-300" :role "none"}
                                      (:email user-data)))
                          (d/ul {:class-name "py-1" :role "none"}
                                (d/li
                                 (d/a {:href ""
                                       :class-name "block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                                       :role "menuitem"}
                                      "Settings"))

                                (d/li

                                 (d/button
                                  {:class-name "block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                                   :on-click (fn [e]
                                               (.preventDefault e)
                                               (supabase/sign-out
                                                #(refx/dispatch-sync [:app.auth/logout %])))
                                   :role "menuitem"}
                                  "Logout"))))))))))

(defnc aside [{:keys [is-sidebar-toogle? set-toggle]}]
  (let [mocks-raw (refx/use-sub [:app.dashboard/mocks-raw])
        is-menu-open? (refx/use-sub [:app.dashboard/is-menu-open?])
        current-user (refx/use-sub [:app.auth/current-user])]

    (hooks/use-effect
     [mocks-raw]
     (when (nil? mocks-raw)
       (refx/dispatch-sync [:app.dashboard/get-mocks current-user])))

    (d/div {:class-name "flex overflow-hidden pt-16 bg-gray-50 dark:bg-gray-900"}
           (d/aside {:id "sidebar"
                     :on-mouse-enter (fn [_e]
                                       (when is-sidebar-toogle?
                                         (refx/dispatch-sync [:app.dashboard/toggle-menu])
                                         (set-toggle false)))
                     :on-mouse-leave (fn [_e]
                                       (when is-sidebar-toogle?
                                         (set-toggle true)))
                     :class-name (str "flex hidden fixed top-0 left-0 z-20 flex-col flex-shrink-0 pt-16 w-64 h-full duration-75 lg:flex transition-width "
                                      (when is-sidebar-toogle? "lg:w-16"))
                     :aria-label "Sidebar"}
                    (d/div {:class-name "flex relative flex-col flex-1 pt-0 min-h-0 bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700"}
                           (d/div {:class-name "flex overflow-y-auto flex-col flex-1 pt-5 pb-4"}
                                  (d/div {:class-name "flex-1 px-3 space-y-1 bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700"}
                                         (d/ul {:class-name "pb-2 space-y-2"}
                                               (d/li)
                                               (d/li
                                                (d/a {:href ""
                                                      :class-name "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700"
                                                      :on-click (fn [_e]
                                                                  (prn :click :home)
                                                                  (rfe/push-state :app.core/dashboard))}
                                                     (d/svg {:class-name "w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                                                             :fill "none" :viewBox "0 0 24 24"}
                                                            (d/path {:fill "#111928"
                                                                     :clip-rule "evenodd"
                                                                     :fill-rule "evenodd"
                                                                     :d "M11.3861 1.21065C11.7472 0.929784 12.2528 0.929784 12.6139 1.21065L21.6139 8.21065C21.8575 8.4001 22 8.69141 22 9V20C22 20.7957 21.6839 21.5587 21.1213 22.1213C20.5587 22.6839 19.7957 23 19 23H5C4.20435 23 3.44129 22.6839 2.87868 22.1213C2.31607 21.5587 2 20.7957 2 20V9C2 8.69141 2.14247 8.4001 2.38606 8.21065L11.3861 1.21065ZM4 9.48908V20C4 20.2652 4.10536 20.5196 4.29289 20.7071C4.48043 20.8946 4.73478 21 5 21H19C19.2652 21 19.5196 20.8946 19.7071 20.7071C19.8946 20.5196 20 20.2652 20 20V9.48908L12 3.26686L4 9.48908Z"})
                                                            (d/path {:fill "#111928"
                                                                     :fill-rule "evenodd"
                                                                     :clip-rule "evenodd"
                                                                     :d "M8 12C8 11.4477 8.44772 11 9 11H15C15.5523 11 16 11.4477 16 12V22C16 22.5523 15.5523 23 15 23C14.4477 23 14 22.5523 14 22V13H10V22C10 22.5523 9.55228 23 9 23C8.44772 23 8 22.5523 8 22V12Z"}))
                                                     (d/span {:class-name (str "ml-3 "
                                                                               (when is-sidebar-toogle?
                                                                                 "lg:hidden lg:absolute"))} "Home")))
                                               (d/li
                                                (d/button
                                                 {:href ""
                                                  :on-click (fn [_e]
                                                              (if (empty? mocks-raw)
                                                                (refx/dispatch-sync [:app.dashboard/toggle-mock-modal])
                                                                (do (refx/dispatch-sync [:app.dashboard/toggle-menu])
                                                                    (rfe/push-state :app.core/mocks))))
                                                  :class-name "flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                                                  :aria-controls "dropdown-mocks"
                                                  :aria-expanded  is-menu-open?
                                                  :data-collapse-toggle "dropdown-mocks"}
                                                 (d/svg {:class-name "flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                                                         :fill "currentColor"
                                                         :viewBox "0 0 24 24"}
                                                        (d/path {:d "M10.5021 1.40273C10.9577 1.14023 11.4742 1.00204 12 1.00204C12.5258 1.00204 13.0424 1.14024 13.4979 1.40276C13.4986 1.40317 13.4993 1.40357 13.5 1.40397L20.5 5.40396C20.9556 5.66701 21.334 6.04524 21.5973 6.50071C21.8606 6.95618 21.9995 7.47288 22 7.99897V16.001C21.9995 16.5271 21.8606 17.0438 21.5973 17.4993C21.334 17.9547 20.9556 18.333 20.5 18.596L20.4961 18.5982L13.5 22.596C13.4994 22.5964 13.4988 22.5967 13.4982 22.5971C13.0426 22.8597 12.5259 22.9979 12 22.9979C11.4741 22.9979 10.9575 22.8597 10.5019 22.5971C10.5012 22.5967 10.5006 22.5964 10.5 22.596L3.50386 18.5982L3.5 18.596C3.04439 18.333 2.66597 17.9547 2.40269 17.4993C2.13941 17.0438 2.00054 16.5271 2 16.001V7.99897C2.00054 7.47288 2.13941 6.95618 2.40269 6.50071C2.66597 6.04524 3.04439 5.66701 3.5 5.40397L3.50386 5.40174L10.5021 1.40273ZM12 3.00204C11.8245 3.00204 11.652 3.04825 11.5 3.13602L11.4961 3.13825L4.5 7.13602C4.49947 7.13632 4.49895 7.13663 4.49842 7.13693C4.34726 7.22457 4.22169 7.3503 4.13423 7.5016C4.04654 7.6533 4.00025 7.82537 4 8.00059V15.9994C4.00025 16.1746 4.04654 16.3467 4.13423 16.4984C4.22169 16.6497 4.34726 16.7754 4.49842 16.8631C4.49895 16.8634 4.49947 16.8637 4.5 16.864L11.5 20.864C11.652 20.9517 11.8245 20.9979 12 20.9979C12.1755 20.9979 12.348 20.9517 12.5 20.864L12.5039 20.8618L19.5 16.864C19.5005 16.8637 19.5011 16.8634 19.5016 16.8631C19.6527 16.7754 19.7783 16.6497 19.8658 16.4984C19.9535 16.3466 19.9998 16.1743 20 15.999V8.00102C19.9998 7.82566 19.9535 7.65342 19.8658 7.5016C19.7783 7.35031 19.6527 7.22458 19.5016 7.13694C19.5011 7.13663 19.5005 7.13633 19.5 7.13602L12.5 3.13603C12.348 3.04826 12.1755 3.00204 12 3.00204Z"
                                                                 :clip-rule "evenodd"
                                                                 :fill-rule "evenodd"})

                                                        (d/path {:d "M2.40433 6.45928C2.68088 5.98122 3.2926 5.81786 3.77066 6.0944L11.9999 10.8547L20.2292 6.0944C20.7073 5.81786 21.319 5.98122 21.5955 6.45928C21.8721 6.93734 21.7087 7.54907 21.2307 7.82561L12.5007 12.8756C12.1909 13.0548 11.809 13.0548 11.4992 12.8756L2.76922 7.82561C2.29116 7.54907 2.12779 6.93734 2.40433 6.45928Z"
                                                                 :clip-rule "evenodd"
                                                                 :fill-rule "evenodd"})
                                                        (d/path {:d "M12 11C12.5523 11 13 11.4477 13 12V22.08C13 22.6323 12.5523 23.08 12 23.08C11.4477 23.08 11 22.6323 11 22.08V12C11 11.4477 11.4477 11 12 11Z"
                                                                 :clip-rule "evenodd"
                                                                 :fill-rule "evenodd"}))
                                                 (d/span {:class-name (str "flex-1 ml-3 text-left whitespace-nowrap "
                                                                           (when is-sidebar-toogle?
                                                                             "lg:hidden lg:absolute"))} "Mocks")
                                                 (d/svg {:class-name "w-6 h-6" :fill "currentColor" :viewBox "0 0 20 20"}
                                                        (d/path {:d "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                                 :clip-rule "evenodd"
                                                                 :fill-rule "evenodd"})))
                                                (d/ul {:id "dropdown-mocks" :class-name (if is-menu-open?
                                                                                          (str "py-2 space-y-2")
                                                                                          "hidden py-2 space-y-2")}
                                                      (for [{:keys [mock-type wildcard]
                                                             :or {mock-type :personal}} mocks-raw]
                                                        (d/li
                                                         {:key wildcard}
                                                         (d/a {:href ""
                                                               :on-click (fn [_e]
                                                                           (rfe/push-state :app.core/mocks))
                                                               :class-name (str (if is-sidebar-toogle? "px-4 " "pl-11 ")
                                                                                "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700")}
                                                              (when-not is-sidebar-toogle?
                                                                (if (= mock-type :personal)
                                                                  ($ svg/personal-mock)
                                                                  ($ svg/org-mock)))
                                                              (d/a {:href ""
                                                                    :on-click (fn [_] (rfe/push-state :app.core/mocks-view {:mock-id (:key wildcard)}))}
                                                                   (if is-sidebar-toogle?
                                                                     (d/span (first wildcard))
                                                                     (d/span {:class-name "flex-1 ml-3 text-left whitespace-nowrap"} wildcard)))))))))

                                         (d/div {:class-name "pt-2 space-y-2"}
                                                (d/a {:href ""
                                                      :target "_blank"
                                                      :class-name "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700"}
                                                     (d/svg {:class-name "flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                                                             :fill "currentColor"
                                                             :viewBox "0 0 20 20"}
                                                            (d/path {:d "M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"})
                                                            (d/path {:d "M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                                                                     :clip-rule "evenodd"}))
                                                     (d/span {:class-name
                                                              (str "ml-3 "
                                                                   (when is-sidebar-toogle?
                                                                     "lg:hidden lg:absolute"))}
                                                             "Docs"))
                                                (d/a {:href ""
                                                      :target "_blank"
                                                      :class-name "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700"}
                                                     (d/svg {:class-name "flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                                                             :fill "currentColor"
                                                             :viewBox "0 0 20 20"}
                                                            (d/path {:fill-rule "evenodd"
                                                                     :d "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z"}))
                                                     (d/span
                                                      {:class-name
                                                       (str "ml-3 "
                                                            (when is-sidebar-toogle?
                                                              "lg:hidden lg:absolute"))}
                                                      "Help")))))
                           (d/div {:class-name (str  "hidden absolute bottom-0 left-0 justify-center p-4 space-x-4 w-full lg:flex"
                                                     (when is-sidebar-toogle?
                                                       " flex-col space-y-4 p-2"))}
                                  (d/button
                                   {:on-click (fn [e]
                                                (.preventDefault e)
                                                (supabase/sign-out
                                                 #(refx/dispatch-sync [:app.auth/logout %])))
                                    :class-name "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700"}
                                   (d/svg {:class-name "flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                                           :fill "currentColor"
                                           :viewBox "0 0 20 20"}
                                          (d/path {:fill-rule "evenodd"
                                                   :d "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z"}))
                                   (when (not is-sidebar-toogle?)
                                     (d/span {:class-name "ml-3"}
                                             "Logout")))))))))
