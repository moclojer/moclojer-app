(ns app.components
  (:require [helix.core :refer [defnc $]]
            ["moclojer-components" :as mc]
            ["react" :as React]
            ["next/link" :as Link]
            [helix.dom :as d]))

(def variant-styles 
  {:solid {:blue "bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600"}})

(def base-styles 
  {:solid "group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2",
   :outline "group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none", })

(defnc Button 
  [{:keys [on-click color label
           variant href]} :as props]
  (let [class-name (str 
                     (-> base-styles variant)
                     (-> variant-styles variant color))]
    ($ mc/Button {:href "" 
                  :variant "solid" color "blue" 
                  :class-name class-name} label)
   #_(if href
      ($ Link {:onClick on-click 
               :clasName class-name
               :href href} label)
      (d/button  {:class-name class-name
                  :on-click on-click} label))))
