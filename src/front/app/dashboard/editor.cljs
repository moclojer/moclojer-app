(ns front.app.dashboard.editor
  (:require ["@codemirror/language" :as language]
            ["@codemirror/legacy-modes/mode/yaml" :as yaml]
            ["@uiw/react-codemirror" :as c]
            [front.app.lib :refer [defnc]]
            [helix.core :refer [$]]))

(defnc editor
  [{:keys [value]}]
  ($ c/default
     {:value value
      :height "400px"
      #_#_:width "500px"
      :extensions #js [(.define language/StreamLanguage yaml/yaml)]
      :onChange (fn [e] (prn :test e))}))
