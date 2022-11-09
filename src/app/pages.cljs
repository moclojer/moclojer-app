(ns app.pages
  (:require [app.lib :refer [defnc]]
            [helix.dom :as d]))


(defnc about-page []
  (d/div
   (d/h2 "About")
   (d/p "About us. (And some nice pictures)")))

(defnc home-page []
  (d/div
   (d/h2 "Welcome!")
   (d/p "Some motivational catch phrase here.")))

(defnc features-page []
  (d/div
   (d/h2 "Features")
   (d/p "Here our features.")))

(defnc pricing-page []
  (d/div
   (d/h2 "Pricing")
   (d/p "Here our values.")))

