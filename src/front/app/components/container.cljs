(ns front.app.components.container 
  (:require
   [front.app.lib :refer [defnc]]
   [helix.dom :as d]))

(defnc Container [{:keys [class-name children] :as props}]
  (d/div {:class-name (str "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 " class-name) & props}
         children))
