(ns app.home.views
  (:require
   [app.components.hero :refer [Hero]]
   [app.lib :refer [defnc]]
   [helix.core :refer [$]]
   [helix.dom :as d]))

(defnc home-page []
  (d/main
   ($ Hero)))
