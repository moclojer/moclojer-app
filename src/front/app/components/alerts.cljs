(ns front.app.components.alerts
  (:require
   [front.app.lib :refer [defnc]]
   [helix.dom :as d]))

(def error-styles
  {:card "rounded border-l-4 border-red-500 bg-red-50 p-4"
   :tittle "block font-medium text-red-700"
   :desc "mt-2 text-sm text-red-700"})

(defnc error
  [{:keys [id error description]}]
  (let [{:keys [card tittle desc]} error-styles]
    (d/div
     {:id id
      :class card}
     (d/strong
      {:class tittle}
      error)
     (when description
       (d/p
        {:class desc}
        (str description))))))
