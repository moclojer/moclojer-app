(ns front.app.dashboard.views
  (:require [front.app.auth.supabase :as supabase]
            [front.app.components.svg :refer [svg-box svg-mock-disable
                                              svg-mock-enable svg-org-mock
                                              svg-personal-mock]]
            [front.app.lib :refer [defnc]]
            [helix.core :refer [$]]
            [helix.dom :as d]
            [helix.hooks :as hooks]
            [refx.alpha :as refx]))

(defnc container [{:keys [is-sidebar-toogle? children]}]
  (d/div
   {:class-name (str "overflow-y-auto relative w-full h-full bg-gray-50 "
                     (if is-sidebar-toogle?
                       "lg:ml-16"
                       "lg:ml-64")
                     " dark:bg-gray-900")
    :id "main-content"}
   children))

(defnc api-mock [{:keys [enable url id]}]
  (d/div (d/div {:class-name "self-stretch py-4 bg-white border-b border-gray-200 justify-center items-center inline-flex" :id id}
                (d/div {:class-name "grow shrink basis-0 h-[49px] justify-start items-center gap-2 flex"}
                       (if enable
                         ($ svg-mock-enable)
                         ($ svg-mock-disable))
                       (d/div {:class-name "justify-start items-start flex"})
                       (d/div {:class-name "grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex"}
                              (d/div {:class-name (if enable
                                                    "w-[1116px] grow shrink basis-0 text-gray-900 text-base font-semibold leading-normal"
                                                    "w-[1116px] h-6 text-neutral-400 text-base font-semibold leading-normal")} url)
                              (d/div {:class-name (if enable
                                                    "w-[1116px] text-gray-500 text-sm font-normal leading-[21px]"
                                                    "w-[1116px] text-gray-500 text-sm font-normal leading-[21px]")} " my frist mock server")))

                (d/div {:class-name "px-3 py-2 rounded-lg border border-gray-200 justify-center items-center gap-2 flex"}
                       (d/svg {:width "10"
                               :height "12"
                               :viewBox "0 0 10 12"
                               :fill "none"}
                              (d/path {:fill-rule "evenodd"
                                       :clip-rule "evenodd"
                                       :fill "#1F2A37"
                                       :d "M4.28571 0.5C4.1531 0.500068 4.02312 0.53567 3.91034 0.602817C3.79756 0.669965 3.70642 0.766007 3.64714 0.880187L3.13 1.875H0.714286C0.524845 1.875 0.343164 1.94743 0.209209 2.07636C0.0752549 2.2053 0 2.38016 0 2.5625C0 2.74484 0.0752549 2.9197 0.209209 3.04864C0.343164 3.17757 0.524845 3.25 0.714286 3.25V10.125C0.714286 10.4897 0.864795 10.8394 1.1327 11.0973C1.40061 11.3551 1.76398 11.5 2.14286 11.5H7.85714C8.23602 11.5 8.59939 11.3551 8.8673 11.0973C9.1352 10.8394 9.28571 10.4897 9.28571 10.125V3.25C9.47515 3.25 9.65684 3.17757 9.79079 3.04864C9.92475 2.9197 10 2.74484 10 2.5625C10 2.38016 9.92475 2.2053 9.79079 2.07636C9.65684 1.94743 9.47515 1.875 9.28571 1.875H6.87L6.35286 0.880187C6.29358 0.766007 6.20244 0.669965 6.08966 0.602817C5.97688 0.53567 5.8469 0.500068 5.71429 0.5H4.28571ZM2.85714 4.625C2.85714 4.44266 2.9324 4.2678 3.06635 4.13886C3.20031 4.00993 3.38199 3.9375 3.57143 3.9375C3.76087 3.9375 3.94255 4.00993 4.0765 4.13886C4.21046 4.2678 4.28571 4.44266 4.28571 4.625V8.75C4.28571 8.93234 4.21046 9.1072 4.0765 9.23614C3.94255 9.36507 3.76087 9.4375 3.57143 9.4375C3.38199 9.4375 3.20031 9.36507 3.06635 9.23614C2.9324 9.1072 2.85714 8.93234 2.85714 8.75V4.625ZM6.42857 3.9375C6.23913 3.9375 6.05745 4.00993 5.9235 4.13886C5.78954 4.2678 5.71429 4.44266 5.71429 4.625V8.75C5.71429 8.93234 5.78954 9.1072 5.9235 9.23614C6.05745 9.36507 6.23913 9.4375 6.42857 9.4375C6.61801 9.4375 6.79969 9.36507 6.93365 9.23614C7.0676 9.1072 7.14286 8.93234 7.14286 8.75V4.625C7.14286 4.44266 7.0676 4.2678 6.93365 4.13886C6.79969 4.00993 6.61801 3.9375 6.42857 3.9375Z"}))
                       (d/button {:on-click (fn [e] (prn :click e))
                                  :class-name "text-gray-800 text-sm font-medium leading-[21px]"}
                                 "remove")))))

(defnc apis-mocks [{:keys [name type apis]}]
  (d/div {:class-name "w-[1306px] h-[314px] p-8 bg-white rounded-lg shadow flex-col justify-center items-start inline-flex mock-list-margin"}
         (d/div {:class-name "self-stretch justify-start items-center gap-[15px] inline-flex"}
                (if (= type :personal)
                  ($ svg-personal-mock)
                  ($ svg-org-mock))
                (d/div {:class-name "w-[423px] self-stretch text-gray-900 text-xl font-bold leading-[30px]"} name))
         (for [{:keys [enable url id]} apis]
           ($ api-mock {:enable enable :url url :id id}))
         (d/div {:class-name "self-stretch pt-6 justify-start items-start inline-flex"}
                (d/div {:class-name "px-3 py-2 bg-pink-600 rounded-lg justify-end items-center gap-2 flex"}
                       (d/svg {:width "16"
                               :height "17"
                               :viewBox "0 0 16 17"
                               :fill "none"}
                              (d/path {:fill-rule "evenodd"
                                       :clip-rule "evenodd"
                                       :d "M8 4.5C8.21217 4.5 8.41566 4.58429 8.56569 4.73431C8.71571 4.88434 8.8 5.08783 8.8 5.3V7.7H11.2C11.4122 7.7 11.6157 7.78429 11.7657 7.93431C11.9157 8.08434 12 8.28783 12 8.5C12 8.71217 11.9157 8.91566 11.7657 9.06569C11.6157 9.21571 11.4122 9.3 11.2 9.3H8.8V11.7C8.8 11.9122 8.71571 12.1157 8.56569 12.2657C8.41566 12.4157 8.21217 12.5 8 12.5C7.78783 12.5 7.58434 12.4157 7.43431 12.2657C7.28429 12.1157 7.2 11.9122 7.2 11.7V9.3H4.8C4.58783 9.3 4.38434 9.21571 4.23431 9.06569C4.08429 8.91566 4 8.71217 4 8.5C4 8.28783 4.08429 8.08434 4.23431 7.93431C4.38434 7.78429 4.58783 7.7 4.8 7.7H7.2V5.3C7.2 5.08783 7.28429 4.88434 7.43431 4.73431C7.58434 4.58429 7.78783 4.5 8 4.5V4.5Z"
                                       :fill "white"}))
                       (d/button {:class-name "text-white text-xs font-bold leading-[18px]"} " new mock")
                       ($ svg-box)))))

(defnc mocks [{:keys [is-sidebar-toogle?]}]
  (let [mocks  [{:type :personal :name "my" :apis [{:enable false :url "test01.avelino.moclojer.com" :id 1}
                                                   {:enable true  :url "test02.avelino.moclojer.com" :id 2}]}
                {:type :org :name "cljazz" :apis [{:enable false :url "test01.avelino.moclojer.com" :id 1}
                                                  {:enable true  :url "test02.avelino.moclojer.com" :id 2}]}]]

    ($ container {:is-sidebar-toogle? is-sidebar-toogle?}
       (d/div {:class-name "mock-list"}
              (for [{:keys [type name apis]} mocks]
                ($ apis-mocks {:type type :name name :apis apis}))))))

(defnc MainBody [{:keys [is-sidebar-toogle?]}]
  ($ mocks {:is-sidebar-toogle? is-sidebar-toogle?})
  #_($ container
       {:is-sidebar-toogle? is-sidebar-toogle?}
       (d/main

        (d/div {:class-name "p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5 dark:bg-gray-800 dark:border-gray-700"}
               (d/div {:class-name "flex items-center divide-x divide-gray-100 dark:divide-gray-700"}
                      (d/div {:class-name "pl-3 text-sm font-medium text-gray-500"}
                             "Today, 11:01 AM")))
        (d/div {:class-name "p-5"}
               (d/div {:class-name "flex items-center mb-4"}
                      (d/div {:class-name "flex-shrink-0"}
                             (d/img {:class-name "w-8 h-8 rounded-full" :src "/images/users/avatar.png"}))
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

(defnc Aside [{:keys
               [is-sidebar-toogle?
                set-toggle
                toggle-menu
                set-toggle-menu]}]
  (d/div {:class-name "flex overflow-hidden pt-16 bg-gray-50 dark:bg-gray-900"}
         (d/aside {:id "sidebar"
                   :on-mouse-enter (fn [_e]
                                     (when is-sidebar-toogle?
                                       (do
                                         (set-toggle-menu true)
                                         (set-toggle false))))
                   :on-mouse-leave (fn [_e]
                                     (when toggle-menu
                                       (set-toggle true)))
                   :class-name (str "flex hidden fixed top-0 left-0 z-20 flex-col flex-shrink-0 pt-16 w-64 h-full duration-75 lg:flex transition-width "
                                    (when is-sidebar-toogle?
                                      "lg:w-16"))
                   :aria-label "Sidebar"}
                  (d/div {:class-name "flex relative flex-col flex-1 pt-0 min-h-0 bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700"}
                         (d/div {:class-name "flex overflow-y-auto flex-col flex-1 pt-5 pb-4"}
                                (d/div {:class-name "flex-1 px-3 space-y-1 bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700"}
                                       (d/ul {:class-name "pb-2 space-y-2"}
                                             (d/li)
                                             (d/li
                                              (d/a {:href "" :class-name "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700"}
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
                                                :class-name "flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                                                :aria-controls "dropdown-mocks"
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
                                              (d/ul {:id "dropdown-mocks" :class-name "hidden py-2 space-y-2"}
                                                    (d/li
                                                     (d/a {:href ""
                                                           :class-name (str (if is-sidebar-toogle? "px-4 " "pl-11 ")
                                                                            "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700")}
                                                          (when-not is-sidebar-toogle?
                                                            (d/svg {:fill "none"
                                                                    :width "24"
                                                                    :class-name "flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                                                                    :height "24"
                                                                    :viewBox "0 0 25 26"}
                                                                   (d/path {:d "M13.1765 11.7613C13.1765 16.4911 11.8114 20.9049 9.45182 24.6329M4.79771 21.8894L4.87076 21.7683C6.76829 18.7719 7.77178 15.3019 7.76471 11.7613C7.76471 10.3345 8.33487 8.96627 9.34977 7.95743C10.3647 6.94859 11.7412 6.38183 13.1765 6.38183C14.6118 6.38183 15.9883 6.94859 17.0032 7.95743C18.0181 8.96627 18.5882 10.3345 18.5882 11.7613C18.5882 13.129 18.4935 14.4765 18.3136 15.7958M15.4481 25C16.2831 23.3438 16.959 21.6129 17.4666 19.8304M22.6606 21.3528C23.5332 18.3053 24 15.0871 24 11.7613C24.0004 9.87248 23.5006 8.01687 22.5508 6.38099C21.601 4.7451 20.2347 3.38659 18.5893 2.44201C16.9438 1.49744 15.0772 1.00011 13.1771 1C11.2769 0.999894 9.41027 1.49702 7.76471 2.44141M1 17.6302C1.86588 15.8563 2.35294 13.8646 2.35294 11.7613C2.35294 9.8018 2.88059 7.96473 3.80059 6.38183"
                                                                            :stroke "#757575"
                                                                            :stroke-width "2"
                                                                            :stroke-linecap "round"
                                                                            :stroke-linejoin "round"})))
                                                          (if is-sidebar-toogle?
                                                            (d/span "my")
                                                            (d/span {:class-name "flex-1 ml-3 text-left whitespace-nowrap"} "my-personal-mock")))))))
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
                                           "Logout"))))))))

(defnc Index []
  (let [user (refx/use-sub [:app.auth/current-user])
        [toggle-menu set-toggle-menu] (hooks/use-state false)
        [toggle-sidebar set-toggle] (hooks/use-state false)
        user-data (-> user :user)]

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
                          :on-click (fn [_e]
                                      (set-toggle-menu (not toggle-menu))
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
                                     "Logout")))))))))

     ($ Aside {:is-sidebar-toogle? toggle-sidebar
               :set-toggle set-toggle
               :set-toggle-menu set-toggle-menu
               :toggle-menu toggle-menu})
     (d/div {:class-name "hidden fixed inset-0 z-10 bg-gray-900/50 dark:bg-gray-900/90"
             :id "sidebarBackdrop"})
     ($ MainBody {:is-sidebar-toogle? toggle-sidebar}))))


