(ns app.components.dashboard.header
  (:require
   [app.lib :refer [defnc]]
   [helix.dom :as d]))

(defnc Header
  []
  (d/header {:class-name "fixed right-0 top-0 left-60 bg-blue-50 py-3 h-16"}
            (d/div {:class-name "max-w-4xl mx-auto"}
                   (d/div {:class-name "flex items-center justify-between"}
                          (d/div {:class-name "text-lg font-bold"} "Mock API made easy")))))
