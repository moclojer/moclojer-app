(ns front.app.core
  (:require
   ["flowbite"]
   ["react-dom/client" :as rdom]
   [cljs.pprint :as pprint]
   [front.app.auth.db]
   [front.app.auth.events]
   [front.app.auth.subs]
   [front.app.components.footer :refer [FooterComponent]]
   [front.app.lib :refer [defnc]]
   [front.app.routes.bookmarks :as routes.bookmarks]
   [front.app.routes.core :as routes]
   [front.app.routes.events]
   [front.app.routes.subs]
   [helix.core :refer [$]]
   [helix.dom :as d]
   [helix.hooks :as hooks]
   [refx.alpha :as refx]
   [refx.db :as db]
   [reitit.frontend.easy :as rfe]))

(def default-db
  {:current-route nil
   :current-user nil})

(def debug (goog-define DEBUG false))
;;; Events ;;;

(refx/reg-event-fx
 ::initialize-db
 [(refx/inject-cofx :app.auth/cookie)]
 (fn [{:keys [cookie-current-user]} _]
   {:db (assoc default-db
               :current-user cookie-current-user)}))

(defnc routing []
  (let [user (refx/use-sub [:app.auth/current-user])
        current-route (refx/use-sub [:app.routes/current-route])
        route-data (:data current-route)
        is-public? (:public? route-data)
        view (:view route-data)]

    (hooks/use-effect
     [current-route]
     (when (nil? current-route)
       (rfe/push-state :app.core/login)))

    (hooks/use-effect
     [user]
     (when (-> user :data :session)
       (rfe/push-state :app.core/dashboard)))
    

    (if is-public?
      ($ view {:match current-route})
      (if (-> user :data :session)
        ($ view {:user user})
        (rfe/push-state :app.core/login)))))

(defnc app []
  (d/div
   ($ routing)
   (when debug
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
