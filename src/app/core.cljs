(ns app.core
  (:require ["moclojer-components" :as mc]
            ["react-dom/client" :as rdom]
            [clojure.pprint :as pprint]
            [app.lib :refer [defnc]]
            [app.routes.core :as routes]
            [app.routes.subs]
            [app.routes.events]
            [app.auth.subs]
            [app.auth.events]
            [app.auth.views :as auth]
            [app.pages :as pages]
            [helix.core :refer [$]]
            [helix.dom :as d]
            [refx.alpha :as refx]
            [refx.db :as db]
            [reitit.frontend.easy :as rfe]))

;;; Events ;;;

(refx/reg-event-db ::initialize-db
                   (fn [db _]
                     (if db
                       db
                       {:current-route nil
                        :current-user nil})))

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


(defnc app []
  (let [{:keys [username] :as user} (refx/use-sub [:app.auth/current-user])
        current-route (refx/use-sub [:app.routes/current-route])
        route-data (:data current-route)]
    (d/div
     ($ Header)

       (when user
        (d/div
         (d/li (d/a {:on-click (fn [e]
                                 (.preventDefault e)
                                 (refx/dispatch [:app.auth/logout]))
                     :href "#"}
                    (str "Logout (" username ")")))))

       (if (or user (:public? route-data))
         (when-let [view (:view route-data)]
           ($ view {:match current-route}))
         ($ auth/login-view))

     ($ Footer))))

;;; Routes ;;;

(def routes
  ["/"
   [""
    {:name ::frontpage
     :view pages/home-page
     :public? true}]

   ["features"
    {:name ::features
     :view pages/features-page
     :public? true}]

   ["pricing"
    {:name ::pricing
     :view pages/pricing-page
     :public? true}]

   ["about"
    {:name ::about
     :view pages/about-page
     :public? true}]

   ["login"
    {:name ::login
     :view auth/login-view
     :public? true}]])

;;; Setup ;;;

(defonce root
  (rdom/createRoot (js/document.getElementById "app")))

(defn render []
  (.render root ($ app)))

(defn ^:export init []
  (refx/clear-subscription-cache!)
  (refx/dispatch-sync [::initialize-db])
  (routes/init-routes! routes)
  (render))

