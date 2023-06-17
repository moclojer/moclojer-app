(ns front.app.home.views
  (:require
   [front.app.auth.db :as auth.db]
   [front.app.auth.supabase :as supabase]
   [front.app.components.hero :refer [Hero]]
   [front.app.lib :refer [defnc]]
   [helix.core :refer [$]]
   [helix.dom :as d]
   [helix.hooks :as hooks]
   [promesa.core :as p]
   [refx.alpha :as refx]
   [reitit.frontend.easy :as rfe]))

(defn- js->cljs-key [obj]
  (js->clj obj :keywordize-keys true))

(defnc home-page []
  (let [[session set-session] (hooks/use-state nil)]

    (hooks/use-effect
     [session]
     (when (and session (not (nil? (-> session :data :session))))
       (refx/dispatch [:app.auth/set-user-session session])))

    (hooks/use-effect
     :once
     (let [auth (.-auth supabase/client)]
       (-> (.getSession auth)
           (p/then
            (fn [resp]
              (prn :session (js->cljs-key resp))
              ;; user session is nil, redirect to login
              (if-not (-> (js->cljs-key resp) :data)
                (rfe/push-state :app.core/login)
                (set-session (js->cljs-key resp))))))))

    (hooks/use-effect
     :once
     (supabase/event-changes
      (fn [event s]
        (when (= event "SIGNOUT")
          (do
            (auth.db/remove-cookie "current-user")
            (set-session s))))))

    (d/main
     ($ Hero))))
