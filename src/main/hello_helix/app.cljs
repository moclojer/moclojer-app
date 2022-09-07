(ns hello-helix.app
  (:require [helix.core :refer [defnc $]]
            [helix.hooks :as hooks]
            [helix.dom :as d]
            ["react-dom/client" :as rdom]))

;; define components using the `defnc` macro
(defnc toggle []
  (let [[state set-state] (hooks/use-state {:ticking false})]
    (d/div {:style {:border "1px solid red"}}
           (d/button {:on-click #(set-state assoc :ticking (not (:ticking state)))}
                     (if (= (:ticking state) true)
                       "Stop"
                       "Start")))))

(defnc greeting
  "A component which greets a user."
  [{:keys [name]}]
  ;; use helix.dom to create DOM elements
  (d/div "Hello, " (d/strong name) "!"))

(defnc app []
  (let [[state set-state] (hooks/use-state {:name "Helix User"})]
    (d/div
     (d/h1 "Welcome!")
     ($ toggle) 
     ;; create elements out of components
     ($ greeting {:name (:name state)})
     (d/input {:value (:name state)
               :on-change #(set-state assoc :name (.. % -target -value))}))))

;; start your app with your favorite React renderer
(defn ^:export init []
  (doto (rdom/createRoot (js/document.getElementById "app"))
    (.render ($ app)))
  (println "Hello Helix!"))
