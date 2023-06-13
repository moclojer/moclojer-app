(ns front.app.auth.events
  (:require [front.app.http]
            [front.app.auth.effects]
            [front.app.auth.db :as auth.db]
            [refx.alpha :as refx]
            [refx.interceptors :refer [after]]))

(defn set-current-user-cookie!
  [{:keys [current-user]}]
  (auth.db/set-cookie "current-user" (:expires_in current-user) current-user))

(defn remove-current-user-cookie!
  [_]
  (auth.db/remove-cookie "current-user"))

(refx/reg-event-fx
 :app.auth/login-done
 [(after set-current-user-cookie!)]
 (fn
   [{db :db} [_ response]]
   (println :success-login response)
   {:db (-> db
            (assoc :login-loading? false)
            (assoc :login-error nil)
            (assoc :current-user (:body response)))}))

(refx/reg-event-db
 :app.auth/login-error
 (fn
   [db [key-error val-error]]
   (js/console.error key-error val-error)
   (-> db
       (assoc :login-loading? false)
       (assoc :login-error [key-error (:body val-error)])
       (assoc :current-user nil))))

(refx/reg-event-fx
 :app.auth/login
 (fn
   [{db :db} [_ login]]
   (prn :token-user-rrrr login)
   {:db  (assoc db
                :login-error nil
                :login-loading? true)}))

(refx/reg-event-fx
 :app.auth/send-email-done
 (fn
   [{db :db} [_ response]]
   (println :success-email response)
   {:db (-> db
            (assoc :login-loading? false)
            (assoc :login-error nil)
            (assoc :login-email-sent (-> response :body :ok)))}))

(refx/reg-event-db
 :app.auth/send-email-error
 (fn
   [db [key-error val-error]]
   (js/console.error key-error val-error)
   (-> db
       (assoc :login-loading? false)
       (assoc :login-error [key-error (-> val-error :body :error)])
       (assoc :login-email-sent nil))))

(refx/reg-event-fx
 :app.auth/send-email
 (fn
   [{db :db} [_ login]]
   {:auth {:body login
           :on-success [:app.auth/send-email-done]
           :on-failure [:app.auth/send-email-error]}
    :db  (assoc db
                :login-error nil
                :login-loading? true)}))

(refx/reg-event-db
 :app.auth/send-email-again
 (fn
   [db _]
   (-> db
       (assoc :login-email-sent nil))))

(refx/reg-event-fx
 :app.auth/logout
 [(after remove-current-user-cookie!)]
 (fn
   [{db :db} _]
   {:db (-> db
            (assoc :current-user nil)
            (assoc :login-loading? false)
            (assoc :login-error nil))}))

(refx/reg-event-db
 :app.auth/error
 (fn
   [db error]
   (-> db
       (assoc :current-user nil)
       (assoc :login-loading? false)
       (assoc :login-error error)
       (assoc :login-email-sent nil))))
