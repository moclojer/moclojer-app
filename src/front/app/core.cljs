(ns app.core
  (:require [helix.core :refer [defnc $]]
            [helix.hooks :as hooks]
            [helix.dom :as d]
            ["moclojer-components" :as mc]
            ["react-dom/client" :as rdom]))

(defnc NavLink [{:keys [href children]}]
  (d/a {:href href
         :className "inline-block rounded-lg py-1 px-2 text-sm text-slate-700"}
        children))

(defnc Header []
  (d/div {:class-name "py-10"}
    (d/div  {:class-name "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"}
      (d/nav {:class-name "relative z-50 flex justify-between"}
        (d/div {:class-name "flex items-center md:gap-x-12"}
          (d/img {:src ""})
          (d/div {:class-name "hidden md:flex md:gap-x-6"}
            ($ NavLink {:children "Features" :href ""})
            ($ NavLink {:children "Pricing" :href ""})
            ($ NavLink {:children "About" :href ""})))

        (d/div {:class-name "flex items-center gap-x-5 md:gap-x-8"}
          (d/div {:class-name "hidden md:block"}
            ($ NavLink {:children "Sign In" :href "/Login"}))
          ($ mc/Button  "Get started")
          (d/div {:class-name "-mr-1 md:hidden"}))))))

(defnc app []
  (let [[state set-state] (hooks/use-state {:name "Helix User"})]
    ($ Header
       )
    #_($ c/Button {:onClick (fn [e] (prn e)) 
                 :label "Get Started" 
                 :color "blue"})))

;; start your app with your favorite React renderer
(defn ^:export init []
  (doto (rdom/createRoot (js/document.getElementById "app"))
    (.render ($ app)))
  (println "Hello Helix!"))
