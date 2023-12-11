(ns front.app.auth.effects
  (:require
   [front.app.auth.supabase :as supabase]
   [promesa.core :as p]
   [refx.alpha :refer [dispatch reg-fx]]
   [front.app.utils :as utils]))

(defn send-email [{:keys [body on-success on-failure]}]
  (.log js/console :sending-email)

  (-> (supabase/signin-with-email supabase/client (:email body))
      (p/then (fn [resp]
                (let [obj (utils/js->cljs-key resp)]
                  (if (:error obj)
                    (do
                      (js/console.error :resp-faiure obj)
                      (dispatch (conj on-failure {:body obj})))
                    (do
                      (js/console.log :resp-success obj)
                      (dispatch (conj on-success {:body (assoc
                                                         (utils/js->cljs-key resp)
                                                         :ok true)})))))))

      (p/catch (fn [resp]
                 (js/console.log :resp resp)
                 (dispatch (conj on-failure {:body (utils/js->cljs-key resp)}))))))

(defn auth-effect [fn-req]
  (fn [req]
    (fn-req req)))

(reg-fx :auth (auth-effect send-email))
