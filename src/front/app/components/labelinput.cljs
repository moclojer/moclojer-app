(ns front.app.components.labelinput
  (:require 
   [helix.dom :as d]
   [helix.core :refer [defnc]]))

(def input-styles 
  {:login (str "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 "
                 "block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                 "dark:focus:ring-primary-500 dark:focus:border-primary-500")})

(def label-styles 
  {:login 
   {:default "block mb-2 text-sm font-medium text-gray-900 dark:text-white"}})

(defnc labeled-input [{:keys [input-template label-template label for placeholder name state on-change children]}]
  (let [input-classes (get input-styles (keyword (or input-template :login)) "")
        label-classes (get-in label-styles [(keyword (or input-template :login)) (keyword (or label-template :default))])]
    (d/div
      (d/label
        {:class label-classes
         :for for}
        label)
      (d/input
        {:class input-classes
         :for for
         :placeholder placeholder
         :name name
         :value (:email state) 
         :required true
         :on-change on-change})
      children)))
