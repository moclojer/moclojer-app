(ns front.app.dashboard.base
  (:require
   [front.app.components.container :refer [container]]
   [front.app.dashboard.components :refer [aside nav-bar]]
   [front.app.lib :refer [defnc]]
   [helix.core :refer [$]]
   [helix.dom :as d]
   [helix.hooks :as hooks]
   [refx.alpha :as refx]))

(defnc index [{:keys [children]}]
  (let [[toggle-sidebar set-toggle] (hooks/use-state false)
        user (-> (refx/use-sub [:app.auth/current-user]) :user)]
    (d/body
     {:class-name "bg-gray-50 dark:bg-gray-800"}
     ($ nav-bar {:set-toggle set-toggle
                 :toggle-sidebar toggle-sidebar
                 :user-data user})

     ($ aside {:is-sidebar-toogle? toggle-sidebar
               :set-toggle set-toggle})

     (d/div {:class-name "hidden fixed inset-0 z-10 bg-gray-900/50 dark:bg-gray-900/90"
             :id "sidebarBackdrop"})
     ($ container
        {:is-sidebar-toogle? toggle-sidebar}
        children))))
