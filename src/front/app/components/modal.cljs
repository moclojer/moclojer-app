(ns front.app.components.modal
  (:require
   [front.app.components.loading :refer [loading-spinner]]
   [front.app.components.svg :as svg]
   [front.app.lib :refer [defnc]]
   [helix.core :refer [$ <>]]
   [helix.dom :as d]))

(defnc modal-loading []
  (d/span
   {:class "inline-flex"}
   ($ loading-spinner {})
   "Loading..."))

(defnc modal-header [{:keys [title on-close]}]
  (d/div
   {:class (str "flex justify-between items-start p-5 rounded-t border-b "
                "dark:border-gray-700")}
   (d/h3
    {:class "text-xl font-semibold dark:text-white"}
    title)
   (d/button
    {:class (str "text-gray-400 bg-transparent hover:bg-gray-200 "
                 "hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto "
                 "inline-flex items-center dark:text-gray-400 "
                 "dark:hover:text-white dark:hover:bg-gray-700")
     :on-click on-close}
    ($ svg/close))))

(defnc modal
  [{:keys [title open? loading? children on-close]}]
  (when open?
    (<>
     (d/div
      {:class (str "bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed "
                   "inset-0 z-40")})
     (d/div
      {:class (str "flex overflow-y-auto overflow-x-hidden fixed right-0 "
                   "left-0 top-4 z-50 justify-center items-center md:inset-0 "
                   "h-modal sm:h-full")}
      (if loading?
        ($ modal-loading)
        (d/div
         {:class "relative px-4 w-full max-w-2xl h-full md:h-auto"}
         (d/div
          {:class "relative bg-white rounded-lg shadow dark:bg-gray-800"}
          ($ modal-header {:title title
                           :on-close on-close})
          children)))))))
