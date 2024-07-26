(ns front.app.components.navbar
  (:require [front.app.components.button :refer [new-mock-btn]]
            [front.app.components.profile :refer [user-profile]]
            [front.app.components.svg :as svg]
            [front.app.lib :refer [defnc]]
            [reitit.frontend.easy :as rfe]
            [helix.core :refer [$]]
            [helix.dom :as d]))


(defnc nav-bar [{:keys [aside-open? toggle-aside! user-data]}]
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
                          :on-click #(toggle-aside! not)
                          :class (str "p-2 mr-3 text-gray-600 rounded cursor-pointer "
                                      "hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 "
                                      "dark:hover:text-white dark:hover:bg-gray-700 lg:hidden")}
                         (if aside-open?
                           ($ svg/hamburger-menu-close)
                           ($ svg/hamburger-menu)))
               (d/button {:class-name "flex"
                          :on-click #(rfe/push-state :app.core/dashboard)}
                         (d/img {:src "/images/logo.svg"
                                 :class-name "mr-3 h-9"})))
        (d/div {:class-name "flex items-center lg:gap-3"}
               ($ new-mock-btn)
               ($ user-profile {:user-data user-data}))))))


