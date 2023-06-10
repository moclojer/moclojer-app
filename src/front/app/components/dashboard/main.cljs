(ns front.app.components.dashboard.main
  (:require
   ["@codemirror/closebrackets" :refer [closeBrackets]]
   ["@codemirror/fold" :as fold]
   ["@codemirror/gutter" :refer [lineNumbers]]
   ["@codemirror/highlight" :as highlight]
   ["@codemirror/history" :refer [history historyKeymap]]
   ["@codemirror/state" :refer [EditorState]]
   ["@codemirror/view" :as view :refer [EditorView]]
   [clojure.string :as string]
   [helix.core :refer [defnc $]]
   [helix.dom :as d]
   [helix.hooks :as hooks]
   [front.app.lib :refer [defnc]]))

(def theme
  (.theme
   EditorView
   #js {".cm-content" #js {:white-space "pre-wrap"
                           :padding "10px 8px"
                           :min-height "100%"}
        ".cm-line" #js {:font-family "Fira Code"
                        :font-size "0.8rem"}
        "&.cm-focused" #js {:outline "none"}
        ".cm-gutters" #js {:background "transparent"
                           :border "none"}
        ".cm-gutterElement" #js {:margin-left "5px"}}))

(def extensions
  #js [theme
       (history)
       highlight/defaultHighlightStyle
       (view/drawSelection)
       (.. EditorState -allowMultipleSelections (of true)) ])

; #TODO not working properly 
(defn new-cm
  [{:keys [parent initial-value on-change]}]
  (EditorView.
   #js {:state
        (.create
         EditorState
         #js {:doc initial-value
              :extensions
              (cond-> extensions
                ;; readonly
                (nil? on-change)
                (.concat
                 (-> EditorView
                     (.-editable)
                     (.of false)))

                (some? on-change)
                (.concat
                 (-> EditorView
                     (.-updateListener)
                     (.of
                      (fn [^js update]
                        (when (.-docChanged update)
                          (-> (.. update -state -doc toString)
                              (on-change))))))))})
        :parent parent}))

; #TODO not working properly 
(defnc editor
  [{:keys [initial-value on-change value style]}]
  (let [cm-instance (hooks/use-ref nil)
        cm-mount (hooks/use-callback
                  :once
                  #(when %
                     (reset!
                      cm-instance
                      (new-cm
                       {:parent %
                        :initial-value (or initial-value "")
                        :on-change on-change}))))]
    (hooks/use-effect
     :once
     ;; on unmount
     #(when-let [^js cm @cm-instance]
        (.destroy cm)))

    (hooks/use-layout-effect
     [value]
     (when value
       (when-let [cm @cm-instance]
         (when (not= (string/join "\n" (.. cm -state -doc -text))
                     value)
           (let [tx (-> (.-state cm)
                        (.update
                         #js {:changes
                              ;; replace entire text with value
                              #js {:from 0
                                   :to (.. cm -state -doc -length)
                                   :insert value}}))]
             (.dispatch cm tx))))))
    (d/div
     {:class "min-h-full"
      :style style
      :ref cm-mount})))

(defnc Main []
  (let [[data set-data] (hooks/use-state "")]
    (d/main {:class-name "ml-60 pt-16 max-h-screnn overflow-auto"}
            (d/div {:class-name "px-6 py-8"}
                   (d/div {:class-name "max-w-4xl mx-auto"}
                          (d/div {:class-name "bg-white rounded-3xl p-8 mb-5"}
                                 (d/h1 {:class-name "text-3xl font-bold mb-10"}
                                       "Create your mock api")
                                 (d/div {:class-name "flex items-center justify-between"}
                                        ($ editor {:value data :on-change set-data}))))))))

(defnc Index []
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

