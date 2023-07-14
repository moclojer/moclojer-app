(ns front.app.components.container 
  (:require
   [front.app.lib :refer [defnc]]
   [helix.dom :as d]))

(defnc container [{:keys [is-sidebar-toogle? children]
                   :or {is-sidebar-toogle? false}}]
  (d/div
   {:class-name (str "overflow-y-auto relative w-full h-full bg-gray-50 "
                     (if is-sidebar-toogle?
                       "lg:ml-16"
                       "lg:ml-64")
                     " dark:bg-gray-900")
    :id "main-content"}
   children))
