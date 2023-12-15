(ns front.app.dashboard.codemirror
  (:require
   ["@codemirror/state" :as cm-state]
   ["@codemirror/view" :as cm-view]))

;; ref: https://codemirror.net/examples/decoration/
(def err-effect (.define cm-state/StateEffect))

(defn update-err-extension [err transaction]
  (let [effects (.-effects transaction)
        changes-fn (.-changes transaction)]
    (->> (.map err changes-fn)
         (reduce #(.update %1 #js {:add (.-value %2)}) effects))))

(def err-extension
  (.define cm-state/StateField
           (clj->js {:create #(.-none cm-view/Decoration)
                     :update update-err-extension
                     :provide #(.from (.-decorations cm-view/EditorView) %)})))

(.log js/console err-extension)

(def err-decoration
  (.mark cm-view/Decoration {:attributes {:style "background-color: red"}
                             :class "editor-error"}))

(defn apply-err-underline [err cm-ref]
  (let [view (.-view cm-ref)
        from (.. err -mark -position)
        effect (.of err-effect [(.range err-decoration from from)])]
    (.dispatch view #js {:effects [effect]})))
