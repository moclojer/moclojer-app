(ns front.app.home.views
  (:require
   [front.app.components.hero :refer [Hero]]
   [front.app.lib :refer [defnc]]
   [helix.core :refer [$]]
   [helix.dom :as d]))

(defnc home-page []
  (d/main
   ($ Hero)))
