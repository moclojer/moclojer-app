(ns front.app.components.aside
  (:require [front.app.auth.supabase :as supabase]
            [front.app.components.button :refer [new-mock-btn]]
            [front.app.components.svg :as svg]
            [front.app.lib :refer [defnc]]
            [helix.core :refer [$]]
            [helix.dom :as d]
            [helix.hooks :as hooks]
            [refx.alpha :as refx]
            [reitit.frontend.easy :as rfe]))


(defnc aside [_]
  (let [mocks-raw (refx/use-sub [:app.dashboard/mocks-raw])
        menu-open? (refx/use-sub [:app.dashboard/is-menu-open?])
        current-user (refx/use-sub [:app.auth/current-user])
        aside (refx/use-sub [:app.dashboard/aside])
        aside-open? (:open? aside)]

    (hooks/use-effect
      [mocks-raw]
      (when (nil? mocks-raw)
        (refx/dispatch-sync [:app.dashboard/get-mocks current-user])))

    (d/div {:class-name "flex overflow-hidden pt-16 bg-gray-50 dark:bg-gray-900"}
           (d/aside {:id "sidebar"
                     :class (str "fixed top-0 left-0 z-20 flex-col flex-shrink-0 pt-16 w-full h-full duration-75 transition-width "
                                 (if aside-open? "flex lg:w-64" "hidden lg:flex lg:w-16"))
                     :aria-label "Sidebar"}

                    (d/div {:class-name (str "flex relative flex-col flex-1 pt-0 min-h-0 bg-white border-r"
                                             "border-gray-200 dark:bg-gray-800 dark:border-gray-700")}
                           (d/div {:class-name "flex overflow-y-auto flex-col flex-1 pt-5 pb-4"}
                                  (d/div {:class-name "flex-1 px-3 space-y-1 bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700"}
                                         (d/ul {:class-name "pb-2 space-y-2"}
                                               (d/li
                                                 (d/button
                                                   {:id "aside-toggle"
                                                    :class (str (if aside-open?
                                                                  "absolute -right-4 "
                                                                  "block w-full ")
                                                                "p-1 flex flex-row justify-center z-50 bg-gray-300 rounded-lg "
                                                                "opacity-30 hover:opacity-100 transition-all")
                                                    :on-click #(refx/dispatch [:app.dashboard/toggle-aside! (not aside-open?)])}
                                                   ($ svg/arrow {:direction (if aside-open? :left :right)
                                                                 :class "w-3 h-3"})))

                                               (d/li
                                                 (d/button {:class-name (str "w-full flex items-center p-2 text-base font-normal text-gray-900 rounded-lg"
                                                                             "hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700")
                                                            :on-click #(rfe/push-state :app.core/dashboard)}
                                                           ($ svg/house)
                                                           (d/span {:class-name (str "ml-3 "
                                                                                     (when-not aside-open?
                                                                                       "lg:hidden lg:absolute"))} "Home")))
                                               (d/li
                                                 (d/div {:class "flex flex-row"}
                                                        (d/button
                                                          {:on-click #(rfe/push-state :app.core/mocks)
                                                           :class-name (str "flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg "
                                                                            "transition duration-75 group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700 ")
                                                           :aria-controls "dropdown-mocks"
                                                           :aria-expanded aside-open?
                                                           :data-collapse-toggle "dropdown-mocks"}
                                                          ($ svg/mock-list-box)
                                                          (d/span {:class-name (str "flex-1 ml-3 text-left whitespace-nowrap "
                                                                                    (when-not aside-open?
                                                                                      "lg:hidden lg:absolute"))} "Mocks"))
                                                        (d/button {:class (str "px-2 rounded-lg fill-gray-200 bg-transparent hover:bg-gray-200 hover:fill-gray-400 "
                                                                               (if aside-open? "block " "hidden "))
                                                                   :on-click #(refx/dispatch-sync [:app.dashboard/toggle-menu])}
                                                                  ($ svg/arrow {:direction (if menu-open? :up :down)})))
                                                 (d/ul {:id "dropdown-mocks"
                                                        :class-name (str "py-2 space-y-2"
                                                                         (when (or (not menu-open?) (not aside-open?)) " hidden"))}
                                                       (if (empty? mocks-raw)
                                                         (d/div {:class "w-full pl-11 space-y-2"}
                                                                (d/p {:class "text-gray-700 text-sm"} "You currently don't have any mocks. Create one!")
                                                                ($ new-mock-btn))
                                                         (for [{:keys [mock-type wildcard id]
                                                                :or {mock-type :personal}} mocks-raw]
                                                           (d/li
                                                             {:key wildcard}
                                                             (d/button {:on-click #(rfe/push-state :app.core/mocks-view {:mock-id id})
                                                                        :class-name (str "pl-11 w-full flex items-center overflow-hidden ellipsis p-2 "
                                                                                         "text-base font-normal text-gray-900 rounded-lg transition "
                                                                                         "duration-75 group hover:bg-gray-100 dark:text-gray-200 "
                                                                                         "dark:hover:bg-gray-700")}
                                                                       (if (= mock-type :personal)
                                                                         ($ svg/personal-mock)
                                                                         ($ svg/org-mock))
                                                                       (d/span {:class-name "flex-1 ml-3 text-left truncate"} wildcard))))))))
                                         (d/div {:class-name "pt-2 space-y-2"}
                                                (d/a {:href "https://docs.moclojer.com/"
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
                                                                   (when-not aside-open?
                                                                     "lg:hidden lg:absolute"))}
                                                             "Docs"))
                                                (d/a {:href "https://discord.gg/pbhBzKjhTb"
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
                                                             (when-not aside-open?
                                                               "lg:hidden lg:absolute"))}
                                                       "Help")))))
                           (d/div {:class-name (str  "absolute bottom-0 left-0 justify-center p-4 space-x-4 w-full lg:flex"
                                                    (when aside-open?
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
                                    (when aside-open?
                                      (d/span {:class-name "ml-3"}
                                              "Logout")))))))))
