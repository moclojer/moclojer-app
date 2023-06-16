(ns front.app.core
  (:require
   ["flowbite"]
   ["react-dom/client" :as rdom]
   [front.app.auth.db]
   [front.app.auth.events]
   [front.app.auth.subs]
   [front.app.dashboard.views :as d.views]
   [front.app.components.footer :refer [FooterComponent]]
   [front.app.components.nav :refer [NavBar]]
   [front.app.lib :refer [defnc]]
   [front.app.routes.bookmarks :as routes.bookmarks]
   [front.app.routes.core :as routes]
   [front.app.routes.events]
   [front.app.routes.subs]
   [helix.core :refer [$]]
   [helix.dom :as d]
   [refx.alpha :as refx]
   [helix.hooks :as hooks]
   [reitit.frontend.easy :as rfe]))

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
  [user]
  ($ d.views/Index user))

(defnc landing-screen [{:keys [user]}]
  (let [current-route (refx/use-sub [:app.routes/current-route])
        route-data (:data current-route)
        is-auth-screen? (:dashboard route-data)]

    (hooks/use-effect
     [current-route]
     (when (nil? current-route)
       (rfe/push-state :app.core/home)))
    ;;# TODO this still messing but it was only to remove the headers from login
    (d/div
     (if is-auth-screen?
       (when-let [view (:view route-data)]
         ($ view {:match current-route}))
       (d/div ($ NavBar {:user user})
              (when-let [view (:view route-data)]
                ($ view {:match current-route}))
              ($ FooterComponent))))))

(defnc screens []
  (let [user (refx/use-sub [:app.auth/current-user])]
    (d/div
     (if user
       ($ dashboard-screen {:user user})
       ($ landing-screen {:user user})))))

(defnc app []
  (d/div
   ($ screens)))

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
