(ns front.app.dashboard.editor
  (:require
   ["@codemirror/language" :as language]
   ["@codemirror/legacy-modes/mode/yaml" :as yaml]
   ["@codemirror/lint" :as clint]
   ["@uiw/codemirror-theme-github" :as theme]
   ["@uiw/react-codemirror" :as c]
   [front.app.components.svg :as svg]
   [front.app.dashboard.base :as base]
   [front.app.dashboard.linter :as linter]
   [front.app.lib :refer [defnc]]
   [helix.core :refer [$]]
   [helix.dom :as d]
   [helix.hooks :as hooks]
   [refx.alpha :as refx]
   [reitit.frontend.easy :as rfe]))

(defnc editor [props]
  (let [{:keys [data]} props
        {:keys [content id]
         :or {content ""}} data
        ref-fn (hooks/use-callback
                [content]
                (fn [content]
                  (refx/dispatch-sync
                   [:app.dashboard/edit-mock {:mock-id id
                                              :content content}])))]

    ($ c/default
       {:height "calc(100vh - 171px)"
        :autoFocus true
        :value content
        :theme theme/githubLight
        :extensions #js [(.define language/StreamLanguage yaml/yaml)
                         (clint/lintGutter) linter/yaml-linter]
        :onChange (partial ref-fn)
        :mode "yaml"})))

(defnc drag-drop [{:keys [on-load]}]
  (d/div {:class-name "hidden flex items-center justify-center w-full"}
         (d/label
          {:for "dropzone-file"
           :class-name "flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"}
          (d/div {:class-name "flex flex-col items-center justify-center pt-5 pb-6"}
                 ($ svg/upload {:class-name "mb-4 text-gray-500 dark:text-gray-400 w-8 h-8"})
                 (d/p {:class-name "mb-2 text-sm text-gray-500 dark:text-gray-400"}
                      (d/span {:class-name "font-semibold"} "Click to upload the mock") " or drag and drop")
                 (d/p {:class-name "text-xs text-gray-500 dark:text-gray-400"} "YAML"))
          (d/input {:id "dropzone-file"
                    :type "file"
                    :class-name "hidden"
                    :on-change (fn [e]
                                 (.preventDefault e)
                                 (let [^js file (-> e .-target .-files (aget 0))
                                       reader (js/FileReader.)
                                       #_#_filename (.-name file)]
                                   (set! (.-onload reader) on-load)
                                   (.readAsText reader file)))}))))

(defnc save-button [{:keys [mock-id full-width?]}]
  (let [mock-valid? (refx/use-sub [:app.dashboard/mock-valid?])]
    (d/button
     {:class-name (str "px-3 py-2 bg-pink-600 rounded-lg flex justify-center items-center btn-add space-x-2 "
                       (when full-width? "w-full ")
                       (when-not mock-valid? " opacity-50 cursor-not-allowed"))
      :on-click (fn [_] (when mock-valid? (refx/dispatch [:app.dashboard/save-mock mock-id])))}
     (d/div {:class-name "text-white text-xs font-bold leading-[18px]"} " save")
     ($ svg/save))))

(defnc index [{:keys [route]}]
  (let [on-load (fn [e fnstate]
                  (let [f (-> e .-target .-result)]
                    (fnstate f)))
        mock-id (-> route :parameters :path :mock-id)
        data (refx/use-sub [:app.dashboard/mock mock-id])]

    ($ base/index
       (d/div
        (d/div {:class-name "flex w-full flex-col bg-white px-5 pt-5 lg:p-5"}
               (d/div {:class-name "bg-white rounded-br-lg flex-col justify-start  inline-flex"}
                      (d/div {:class-name " rounded-md justify-start items-center gap-4 inline-flex"}
                             ($ svg/box {:color "black"})
                             (d/div {:class-name "justify-center items-center flex"}
                                    (d/div {:class-name "text-gray-700 text-sm font-medium leading-[21px]"} "mocks"))
                             (d/div {:class-name "w-5 "} ">")
                             (d/div {:class-name "justify-center items-center flex"}
                                    (d/div {:class-name "text-gray-700 text-sm font-medium leading-[21px]"} "my"))))
               (d/div {:class-name "flex flex-col items-left lg:flex-row lg:justify-between"}
                      (d/div {:class-name "flex flex-row items-center space-x-2"}
                             (if (:enabled data)
                               ($ svg/mock-enabled)
                               ($ svg/mock-disabled))
                             (d/div {:class-name "text-zinc-500 text-lg truncate text-ellipsis lg:text-xl font-medium"}
                                    (str (:url data))))

                      (d/div {:class-name "w-full lg:w-1/2 xl:w-1/3 2xl:w-1/4 flex flex-row mt-2 mb-4 lg:my-0 space-x-2"}
                             (d/button {:class-name (str "w-full px-3 py-2 rounded-lg border border-gray-200 "
                                                         "flex flex-row justify-center items-center space-x-2")
                                        :on-click #(do
                                                     (refx/dispatch-sync [:app.dashboard/delete-mock {:id mock-id}])
                                                     (rfe/push-state :app.core/mocks))}
                                       (d/div {:class-name "text-gray-800 text-sm font-medium"} "remove")
                                       ($ svg/trash))

                             ($ save-button {:mock-id mock-id
                                             :full-width? true})

                             (d/button {:class (str "w-full px-3 py-2 rounded-l-lg bg-gray-800 "
                                                    "flex flex-row justify-center items-center space-x-2")}
                                       (d/p {:class "text-white text-sm font-medium whitespace-nowrap"} "upload file")
                                       ($ svg/upload {:class-name "w-4 h-4 fill-white"}))))
               ($ drag-drop
                  {:on-load (fn [e]
                              (on-load e
                                       #(refx/dispatch [:app.dashboard/edit-mock {:mock-id mock-id
                                                                                  :content %}])))}))
        ($ editor {:data data})))))
