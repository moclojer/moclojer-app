(ns front.app.dashboard.subs
  (:require
   [refx.alpha :as refx]))

(defn conj-if [xs & ys]
  (reduce (fn [xs y]
            (if (empty? y)
              xs
              (conj xs y)))
          xs
          ys))

(refx/reg-sub
 :app.dashboard/mocks
 (fn [db _]
   (:mocks db)))

(refx/reg-sub
 :app.dashboard/mocks-raw
 (fn [db _]
   (:mocks-raw db)))

(refx/reg-sub
 :app.user/orgs
 (fn [db _]
   (let [private (-> db :current-user :user :username)
         orgs (-> db :orgs)]
     (conj-if [] orgs private))))

(refx/reg-sub
 :app.dashboard/is-menu-open?
 (fn [db _]
   (:is-menu-open? db)))

(refx/reg-sub
 :app.dashboard/is-modal-open?
 (fn [db _]
   (:is-modal-open? db)))

(refx/reg-sub
 :app.dashboard/loading-creating-mock?
 (fn [db _]
   (:loading-creating-mock? db)))

(refx/reg-sub
 :app.dashboard/mock
 (fn [db [_ id]]
   (let [mocks (-> db :mocks)
         apis (->
               (mapv
                (fn [{:keys [apis]}]
                  (filter (fn [api]
                            (= (str (:id api)) id)) apis))
                mocks)
               ffirst)]
     apis)))

(refx/reg-sub
 :app.dashboard/mock-valid?
 (fn [db _]
   (:mock-valid? db)))
