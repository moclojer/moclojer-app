(ns front.app.core
  (:require
   ["react-dom/client" :as rdom]
   [front.app.auth.db]
   [front.app.auth.events]
   [front.app.auth.subs]
   [front.app.auth.views :as auth]
   [front.app.components.aside :as dashboard]
   [front.app.components.dashboard.header :refer [Header]]
   [front.app.components.dashboard.main :refer [Main]]
   [front.app.components.footer :refer [FooterComponent]]
   [front.app.components.nav :refer [NavBar]]
   [front.app.lib :refer [defnc]]
   [front.app.routes.bookmarks :as routes.bookmarks]
   [front.app.routes.core :as routes]
   [front.app.routes.events]
   [front.app.routes.subs]
   [helix.core :refer [$]]
   [helix.dom :as d]
   [refx.alpha :as refx]))

(def default-db
  {:current-route nil
   :current-user nil})

;;; Events ;;;

(refx/reg-event-fx
 ::initialize-db
 [(refx/inject-cofx :app.auth/cookie)]
 (fn [{:keys [cookie-current-user]} _]
   {:db (assoc default-db
               :current-user cookie-current-user)}))

;;; Components ;;;

(defnc dashboard-screen
  [{:keys [user]}]
  (d/body
   {:class-name
    "relative bg-yellow-50 overflow-hidden max-h-screen"}
   #_($ Header)
   ($ dashboard/Dash)
   #_($ Main)))

(defnc landing-screen [{:keys [user]}]
  (let [current-route (refx/use-sub [:app.routes/current-route])
        route-data (:data current-route)]

    (d/div
       ($ NavBar {:user user})
       (if (or user (:public? route-data))
         (when-let [view (:view route-data)]
           ($ view {:match current-route}))
         ($ auth/login-view))
       ($ FooterComponent))))

(defnc app []
  (let [user (refx/use-sub [:app.auth/current-user])]
    (d/div
     (if user
       ($ dashboard-screen {:user user})
       ($ dashboard-screen {:user user})))))

;;; Setup ;;;

(defonce root
  (rdom/createRoot (js/document.getElementById "app")))

(defn render []
  (.render root ($ app)))

(defn setup! []
  (refx/clear-subscription-cache!)
  (refx/dispatch-sync [::initialize-db])
  (routes/init-routes! routes.bookmarks/routes))

(defn ^:export init []
  (setup!)
  (render))
