(ns app.components.hero 
  (:require
   [app.components.button :refer [Button]]
   [app.components.container :refer [Container]]
   [app.lib :refer [defnc]]
   [helix.core :refer [$]]
   [helix.dom :as d]))


(defnc Hero []
  ($ Container {:class-name "pt-20 pb-16 text-center lg:pt-32"}
     (d/h1 {:class-name "mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl"}
           "Mock API "
           (d/span {:class-name "relative whitespace-nowrap text-blue-600"}
                   (d/svg {:aria-hidden "true"
                           :view-box "0 0 418 42"
                           :class-name "absolute top-2/3 left-0 h-[0.58em] w-full fill-blue-300/70"
                           :preserveAspectRatio "none"}
                          (d/path {:d "M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"}))
                   (d/span {:class-name "relative"} "made simple"))
           " for small bussinesses")
     (d/p {:class-name "mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700"}
          "Create your own mock api for your front end projects")
     (d/div {:class-name "mt-10 flex justify-center gap-x-6"}
            ($ Button {:href "register" :color "slate"} "Create and account")
            ($ Button {:href "video" :variant "outline"}
               (d/svg {:aria-hidden "true"
                       :class-name "h-3 w-3 flex-none fill-blue-600 group-active:fill-current"}
                      (d/path
                       {:d "m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z"}))
               (d/span {:class-name "ml-3"} "How to use")))
     (d/div {:class-name "mt-36 lg:mt-44"}
            (d/p {:class-name "font-display text-base text-slate-900"}
                 "Trusted by these tree companies so far")
            (d/ul {:role "list"
                   :class-name "mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0"}
                  (d/li
                   (d/ul {:role "list"
                          :class-name "flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0"}
                         (d/li {:key "Moclojer" :class-name "flex"}
                               (d/img {:src "https://avatars.githubusercontent.com/u/60410876?s=200&v=4" :alt ""}))
                         (d/li {:key "Moclojer1" :class-name "flex"}
                               (d/img {:src "https://avatars.githubusercontent.com/u/60410876?s=200&v=4" :alt ""}))
                         (d/li {:key "Moclojer2" :class-name "flex"}
                               (d/img {:src "https://avatars.githubusercontent.com/u/60410876?s=200&v=4" :alt ""}))))))))

