(ns front.app.auth.effects
  (:require
   [front.app.auth.supabase :as supabase]
   [promesa.core :as p]
   [refx.alpha :refer [dispatch reg-fx]]))

(defn- js->cljs-key [obj]
  (js->clj obj :keywordize-keys true))

(defn send-email [{:keys [body on-success on-failure]}]
  (js/console.log :sending-email)

  (-> (supabase/signin-with-email supabase/client (:email body))
      (p/then (fn [resp]
                (let [obj (js->cljs-key resp)]
                  (if (:error obj)
                    (do
                      (js/console.error :resp-faiure obj)
                      (dispatch (conj on-failure {:body obj})))
                    (do
                      (js/console.log :resp-success obj)
                      (dispatch (conj on-success {:body (assoc
                                                         (js->cljs-key resp)
                                                         :ok true)})))))))

      (p/catch (fn [resp]
                 (js/console.log :resp resp)
                 (dispatch (conj on-failure {:body (js->cljs-key resp)}))))))

(defn auth-effect [fn-req]
  (fn [req]
    (fn-req req)))

(reg-fx :auth (auth-effect send-email))
