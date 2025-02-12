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
     {:db (assoc db :is-add-user-org-modal-open? (not toggle))})))

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
         mock (assoc mock :org-id  org-id)]
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
   (js/console.error "Save mock failed:", (clj->js response))
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
 (fn [{db :db}  [_ _]]
   {:notification {:type :error
                   :content "Unable to update username"}}))

(refx/reg-event-fx
 :app.dashboard/set-new-username
 (fn [{{:keys [current-user]} :db} [_ username-to-save]]
   (js/console.log username-to-save current-user)
   (let [access-token (:access-token current-user)
         user-id (:user_id (:user current-user))]
     {:http {:url (str "user/" user-id)
             :method :post
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
   (let [mock-id (:curr-mock-id db)
         mock (->> db :mocks-raw
                   (filter #(= (str (:id %)) (str mock-id)))
                   first)]
     (js/console.log "Updating git repo with:" git-repo)
     {:http {:url "/mocks"
             :method :put
             :headers {"authorization" (str "Bearer " (-> db :current-user :access-token))}
             :body {:id mock-id
                    :git-repo git-repo
                    :content (:content mock)}
             :on-success [:app.dashboard/save-mock-success]
             :on-failure [:app.dashboard/save-mock-failed]}
      :db (-> db
              (assoc :loading-edit-mock true)
              (dissoc :curr-mock-id))})))

(refx/reg-event-db
 :app.dashboard/save-repos
 (fn [db [_ repos]]
   (assoc db
          :require-git-repo? true
          :repositories (-> repos
                            :body
                            :repositories
                            (vec)))))

(refx/reg-event-fx
 :app.dashboard/enable-git-sync
 (fn [{db :db} [_ mock-id]]
   (let [mock (->> db :mocks-raw
                   (filter #(= (str (:id %)) (str mock-id)))
                   first)]
     (-> {}
         (cond->
          (not (:git-repo mock))
           (assoc :dispatch-sync [:app.dashboard/verify-mock-repo mock-id]))
         (assoc :http {:url "/sync"
                       :method :get
                       :headers {"authorization" (str "Bearer " (-> db :current-user :access-token))}
                       :on-success [:app.dashboard/save-enabled-sync]
                       :on-failure [:app.dashboard/not-enabled-sync]}
                :db (assoc db :loading-sync? true))))))

(refx/reg-event-fx
 :app.dashboard/verify-mock-repo
 (fn [db [_ mock-id]]
   {:notification {:type :error
                   :content "Mock has no linked repo"}
    :http {:url "/repos"
           :method :get
           :headers {"authorization" (str "Bearer " (-> db :current-user :access-token))}
           :on-success [:app.dashboard/save-repos]
           :on-failure [:app.dashboard/save-mock-failed]}
    :db (assoc db :curr-mock-id mock-id)}))

(refx/reg-event-fx
 :app.dashboard/save-enabled-sync
 (fn [{db :db} [_ response]]
   (let []
     {:db (assoc db
                 :sync-enabled true
                 :loading-sync? false)
      :notification {:type :info
                     :content "Git Sync is enabled"}})))

(refx/reg-event-fx
 :app.dashboard/not-enabled-sync
 (fn [{db :db} [_ _]]
   {:db (assoc db
               :sync-enabled false
               :loading-sync? false)
    :notification {:type :error
                   :content "Failed to check Git Sync status"}}))

(refx/reg-event-fx
 :app.dashboard/push-mock
 (fn [{db :db} [_ mock-id]]
   (let [mock (->> (:mocks-raw db)
                   (filter #(= (-> % :id str) (str mock-id)))
                   first)]
     (js/console.log "Mock being pushed:" (clj->js mock))
     (js/console.log "Content type:" (type (:content mock)))
     (if (nil? (:git-repo mock))
       {:notification {:type :error
                       :content "Mock has no linked repo"}
        :http {:url "/repos"
               :method :get
               :headers {"authorization" (str "Bearer " (-> db :current-user :access-token))}
               :on-success [:app.dashboard/save-repos]
               :on-failure [:app.dashboard/save-mock-failed]}
        :db (assoc db :curr-mock-id mock-id)}
       {:http {:url (str "/mocks/" mock-id "/push")
               :method :post
               :headers {"authorization" (str "Bearer " (-> db :current-user :access-token))}
               :body {:content (:content mock)
                      :git-repo (:git-repo mock)
                      :wildcard (:wildcard mock)}
               :on-success [:app.dashboard/push-mock-success]
               :on-failure [:app.dashboard/push-mock-failed]}
        :db (assoc db :loading-push true)}))))

(refx/reg-event-fx
 :app.dashboard/push-mock-success
 (fn [{db :db} _]
   {:db (assoc db :loading-push false)
    :notification {:type :info
                   :content "Successfully pushed to GitHub"}}))

(refx/reg-event-fx
 :app.dashboard/push-mock-failed
 (fn [{db :db} [_ response]]
   (js/console.error "Push failed:", (clj->js response))
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
   (js/console.warn "Poll failed:",
                    (clj->js response)
                    "for mock ID:",
                    (:polling-mock-id db))
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
 :app.dashboard/get-orgs
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
                 [:app.dashboard/get-orgs]]
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
   {:dispatch [:app.dashboard/get-orgs]
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
   {:dispatch [:app.dashboard/get-orgs]
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
 (fn [{{:keys [current-user]} :db} [_ id curr-orgname orgname-to-save]]
   (let [access-token (:access-token current-user)]
     {:http {:url (str "/orgs/" id)
             :method :put
             :headers {"authorization" (str "Bearer " access-token)}
             :body {:org  {:orgname orgname-to-save}}
             :on-success [:app.dashboard/update-org-success]
             :on-failure [:app.dashboard/update-org-failure]}})))

(comment
  (def sim [{:id "deb44093-f4dc-40d7-9baf-b71c282c7042", :slug "ok-deb44093", :orgname "ok", :users [{:uuid "65aa685a-8734-42ca-95ea-474dc0778817", :email "felipe.gsilva@protonmail.com", :username "felipegsilva", :git-install-id 58505217, :git-username "Felipe-gsilva"}]} {:id "f90a5b51-df09-4db2-aa2d-4d6e15afc45c", :slug "doidera-f90a5b51", :orgname "doidera", :users [{:uuid "65aa685a-8734-42ca-95ea-474dc0778817", :email "felipe.gsilva@protonmail.com", :username "felipegsilva", :git-install-id 58505217, :git-username "Felipe-gsilva"}]}]))
