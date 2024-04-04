(ns front.app.core
  (:require
   ["@sentry/react" :as Sentry]
   ["flowbite"]
   ["react-dom/client" :as rdom]
   [front.app.auth.db]
   [front.app.auth.events]
   [front.app.auth.subs]
   [front.app.auth.supabase :as supabase]
   [front.app.components.footer :refer [footer-component]]
   [front.app.components.notifications :refer [notifications]]
   [front.app.dashboard.events]
   [front.app.dashboard.subs]
   [front.app.lib :refer [defnc]]
   [front.app.routes.bookmarks :as routes.bookmarks]
   [front.app.routes.core :as routes]
   [front.app.routes.events]
   [front.app.routes.subs]
   [front.app.utils :as utils]
   [helix.core :refer [$ <>]]
   [helix.dom :as d]
   [helix.hooks :as hooks]
   [promesa.core :as p]
   [refx.alpha :as refx]
   [reitit.frontend.easy :as rfe]))

(def default-db
  {:current-route nil
   :current-user nil})

(goog-define DEBUG true)
(def debug DEBUG)
;;; Events ;;;

(refx/reg-event-fx
 ::initialize-db
 [(refx/inject-cofx :app.auth/cookie)]
 (fn [{:keys [cookie-current-user]} _]
   {:db (assoc default-db
               :current-user cookie-current-user)}))

(refx/reg-sub
 :app.database/db
 (fn [db]
   db))

(defnc route-handler []
  (let [current-route (refx/use-sub [:app.routes/current-route])
        current-user (refx/use-sub [:app.auth/current-user])
        [login-err _] (refx/use-sub [:app.auth/login-error])
        valid-user? (-> current-user :user :valid-user)
        public-route? (-> current-route :data :public?)
        accessible-route? (or valid-user? public-route?)
        route-name (-> current-route :data :name)
        [session set-session!] (hooks/use-state nil)
        user-exists? (refx/use-sub [:app.auth/user-exists?])]

    (hooks/use-effect
     [login-err current-route]
     (when (or login-err (nil? current-route))
       (rfe/push-state :app.core/login)))

    (hooks/use-effect
     [user-exists?]
     (if (and (not user-exists?) (some? session))
       (do
         (refx/dispatch-sync [:app.auth/saving-user session])
         (rfe/push-state :app.core/first-login)
         (set-session! nil))
       (when (some-> current-user :user)
         (if (not= route-name :app.core/auth)
           (rfe/push-state route-name)
           (rfe/push-state :app.core/dashboard)))))

    (hooks/use-effect
     [current-user]
     (when-not (and (some? session) valid-user?)
       (-> (.. supabase/client -auth getSession)
           (p/then
            (fn [resp]
              (let [ses (-> (utils/js->cljs-key resp)
                            (get-in [:data :session])
                            utils/convert-keys)
                    access-token (:access-token ses)
                    valid-session? (and (some? ses) (not= ses {})
                                        (some? access-token))]
                (if valid-session?
                  (do
                    (set-session! ses)
                    (refx/dispatch-sync [:app.auth/user-exists? ses]))
                  (rfe/push-state :app.core/login)))))
           (p/catch (fn [err] (refx/dispatch-sync [:app.auth/login-error err]))))))

    (let [view (-> current-route :data :view)]
      (when (and (some? view) accessible-route?)
        (<>
         ($ view {:route current-route})
         ($ notifications))))))

(defnc app []
  (d/div
   ($ route-handler)
   (when debug
     ($ footer-component))))

;;; Setup ;;;
(defonce root
  (rdom/createRoot (js/document.getElementById "app")))

(defn render []
  (.render root ($ app)))

(goog-define SENTRY_DNS "")

(defn init-sentry []
  (.init
   Sentry
   #js {:dns SENTRY_DNS
        :integrations
        [(.browserTracingIntegration Sentry)
         (.replayIntegration
          Sentry
          #js {:maskAllText false
               :blockAllMedia false})]
        :tracesSampleRate 1.0
        :tracePropagationTargets ["localhost"
                                  (js/RegExp. "/^https://app.moclojer.com/api")]
        :replaysSessionSampleRate 0.1
        :replaysOnErrorSampleRate 1.0}))

(defn setup! []
  (init-sentry)
  (refx/clear-subscription-cache!)
  (refx/dispatch-sync [::initialize-db])
  (routes/init-routes! routes.bookmarks/routes))

(defn ^:export init []
  (setup!)
  (render))
