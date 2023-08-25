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

(refx/reg-event-fx
 :app.dashboard/get-mocks-success
 (fn [{db :db} [_ {:keys [body]}]]
   (prn :get-mocks-success body)
   {:db (assoc db
               :mocks (:mocks body)

               #_[{:type :personal :name "my" :apis [{:enable false :url "test01.avelino.moclojer.com" :id 1}
                                                     {:enable true  :url "test02.avelino.moclojer.com" :id 2}]}
                  {:type :org :name "cljazz" :apis [{:enable false :url "test01.avelino.moclojer.com" :id 1}
                                                    {:enable true  :url "test02.avelino.moclojer.com" :id 2}]}]
               #_(-> response :body))}))

(refx/reg-event-fx
 :app.dashboard/get-mocks-failure
 (fn [{db :db} [_ response]]
   (prn :get-mocks-failure response)
   {:db
    (assoc db
           :error-fetch-mocks false
           :mocks
           [#_#_{:type :personal :name "my" :apis [{:enable false :url "test01.avelino.moclojer.com" :id 1}
                                                   {:enable true  :url "test02.avelino.moclojer.com" :id 2}]}
              {:type :org :name "cljazz" :apis [{:enable false :url "test01.avelino.moclojer.com" :id 1}
                                                {:enable true  :url "test02.avelino.moclojer.com" :id 2}]}])}))

(refx/reg-event-fx
 :app.dashboard/get-mocks
 (fn [{db :db} [_ user]]
   (prn :user-get-mocks user)
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
            (assoc :loading-creating-mock? true))
    :dispatch [:app.dashboard/created-mock-success mock]}))

(refx/reg-event-fx
 :app.dashboard/created-mock-failure
 (fn [{db :db} [_ err]]
   (prn :error err)
   {:db db}
   #_(let [api (str (:name mock) "." (:org mock) ".moclojer.com")]
       {:db (-> db
                (assoc
                 :is-modal-open? false
                 :loading-creating-mock? false
                 :mocks (conj (:mocks db) (assoc mock :apis [{:enable true :url api :id 1}]))))
        :dispatch [:app.routes/push-state-params  {:route  :app.core/mocks-view
                                                   :params {:mock-id 1}}]})))

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
