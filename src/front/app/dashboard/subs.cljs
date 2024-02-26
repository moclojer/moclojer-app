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
 :app.dashboard/mock-pub-stts
 (fn [{mocks :mocks-raw} [_ mock-id]]
   (-> #(= (:id %) mock-id)
       (filter mocks)
       first
       (select-keys [:publication :attempt]))))

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
 :app.dashboard/loading-mocks?
 (fn [db _]
   ;; Checks if `nil?` because its nil
   ;; state has the same value as being loaded.
   ;; The only state where its not loading
   ;; is explicitly when `false`.
   (let [loading? (:loading-mocks? db)]
     (or (nil? loading?) loading?))))

(refx/reg-sub
 :app.dashboard/mock
 (fn [db [_ id]]
   (->> (:mocks-raw db)
        (filter #(= (-> % :id str) id))
        first)))

(refx/reg-sub
 :app.dashboard/mock-valid?
 (fn [db _]
   (:mock-valid? db)))

(refx/reg-sub
 :app.dashboard/wildcard-available?
 (fn [db _]
   (:wildcard-available? db)))
