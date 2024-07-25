(ns front.app.components.container
  (:require
   [refx.alpha :as refx]
   [front.app.lib :refer [defnc]]
   [helix.dom :as d]))

(defnc container [{:keys [children]
                   :or {is-sidebar-toogle? false}}]
  (let [aside (refx/use-sub [:app.dashboard/aside])
        aside-open? (:open? aside)]
    (d/div
     {:class-name (str "overflow-y-auto relative h-full bg-gray-50 "
                       (if aside-open?
                         "lg:ml-64"
                         "lg:ml-16")
                       " dark:bg-gray-900")
      :id "main-content"}
     children)))
