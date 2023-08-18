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
 (fn [{db :db} [_ response]]
   (prn :get-mocks-success response)
   {:db (assoc db
               :mocks
               [{:type :personal :name "my" :apis [{:enable false :url "test01.avelino.moclojer.com" :id 1}
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
   {:http {:url "/api/mocks"
           :method :get
           :on-success [:app.dashboard/get-mocks-success]
           :on-failure [:app.dashboard/get-mocks-failure]}
    :db db}))

(refx/reg-event-fx
 :app.dashboard/create-mock
 (fn [{db :db} [_ mock]]
   {:db (-> db
            (assoc :loading-creating-mock? true))
    :dispatch [:app.dashboard/created-mock-success mock]}))

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
