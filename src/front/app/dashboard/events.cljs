(ns front.app.dashboard.events
  (:require
   [refx.alpha :as refx]))

(refx/reg-event-db
 :app.dashboard/toggle-aside!
 (fn
   [db [_ open?]]
   (assoc-in db [:aside :open?] open?)))

(refx/reg-event-db
 :app.dashboard/toggle-menu
 (fn
   [db _]
   (let [menu-open? (:is-menu-open? db)]
     (-> db
         (assoc :is-menu-open? (not menu-open?))))))

(refx/reg-event-fx
 :app.dashboard/toggle-mock-modal
 (fn
   [{db :db} [_ _]]
   (let [toggle (:is-modal-open? db)]
     {:db (assoc db
                 :is-modal-open? (not toggle))})))

(refx/reg-event-fx
 :app.dashboard/toggle-settings
 (fn
   [{db :db} [_ _]]
   (let [toggle (:is-settings-open? db)]
     {:db (assoc db
                 :is-settings-open? (not toggle))})))

(defn mocks->raw [mocks]
  (->> mocks
       (map :apis)
       flatten
       (into [])))

(refx/reg-event-db
 :app.dashboard/get-mocks-success
 (fn [db [_ {{mocks :mocks} :body}]]
   (merge db
          {:mocks-raw (mocks->raw mocks)
           :mocks mocks
           :loading-mocks? false})))

(refx/reg-event-db
 :app.dashboard/get-mocks-failure
 (fn [db [_ {body :body}]]
   (merge db
          {:error-fetch-mocks body
           :mocks []
           :loading-mocks? false})))

(refx/reg-event-fx
 :app.dashboard/get-mocks
 (fn [{db :db} _]
   {:http {:url "/mocks"
           :method :get
           :headers {"authorization"
                     (str "Bearer " (get-in db [:current-user
                                                :access-token]))}
           :on-success [:app.dashboard/get-mocks-success]
           :on-failure [:app.dashboard/get-mocks-failure]}
    :db (assoc db :loading-mocks? true)}))

(refx/reg-event-fx
 :app.dashboard/create-mock
 (fn [{db :db} [_ mock]]
   {:http {:url "/mocks"
           :method :post
           :headers {"authorization" (str "Bearer " (:access-token (:current-user db)))}
           :body mock
           :on-success [:app.dashboard/create-mock-success]
           :on-failure [:app.dashboard/create-mock-failure]}
    :db (assoc db :loading-creating-mock? true)}))

(refx/reg-event-fx
 :app.dashboard/create-mock-success
 (fn [{db :db} _]
   {:dispatch [:app.dashboard/get-mocks]
    :notification {:type :info
                   :content "Created mock succesfully!"}
    :db (merge db
               {:is-modal-open? false
                :loading-creating-mock? false})}))

(refx/reg-event-fx
 :app.dashboard/create-mock-failure
 (fn [{db :db} _]
   {:notification {:type :error
                   :content "Error when creating mock!"}
    :db (merge db {:loading-creating-mock? false
                   :error-creating-mock? true})}))

(refx/reg-event-fx
 :app.dashboard/save-mock
 (fn [{db :db} [_ id]]
   (let [content (->> db
                      :mocks-raw
                      (filter #(= (str (:id %)) id))
                      first
                      :content)]
     {:http  {:url "/mocks"
              :method :put
              :headers {"authorization" (str "Bearer " (:access-token (-> db :current-user)))}
              :body {:id id
                     :content content}
              :on-success [:app.dashboard/save-mock-success]
              :on-failure [:app.dashboard/save-mock-failed]}
      :db (assoc db :loading-edit-mock true)})))

(refx/reg-event-fx
 :app.dashboard/save-mock-success
 (fn [_ _]
   {:dispatch [:app.dashboard/get-mocks]
    :notification {:type :info
                   :content "Saved successfully!"}}))

(refx/reg-event-fx
 :app.dashboard/save-mock-failed
 (fn [{db :db} _]
   {:notification {:type :error
                   :content "Error when saving!"}
    :db (assoc db :save-edit-mock true)}))

(refx/reg-event-db
 :app.dashboard/set-mock-validation
 (fn [db [_ valid?]]
   (assoc db :mock-valid? valid?)))

(defn update-mock-content-by-id [mocks-raw id content]
  (->> mocks-raw
       (map #(if (= (str (:id %)) (str id))
               (assoc % :content content)
               %))
       (into [])))

(refx/reg-event-fx
 :app.dashboard/edit-mock
 (fn [{db :db} [_ {:keys [mock-id content uploaded?]}]]
   {:dispatch [:app.dashboard/edit-mock-success
               {:new-mocks-raw (update-mock-content-by-id (:mocks-raw db)
                                                          mock-id content)
                :uploaded? uploaded?}]
    :db (assoc db :loading-edit-mock true)}))

(refx/reg-event-db
 :app.dashboard/edit-mock-failed
 (fn [db _]
   (assoc db :failed-edit-mock true)))

(refx/reg-event-fx
 :app.dashboard/edit-mock-success
 (fn [{db :db} [_ {:keys [new-mocks-raw uploaded?]}]]
   (let [fx {:db (assoc db :mocks-raw new-mocks-raw)}]
     (if uploaded?
       (assoc fx :notification {:type :info
                                :message "File uploaded successfully!"})
       fx))))

(refx/reg-event-db
 :app.dashboard/wildcard-available
 (fn [db [_ {{:keys [available]} :body}]]
   (assoc db :wildcard-available? available)))

(refx/reg-event-fx
 :app.dashboard/wildcard-available?
 (fn [{db :db} [_ {:keys [subdomain wildcard]}]]
   (let [access-token (get-in db [:current-user :access-token])]
     (when (every? not-empty [subdomain wildcard])
       {:http {:url (str "/mocks/wildcard/" subdomain "/" wildcard)
               :method :get
               :headers {"authorization" (str "Bearer " access-token)}
               :on-success [:app.dashboard/wildcard-available]
               :on-failure [:app.dashboard/create-mock-failure]}}))))

(refx/reg-event-fx
 :app.dashboard/delete-mock-success
 (fn [{db :db} _]
   {:dispatch [:app.dashboard/get-mocks]
    :notification {:type :info
                   :content "Deleted mock succesfully!"}
    :db (merge db {:delete-mock-err nil
                   :mock-to-delete nil})}))

(refx/reg-event-fx
 :app.dashboard/delete-mock-failure
 (fn [{db :db} [_ body]]
   {:notification {:type :error
                   :content "Error when deleting mock!"}
    :db (merge db {:delete-mock-err body
                   :mock-to-delete nil})}))

(refx/reg-event-fx
 :app.dashboard/delete-mock
 (fn [{{:keys [current-user]} :db}
      [_ {:keys [id]}]]
   (let [access-token (:access-token current-user)]
     {:http {:url "/mocks"
             :method :delete
             :headers {"authorization" (str "Bearer " access-token)}
             :body {:id (str id)}
             :on-success [:app.dashboard/delete-mock-success current-user]
             :on-failure [:app.dashboard/delete-mock-failure]}})))

(refx/reg-event-fx
 :app.dashboard/get-mock-pub-stts
 (fn [{{:keys [current-user]} :db} [_ {:keys [mock-id]}]]
   (let [access-token (:access-token current-user)]
     {:http {:url (str "/mocks/" mock-id "/publication")
             :method :get
             :headers {"authorization" (str "Bearer " access-token)}
             :on-success [:app.dashboard/set-mock-pub-stts-success mock-id]
             :on-failure [:app.dashboard/set-mock-pub-stts-failure mock-id]}})))

(defn update-mock-pub-stts
  [mocks mock mock-id pub-stts]
  (let [attempt ((fnil inc 0)
                 (:attempt mock))]
    (conj mocks (if (= (:id mock) mock-id)
                  (assoc (merge mock pub-stts)
                         :attempt attempt)
                  mock))))

(refx/reg-event-db
 :app.dashboard/set-mock-pub-stts-success
 (fn [db [_ mock-id {:keys [body]}]]
   (->>
    (reduce
     #(update-mock-pub-stts %1 %2 mock-id
                            (or body {:dns-status "publishing"
                                      :unification-status "publishing"}))
     [] (:mocks-raw db))
    (assoc db :mocks-raw))))

(refx/reg-event-db
 :app.dashboard/set-mock-pub-stts-failure
 (fn [db [_ mock-id _]]
   (->>
    (reduce
     #(update-mock-pub-stts %1 %2 mock-id
                            {:dns-status "offline"
                             :unification-status "offline"})
     [] (:mocks-raw db))
    (assoc db :mocks-raw))))

(refx/reg-event-db
 :app.dashboard/reset-mock-pub-stts
 (fn [db [_ mock-id]]
   (->>
    (reduce
     #(conj %1 (if (= mock-id (:id %2))
                 (merge %2 {:dns-status "publishing"
                            :unification-status "publishing"
                            :attempt 1})
                 %2))
     [] (:mocks-raw db))
    (assoc db :mocks-raw))))

(refx/reg-event-db
 :app.dashboard/set-mock-to-delete
 (fn [db [_ mock]]
   (assoc db :mock-to-delete mock)))

(refx/reg-event-db
 :app.dashboard/set-new-username
 (fn [{{:keys [current-user]} :db} [_ username-to-save]]
   (js/console.log username-to-save current-user)
   (let [access-token (:access-token current-user)
         user-id (:user_id (:user current-user))]
     {:http {:url (str "user/" user-id)
             :method :post
             :headers {"authorization" (str "Bearer " access-token)}
             :body {:username username-to-save}
             :on-success []
             :on-failure []}})))

(refx/reg-event-fx
 :app.dashboard/push-mock
 (fn [{db :db} [_ mock]]
   (let [current-user (:current-user db)]
     (prn db)
     {:http  {:url "/mocks"
              :method :put
              :headers {"authorization" (str "Bearer " (:access-token (-> db :current-user)))}
              :body mock
              :on-success [:app.dashboard/save-mock-success]
              :on-failure [:app.dashboard/save-mock-failed]}
      :db (assoc db :loading-edit-mock true)})))
