(ns front.app.auth.events
  (:require
   [front.app.auth.db :as auth.db]
   [front.app.auth.effects]
   [front.app.http]
   [refx.alpha :as refx]))

(defn set-current-user-cookie!
  [current-user]
  (prn :here-user current-user)
  (let [expires_at (-> current-user :data :session :expires_at)]
    (auth.db/set-cookie "current-user" expires_at  current-user)))

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
 :app.auth/saving-user
 (fn
   [{db :db} [_ session]]
   (let [access-token (-> session :data :session :access-token)]
     {:http {:url "http://localhost:3000/login/auth"
             :method :post
             :body {:access-token access-token}
             :on-success [:app.auth/success-save]
             :on-failure [:app.auth/falied-save-user]}
      :db  (assoc db
                  :current-user session
                  :login-error nil)})))

(refx/reg-event-db
 :app.auth/success-save
 (fn
   [db [_ {:keys [body]}]]
   (let [current-user (-> (:current-user db)
                          (assoc-in [:user :valid-user] true)
                          (assoc-in [:user :user-id] (-> body :user :id)))]
     (set-current-user-cookie! current-user)
     (-> db
         (assoc
          :login-loading? false
          :current-user current-user)))))

(refx/reg-event-db
 :app.auth/falied-save-user
 (fn
   [db error]
   (js/console.error error)
   (-> db
       (assoc :login-loading? false)
       (assoc :login-error [:error  "Error with our account, try again."])
       (assoc :current-user nil))))

;; supabase send email
(refx/reg-event-fx
 :app.auth/send-email-done
 (fn
   [{db :db} [_ response]]
   {:db (-> db
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
       (assoc :login-loading? false)
       (assoc :login-email-sent nil))))

;; logout
(refx/reg-event-fx
 :app.auth/logout
 (fn
   [{db :db} _]
   (auth.db/remove-cookie "current-user")
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
