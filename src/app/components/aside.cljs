(ns app.components.aside
  (:require
   [app.lib :refer [defnc]]
   [helix.dom :as d]
   [refx.alpha :as refx]))

(defnc Aside []
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

                         (d/button
                          {:type "button"
                           :on-click (fn [e]
                                       (.preventDefault e)
                                       (refx/dispatch [:app.auth/logout]))
                           :children "Logout"
                           :href "#"
                           :class-name "inline-flex items-center justify-center h-9 px-4 rounded-xl bg-gray-900 text-gray-300 hover:text-white text-sm font-semibold transition"}
                          (d/svg {:class-name ""
                                  :width "1em"
                                  :fill "currentColor"
                                  :height "1em"
                                  :view-box "0 0 16 16 "}
                                 (d/path {:d "M12 1a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V2a1 1 0 0 1 1-1h8zm-2 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"})))
                         (d/span {:class-name "font-bold text-sm ml-2"} "Logout")))))
