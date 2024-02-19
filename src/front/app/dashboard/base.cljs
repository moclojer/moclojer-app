(ns front.app.dashboard.base
  (:require
   [front.app.components.container :refer [container]]
   [front.app.components.loading :refer [loading-spinner]]
   [front.app.components.svg :as svg]
   [front.app.dashboard.components :refer [aside nav-bar]]
   [front.app.lib :refer [defnc]]
   [helix.core :refer [$ <>]]
   [helix.dom :as d]
   [helix.hooks :as hooks]
   [refx.alpha :as refx]))

(defnc loading-creating-mock []
  (d/span {:class-name "inline-flex"}
          ($ loading-spinner {})
          "Loading..."))

(defnc edit-modal []
  (let [is-mock-modal (refx/use-sub [:app.dashboard/is-modal-open?])
        loading? (refx/use-sub [:app.dashboard/loading-creating-mock?])
        user-orgs (refx/use-sub [:app.user/orgs])
        mocks-raw (refx/use-sub [:app.dashboard/mocks-raw])
        [new-mock set-mock] (hooks/use-state {:enabled true})
        wildcard-available? (refx/use-sub [:app.dashboard/wildcard-available?])
        allow-save? (and (:subdomain new-mock)
                         (seq (:subdomain new-mock))
                         (:wildcard new-mock)
                         (some? (:enabled new-mock))
                         wildcard-available?)
        default-wildcard (->> mocks-raw
                              count
                              inc
                              (str "my-mock-"))
        default-subdomain (first user-orgs)]

    (hooks/use-effect
     [new-mock]

     (when-not (:wildcard new-mock)
       (set-mock assoc :wildcard default-wildcard))
     (when-not (:subdomain new-mock)
       (set-mock assoc :subdomain default-subdomain))

     (refx/dispatch-sync [:app.dashboard/wildcard-available?
                          (select-keys new-mock [:subdomain :wildcard])]))

    (<>
     (when is-mock-modal
       (d/div {:modal-backdrop "" :class "bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40"}))
     (d/div
      {:id "product-modal"
       :class-name (if is-mock-modal
                     "flex overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center md:inset-0 h-modal sm:h-full"
                     "hidden overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center md:inset-0 h-modal sm:h-full")}
      (if loading?
        ($ loading-creating-mock)
        (d/div {:class-name "relative px-4 w-full max-w-2xl h-full md:h-auto"}
               (d/div {:class-name "relative bg-white rounded-lg shadow dark:bg-gray-800"}
                      (d/div {:class-name "flex justify-between items-start p-5 rounded-t border-b dark:border-gray-700"}
                             (d/h3 {:class-name "text-xl font-semibold dark:text-white"}
                                   "New mock")
                             (d/button {:type "button"
                                        :class-name "text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700"
                                        :on-click (fn [_]
                                                    (set-mock dissoc {} :wildcard :subdomain)
                                                    (refx/dispatch-sync [:app.dashboard/toggle-mock-modal]))}
                                       (d/svg {:class-name "w-5 h-5"
                                               :fill "currentColor"
                                               :viewBox " 0 0 20 20"}
                                              (d/path
                                               {:fill-rule "evenodd"
                                                :d "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                :clip-rule "evenodd"}))))

                      (d/div {:class-name "p-6 space-y-4"}
                             (d/div
                              (d/div {:class-name "grid grid-cols-6 gap-4"}
                                     (d/div {:class-name "col-span-6 lm:col-span-3"}
                                            (d/label {:for "product-name"
                                                      :class-name "block mb-2 text-sm font-medium text-gray-900 dark:text-white"}
                                                     "mock name")
                                            (d/input {:class-name "shadow-sm bg-gray-50 focus:ring-pink-500 focus:border-pink-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                      :value (or (:wildcard new-mock) default-wildcard)
                                                      :type "text"
                                                      :on-change #(set-mock assoc :wildcard (or (.. % -target -value) default-wildcard))
                                                      :name "product-name"
                                                      :id "product-name"})))
                              (d/div {:class-name "mb-4"}
                                     (d/label {:for "settings-language"
                                               :class-name "block mb-2 text-sm font-medium text-gray-900 dark:text-white"}
                                              "Org name")
                                     (d/select {:id "settings-language"
                                                :name "subdomain"
                                                :value (or (:subdomain new-mock) default-subdomain)
                                                :on-change #(set-mock assoc :subdomain (or (.. % -target -value) default-subdomain))
                                                :class "bg-gray-50 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"}
                                               (d/option {:value ""} "Select an org-name")
                                               (mapv
                                                #(d/option {:key % :value %} %)
                                                user-orgs))
                                     (d/div {:class-name "mt-2 text-sm text-gray-500 dark:text-gray-400"}
                                            (d/span {:class-name "text-gray-900 text-base font-semibold "} (or (:wildcard new-mock)
                                                                                                               "<mock-name>"))
                                            (d/span  {:class-name "text-gray-900 "} (str "-" (or (:subdomain new-mock)
                                                                                                 "<org-name>") ".moclojer.com"))))

                              (d/div {:class-name "divide-y divide-gray-200 dark:divide-gray-700 hidden"}
                                     (d/div {:class-name "flex justify-between items-center py-4"}
                                            (d/div {:class-name "flex flex-col flex-grow"}
                                                   (d/div {:class-name "text-lg font-semibold text-gray-900 dark:text-white"} "public?")
                                                   (d/div {:class-name "text-base font-normal text-gray-500 dark:text-gray-400"} "is this api ready to be published?"))
                                            (d/label {:for "rating-reminders" :class-name "flex relative items-center cursor-pointer"}
                                                     (d/input {:type "checkbox"
                                                               :id "rating-reminders"
                                                               :class-name "sr-only peer cursor-not-allowed"
                                                               :on-change (fn [e]
                                                                            (set-mock assoc :enabled (= (.. e -target -value) "on")))})
                                                     (d/span {:class-name "w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-pink-300 dark:peer-focus:ring-pink-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-pink-500"}))))

                              (d/div {:class-name "flex justify-between items-end py-4"}
                                     (d/button {:class-name
                                                (str "px-3 py-2 rounded-lg justify-end items-center gap-2 flex btn-add "
                                                     (if allow-save? "bg-pink-600" "btn-add__disabled bg-gray-600 cursor-not-allowed"))
                                                :on-click (fn [_]
                                                            (when allow-save?
                                                              (refx/dispatch [:app.dashboard/create-mock new-mock])))}
                                               (d/div {:class-name "text-white text-xs font-bold leading-[18px] "} " save")

                                               ($ svg/save))))))))))))

(defnc index [{:keys [children]}]
  (let [[aside-open? toggle-aside!] (hooks/use-state false)
        user (-> (refx/use-sub [:app.auth/current-user]) :user)]
    (d/body
     {:class-name "bg-gray-50 dark:bg-gray-800"}
     ($ nav-bar {:aside-open? aside-open?
                 :toggle-aside! toggle-aside!
                 :user-data user})

     ($ aside {:aside-open? aside-open?
               :toggle-aside! toggle-aside!})

     (d/div {:class-name "hidden fixed inset-0 z-10 bg-gray-900/50 dark:bg-gray-900/90"
             :id "sidebarBackdrop"})
     (<>
      ($ container
         {:aside-open? aside-open?}
         children)
      ($ edit-modal)))))
