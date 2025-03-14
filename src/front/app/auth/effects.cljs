(ns front.app.auth.effects
  (:require
   [front.app.auth.supabase :as supabase]
   [front.app.utils :as utils]
   [promesa.core :as p]
   [refx.alpha :refer [dispatch reg-fx]]))

(defn handle-auth-response [resp on-success on-failure]
  (let [obj (utils/js->cljs-key resp)]
    (if (:error obj)
      (do
        (js/console.error :resp-failure obj)
        (dispatch (conj on-failure {:body obj})))
      (do
        (js/console.log :resp-success obj)
        (dispatch (conj on-success {:body (assoc obj :ok true)}))))))

(defn send-email [{:keys [body on-success on-failure]}]
  (.log js/console :sending-email)
  (-> (supabase/signin-with-email supabase/client (:email body))
      (p/then #(handle-auth-response % on-success on-failure))
      (p/catch (fn [resp]
                 (js/console.log :resp resp)
                 (dispatch (conj on-failure {:body (utils/js->cljs-key resp)}))))))

(defn send-oauth [{:keys [body on-success on-failure]}]
  (.log js/console :sending-oauth)
  (-> (p/let [oauth-response (supabase/signin-with-oauth supabase/client (:provider body))
              session (.getSession (.-auth supabase/client))]
        (clj->js {:data {:user (-> session .-user)
                         :session (-> session .-session)}
                  :error nil}))
      (p/then #(handle-auth-response % on-success on-failure))
      (p/catch (fn [resp]
                 (js/console.log :resp resp)
                 (dispatch (conj on-failure {:body (utils/js->cljs-key resp)}))))))

(defn auth-effect [fn-req]
  (fn [req]
    (fn-req req)))

(reg-fx :auth (auth-effect send-email))
(reg-fx :oauth (auth-effect send-oauth))
