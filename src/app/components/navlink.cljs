(ns app.components.navlink 
  (:require
   [app.lib :refer [defnc]]
   [helix.dom :as d]))

(defnc NavLink [{:keys [href children on-click]}]
  (d/a
   {:href href
    :on-click on-click
    :className " inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"}
   children))
