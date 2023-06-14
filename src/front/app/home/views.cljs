(ns front.app.home.views
  (:require
   [front.app.auth.supabase :as supabase]
   [helix.core :refer [$]]
   [helix.dom :as d]
   [helix.hooks :as hooks]
   [promesa.core :as p]
   [refx.alpha :as refx]
   [front.app.components.hero :refer [Hero]]
   [front.app.lib :refer [defnc]]))

(defn- js->cljs-key [obj]
  (js->clj obj :keywordize-keys true))

(defnc home-page []
  (let [[session set-session] (hooks/use-state nil)]

    (hooks/use-effect
     [session]
     (prn :set-current-user (and session (not (nil? (-> session :data :session)))))
     (when (and session (not (nil? (-> session :data :session))))
       (refx/dispatch [:app.auth/set-user-session session])))

    (hooks/use-effect
     :once
     (let [auth (.-auth supabase/client)]
       (prn :auth-callback auth)
       (-> (.getSession auth)
           (p/then
            (fn [resp]
              (prn :session (js->cljs-key resp))
              (set-session (js->cljs-key resp)))))))

    (hooks/use-effect
     []
     (let [auth (.-auth supabase/client)]
       (.onAuthStateChange auth
                           (fn [event new-session]
                             (prn :change-session (js->cljs-key new-session))
                             (prn :event event)
                             (set-session {:data {:session (js->cljs-key new-session)} 
                                           :error nil})))))

    (d/main
     ($ Hero))))
