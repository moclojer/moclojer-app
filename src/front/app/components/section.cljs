(ns front.app.components.section
  (:require
   [helix.dom :as d]
   [helix.core :refer [defnc]]))

(def section-styles
  {:default "bg-gray-50 dark:bg-gray-800"})

(defnc section [{:keys [children class]}]
  (d/section {:class (or class (get section-styles :default))}
             children))
