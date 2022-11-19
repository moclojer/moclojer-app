(ns app.components
  (:require
   ["moclojer-components" :as mc]
   [refx.db :as db]
   [clojure.pprint :as pprint]
   [app.lib :refer [defnc]]
   [app.routes.subs]
   [app.routes.events]
   [app.auth.subs]
   [app.auth.events]
   [helix.core :refer [$]]
   [helix.dom :as d]
   [reitit.frontend.easy :as rfe]))

(defnc LoadingSpinner []
  (d/svg
   {:className "animate-spin -ml-1 mr-3 h-5 w-5 text-white"
    :xmlns "http://www.w3.org/2000/svg" :fill "none" :viewBox "0 0 24 24"}
   (d/circle
    {:className "opacity-25"
     :cx "12" :cy "12" :r "10" :stroke "currentColor" :stroke-width "4"})
   (d/path
    {:className "opacity-75"
     :fill "currentColor" :d "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})))

(defnc NavLink [{:keys [href children on-click]}]
  (d/a
   {:href href
    :on-click on-click
    :className " inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"}
   children))

(defnc NavBar []
  (d/div
   {:class-name "py-10"}
   (d/div {:class-name "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"}
          (d/nav {:class-name "relative z-50 flex justify-between"}
                 (d/div {:class-name "flex items-center md:gap-x-12"}
                        (d/img {:src ""})
                        (d/div {:class-name "hidden md:flex md:gap-x-6"}
                               ($ NavLink {:children "Features"
                                           :href (rfe/href :app.core/features)})
                               ($ NavLink {:children "Pricing"
                                           :href (rfe/href :app.core/pricing)})
                               ($ NavLink {:children "About"
                                           :href (rfe/href :app.core/about)})))

                 (d/div
                  {:class-name "flex items-center gap-x-5 md:gap-x-8"}
                  (d/div
                   {:class-name "hidden md:block"}
                   ($ NavLink {:children "Sign In"
                               :href (rfe/href :app.core/login)}))
                  ($ mc/Button  "Get started")
                  (d/div {:class-name "-mr-1 md:hidden"}))))))

(defnc Footer []
  (d/footer
   {:class-name "bg-slate-50"}
   (d/div
    {:class-name "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"}
    (d/div
     {:class-name "py-16"}
     ; State debug
     (d/pre (with-out-str (pprint/pprint @db/app-db)))))))

