(ns front.app.auth.events
  (:require
   [front.app.auth.db :as auth.db]
   [front.app.auth.effects]
   [front.app.http]
   [refx.alpha :as refx]))

(defn set-current-user-cookie!
  [current-user]
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
 :app.auth/username-available?
 (fn [{db :db}
      [_ username]]
   (let [access-token (-> db :current-user :access-token)]
     {:http {:url (str "/user/username/" username)
             :method :get
             :headers {"authorization" (str "Bearer " access-token)}
             :on-success [:app.auth/username-available]
             :on-failure [:app.auth/username-not-available]}
      :db (-> db
              (assoc :username-available? false
                     :username-to-save username))})))

(refx/reg-event-fx
 :app.auth/username-available
 (fn [{db :db}
      [_ {:keys [body]}]]
   (let [{:keys [available]} body]
     (prn :body-available body)
     {:db (-> db
              (assoc
               :username-available? available))})))

(refx/reg-event-fx
 :app.auth/username-not-available
 (fn [{db :db}
      [_ body]]
   (prn :body-available-error body)
   {:db (assoc db
               :username-available? false)}))

(refx/reg-event-fx
 :app.auth/user-exists?
<<<<<<< HEAD
 (fn [_ [_ access-token]]
=======
 (fn [{db :db} [_ access-token]]
>>>>>>> j0suetm/revamp-auth-flow
   {:http {:url "/user-external"
           :method :get
           :headers {"authorization" (str "Bearer " access-token)}
           :on-success [:app.auth/user-exists]
<<<<<<< HEAD
           :on-failure [:app.auth/user-does-not-exist]}}))
=======
           :on-failure [:app.auth/user-does-not-exist]}
    ;; we temporarily save the access-token, so we can
    ;; use it in :app.auth/user-exists.
    :db (assoc db :access-token access-token)}))
>>>>>>> j0suetm/revamp-auth-flow

(refx/reg-event-db
 :app.auth/user-exists
 (fn [db [_ {:keys [body]}]]
   (let [resp-user (:user body)
         inner-user {:valid-user true
                     :user-id (:uuid resp-user)
                     :username (:username resp-user)}
         old-user (:current-user db)
<<<<<<< HEAD
         current-user (assoc old-user :user (merge (:user old-user) inner-user))]
     (set-current-user-cookie! current-user)
     (assoc db
            :user-exists? (some? (-> body :user :username))
            :current-user current-user))))
=======
         current-user (assoc old-user
                             :user (merge (:user old-user) inner-user)
                             :access-token (:access-token db))]
     (set-current-user-cookie! current-user)
     (-> db
         (assoc :user-exists? (some? (-> body :user :username))
                :current-user current-user)
         (dissoc :access-token)))))
>>>>>>> j0suetm/revamp-auth-flow

(refx/reg-event-db
 :app.auth/user-does-not-exist
 (fn [db _]
   (auth.db/remove-cookie "current-user")
<<<<<<< HEAD
   (assoc db
          :user-exists? false
          :current-user nil)))
=======
   (-> db
       (assoc :user-exists? false
              :current-user nil)
       (dissoc :access-token))))
>>>>>>> j0suetm/revamp-auth-flow

(refx/reg-event-fx
 :app.auth/saving-user
 (fn
   [{db :db} [_ session]]
   (let [access-token (-> session :access-token)]
     {:http {:url "/login/auth"
             :method :post
             :headers {"authorization" (str "Bearer " access-token)}
             :body {:access-token access-token}
             :on-success [:app.auth/success-save]
             :on-failure [:app.auth/failed-save-user]}
      :db  (assoc db
                  :login-loading? true
                  :current-user session
                  :login-error nil)})))

(refx/reg-event-fx
 :app.auth/save-username
 (fn
   [{db :db} [_ username]]
   {:http {:url (str "/user/" (-> db :current-user :user :user-id))
           :method :post
           :body {:username username}
           :headers {"authorization" (str "Bearer " (-> db :current-user :access-token))}
           :on-success [:app.auth/username-saved]
           :on-failure [:app.auth/failed-save-user]}
    :db  (assoc db
                :login-loading? true
                :username-sent true
                :login-error nil)}))

(refx/reg-event-db
 :app.auth/username-saved
 (fn
   [db [_ {:keys [body]}]]
   (let [current-user (-> (:current-user db)
                          (assoc-in [:user :username] (-> body :user :username)))]

     (set-current-user-cookie! current-user)
     (-> db
         (assoc
          :login-loading? false
          :current-user current-user)))))

(refx/reg-event-db
 :app.auth/success-save
 (fn
   [db [_ {:keys [body]}]]
   (let [current-user (-> (:current-user db)
                          (assoc-in [:user :valid-user] true)
                          (assoc-in [:user :user-id] (-> body :user :uuid))
                          (assoc-in [:user :username] (-> body :user :username)))]

     (set-current-user-cookie! current-user)
     (-> db
         (assoc
          :login-loading? false
          :current-user current-user)))))

(refx/reg-event-db
 :app.auth/failed-save-user
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
            (assoc :loading? true)
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
   {:db (assoc db
               :user-exists? false
               :current-user nil
               :login-loading? false
               :login-error nil)}))

(refx/reg-event-db
 :app.auth/error
 (fn
   [db error]
   (-> db
       (assoc :current-user nil)
       (assoc :login-loading? false)
       (assoc :login-error error)
       (assoc :login-email-sent nil))))
