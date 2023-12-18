(ns front.app.dashboard.events
  (:require
   ["js-yaml" :as js-yaml]
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

(defn assoc-if
  [xs k v]
  (if v
    (assoc xs k v)
    xs))

; #TODO move this to backend on get function
; this is to not change the frontend structure that we 
; already have
(defn make-api-type [mocks]
  (->> mocks
       (reduce (fn [mocks-by-domain
                    {:keys [wildcard subdomain enabled id content]}]
                 (let [exist-domain (get mocks-by-domain (keyword subdomain))
                       url (str wildcard "." subdomain ".moclojer.com")]
                   (if exist-domain
                     (let [apis (:apis exist-domain)
                           new-mock {:mock-type :personal
                                     :subdomain subdomain
                                     :apis (conj apis (-> {:wildcard wildcard
                                                           :subdomain subdomain
                                                           :url url
                                                           :enable enabled
                                                           :id id}
                                                          (assoc-if :content content)))}]
                       (assoc mocks-by-domain
                              (keyword subdomain)
                              new-mock))
                     (assoc mocks-by-domain
                            (keyword subdomain)
                            {:subdomain subdomain
                             :mock-type :personal
                             :apis [(-> {:wildcard wildcard
                                         :subdomain subdomain
                                         :url url
                                         :enable enabled
                                         :id id}
                                        (assoc-if :content content))]}))))

               {})
       vals))

(refx/reg-event-fx
 :app.dashboard/get-mocks-success
 (fn [{db :db} [_ {:keys [body]}]]
   (let [m (make-api-type (:mocks body))]
     {:db (assoc db
                 :mocks-raw (:mocks body)
                 :mocks m)})))

(refx/reg-event-fx
 :app.dashboard/get-mocks-failure
 (fn [{db :db} [_ response]]
   {:db
    (assoc db
           :error-fetch-mocks false
           :mocks
           [])}))

(refx/reg-event-fx
 :app.dashboard/get-mocks
 (fn [{db :db} [_ user]]
   {:http {:url "/mocks"
           :method :get
           :headers {"authorization" (str "Bearer " (:access-token user))}
           :on-success [:app.dashboard/get-mocks-success]
           :on-failure [:app.dashboard/get-mocks-failure]}
    :db db}))

(refx/reg-event-fx
 :app.dashboard/create-mock
 (fn [{db :db} [_ mock]]
   {:http {:url "/mocks"
           :method :post
           :headers {"authorization" (str "Bearer " (:access-token (-> db :current-user)))}
           :body mock
           :on-success [:app.dashboard/created-mock-success]
           :on-failure [:app.dashboard/created-mock-failure]}
    :db (-> db
            (assoc :loading-creating-mock? true))}))

(refx/reg-event-fx
 :app.dashboard/created-mock-failure
 (fn [{db :db} [_ err]]
   (prn :error err)
   {:db (-> db
            (assoc :loading-creating-mock? false
                   :error-creating-mock? true))}))

(refx/reg-event-fx
 :app.dashboard/created-mock-success
 (fn [{db :db} [_ mock]]
   {:db (-> db
            (assoc
             :is-modal-open? false
             :loading-creating-mock? false))
    :dispatch [:app.routes/push-state :app.core/mocks]}))

(refx/reg-event-fx
 :app.dashboard/save-mock
 (fn [{db :db} [_ id]]
   (let [content (->> db :mocks-raw
                      (filter
                       (fn [mock]
                         (= (str (:id mock)) id)))

                      first
                      :content)]
     {:http  {:url "/mocks"
              :method :put
              :headers {"authorization" (str "Bearer " (:access-token (-> db :current-user)))}
              :body {:id id
                     :content content}
              :on-success [:app.dashboard/get-mocks (-> db :current-user)]
              :on-failure [:app.dashboard/edit-mock-failed]}
      :db (-> db
              (assoc :loading-edit-mock true))})))

(refx/reg-event-fx
 :app.dashboard/verify-mock
 (fn [{db :db} [_ {:keys [new-mocks mock]}]]
   (let [content (or (:content mock) "")
         valid? (try
                  (.load js-yaml content) true
                  (catch :default _ false))]
     {:db (assoc db :mock-valid? valid?)
      :dispatch [:app.dashboard/edit-mock-success {:body {:mocks new-mocks}}]})))

(refx/reg-event-fx
 :app.dashboard/verify-mock-failed
 (fn [{db :db} [_ err]]
   {:db (assoc db :mock-content-err {:reason (.-reason err)
                                     :mark (js->clj (.-mark err)
                                                    :keywordize-keys true)})}))

(refx/reg-event-fx
 :app.dashboard/edit-mock
 (fn [{db :db} [_ {:keys [content mock-id]}]]
   (let [mock-raw (-> db :mocks-raw)
         mock (assoc (->> mock-raw
                          (filter
                           (fn [{:keys [id]}]
                             (= (str id) (str mock-id))))
                          first)
                     :content content)
         mocks (->> db :mocks-raw
                    (filter
                     (fn [{:keys [id]}]
                       (prn id mock-id)
                       (not (= id mock-id)))))
         new-mocks (conj
                    mocks
                    mock)]

     {:dispatch [:app.dashboard/verify-mock {:new-mocks new-mocks
                                             :mock mock}]
      :db (-> db
              (assoc :loading-edit-mock true))})))

(refx/reg-event-fx
 :app.dashboard/edit-mock-failed
 (fn [{db :db} [_ err]]
   (prn :error err)
   {:db (-> db
            (assoc :failed-edit-mock true))}))

(refx/reg-event-fx
 :app.dashboard/edit-mock-success
 (fn [{db :db} [_ {:keys [body]}]]
   (let [m (make-api-type (:mocks body))]
     {:db (assoc db
                 :mocks-raw (:mocks body)
                 :mocks m)})))
