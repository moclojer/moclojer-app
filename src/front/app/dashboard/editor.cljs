(ns front.app.dashboard.editor
  (:require ["@codemirror/language" :as language]
            ["@codemirror/legacy-modes/mode/yaml" :as yaml]
            ["@uiw/react-codemirror" :as c]
            [front.app.components.svg :as svg]
            [front.app.dashboard.base :as base]
            [front.app.lib :refer [defnc]]
            [helix.core :refer [$]]
            [helix.dom :as d]
            [helix.hooks :as hooks]))

(defnc editor
  [{:keys [value]}]
  ($ c/default
     {:value value
      :height "400px"
      #_#_:width "500px"
      :extensions #js [(.define language/StreamLanguage yaml/yaml)]
      :onChange (fn [e] (prn :test e))}))

(defnc drag-drop [{:keys [on-load]}]
  (d/div {:class-name "flex items-center justify-center w-full"}
         (d/label
          {:for "dropzone-file"
           :class-name "flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"}
          (d/div {:class-name "flex flex-col items-center justify-center pt-5 pb-6"}
                 (d/svg
                  {:class-name "w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                   :aria-hidden "true"
                   :fill "none"
                   :viewBox  "0 0 20 16"}
                  (d/path {:stroke "currentColor"
                           :stroke-linecap "round"
                           :stroke-linejoin "round"
                           :stroke-width "2"
                           :d "M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"}))

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
                                       filename (.-name file)]
                                   (set! (.-onload reader) on-load)
                                   (.readAsText reader file)))}))))

(defnc index []
  (let [on-load (fn [e fnstate]
                  (let [f (-> e .-target .-result)]
                    (js/console.log f)
                    (fnstate f)))
        [spec set-state] (hooks/use-state "")]
    ($ base/index
       (d/div
        (d/div {:class-name "flex w-full flex-col bg-white p-5 "}
               (d/div {:class-name "bg-white rounded-br-lg flex-col justify-start  inline-flex"}
                      (d/div {:class-name " rounded-md justify-start items-center gap-4 inline-flex"}
                             ($ svg/box {:color "black"})
                             (d/div {:class-name "justify-center items-center flex"}
                                    (d/div {:class-name "text-gray-700 text-sm font-medium leading-[21px]"} "mocks"))
                             (d/div {:class-name "w-5 "} ">")
                             (d/div {:class-name "justify-center items-center flex"}
                                    (d/div {:class-name "text-gray-700 text-sm font-medium leading-[21px]"} "my"))))
               (d/div {:class-name "flex bg-white justify-between items-center"}
                      (d/div {:class-name " bg-white  gap-4 flex "}
                             (d/div {:class-name " rounded-md  items-center gap-4 inline-flex"}
                                    ($ svg/mock-enable)
                                    (d/div {:class-name "text-zinc-500 text-xl font-medium leading-[30px]"} "test01.avelino.moclojer.com")))

                      (d/div {:class-name "flex gap-2.5 p-2 bg-white"}
                             (d/button {:class-name "px-3 py-2 rounded-lg border border-gray-200 justify-center items-center gap-2 flex"}
                                       (d/div {:class-name "text-gray-800 text-sm font-medium leading-[21px]"} "remove")
                                       ($ svg/trash))

                             (d/button {:class-name "px-3 py-2 bg-pink-600 rounded-lg justify-end items-center gap-2 flex btn-add"}
                                       (d/button {:class-name "text-white text-xs font-bold leading-[18px] "} " save")
                                       ($ svg/save))))
               (d/div {}
                      ($ drag-drop
                         {:on-load (fn [e]
                                     (on-load e
                                              #(set-state
                                                (fn [_]
                                                  %))))}))

               (d/div {:class-name "w-full  bg-white rounded-bl-lg rounded-br-lg flex-col justify-start items-center gap-5 inline-flex"}
                      (d/div {:class-name "w-full justify-start items-center inline-flex"}
                             (d/div {:class-name "grow shrink basis-0 h-px bg-gray-200"}))))
        ($ editor {:value spec})))))


