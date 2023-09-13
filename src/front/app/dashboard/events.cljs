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

; #TODO move this to backend on get function
; this is to not change the frontend structure that we 
; already have
(defn make-api-type [mocks]
  (->> mocks
       (reduce (fn [mocks-by-domain
                    {:keys [wildcard subdomain enabled id]}]
                 (let [exist-domain (get mocks-by-domain (keyword subdomain))
                       url (str wildcard "." subdomain ".moclojer.com")]
                   (if exist-domain
                     (let [apis (:apis exist-domain)
                           new-mock {:mock-type :personal
                                     :subdomain subdomain
                                     :apis (conj apis {:wildcard wildcard
                                                       :subdomain subdomain
                                                       :url url
                                                       :enable enabled
                                                       :id id})}]
                       (assoc mocks-by-domain
                              (keyword subdomain)
                              new-mock))
                     (assoc mocks-by-domain
                            (keyword subdomain)
                            {:subdomain subdomain
                             :mock-type :personal
                             :apis [{:wildcard wildcard
                                     :subdomain subdomain
                                     :url url
                                     :enable enabled
                                     :id id}]}))))
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
   (prn :get-mocks-failure response)
   {:db
    (assoc db
           :error-fetch-mocks false
           :mocks
           [])}))

(refx/reg-event-fx
 :app.dashboard/get-mocks
 (fn [{db :db} [_ user]]
   #_(prn :user-get-mocks user)
   {:http {:url "/mocks"
           :method :get
           :headers {"authorization" (str "Bearer " (:access-token user))}
           :on-success [:app.dashboard/get-mocks-success]
           :on-failure [:app.dashboard/get-mocks-failure]}
    :db db}))

(refx/reg-event-fx
 :app.dashboard/create-mock
 (fn [{db :db} [_ mock]]
   (prn :mock mock)
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
   (let [api (str (:name mock) "." (:org mock) ".moclojer.com")]
     {:db (-> db
              (assoc
               :is-modal-open? false
               :loading-creating-mock? false
               :mocks (conj (:mocks db) (assoc mock :apis [{:enable true :url api :id 1}]))))
      :dispatch [:app.routes/push-state-params  {:route  :app.core/mocks-view
                                                 :params {:mock-id 1}}]})))
