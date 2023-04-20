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
