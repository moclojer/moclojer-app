(ns app.components.nav
  (:require [app.auth.views :refer [AuthMenu]]
            [app.components.button :refer [Button]]
            [app.components.navlink :refer [NavLink]]
            [app.lib :refer [defnc]]
            [helix.core :refer [$]]
            [helix.dom :as d]
            [reitit.frontend.easy :as rfe]))

(defnc NavBar [{:keys [user]}]
  (d/div
   {:class-name "py-10"}
   (d/div {:class-name "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"}
          (d/nav {:class-name "relative z-50 flex justify-between"}
                 (d/div {:class-name "flex items-center md:gap-x-12"}
                        (d/img {:src ""})
                        (d/div {:class-name "hidden md:flex md:gap-x-6"}
                               ($ NavLink {:children "Home"
                                           :href (rfe/href :app.core/home)})
                               ($ NavLink {:children "Features"
                                           :href (rfe/href :app.core/features)})
                               ($ NavLink {:children "Pricing"
                                           :href (rfe/href :app.core/pricing)})))
                 (d/div
                  {:class-name "flex items-center gap-x-5 md:gap-x-8"}
                  ($ AuthMenu {:user user})
                  ($ Button "Get started")
                  (d/div {:class-name "-mr-1 md:hidden"}))))))

