(ns front.app.components.container
  (:require
   [refx.alpha :as refx]
   [front.app.lib :refer [defnc]]
   [helix.dom :as d]
   [refx.alpha :as refx]))

(def login-styles
  {:default "flex flex-col justify-center items-center px-6 pt-8 mx-auto md:h-screen pt:mt-0 dark:bg-gray-900"
   :none ""})

(defnc aside-container [{:keys [children]
                         :or {is-sidebar-toogle? false}}]
  (let [aside (refx/use-sub [:app.dashboard/aside])
        aside-open? (:open? aside)]
    (d/div
     {:class (str "overflow-y-auto relative h-full bg-gray-50 "
                  (if aside-open?
                    "lg:ml-64"
                    "lg:ml-16")
                  " dark:bg-gray-900")
      :id "main-content"}
     children)))

(defn get-login-style [{:keys [template children]
                        :or {template :default}}]
  (let [template (keyword template)]
    (str (-> template login-styles)
         children)))

(defnc container [{:keys [children class]}]
  (d/div {:class (or class (get login-styles :default))}
         children))
