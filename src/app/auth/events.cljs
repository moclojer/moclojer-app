(ns app.auth.events
  (:require [app.http]
            [refx.alpha :as refx]))

(refx/reg-event-fx
 :app.auth/login-done
 (fn
   [{db :db} [_ response]]
   (println :success response)
   {:db (-> db
            (assoc :login-loading? false)
            (assoc :login-error nil)
            (assoc :current-user (:body response)))}))

(refx/reg-event-db
 :app.auth/login-error
 (fn
   [db [key-error val-error]]
   (println :fail key-error val-error)
   (-> db
       (assoc :login-loading? false)
       (assoc :login-error [key-error (:body val-error)])
       (assoc :current-user nil))))

(refx/reg-event-fx
 :app.auth/login
 (fn
   [{db :db} [_ login]]
   {:http {:method      :post
           :url         "/login"
           :body        login
           :accept :json
           :content-type :json
           :on-success  [:app.auth/login-done]
           :on-failure  [:app.auth/login-error]}
    :db  (assoc db
                :login-error nil
                :login-loading? true)}))

(refx/reg-event-fx
 :app.auth/send-email-done
 (fn
   [{db :db} [_ response]]
   (println :success response)
   {:db (-> db
            (assoc :login-loading? false)
            (assoc :login-error nil)
            (assoc :login-email-sent (-> response :body :ok)))}))

(refx/reg-event-db
 :app.auth/send-email-error
 (fn
   [db [key-error val-error]]
   (println :fail key-error val-error)
   (-> db
       (assoc :login-loading? false)
       (assoc :login-error [key-error (:body val-error)])
       (assoc :login-email-sent nil))))

(refx/reg-event-fx
 :app.auth/send-email
 (fn
   [{db :db} [_ login]]
   {:http {:method      :post
           :url         "/login/send-email"
           :body        login
           :accept :json
           :content-type :json
           :on-success  [:app.auth/send-email-done]
           :on-failure  [:app.auth/send-email-error]}
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
 :app.auth/logout
 (fn
   [db _]
   (-> db
       (assoc :current-user nil))))

(refx/reg-event-db
 :app.auth/error
 (fn
   [db error]
   (-> db
       (assoc :current-user nil)
       (assoc :login-loading? false)
       (assoc :login-error error)
       (assoc :login-email-sent nil))))
