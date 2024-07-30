(ns front.app.components.section
  (:require
   [helix.dom :as d]
   [helix.core :refer [defnc]]))

(defnc section [{:keys [children]}]
  (d/body {:class-name "bg-gray-50 dark:bg-gray-800"}
          (d/main {:class-name "bg-gray-50 dark:bg-gray-900"})
          children))
