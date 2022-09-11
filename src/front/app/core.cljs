(ns app.core
  (:require [helix.core :refer [defnc $]]
            [helix.hooks :as hooks]
            [helix.dom :as d]
            #_["react"  :as React]
            ["moclojer-components" :as mc]
            ["react-dom/client" :as rdom]))


(defnc app []
  (let [[state set-state] (hooks/use-state {:name "Helix User"})]
    #_(d/div {:class-name "border-2 rounded  px-4 uppercase"}
      ($ mc/Button {:onClick (fn [e] (prn e))} "Click me")
      (d/input {:value (:name state)
                :on-change #(set-state assoc :name (.. % -target -value))}))))

;; start your app with your favorite React renderer
(defn ^:export init []
  (doto (rdom/createRoot (js/document.getElementById "app"))
    (.render ($ app)))
  (println "Hello Helix!"))
