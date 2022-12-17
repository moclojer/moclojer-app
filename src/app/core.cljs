(ns app.core
  (:require ["react-dom/client" :as rdom]
            [app.auth.db]
            [app.auth.events]
            [app.auth.subs]
            [app.auth.views :as auth]
            [app.components.footer :refer [FooterComponent]]
            [app.components.nav :refer [NavBar]]
            [app.lib :refer [defnc]]
            [app.routes.bookmarks :as routes.bookmarks]
            [app.routes.core :as routes]
            [app.routes.events]
            [app.routes.subs]
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

(defnc app []
  (let [user (refx/use-sub [:app.auth/current-user])
        current-route (refx/use-sub [:app.routes/current-route])
        route-data (:data current-route)]
    (d/div
     ($ NavBar {:user user})
     (if (or user (:public? route-data))
       (when-let [view (:view route-data)]
         ($ view {:match current-route}))
       ($ auth/login-view))
     ($ FooterComponent))))

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
