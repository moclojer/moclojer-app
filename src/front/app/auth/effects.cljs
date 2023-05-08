(ns front.app.auth.effects
  (:require
   [front.app.auth.supabase :as supabase]
   [promesa.core :as p]
   [refx.alpha :refer [dispatch reg-fx]]))

(defn- js->cljs-key [obj]
  (js->clj obj :keywordize-keys true))

(defn send-email [{:keys [body on-success on-failure]}]
  (let [client ^js (supabase/create-client
                    "https://tgvdfxurgsddxouxmugs.supabase.co"
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRndmRmeHVyZ3NkZHhvdXhtdWdzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE1MDM0NDMsImV4cCI6MTk5NzA3OTQ0M30.7pq4MM_ZldiWvOk_cnQuxlvUF8eFcxlPDB7jMTNMYb0")]
    (prn :client client)
    (-> (supabase/signin-with-email client (:email body))
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
                   (dispatch (conj on-failure {:body (js->cljs-key resp)})))))))

(defn auth-effect [fn-req]
  (fn [req]
    (fn-req req)))

(reg-fx :auth (auth-effect send-email))


