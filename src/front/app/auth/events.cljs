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
 (fn [{db :db} [_ username]]
   (let [access-token (-> db :current-user :access-token)]
     {:http {:url (str "/user/username/" username)
             :method :get
             :headers {"authorization" (str "Bearer " access-token)}
             :on-success [:app.auth/username-available]
             :on-failure [:app.auth/username-not-available]}
      :db (-> db
              (assoc :username-available? false
                     :username-to-save username))})))

(refx/reg-event-db
 :app.auth/username-available
 (fn [db [_ {:keys [body]}]]
   (let [{:keys [available]} body]
     (assoc db :username-available? available))))

(refx/reg-event-db
 :app.auth/username-not-available
 (fn [db _]
   (assoc db :username-available? false)))

(refx/reg-event-fx
 :app.auth/user-exists?
 (fn [{db :db} [_ session]]
   {:http {:url "/user-external"
           :method :get
           :headers {"authorization" (str "Bearer " (:access-token session))}
           :on-success [:app.auth/user-exists]
           :on-failure [:app.auth/user-does-not-exist]}
    ;; we temporarily save the access-token, so we can
    ;; use it in :app.auth/user-exists.
    :db (assoc db :session session)}))

(refx/reg-event-db
 :app.auth/user-exists
 (fn [db [_ {:keys [body]}]]
   (let [resp-user (:user body)
         valid-user? (some? (get-in body [:user :username]))
         old-user (:current-user db)
         new-inner-user (merge (:user old-user)
                               {:valid-user valid-user?
                                :user-id (:uuid resp-user)
                                :username (:username resp-user)
                                :email (:email resp-user)})
         current-user (-> old-user
                          (merge (:session db))
                          (update-in [:user] merge new-inner-user))]
     (set-current-user-cookie! current-user)
     (-> db
         (assoc :user-exists? valid-user?
                :current-user current-user)
         (dissoc :session)))))

(refx/reg-event-db
 :app.auth/user-does-not-exist
 (fn [db _]
   (auth.db/remove-cookie "current-user")
   (-> db
       (assoc :user-exists? false
              :current-user {:access-token (some-> db :session :access-token)})
       (dissoc :session))))

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
                  ;; :current-user session
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
 :app.auth/success-oauth
 (fn
   [db [_ {:keys [body]}]]
   (let [code (:code body)
         n (:next body)
         current-user (-> (:current-user db)
                          (assoc-in [:user :valid-user] true)
                          #_(assoc-in [:user :user-id] (get code :uuid))
                          (assoc-in [:user :git-username] "Felipe-gsilva")
                          (assoc-in [:user :username] "Felipe-gsilva"))]
     (js/console.log code n)
     (set-current-user-cookie! current-user)
     (-> db
         (assoc
          :login-loading? false
          :current-user current-user)))))

(refx/reg-event-fx
 :app.auth/send-oauth
 (fn
   [{db :db} [_ state]]
   {:oauth {:body state
            :on-success [:app.auth/success-oauth]
            :on-failure [:app.auth/failed-save-user]}
    :db (assoc db
               :login-error nil
               :login-loading? true)}))

(refx/reg-event-db
 :app.auth/send-email-again
 (fn
   [db _]
   (assoc db
          :login-loading? false
          :login-email-sent nil)))

(refx/reg-event-fx
 :app.auth/logout
 (fn
   [{db :db} _]
   (auth.db/remove-cookie "current-user")
   (auth.db/clear-localstorage)
   {:db (assoc db
               :user-exists? false
               :current-user nil
               :login-loading? false
               :login-error nil
               :mocks-raw []
               :mocks nil)}))

(refx/reg-event-db
 :app.auth/error
 (fn
   [db error]
   (-> db
       (assoc :current-user nil)
       (assoc :login-loading? false)
       (assoc :login-error error)
       (assoc :login-email-sent nil))))
