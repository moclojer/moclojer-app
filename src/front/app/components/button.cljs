(ns front.app.components.button
  (:require
   [mockingbird.components.button :refer [button]]
   [front.app.lib :refer [defnc]]
   [helix.dom :as d]
   [helix.core :refer [$]]
   [refx.alpha :as refx]
   [front.app.components.svg :as svg]
   [reitit.frontend.easy :as rfe]))

(defnc new-mock-btn []
  ($ button {:class "px-3 py-2 bg-pink-600 rounded-lg flex flex-row space-x-2 items-center btn-add text-white hover:text-white " 
             :on-click #(refx/dispatch [:app.dashboard/toggle-mock-modal])}
     ($ svg/plus-sign)
     (d/p {:class "text-xs font-bold"}
          "new mock")
     ($ svg/box)))

(defnc toggle-aside-btn
  [{:keys [aside-open?]
    :or {aside-open? false}}]
  (d/button
   {:id "aside-toggle"
    :class (str (if aside-open?
                  "lg:absolute -right-4 "
                  "block w-full ")
                "p-1 mt-2 flex flex-row justify-center z-50 bg-gray-300 rounded-lg "
                "opacity-30 hover:opacity-100 transition-all lg:flex hidden")
    :on-click #(refx/dispatch [:app.dashboard/toggle-aside! (not aside-open?)])}
   ($ svg/arrow
      {:direction (if aside-open?
                    :left
                    :right)
       :class "w-3 h-3"})))

(defnc home-btn
  [{:keys [aside-open?]
    :or {aside-open? false}}]
  (d/button
   {:class (str "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg "
                "transition duration-75 hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700 "
                (if aside-open?
                  "w-[calc(100%-8px)] "
                  "w-full "))
    :on-click #(rfe/push-state :app.core/dashboard)}
   ($ svg/house)
   (d/span {:class (str "ml-3 "
                        (when-not aside-open?
                          "lg:hidden lg:absolute"))} "Home")))

(defnc org-btn
  [{:keys [aside-open?]
    :or {aside-open? false}}]
  (d/button
   {:class (str "flex items-center p-2 text-base font-normal text-gray-500 hover:text-gray-900 rounded-lg "
                "transtion duration-75 hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700 "
                (if aside-open?
                  "w-[calc(100%-8px)]"
                  "w-full"))
    :on-click #(rfe/push-state :app.core/orgs)}
   ($ svg/people {:class "w-6 h-6 "})
   (d/span {:class (str "ml-3 text-gray-900 "
                        (when-not aside-open?
                          "lg:hidden lg:absolute"))} "Orgs")))
