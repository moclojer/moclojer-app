(ns front.app.dashboard.base
  (:require [front.app.components.container :refer [container]]
            [front.app.components.svg :as svg]
            [front.app.dashboard.components :refer [aside nav-bar]]
            [front.app.lib :refer [defnc]]
            [helix.core :refer [$ <>]]
            [helix.dom :as d]
            [helix.hooks :as hooks]
            [refx.alpha :as refx]))

(defnc edit-modal []
  (let [is-mock-modal (refx/use-sub [:app.dashboard/is-modal-open?])
        [new-mock set-mock] (hooks/use-state {})]
    (<>
     (when is-mock-modal
       (d/div {:modal-backdrop "" :class "bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40"}))
     (d/div
      {:id "product-modal"
       :class-name (if is-mock-modal
                     "flex overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center md:inset-0 h-modal sm:h-full"
                     "hidden overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center md:inset-0 h-modal sm:h-full")}
      (d/div {:class-name "relative px-4 w-full max-w-2xl h-full md:h-auto"}
             (d/div {:class-name "relative bg-white rounded-lg shadow dark:bg-gray-800"}
                    (d/div {:class-name "flex justify-between items-start p-5 rounded-t border-b dark:border-gray-700"}
                           (d/h3 {:class-name "text-xl font-semibold dark:text-white"}
                                 "New mock")
                           (d/button {:type "button"
                                      :class-name "text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700"
                                      :on-click (fn [_]
                                                  (prn ">>toogle-modal-create-mock")
                                                  (refx/dispatch [:app.dashboard/toggle-mock-modal]))}
                                     (d/svg {:class-name "w-5 h-5"
                                             :fill "currentColor"
                                             :viewBox " 0 0 20 20"}
                                            (d/path
                                             {:fill-rule "evenodd"
                                              :d "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                              :clip-rule "evenodd"}))))

                    (d/div {:class-name "p-6 space-y-4"}
                           (d/form
                            (d/div {:class-name "grid grid-cols-6 gap-4"}
                                   (d/div {:class-name "col-span-6 lm:col-span-3"}
                                          (d/label {:for "product-name"
                                                    :class-name "block mb-2 text-sm font-medium text-gray-900 dark:text-white"}
                                                   "mock name")
                                          (d/input {:class-name "shadow-sm bg-gray-50 focus:ring-pink-500 focus:border-pink-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                    :value (:name new-mock)
                                                    :type "text"
                                                    :on-change (fn [e]
                                                                 (prn :e e)
                                                                 (prn new-mock)
                                                                 (set-mock assoc :name (.. e -target -value)))
                                                    :name "product-name"
                                                    :id "product-name"}))))
                           (d/div {:class-name "mb-4"}
                                  (d/label {:for "settings-language"
                                            :class-name "block mb-2 text-sm font-medium text-gray-900 dark:text-white"}
                                           "Org name")
                                  (d/select {:id "settings-language"
                                             :name "countries"
                                             :class "bg-gray-50 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"}
                                            (d/option "avelino"))
                                  (d/div {:class-name "mt-2 text-sm text-gray-500 dark:text-gray-400"}
                                         (d/span {:class-name "text-gray-900 text-base font-semibold "} (if
                                                                                                         (and (not (nil? (:name new-mock)))
                                                                                                              (seq (:name new-mock)))
                                                                                                          (:name new-mock)
                                                                                                          "<mock-name>"))
                                         (d/span  {:class-name "text-gray-900  "} ".<org-name>.moclojer.com")))

                           (d/div {:class-name "divide-y divide-gray-200 dark:divide-gray-700"}
                                  (d/div {:class-name "flex justify-between items-center py-4"}
                                         (d/div {:class-name "flex flex-col flex-grow"}
                                                (d/div {:class-name "text-lg font-semibold text-gray-900 dark:text-white"} "public?")
                                                (d/div {:class-name "text-base font-normal text-gray-500 dark:text-gray-400"} "is this api ready to be published?"))
                                         (d/label {:for "rating-reminders" :class-name "flex relative items-center cursor-pointer"}
                                                  (d/input {:type "checkbox" :id "rating-reminders" :class-name "sr-only peer"})
                                                  (d/span {:class-name "w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-pink-300 dark:peer-focus:ring-pink-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-pink-500"}))))

                           (d/div {:class-name "flex justify-between items-center py-4"}
                                  (d/div {:class-name "flex flex-col flex-grow"})

                                  (d/button {:class-name "px-3 py-2 bg-pink-600 rounded-lg justify-end items-center gap-2 flex btn-add"
                                             :on-click (fn [_]
                                                         (refx/dispatch [:app.dashboard/create-mock]))}
                                            (d/button {:class-name "text-white text-xs font-bold leading-[18px] "} " save")
                                            ($ svg/save))))))))))
(defnc index [{:keys [children]}]
  (let [[toggle-sidebar set-toggle] (hooks/use-state false)
        user (-> (refx/use-sub [:app.auth/current-user]) :user)]
    (d/body
     {:class-name "bg-gray-50 dark:bg-gray-800"}
     ($ nav-bar {:set-toggle set-toggle
                 :toggle-sidebar toggle-sidebar
                 :user-data user})

     ($ aside {:is-sidebar-toogle? toggle-sidebar
               :set-toggle set-toggle})

     (d/div {:class-name "hidden fixed inset-0 z-10 bg-gray-900/50 dark:bg-gray-900/90"
             :id "sidebarBackdrop"})
     (<>
      ($ container
         {:is-sidebar-toogle? toggle-sidebar}
         children)
      ($ edit-modal)))))
