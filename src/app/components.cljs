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

(defnc NavLink [{:keys [href children]}]
  (d/a
   {:href href
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

