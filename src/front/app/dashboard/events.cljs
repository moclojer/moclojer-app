(ns front.app.dashboard.events
  (:require
   [refx.alpha :as refx]))

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
     {:db  (assoc db
                  :is-modal-open? (not toggle))})))

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
 (fn [{db :db} [_ user]]
   {:http {:url "/mocks"
           :method :get
           :headers {"authorization" (str "Bearer " (:access-token user))}
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
   {:dispatch [:app.dashboard/get-mocks (:current-user db)]
    :db (assoc db
               :is-modal-open? false
               :loading-creating-mock? false)}))

(refx/reg-event-db
 :app.dashboard/create-mock-failure
 (fn [db [_ err]]
   (prn :error err)
   (assoc db
          :loading-creating-mock? false
          :error-creating-mock? true)))

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
              :on-success [:app.dashboard/get-mocks (:current-user db)]
              :on-failure [:app.dashboard/save-mock-failed]}
      :db (assoc db :loading-edit-mock true)})))

(refx/reg-event-db
 :app.dashboard/save-mock-failed
 (fn [db [_ err]]
   (prn :error err)
   (assoc db :save-edit-mock true)))

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
 (fn [{db :db} [_ {:keys [mock-id content]}]]
   {:dispatch [:app.dashboard/edit-mock-success
               {:new-mocks-raw (update-mock-content-by-id (:mocks-raw db)
                                                          mock-id content)}]
    :db (-> db
            (assoc :loading-edit-mock true))}))

(refx/reg-event-db
 :app.dashboard/edit-mock-failed
 (fn [db [_ err]]
   (prn :error err)
   (assoc db :failed-edit-mock true)))

(refx/reg-event-db
 :app.dashboard/edit-mock-success
 (fn [db [_ {new-mocks-raw :new-mocks-raw}]]
   (assoc db :mocks-raw new-mocks-raw)))

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
 (fn [{db :db} [_ user]]
   {:dispatch [:app.dashboard/get-mocks user]
    :db (dissoc db :delete-mock-err)}))

(refx/reg-event-db
 :app.dashboard/delete-mock-failure
 (fn [db [_ body]]
   (assoc db :delete-mock-err body)))

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
  [mocks mock mock-id status]
  (let [attempt ((fnil inc 0)
                 (:attempt mock))]
    (conj mocks (if (= (:id mock) mock-id)
                  (assoc mock
                         :publication status
                         :attempt attempt)
                  mock))))

(refx/reg-event-db
 :app.dashboard/set-mock-pub-stts-success
 (fn [db [_ mock-id {{:keys [publication]} :body}]]
   (->>
    (reduce
     #(update-mock-pub-stts %1 %2 mock-id (or publication "publishing"))
     [] (:mocks-raw db))
    (assoc db :mocks-raw))))

(refx/reg-event-db
 :app.dashboard/set-mock-pub-stts-failure
 (fn [db [_ mock-id _]]
   (->>
    (reduce
     #(update-mock-pub-stts %1 %2 mock-id
                            "publishing")
     [] (:mocks-raw db))
    (assoc db :mocks-raw))))
