(ns app.core
  (:require ["moclojer-components" :as mc]
            ["react-dom/client" :as rdom]
            [app.dev :as dev]
            [app.routes :as routes]
            [app.utils :refer [defnc]]
            [clojure.pprint :as pprint]
            [helix.core :refer [$]]
            [helix.dom :as d]
            [refx.alpha :as refx]
            [refx.db :as db]
            [reitit.frontend.easy :as rfe]))

;;; Events ;;;

(refx/reg-event-db
 ::initialize-db
 (fn [db _]
   (if db
     db
     {:app.routes/current-route nil
      :app.login/current-user nil})))

;;; Components ;;;

(defnc NavLink [{:keys [href children]}]
  (d/a
   {:href href
    :className "inline-block rounded-lg py-1 px-2 text-sm text-slate-700"}
   children))

(defnc Header []
  (d/div
   {:class-name "py-10"}
   (d/div
    {:class-name "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"}
    (d/nav
     {:class-name "relative z-50 flex justify-between"}
     (d/div
      {:class-name "flex items-center md:gap-x-12"}
      (d/img
       {:src ""})
      (d/div
       {:class-name "hidden md:flex md:gap-x-6"}
       ($ NavLink {:children "Features"
                   :href (rfe/href ::features)})
       ($ NavLink {:children "Pricing"
                   :href (rfe/href ::pricing)})
       ($ NavLink {:children "About"
                   :href (rfe/href ::about)})))

     (d/div
      {:class-name "flex items-center gap-x-5 md:gap-x-8"}
      (d/div
       {:class-name "hidden md:block"}
       ($ NavLink {:children "Sign In"
                   :href (rfe/href ::login)}))
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

;;; Pages ;;;

(defnc home-page []
  (d/div
   (d/h2 "Welcome!")
   (d/p "Some motivational catch phrase here.")))

(defnc features-page []
  (d/div
   (d/h2 "Features")
   (d/p "Here our features.")))

(defnc pricing-page []
  (d/div
   (d/h2 "Pricing")
   (d/p "Here our values.")))

(defnc about-page []
  (d/div
   (d/h2 "About")
   (d/p "About us. (And some nice pictures)")))

(defnc login-page []
  (d/div
   (d/h2 "Login")
   (d/p "Login form here.")))

(defnc app []
  (let [current-route (refx/use-sub [:app.routes/current-route])
        route-data (:data current-route)]
    (d/div
     ($ Header)

     (when-let [view (:view route-data)]
       ($ view {:match current-route}))

     ($ Footer))))

;;; Routes ;;;

(def routes
  ["/"
   [""
    {:name ::frontpage
     :view home-page
     :public? true}]

   ["features"
    {:name ::features
     :view features-page
     :public? true}]

   ["pricing"
    {:name ::pricing
     :view pricing-page
     :public? true}]

   ["about"
    {:name ::about
     :view about-page
     :public? true}]

   ["login"
    {:name ::login
     :view login-page
     :public? true}]])

;;; Setup ;;;

(defn ^:export init []
  (refx/clear-subscription-cache!)
  (refx/dispatch-sync [::initialize-db])
  (dev/dev-setup)
  (routes/init-routes! routes)
  (doto (rdom/createRoot (js/document.getElementById "app"))
    (.render ($ app))))
