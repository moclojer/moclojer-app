(ns front.app.dashboard.mocks
  (:require [front.app.components.svg :as svg]
            [front.app.dashboard.base :as base]
            [front.app.lib :refer [defnc]]
            [helix.core :refer [$ <>]]
            [helix.dom :as d]
            [refx.alpha :as refx]))

(defnc edit-modal []
  (d/div
   {:id "product-modal"
    :class-name "hidden overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center md:inset-0 h-modal sm:h-full"}
   (d/div {:class-name "relative px-4 w-full max-w-2xl h-full md:h-auto"}
          (d/div {:class-name "relative bg-white rounded-lg shadow dark:bg-gray-800"}
                 (d/div {:class-name "flex justify-between items-start p-5 rounded-t border-b dark:border-gray-700"}
                        (d/h3 {:class-name "text-xl font-semibold dark:text-white"}
                              "New mock")
                        (d/button {:type "button"
                                   :class-name "text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700"
                                   :data-modal-toggle "product-modal"}
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
                                                 :type "text"
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
                                      (d/span {:class-name "text-gray-900 text-base font-semibold "} "<mock-name>")
                                      (d/span  {:class-name "text-gray-900  "} ".<org-name>.moclojer.com")))
                        (d/div {}
                               (d/label {:class-name "block mb-2 text-sm font-medium text-gray-900 dark:text-white" :for "file_input"}
                                        "upload mock ")
                               (d/input
                                {:class-name "block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                 :aria-describedby "file_input_help"
                                 :id "file_input"
                                 :type "file"})
                               (d/p {:class-name "mt-1 text-sm text-gray-500 dark:text-gray-300" :id "file_input_help"} "YAML"))

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

                               (d/button {:class-name "px-3 py-2 bg-pink-600 rounded-lg justify-end items-center gap-2 flex btn-add"}
                                         (d/button {:class-name "text-white text-xs font-bold leading-[18px] "} " save")
                                         ($ svg/save))))))))

(defnc api-mock [{:keys [enable url id]}]
  (d/a {:class-name "py-4 bg-white border-b border-gray-200 justify-center items-center inline-flex mouse-cursor" :id id
        :key id
        :href (str "/dashboard/mocks/" id)}
       (d/div {:class-name "grow shrink basis-0 h-[49px] justify-start items-center gap-2 flex"}
              (if enable
                ($ svg/mock-enable)
                ($ svg/mock-disable))
              (d/div {:class-name "justify-start items-start flex"})
              (d/div {:class-name "grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex"}
                     (d/div {:class-name (if enable
                                           "w-[1116px] grow shrink basis-0 text-gray-900 text-base font-semibold leading-normal"
                                           "w-[1116px] h-6 text-neutral-400 text-base font-semibold leading-normal")} url)
                     (d/div {:class-name (if enable
                                           "w-[1116px] text-gray-500 text-sm font-normal leading-[21px]"
                                           "w-[1116px] text-gray-500 text-sm font-normal leading-[21px]")} " my frist mock server")))

       (d/div {:class-name "px-3 py-2  rounded-lg border border-gray-200 justify-center items-center gap-2 flex button-remove"}

              (d/button {:on-click (fn [e] (prn :click e))
                         :class-name "text-gray-800 text-sm font-medium leading-[21px]"}
                        "remove")

              (d/svg {:width "10"
                      :height "20"
                      :viewBox "0 0 10 10"
                      :fill "none"}
                     (d/path {:fill-rule "evenodd"
                              :clip-rule "evenodd"
                              :fill "#1F2A37"
                              :d "M4.28571 0.5C4.1531 0.500068 4.02312 0.53567 3.91034 0.602817C3.79756 0.669965 3.70642 0.766007 3.64714 0.880187L3.13 1.875H0.714286C0.524845 1.875 0.343164 1.94743 0.209209 2.07636C0.0752549 2.2053 0 2.38016 0 2.5625C0 2.74484 0.0752549 2.9197 0.209209 3.04864C0.343164 3.17757 0.524845 3.25 0.714286 3.25V10.125C0.714286 10.4897 0.864795 10.8394 1.1327 11.0973C1.40061 11.3551 1.76398 11.5 2.14286 11.5H7.85714C8.23602 11.5 8.59939 11.3551 8.8673 11.0973C9.1352 10.8394 9.28571 10.4897 9.28571 10.125V3.25C9.47515 3.25 9.65684 3.17757 9.79079 3.04864C9.92475 2.9197 10 2.74484 10 2.5625C10 2.38016 9.92475 2.2053 9.79079 2.07636C9.65684 1.94743 9.47515 1.875 9.28571 1.875H6.87L6.35286 0.880187C6.29358 0.766007 6.20244 0.669965 6.08966 0.602817C5.97688 0.53567 5.8469 0.500068 5.71429 0.5H4.28571ZM2.85714 4.625C2.85714 4.44266 2.9324 4.2678 3.06635 4.13886C3.20031 4.00993 3.38199 3.9375 3.57143 3.9375C3.76087 3.9375 3.94255 4.00993 4.0765 4.13886C4.21046 4.2678 4.28571 4.44266 4.28571 4.625V8.75C4.28571 8.93234 4.21046 9.1072 4.0765 9.23614C3.94255 9.36507 3.76087 9.4375 3.57143 9.4375C3.38199 9.4375 3.20031 9.36507 3.06635 9.23614C2.9324 9.1072 2.85714 8.93234 2.85714 8.75V4.625ZM6.42857 3.9375C6.23913 3.9375 6.05745 4.00993 5.9235 4.13886C5.78954 4.2678 5.71429 4.44266 5.71429 4.625V8.75C5.71429 8.93234 5.78954 9.1072 5.9235 9.23614C6.05745 9.36507 6.23913 9.4375 6.42857 9.4375C6.61801 9.4375 6.79969 9.36507 6.93365 9.23614C7.0676 9.1072 7.14286 8.93234 7.14286 8.75V4.625C7.14286 4.44266 7.0676 4.2678 6.93365 4.13886C6.79969 4.00993 6.61801 3.9375 6.42857 3.9375Z"})))))

(defnc apis-mocks [{:keys [name type apis]}]
  (d/div {:class-name "w-[1306px] h-[314px] p-8 bg-white rounded-lg shadow flex-col justify-center items-start inline-flex mock-list-margin"
          :key (str name)}
         (d/div {:class-name "self-stretch justify-start items-center gap-[15px] inline-flex"}
                (if (= type :personal)
                  ($ svg/personal-mock)
                  ($ svg/org-mock))
                (d/div {:class-name "w-[423px] self-stretch text-gray-900 text-xl font-bold leading-[30px]"} name))
         (for [{:keys [enable url id]} apis]
           ($ api-mock {:enable enable :url url :id id}))
         (d/div {:class-name "self-stretch pt-6 justify-start items-start inline-flex"}
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
                                  :data-modal-toggle "product-modal"}
                                 " new mock")
                       ($ svg/box)))))

(defnc mocks []
  ($ base/index
     (let [mocks-apis (refx/use-sub [:app.dashboard/mocks-api])]
       (<>
        (d/div {:class-name "mock-list"}
               (for [{:keys [type name apis]} mocks-apis]
                 ($ apis-mocks {:type type :name name :apis apis})))

        ($ edit-modal)))))




