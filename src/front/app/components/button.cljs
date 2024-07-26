(ns front.app.components.button
  (:require [front.app.lib :refer [defnc]]
            [helix.dom :as d]
            [helix.core :refer [$]]
            [refx.alpha :as refx]
            [front.app.components.svg :as svg]

            ))

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

(defnc new-mock-btn []
  (d/button {:class-name "px-3 py-2 bg-pink-600 rounded-lg flex flex-row space-x-2 items-center btn-add"
             :on-click #(refx/dispatch [:app.dashboard/toggle-mock-modal])}
            (d/svg {:width "16"
                    :height "17"
                    :viewBox "0 0 16 17"
                    :fill "none"}
                   (d/path {:fill-rule "evenodd"
                            :clip-rule "evenodd"
                            :d "M8 4.5C8.21217 4.5 8.41566 4.58429 8.56569 4.73431C8.71571 4.88434 8.8 5.08783 8.8 5.3V7.7H11.2C11.4122 7.7 11.6157 7.78429 11.7657 7.93431C11.9157 8.08434 12 8.28783 12 8.5C12 8.71217 11.9157 8.91566 11.7657 9.06569C11.6157 9.21571 11.4122 9.3 11.2 9.3H8.8V11.7C8.8 11.9122 8.71571 12.1157 8.56569 12.2657C8.41566 12.4157 8.21217 12.5 8 12.5C7.78783 12.5 7.58434 12.4157 7.43431 12.2657C7.28429 12.1157 7.2 11.9122 7.2 11.7V9.3H4.8C4.58783 9.3 4.38434 9.21571 4.23431 9.06569C4.08429 8.91566 4 8.71217 4 8.5C4 8.28783 4.08429 8.08434 4.23431 7.93431C4.38434 7.78429 4.58783 7.7 4.8 7.7H7.2V5.3C7.2 5.08783 7.28429 4.88434 7.43431 4.73431C7.58434 4.58429 7.78783 4.5 8 4.5V4.5Z"
                            :fill "white"}))
            (d/p {:class-name "text-white text-xs font-bold"}
                 " new mock")
            ($ svg/box)))
