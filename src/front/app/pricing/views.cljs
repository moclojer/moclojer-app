(ns front.app.pricing.views
  (:require
   [front.app.components.button :refer [Button]]
   [front.app.components.checkicon :refer [CheckIcon]]
   [front.app.components.container :refer [Container]]
   [front.app.components.swirlydoodle :refer [SwirlyDoodle]]
   [front.app.lib :refer [defnc]]
   [helix.core :refer [$]]
   [helix.dom :as d]))



(defnc Plan [{:keys [featured price name description features]}]
  (let [class-name-section (if featured (str "flex flex-col rounded-3xl px-6 sm:px-8 "
                                             "order-first bg-blue-600 py-8 lg:order-none")
                             (str "flex flex-col rounded-3xl px-6 sm:px-8 " "lg:py-8"))] 
    (d/section {:class-name class-name-section}
               (d/h3 {:class-name "mt-5 font-display text-lg text-white"} name)
               (d/p {:class-name (str "mt-2 text-base" (if featured " text-white" " text-slate-400"))}
                    description)
               (d/p {:class-name "order-first font-display text-5xl font-light tracking-tight text-white"}
                    price)
               (d/ul {:role "list"
                      :class-name (str "order-last mt-10 flex flex-col gap-y-3 text-sm" (if featured " text-white" " text-slate-400"))}
                     (map (fn [feature]
                            (d/li {:key feature :class-name "relative"}
                                  ($ CheckIcon {:class-name (if featured "text-white" "text-slate-400")})
                                  (d/span {:class-name "ml-4"} feature))) features))
               ($ Button {:href "/"
                          :variant (if featured "solid" "outline")
                          :color "white"
                          :class-name "mt-8"
                          :aria-label (str "Get started with te " name " plane for price")}
                  "Get started"))))

(defnc Pricing []
  (d/section {:id "pricing"
              :aria-label "pricing"
              :class-name "bg-slate-900 py-20 sm:py-32"}
             ($ Container
                (d/div {:class-name "md:text-center"}
                       (d/h2 {:class-name "font-display text-3xl tracking-tight text-white sm:text-4xl"}
                             (d/span {:class-name "relative whitespace-nowrap"}
                                     ($ SwirlyDoodle {:class-name "absolute top-1/2 left-0 h-[1em] w-full fill-blue-400"})
                                     (d/span {:class-name "relative"} "Simple pricing")
                                     " for everyone."))
                       (d/p {:class-name "mt-4 text-lg text-slate-400"}
                            "It doesn't matter what size your business is."))
                (d/div {:class-name "-mx-4 mt-16 grid max-w-2xl grid-cols-1 gap-y-10 sm:mx-auto lg:-mx-8 lg:max-w-none lg:grid-cols-3 xl:mx-0 xl:gap-x-8"}
                       ($ Plan
                          {:name "Starter"
                           :price "$9"
                           :description "Good for anyone who is bla bla bla bla"
                           :href "/"
                           :features ["Send 10 quotes and invoices"
                                      "Connect up to 2 bank accounts"
                                      "Track up to 15 expenses per month"
                                      "Manual payroll support"
                                      "Export up to 3 reports"]})
                       ($ Plan
                          {:name "Small B"
                           :price "$15"
                           :featured true
                           :description "Good for anyone who is bla bla bla bla"
                           :href "/"
                           :features ["Send 10 quotes and invoices"
                                      "Connect up to 2 bank accounts"
                                      "Track up to 15 expenses per month"
                                      "Manual payroll support"
                                      "Export up to 3 reports"]})
                       ($ Plan
                          {:name "Big tech"
                           :price "$9"
                           :description "Good for anyone who is bla bla bla bla"
                           :href "/"
                           :features ["Send 10 quotes and invoices"
                                      "Connect up to 2 bank accounts"
                                      "Track up to 15 expenses per month"
                                      "Manual payroll support"
                                      "Export up to 3 reports"]})))))

(defnc pricing-page []
  (d/div
    ($ Pricing)))
