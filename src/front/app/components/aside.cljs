(ns front.app.components.aside
  (:require
   [front.app.auth.views :refer [LogOutBtn]]
   [front.app.lib :refer [defnc]]
   [helix.core :refer [$]]
   [helix.dom :as d]))

#_(defnc Aside []
    (d/aside {:class-name "fixed inset-y-0 left-0 bg-white shadow-md max-h-screen w-60"}
             (d/div {:class-name "flex flex-col justify-between h-full"}
                    (d/div {:class-name "flex-grow"}
                           (d/div {:class-name "px-4 py-6 text-center border-b"}
                                  (d/h1 {:class-name "text-xl font-bold leading-none"}
                                        (d/span {:class-name "text-blue-700"} "Mo") "clojer"))
                           (d/div {:class-name "p-4"}
                                  (d/ul {:class-name "space-y-1"}
                                        (d/li
                                         (d/a {:class-name "flex items-center bg-blue-200 rounded-xl font-bold text-sm text-blue-900 py-3 px-4"}
                                              (d/svg {:view-box "0 0 16 16"
                                                      :class-name "text-lg mr-4"
                                                      :width "1em"
                                                      :height "1em"}
                                                     (d/path
                                                      {:d "M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-3.5-7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z"}))
                                              " Create API"))

                                        (d/li
                                         (d/a {:class-name "flex bg-white hover:bg-blue-50 rounded-xl font-bold text-sm text-gray-900 py-3 px-4"}
                                              (d/svg {:view-box "0 0 16 16"
                                                      :class-name "text-lg mr-4"
                                                      :width "1em"
                                                      :height "1em"}
                                                     (d/path
                                                      {:d "M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM5 4h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm0 2h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1z"}))
                                              " List APIs")))))
                    (d/div {:class-name "p-4"}
                           ($ LogOutBtn)))))

(defnc Dash []
  (d/div
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
                                (d/img {:class-name "w-8 h-8 rounded-full"})))
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
                                "Settings")))))))))))

(defnc Dasha [])
