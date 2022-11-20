(ns app.components
  (:require
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

(def base-styles
  {:solid "group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 "
   :outline "group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none "})

(def variant-syles
  {:solid {:slate "bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900 ",
           :blue "bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600 ",
           :white "bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white "},
   :outline {:slate "ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300 ",
             :white "ring-slate-700 text-white hover:ring-slate-500 active:ring-slate-700 active:text-slate-400 focus-visible:outline-white "}})

(defnc Button
  [{:keys [variant color class-name children]
    :or {variant :solid color :blue class-name ""} :as props}]
  (let [variant (keyword variant)
        color (keyword color)
        class-name (str (-> base-styles variant)
                        (-> variant-syles variant color)
                        class-name)]

    (d/button
     {:class-name class-name & props}
     children)))

(defnc AuthLayout
  [{:keys [children]}]
  (d/div {:class-name "relative flex min-h-full justify-center md:px-12 lg:px-0"}
         (d/div {:class-name "relative z-10 flex flex-1 flex-col bg-white py-10 px-4 shadow-2xl sm:justify-center md:flex-none md:px-28"}
                (d/div {:class-name "mx-auto w-full max-w-md sm:px-4 md:w-96 md:max-w-sm md:px-0"}
                       children))))

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
                  ($ Button "Get started")
                  (d/div {:class-name "-mr-1 md:hidden"}))))))

(defnc Container [{:keys [class-name children] :as props}]
  (d/div {:class-name (str "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 " class-name) & props}
         children))

(defnc FooterComponent []
  (d/footer {:class-name "bg-slate-50"}
            ($ Container
               (d/div {:class-name "py-16"}
                      #_(d/div {:class-name "mx-auto h-10 w-auto"} "Logo")
                      (d/nav {:class-name "mt-10 text-sm"}
                             (d/div
                              {:class-name "-my-1 flex justify-center gap-x-6"}
                              ($ NavLink {:children "Features"
                                          :href (rfe/href :app.core/features)})
                              ($ NavLink {:children "Pricing"
                                          :href (rfe/href :app.core/pricing)})
                              ($ NavLink {:children "About"
                                          :href (rfe/href :app.core/about)}))))
               (d/div {:class-name "flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between"}
                      (d/div {:class-name "flex gap-x-6"}
                             (d/a {:href "https://twitter.com" :class-name "group"}
                                  (d/svg
                                   {:aria-hidden "true"
                                    :class-name "h-6 w-6 fill-slate-500 group-hover:fill-slate-700"}
                                   (d/path {:d "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0 0 22 5.92a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996 4.107 4.107 0 0 0-6.993 3.743 11.65 11.65 0 0 1-8.457-4.287 4.106 4.106 0 0 0 1.27 5.477A4.073 4.073 0 0 1 2.8 9.713v.052a4.105 4.105 0 0 0 3.292 4.022 4.093 4.093 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 2 18.407a11.615 11.615 0 0 0 6.29 1.84"})))
                             (d/a {:href "https://github.com"
                                   :class-name "group"
                                   :aria-label "GitHub"}
                                  (d/svg
                                   {:aria-hidden "true"
                                    :class-name "h-6 w-6 fill-slate-500 group-hover:fill-slate-700"}
                                   (d/path {:d "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"})))))

               (d/pre (with-out-str (pprint/pprint @db/app-db)))
               #_(d/p {:class-name "mt-6 text-sm text-slate-500 sm:mt-0"}
                      "Moclojer"))))
