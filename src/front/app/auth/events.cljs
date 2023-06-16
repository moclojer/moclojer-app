(ns front.app.auth.events
  (:require [front.app.http]
            [front.app.auth.effects]
            [front.app.auth.db :as auth.db]
            [refx.alpha :as refx]
            [refx.interceptors :refer [after]]))

(defn set-current-user-cookie!
  [{:keys [current-user]}]
  (let [expires_at (-> current-user :data :session :expires_at)]
    (prn :set-cookie expires_at)
    (prn :current-user current-user)
    (auth.db/set-cookie "current-user" expires_at  current-user)))

(defn remove-current-user-cookie!
  [_]
  (auth.db/remove-cookie "current-user"))


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
 :app.auth/set-user-session
 [(after set-current-user-cookie!)]
 (fn
   [{db :db} [_ session]]
   (prn :user-session session)
   {:db  (assoc db
                :current-user session
                :login-error nil
                :login-loading? false)}))

(refx/reg-event-fx
 :app.core/logout
 [(after remove-current-user-cookie!)]
 (fn
   [{db :db} _]
   {:db (-> db
            (assoc :current-user nil)
            (assoc :login-loading? false)
            (assoc :login-error nil))}))

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

(refx/reg-event-db
 :app.auth/error
 (fn
   [db error]
   (-> db
       (assoc :current-user nil)
       (assoc :login-loading? false)
       (assoc :login-error error)
       (assoc :login-email-sent nil))))
