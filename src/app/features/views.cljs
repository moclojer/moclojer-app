(ns app.features.views
  (:require
   [app.lib :refer [defnc]]
   [helix.dom :as d]
   [helix.hooks :as hooks]))

(defnc Features []
  (d/div "Features screen"))
