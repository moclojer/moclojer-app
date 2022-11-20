(ns app.core
  (:require ["react-dom/client" :as rdom]
            [app.auth.events]
            [app.auth.subs]
            [app.auth.views :as auth]
            [app.components :as comp]
            [app.lib :refer [defnc]]
            [app.pages :as pages]
            [app.routes.core :as routes]
            [app.routes.events]
            [app.routes.subs]
            [helix.core :refer [$]]
            [helix.dom :as d]
            [refx.alpha :as refx]))

;;; Events ;;;

(refx/reg-event-db
 ::initialize-db
 (fn [db _]
   (if db
     db
     {:current-route nil
      :current-user nil})))

(defnc app []
  (let [{:keys [username] :as user} (refx/use-sub [:app.auth/current-user])
        current-route (refx/use-sub [:app.routes/current-route])
        route-data (:data current-route)]
    (d/div
     ($ comp/NavBar)
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
     ($ comp/FooterComponent))))

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

(defn setup! []
  (refx/clear-subscription-cache!)
  (refx/dispatch-sync [::initialize-db])
  (routes/init-routes! routes))

(defn ^:export init []
  (setup!)
  (render))
