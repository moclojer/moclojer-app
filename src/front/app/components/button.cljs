(ns front.app.components.button
  (:require [front.app.lib :refer [defnc]]
            [helix.dom :as d]))

; #TODO remove solid, outline  keeping here because it is used in other pages

; deprecated solid -old layout
; deprecated outline -old layout

(def base-styles
  {:solid "group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 "
   :solid-blue "py-3 px-5 w-full text-base font-medium text-center text-white rounded-lg bg-primary-700 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 "
   :outline "group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none "})

(def variant-syles
  {:solid {:slate "bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900 ",
           :blue "bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600 ",
           :white "bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white "},
   :solid-blue {:pink " login-button"
                :grey " login-button-block"}
   :outline {:slate "ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300 ",
             :pink " login-button"
             :grey " login-button-block"
             :white "ring-slate-700 text-white hover:ring-slate-500 active:ring-slate-700 active:text-slate-400 focus-visible:outline-white "}})

(defn props->classes
  [{:keys [variant color class-name]
    :or {variant :solid color :blue class-name ""}}]
  (let [variant (keyword variant)
        color (keyword color)]
    (str (-> variant base-styles)
         (get-in variant-syles [variant color])
         class-name)))

(defnc button
  [{:keys [children] :as props}]
  (let [classes (props->classes props)]
    (d/button
      {:class-name classes & (dissoc props :class-name)}
      children)))
