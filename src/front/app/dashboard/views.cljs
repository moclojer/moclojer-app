(ns front.app.dashboard.views
  (:require
   [helix.core :refer [defnc $]]
   [helix.dom :as d]
   [front.app.lib :refer [defnc]]))

(defnc MainBody []
  (d/div
   {:class-name "overflow-y-auto relative w-full h-full bg-gray-50 lg:ml-64 dark:bg-gray-900" :id "main-content"}
   (d/main
    (d/div {:class-name "p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5 dark:bg-gray-800 dark:border-gray-700"}
           (d/div {:class-name "flex items-center divide-x divide-gray-100 dark:divide-gray-700"}
                  (d/div {:class-name "pl-3 text-sm font-medium text-gray-500"}
                         "Today, 11:01 AM")))
    (d/div {:class-name "p-5"}
           (d/div {:class-name "flex items-center mb-4"}
                  (d/div {:class-name "flex-shrink-0"}
                         (d/img {:class-name "w-8 h-8 rounded-full" :src "./images/users/avatar.png"}))
                  (d/div {:class-name "ml-4"}
                         (d/div {:class-name "text-base font-semibold text-gray-900 truncate dark:text-white"}
                                "Avelino")
                         (d/div {:class-name "text-sm text-gray-500 text-normal dark:text-gray-400"}
                                "avelino@cljazz.co")))
           (d/h1 {:class-name "mb-4 text-2xl font-bold text-gray-900 dark:text-white"}
                 "Welcome to moclojer SaaS beta")
           (d/div {:class-name "space-y-2"}
                  (d/p {:class-name "text-base font-normal text-gray-500 dark:text-gray-400"}
                       "Moclojer is an open source project developed by the company cljazz (with input from the Clojure community)." (d/br)
                       "I'm happy to have you here, we are launching the SaaS version of moclojer, seeking to make it simple for you to put a mock API in the air to develop your projects." (d/br))
                  (d/p {:class-name "text-base font-normal text-gray-500 dark:text-gray-400"}
                       "I look forward to your feedback (this is the only way we can improve the product).")

                  (d/p {:class-name "text-base font-normal text-gray-500 dark:text-gray-400"}
                       "Best Regards,"
                       (d/br)
                       "Avelino CEO"))))))

(defnc Aside []
  (d/div {:class-name "flex overflow-hidden pt-16 bg-gray-50 dark:bg-gray-900"}
         (d/aside {:id "sidebar"
                   :class-name "flex hidden fixed top-0 left-0 z-20 flex-col flex-shrink-0 pt-16 w-64 h-full duration-75 lg:flex transition-width"
                   :aria-label "Sidebar"}
                  (d/div {:class-name "flex relative flex-col flex-1 pt-0 min-h-0 bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700"}
                         (d/div {:class-name "flex overflow-y-auto flex-col flex-1 pt-5 pb-4"}
                                (d/div {:class-name "flex-1 px-3 space-y-1 bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700"}
                                       (d/ul {:class-name "pb-2 space-y-2"}
                                             (d/li)
                                             (d/li
                                              (d/a {:href "" :class-name "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700"}
                                                   (d/svg {:class-name "w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                                                           :fill "currentColor" :viewBox "0 0 20 20"}
                                                          (d/path {:d "M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"})
                                                          (d/path {:d "M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"}))
                                                   (d/span {:class-name "ml-3" :sidebar-toggle-item "true"} "Home")))
                                             (d/li
                                              (d/a {:href "" :class-name "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700"}
                                                   (d/svg {:class-name "w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                                                           :fill "currentColor" :viewBox "0 0 20 20"}
                                                          (d/path {:d "M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"})
                                                          (d/path {:d "M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"}))
                                                   (d/span {:class-name "ml-3" :sidebar-toggle-item "true"} "Home")))
                                             (d/li
                                              (d/button
                                               {:href ""
                                                :class-name "flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                                                :aria-controls "dropdown-mocks"
                                                :data-collapse-toggle "dropdown-mocks"}
                                               (d/svg {:class-name "flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                                                       :fill "currentColor"
                                                       :viewBox "0 0 20 20"}
                                                      (d/path {:d "M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" :clip-rule "evenodd"})
                                                      (d/path {:d "M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"}))
                                               (d/span {:class-name "flex-1 ml-3 text-left whitespace-nowrap" :sidebar-toggle-item "true"} "Mocks")
                                               (d/svg {:class-name "w-6 h-6" :fill "currentColor" :viewBox "0 0 20 20"}
                                                      (d/path {:d "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                               :clip-rule "evenodd"
                                                               :fill-rule "evenodd"})))
                                              (d/ul {:id "dropdown-mocks" :class-name "hidden py-2 space-y-2"}
                                                    (d/li
                                                     (d/a {:href ""
                                                           :class-name "flex items-center p-2 pl-11 text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"}
                                                          "my")))
                                              (d/ul {:id "dropdown-mocks" :class-name "hidden py-2 space-y-2"}
                                                    (d/li
                                                     (d/a {:href ""
                                                           :class-name "flex items-center p-2 pl-11 text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"}
                                                          "my")))))
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
                                                   (d/span {:class-name "ml-3"}
                                                           "Docs"))
                                              (d/a {:href ""
                                                    :target "_blank"
                                                    :class-name "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700"}
                                                   (d/svg {:class-name "flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                                                           :fill "currentColor"
                                                           :viewBox "0 0 20 20"}
                                                          (d/path {:fill-rule "evenodd"
                                                                   :d "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z"}))
                                                   (d/span {:class-name "ml-3"}
                                                           "Help")))))))))

(defnc Index []
  (d/body
   {:class-name "bg-gray-50 dark:bg-gray-800"}
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
                  (d/img {:src "./images/logo.png"
                          :class-name "mr-3 h-8"})
                  (d/span {:class-name "self-center text-2xl font-semibold whitespace-nowrap dark:text-white"})))
      (d/div {:class-name "flex items-center"}

             (d/div {:class-name "flex items-center ml-3"}
                    (d/div
                     (d/button {:type "button"
                                :class-name "flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                                :id "user-menu-button-2"
                                :aria-expanded "false"
                                :data-dropdown-toggle "dropdown-2"}
                               (d/span {:class-name "sr-only"}
                                       "Open user menu")
                               (d/img {:class-name "w-8 h-8 rounded-full" :src "./images/users/avatar.png"})))
                    (d/div {:class-name "hidden z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                            :id "dropdown-2"}
                           (d/div {:class-name "py-3 px-4" :role "none"}
                                  (d/p {:class-name "text-sm text-gray-900 dark:text-white" :role "none"}
                                       "Neil Sims")
                                  (d/p {:class-name "text-sm font-medium text-gray-900 truncate dark:text-gray-300" :role "none"}
                                       "neil.sims @flowbite.com"))
                           (d/ul {:class-name "py-1" :role "none"}
                                 (d/li
                                  (d/a {:href ""
                                        :class-name "block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                                        :role "menuitem"}
                                       "Dashboard"))

                                 (d/li
                                  (d/a {:href ""
                                        :class-name "block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                                        :role "menuitem"}
                                       "Settings")))))))))
   ($ Aside)
   (d/div {:class-name "hidden fixed inset-0 z-10 bg-gray-900/50 dark:bg-gray-900/90"})
   ($ MainBody)))

