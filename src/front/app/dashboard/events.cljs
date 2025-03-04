(ns front.app.dashboard.events
  (:require
   [front.app.dashboard.effects]
   [front.app.http]
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
     {:db (assoc db :is-modal-open? (not toggle))})))

(refx/reg-event-fx
 :app.dashboard/toggle-org-modal
 (fn
   [{db :db} [_ _]]
   (let [toggle (:is-org-modal-open? db)]
     {:db (assoc db :is-org-modal-open? (not toggle))})))

(refx/reg-event-fx
 :app.dashboard/toggle-add-user-org-modal
 (fn
   [{db :db} [_ _]]
   (let [toggle (:is-add-user-org-modal-open? db)]
     {:db (->  db
               (assoc :is-add-user-org-modal-open? (not toggle))
               (cond-> toggle
                 (assoc :org-users nil)))})))

(refx/reg-event-fx
 :app.dashboard/toggle-settings
 (fn
   [{db :db} [_ _]]
   (let [toggle (:is-settings-open? db)]
     {:db (assoc db :is-settings-open? (not toggle))})))

(defn mocks->raw [mocks]
  (->> mocks
       (map :apis)
       flatten
       (into [])))

(refx/reg-event-fx
 :app.dashboard/get-mocks-success
 (fn [{db :db} [_ {{mocks :mocks} :body}]]
   {:db (assoc db
               :loading-mocks? false
               :mocks mocks
               :mocks-raw (mocks->raw mocks))}))

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
 :app.dashboard/get-org-mocks-success
 (fn [{db :db} [_ {{:keys [mocks]} :body}]]
   {:db (assoc db
               :loading-mocks? false
               :org-mocks mocks)}))

(refx/reg-event-db
 :app.dashboard/get-org-mocks-failure
 (fn [db [_ response]]
   (merge db
          {:error-fetch-mocks response
           :org-mocks []
           :loading-mocks? false})))

(refx/reg-event-fx
 :app.dashboard/get-org-mocks
 (fn [{db :db} [_ org-id]]
   {:http {:url (str "/org/" org-id "/mocks")
           :method :get
           :headers {"authorization"
                     (str "Bearer " (get-in db [:current-user :access-token]))}
           :on-success [:app.dashboard/get-org-mocks-success]
           :on-failure [:app.dashboard/get-org-mocks-failure]}
    :db (assoc db :loading-mocks? true)}))

(refx/reg-event-fx
 :app.dashboard/create-mock
 (fn [{db :db} [_ mock & orgname]]
   (let [org-id (when orgname (-> (filter #(= (:orgname %) (first orgname)) (:orgs-data db))
                                  (first)
                                  (:id)))
         mock (if org-id (assoc mock :org-id org-id) mock)]
     {:http {:url "/mocks"
             :method :post
             :headers {"authorization" (str "Bearer " (get-in db [:current-user :access-token]))}
             :body mock
             :on-success [:app.dashboard/create-mock-success]
             :on-failure [:app.dashboard/create-mock-failure]}
      :db (assoc db :loading-creating-mock? true)})))

(refx/reg-event-fx
 :app.dashboard/create-mock-success
 (fn [{db :db} _]
   {:dispatch-n [[:app.dashboard/get-mocks]
                 [:app.dashboard/get-org-mocks]]
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
 (fn [{db :db} _]
   {:dispatch [:app.dashboard/get-mocks]
    :notification {:type :info
                   :content "Saved successfully!"}}))

(refx/reg-event-fx
 :app.dashboard/save-mock-failed
 (fn [{db :db} [_ response]]
   {:db (assoc db
               :loading-edit-mock false
               :loading-sync? false)
    :notification {:type :error
                   :content (or (-> response :body :error :message)
                                "Failed to save mock")}}))

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
   (let [fx {:db (assoc db
                        :mocks-raw new-mocks-raw)}]
     (if uploaded?
       (assoc fx :notification {:type :info
                                :content "File uploaded successfully!"})
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
   {:dispatch-n [[:app.dashboard/get-mocks]
                 [:app.dashboard/get-org-mocks]]
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

(refx/reg-event-fx
 :app.dashboard/save-username-success
 (fn [{db :db} [_ user]]
   {:notification {:type :info
                   :content (str "Username updated" (:username user))}
    :dispatch [:app.dashboard/toggle-settings]}))

(refx/reg-event-fx
 :app.dashboard/save-username-failure
 (fn [_ [_ response]]
   {:notification {:type :error
                   :content "Unable to update username"}}))

(refx/reg-event-fx
 :app.dashboard/set-new-username
 (fn [{{:keys [current-user]} :db} [_ username-to-save]]
   (let [access-token (:access-token current-user)
         user-id (:user-id (:user current-user))]
     {:http {:url (str "/user/" user-id)
             :method :put
             :headers {"authorization" (str "Bearer " access-token)}
             :body {:username username-to-save}
             :on-success [:app.dashboard/save-username-success]
             :on-failure [:app.dashboard/save-username-failure]}})))

(refx/reg-event-db
 :app.dashboard/toggle-git-repo-modal
 (fn [db [_ modal-open?]]
   (assoc db :require-git-repo? (not modal-open?))))

(refx/reg-event-fx
 :app.dashboard/update-git-repo
 (fn [{db :db} [_ git-repo]]
   (let [mock-id (get-in db [:server-mock :id])
         mock (->> db :mocks-raw
                   (filter #(= (str (:id %)) (str mock-id)))
                   first)]
     {:http {:url "/mocks"
             :method :put
             :headers {"authorization" (str "Bearer " (-> db :current-user :access-token))}
             :body (-> {}
                       (cond->
                        (uuid? (parse-uuid (str mock-id))) (assoc :id (str mock-id))
                        (string? git-repo) (assoc :git-repo git-repo)
                        (string? mock-id) (assoc :content (:content mock))))
             :on-success [:app.dashboard/save-mock-success]
             :on-failure [:app.dashboard/save-mock-failed]}
      :db (-> db
              (assoc :loading-edit-mock true))})))

(refx/reg-event-db
 :app.dashboard/success-save-repos
 (fn [db [_  mock-id repos]]
   (let [mock (:server-mock db)
         repo (:git-repo mock)]
     (-> db
         (assoc
          :curr-mock-id mock-id
          :repositories (-> repos
                            :body
                            :repositories
                            (vec)))))))

(refx/reg-event-fx
 :app.dashboard/failed-save-repos
 (fn [{db :db} _]
   {:db  (assoc db :require-git-repo? false)}))

(refx/reg-event-fx
 :app.dashboard/sync-enabled?
 (fn [{db :db} [_ _]]
   {:http {:url "/sync"
           :method :get
           :headers {"authorization" (str "Bearer " (-> db :current-user :access-token))}
           :on-success [:app.dashboard/save-enabled-sync]
           :on-failure [:app.dashboard/not-enabled-sync]}
    :db (assoc db :loading-sync? true)}))

(refx/reg-event-fx
 :app.dashboard/verify-mock-repo
 (fn [{db :db} [_ mock-id]]
   (let [mock (:server-mock db)
         repo (:git-repo mock)]
     (when (and mock (not (string? repo)))
       {:http {:url "/repos"
               :method :get
               :headers {"authorization" (str "Bearer " (get-in db [:current-user :access-token]))}
               :on-success [:app.dashboard/success-save-repos mock-id]
               :on-failure [:app.dashboard/failed-save-repos]}}))))

(refx/reg-event-fx
 :app.dashboard/save-enabled-sync
 (fn [{db :db} [_ response]]
   {:db (assoc db
               :sync-enabled true
               :loading-sync? false)
    :dispatch [:app.dashboard/verify-mock-repo (get-in db [:server-mock :id])]}))

(refx/reg-event-fx
 :app.dashboard/not-enabled-sync
 (fn [{db :db} [_ _]]
   {:db (assoc db
               :sync-enabled false
               :loading-sync? false)}))

(refx/reg-event-fx
 :app.dashboard/push-mock
 (fn [{db :db} [_ mock-id]]
   (let [mock (->> (:mocks-raw db)
                   (filter #(= (-> % :id str) (str mock-id)))
                   first)
         diff-from-source? (not= (get-in db [:server-mock :content]) (:content mock))
         repo (get-in db [:server-mock :git-repo])]
     (if (not (string? repo))
       {:http {:url "/repos"
               :method :get
               :headers {"authorization" (str "Bearer " (get-in db [:current-user :access-token]))}
               :on-success [:app.dashboard/success-save-repos mock-id]
               :on-failure [:app.dashboard/failed-save-repos]}
        :db (assoc db
                   :curr-mock-id mock-id
                   :loading-sync? true)}
       (when  diff-from-source?
         {:http {:url (str "/mocks/" mock-id "/push")
                 :method :post
                 :headers {"authorization" (str "Bearer " (-> db :current-user :access-token))}
                 :body {:content (:content mock)
                        :git-repo (:git-repo mock)
                        :wildcard (:wildcard mock)}
                 :on-success [:app.dashboard/push-mock-success]
                 :on-failure [:app.dashboard/push-mock-failed]}
          :db (assoc db :loading-push true)})))))

(refx/reg-event-fx
 :app.dashboard/push-mock-success
 (fn [{db :db} _]
   {:db (assoc db :loading-push false)
    :notification {:type :info
                   :content "Successfully pushed to GitHub"}}))

(refx/reg-event-fx
 :app.dashboard/push-mock-failed
 (fn [{db :db} [_ response]]
   {:db (assoc db :loading-push false)
    :notification {:type :error
                   :content (or (-> response :body :message)
                                "Failed to push to GitHub")}}))

(refx/reg-event-fx
 :app.dashboard/start-mock-polling
 (fn [{db :db} [_ mock-id]]
   {:db (assoc db :polling-mock-id mock-id)
    :dispatch-n [[:app.dashboard/poll-mock]]}))

(refx/reg-event-fx
 :app.dashboard/stop-mock-polling
 (fn [{db :db} _]
   {:db (dissoc db :polling-mock-id)}))

(refx/reg-event-fx
 :app.dashboard/poll-mock
 (fn [{db :db} _]
   (when-let [id (:polling-mock-id db)]
     {:http {:url (str "/mocks/" id)
             :method :get
             :headers {"authorization" (str "Bearer " (-> db :current-user :access-token))}
             :on-success [:app.dashboard/update-server-mocks]
             :on-failure [:app.dashboard/poll-mock-failed]}
      :dispatch-later [{:ms 5000
                        :dispatch [:app.dashboard/poll-mock]}]})))

(refx/reg-event-fx
 :app.dashboard/poll-mock-failed
 (fn [{db :db} [_ response]]
   {:db db}))

(refx/reg-event-db
 :app.dashboard/update-server-mocks
 (fn [db [_ response]]
   (let [mock (-> response :body :mock)]
     (if mock
       (assoc db :server-mock mock)
       db))))

(refx/reg-event-fx
 :app.dashboard/reload-mock
 (fn [{db :db} [_ mock-id]]
   (let [server-mock (:server-mock db)]
     {:dispatch [:app.dashboard/edit-mock
                 {:mock-id mock-id
                  :content (:content server-mock)}]
      :notification {:type :info
                     :content "Mock reloaded from server"}})))

(refx/reg-event-db
 :app.dashboard/save-orgs-data
 (fn [db [_ response]]
   (-> db
       (assoc :orgs-data (:orgs (:body response))
              :orgs  (into []
                           (->> (:orgs (:body response))
                                (mapv (fn [e] (-> (select-keys e [:orgname])
                                                  (vals)
                                                  (first))))))))))

(refx/reg-event-fx
 :app.dashboard/failed-retrieve-orgs-data
 (fn [db [_ response]]
   {:notification {:type :error
                   :content response}}))

(refx/reg-event-fx
 :app.user/get-orgs-data
 (fn [{db :db} [_ _]]
   {:http {:url "/orgs"
           :method :get
           :headers {"authorization" (str "Bearer " (-> db :current-user :access-token))}
           :on-success [:app.dashboard/save-orgs-data]
           :on-failure [:app.dashboard/failed-retrieve-orgs-data]}}))

(refx/reg-event-db
 :app.dashboard/update-orgname-availability
 (fn [db [_ response]]
   (assoc db :orgname-available (-> response :body :available))))

(refx/reg-event-fx
 :app.dashboard/create-org-failure
 (fn [db _]
   {:db (dissoc db :orgname-available)
    :notification {:type :error
                   :content "Could not create org!"}}))

(refx/reg-event-fx
 :app.dashboard/create-org-success
 (fn [db _]
   {:dispatch-n [[:app.dashboard/toggle-org-modal]
                 [:app.user/get-orgs-data]]
    :notification {:type :info
                   :content "Successfully created org!"}}))

(refx/reg-event-fx
 :app.dashboard/create-org
 (fn [{db :db} [_ org]]
   {:http {:url "/orgs"
           :method :post
           :headers {"authorization" (str "Bearer " (-> db :current-user :access-token))}
           :body {:org org}
           :on-success [:app.dashboard/create-org-success]
           :on-failure [:app.dashboard/create-org-failure]}}))

(refx/reg-event-fx
 :app.dashboard/orgname-available?
 (fn [{db :db} [_ orgname]]
   {:http {:url (str "/org/" orgname)
           :method :get
           :headers {"authorization" (str "Bearer " (-> db :current-user :access-token))}
           :on-success [:app.dashboard/update-orgname-availability]
           :on-failure [:app.dashboard/update-orgname-availability]}}))

(refx/reg-event-db
 :app.dashboard/set-org-to-delete
 (fn [db [_ org]]
   (assoc db :org-to-delete org)))

(refx/reg-event-fx
 :app.dashboard/delete-org-success
 (fn [{db :db} _]
   {:dispatch [:app.user/get-orgs-data]
    :notification {:type :info
                   :content "Deleted org succesfully!"}
    :db (assoc db
               :delete-org-err nil
               :org-to-delete nil)}))

(refx/reg-event-fx
 :app.dashboard/delete-org-failure
 (fn [{db :db} [_ body]]
   {:notification {:type :error
                   :content "Error when deleting org!"}
    :db (assoc db
               :delete-org-err body
               :org-to-delete nil)}))

(refx/reg-event-fx
 :app.dashboard/delete-org
 (fn [{{:keys [current-user]} :db}
      [_ {:keys [id]}]]
   (let [access-token (:access-token current-user)]
     {:http {:url (str "/orgs/" id)
             :method :delete
             :headers {"authorization" (str "Bearer " access-token)}
             :on-success [:app.dashboard/delete-org-success current-user]
             :on-failure [:app.dashboard/delete-org-failure]}})))

(refx/reg-event-fx
 :app.dashboard/update-org-success
 (fn [{db :db} _]
   {:dispatch [:app.user/get-orgs-data]
    :notification {:type :info
                   :content "updated org succesfully!"}
    :db (assoc db
               :update-org-err nil
               :org-to-update nil)}))

(refx/reg-event-fx
 :app.dashboard/update-org-failure
 (fn [{db :db} [_ body]]
   {:notification {:type :error
                   :content "Error when deleting org!"}
    :db (assoc db
               :update-org-err body
               :org-to-update nil)}))

(refx/reg-event-fx
 :app.dashboard/set-new-orgname
 (fn [{{:keys [current-user]} :db} [_ id orgname-to-save]]
   (let [access-token (:access-token current-user)]
     {:http {:url (str "/orgs/" id)
             :method :put
             :headers {"authorization" (str "Bearer " access-token)}
             :body {:org  {:orgname orgname-to-save}}
             :on-success [:app.dashboard/update-org-success]
             :on-failure [:app.dashboard/update-org-failure]}})))

(refx/reg-event-fx
 :app.dashboard/get-org-users-success
 (fn [{db :db} [_ request]]
   {:db (assoc db :org-users (get-in request [:body :org :users]))}))

(refx/reg-event-fx
 :app.dashboard/get-org-users-failure
 (fn [{db :db} [_ _]]
   {:notification {:type :error
                   :content "Could not retrieve org users!"}
    :db (assoc db
               :org-users "error")}))

(refx/reg-event-fx
 :app.dashboard/get-org-users
 (fn [{{:keys [current-user]} :db} [_ id]]
   (let [access-token (:access-token current-user)]
     {:http {:url (str "/orgs/" id)
             :method :get
             :headers {"authorization" (str "Bearer " access-token)}
             :on-success [:app.dashboard/get-org-users-success]
             :on-failure [:app.dashboard/get-org-users-failure]}})))

(refx/reg-event-fx
 :app.dashboard/set-curr-org
 (fn [{db :db} [_ curr-org]]
   {:db (assoc db :curr-org curr-org)}))

(refx/reg-event-fx
 :app.dashboard/send-org-invite-success
 (fn [{db :db} [_ request]]
   {:notification {:type :info
                   :content "User invited"}}))
(refx/reg-event-fx
 :app.dashboard/send-org-invite-failure
 (fn [{db :db} [_ _]]
   {:notification {:type :error
                   :content "Could not invite user!"}}))

(refx/reg-event-fx
 :app.dashboard/send-org-invite
 (fn [{db :db} [_ email org-id]]
   {:invite-user {:body {:email email
                         :org-id org-id}
                  :on-success [:app.dashboard/send-org-invite-success]
                  :on-failure [:app.dashboard/send-org-invite-failure]}
    :db  (assoc db
                :login-error nil
                :login-loading? true)
    :notification {:type :info
                   :content (str "Inviting " email)}}))

(refx/reg-event-fx
 :app.dashboard/add-org-user-failure
 (fn [{db :db} [_ body]]

   (let [user-exists? (= (get-in body [:body :error :cause]) "user-already-in-org")]
     {:notification {:type (if user-exists? :info :error)
                     :content (if user-exists? "User already in org" "Could not add user!")}})))

(refx/reg-event-fx
 :app.dashboard/add-org-user-success
 (fn [{db :db} [_ org-id]]
   {:dispatch [:app.dashboard/get-org-users org-id]
    :notification {:type :info
                   :content "User invited"}}))

(refx/reg-event-fx
 :app.dashboard/retrieve-user-success
 (fn [{{:keys [current-user]} :db} [_ org-id request]]
   (let [user (get-in request [:body :user])
         access-token (:access-token current-user)]
     {:http {:url (str "/orgs/" org-id "/users")
             :method :post
             :body {:user-id (:uuid user)}
             :headers {"authorization" (str "Bearer " access-token)}
             :on-success [:app.dashboard/add-org-user-success org-id]
             :on-failure [:app.dashboard/add-org-user-failure]}})))

(refx/reg-event-fx
 :app.dashboard/add-org-user
 (fn [{{:keys [current-user]} :db} [_ email org-id]]
   (let [access-token (:access-token current-user)]
     {:http {:url (str "/user/email/" email)
             :method :get
             :headers {"authorization" (str "Bearer " access-token)}
             :on-success [:app.dashboard/retrieve-user-success org-id]
             :on-failure [:app.dashboard/send-org-invite email org-id]}})))

(refx/reg-event-fx
 :app.dashboard/remove-org-user-failure
 (fn [{db :db} [_ body]]

   (let [user-exists? (= (get-in body [:body :error :cause]) "user-already-in-org")]
     {:notification {:type (if user-exists? :info :error)
                     :content (if user-exists? "User already in org" "Could not remove user!")}})))

(refx/reg-event-fx
 :app.dashboard/remove-org-user-success
 (fn [{db :db} [_ org-id]]
   {:dispatch [:app.dashboard/get-org-users org-id]
    :notification {:type :info
                   :content "User removed"}}))

(refx/reg-event-fx
 :app.dashboard/remove-org-user
 (fn [{{:keys [current-user]} :db} [_ org-id user-id]]
   (let [access-token (:access-token current-user)]
     {:http {:url (str "/orgs/" org-id "/users/" user-id)
             :method :delete
             :headers {"authorization" (str "Bearer " access-token)}
             :on-success [:app.dashboard/remove-org-user-success org-id]
             :on-failure [:app.dashboard/remove-org-user-failure]}})))

(refx/reg-event-db
 :app.dashboard/save-git-orgs
 (fn [db [_ response]]
   (-> db
       (assoc :git-orgs (:orgs (:body response))))))

(refx/reg-event-fx
 :app.dashboard/failed-retrieve-git-orgs
 (fn [db [_ response]]
   {:notification {:type :error
                   :content response}}))

(refx/reg-event-fx
 :app.dashboard/get-user-git-orgs
 (fn [{{:keys [current-user]} :db} [_ _]]
   (let [access-token (:access-token current-user)]
     {:http {:url "/users/git-orgs"
             :method :get
             :headers {"authorization" (str "Bearer " access-token)}
             :on-success [:app.dashboard/save-git-orgs]
             :on-failure [:app.dashboard/failed-retrieve-git-orgs]}})))

(refx/reg-event-fx
 :app.dashboard/set-new-orgname
;; TODO finish this update
 (fn [_ [_ org-id user-id]]
   {:http {:url (str "/orgs/" org-id "/users/" user-id)}}))

(refx/reg-event-fx
 :app.dashboard/toggle-git-docs
 (fn [{db :db} [_ _]]
   (let [toggle (or (:git-docs-modal-open? db)
                    false)]
     {:db (assoc db :git-docs-modal-open? (not toggle))})))

(refx/reg-event-fx
 :app.dashboard/success-disable-git-sync
 (fn [{db :db} [_ mock-id response]]
   {:notification {:type :info
                   :content "Disabled sync!"}
    :dispatch-n [[:app.dashboard/poll-mock]
                 [:app.dashboard/sync-enabled?]
                 [:app.dashboard/verify-mock-repo mock-id]]}))

(refx/reg-event-fx
 :app.dashboard/failure-disable-git-sync
 (fn [{db :db} [_ response]]
   {:notification {:type :error
                   :content (str (:status response) " - could not disabled sync!")}}))

(refx/reg-event-fx
 :app.dashboard/disable-git-sync
 (fn [{db :db} [_ _]]
   (let [mock-id (get-in db [:server-mock :id])]
     {:http {:url "/mocks"
             :method :put
             :headers {"authorization" (str "Bearer " (get-in db [:current-user :access-token]))}
             :body {:id (str mock-id)
                    :disable-sync? true}
             :on-success [:app.dashboard/success-disable-git-sync mock-id]
             :on-failure [:app.dashboard/failure-disable-git-sync]}})))
