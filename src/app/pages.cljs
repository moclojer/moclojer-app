(ns app.pages
  (:require
   [app.components.hero :refer [Hero]]
   [app.features.views :refer [Features]]
   [app.lib :refer [defnc]]
   [app.pricing.views :refer [Pricing]]
   [helix.core :refer [$]]
   [helix.dom :as d]))

(defnc home-page []
  (d/main
   ($ Hero)))

(defnc features-page []
  (d/div
   ($ Features)
   (d/p "Here our features.")))

(defnc pricing-page []
  (d/div
    ($ Pricing)))


