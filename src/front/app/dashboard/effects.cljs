(ns front.app.dashboard.effects
  (:require
   [front.app.auth.supabase :as supabase]
   [front.app.auth.effects :refer [auth-effect handle-auth-response]]
   [front.app.utils :as utils]
   [promesa.core :as p]
   [refx.alpha :refer [dispatch reg-fx]]))

(defn invite-user [{:keys [body on-success on-failure]}]
  (.log js/console :sending-email)
  (-> (supabase/invite-user-to-org supabase/client (:email body) (:org-id body))
      (p/then #(handle-auth-response % on-success on-failure))
      (p/catch (fn [resp]
                 (js/console.log :resp resp)
                 (dispatch (conj on-failure {:body (utils/js->cljs-key resp)}))))))

(reg-fx :invite-user (auth-effect invite-user))
