(ns front.app.components.editor
  (:require
   #_["codemirror/addon/lint/lint.css"]
   #_["codemirror/mode/yaml/yaml.js"]
   #_["codemirror/addon/lint/lint"]
   #_["codemirror/addon/lint/yaml-lint"]
   #_["@codemirror/highlight" :as highlight]
   #_["@codemirror/history" :refer [history]]
   #_["@codemirror/state" :refer [EditorState]]
   #_["@codemirror/view" :as view :refer [EditorView]]
   [clojure.string :as string]
   [helix.core :refer [defnc $]]
   [helix.dom :as d]
   [helix.hooks :as hooks]
   [front.app.lib :refer [defnc]]))

(defnc editor-view []
  (let [[data set-data] (hooks/use-state "")]
    #_($ editor {:value data :on-change set-data})))
