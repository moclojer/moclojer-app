(ns front.app.features.views
  (:require
   [front.app.lib :refer [defnc]]
   [helix.dom :as d]))


(defnc features-page []
  (d/div
   (d/p "Here our features.")))
