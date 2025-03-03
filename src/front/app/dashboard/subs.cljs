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
 :app.dashboard/org-mocks
 (fn [db _]
   (:org-mocks db)))

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
       (select-keys [:dns-status :unification-status :attempt]))))

(refx/reg-sub
 :app.user/orgs
 (fn [db _]
   (let [private (conj [] (-> db :current-user :user :username))
         orgs (-> db :orgs)]
     (into private orgs))))

(refx/reg-sub
 :app.user/orgs-data
 (fn [db _]
   (:orgs-data db)))

(refx/reg-sub
 :app.dashboard/aside
 (fn [db _]
   (:aside db)))

(refx/reg-sub
 :app.dashboard/is-menu-open?
 (fn [db _]
   (:is-menu-open? db)))

(refx/reg-sub
 :app.dashboard/is-modal-open?
 (fn [db _]
   (:is-modal-open? db)))

(refx/reg-sub
 :app.dashboard/is-org-modal-open?
 (fn [db _]
   (:is-org-modal-open? db)))

(refx/reg-sub
 :app.dashboard/is-add-user-org-modal-open?
 (fn [db _]
   (:is-add-user-org-modal-open? db)))

(refx/reg-sub
 :app.dashboard/is-settings-open?
 (fn [db _]
   (:is-settings-open? db)))

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

(refx/reg-sub
 :app.dashboard/mock-to-delete
 (fn [db _]
   (:mock-to-delete db)))

(refx/reg-sub
 :app.dashboard/org-to-delete
 (fn [db _]
   (:org-to-delete db)))

(refx/reg-sub
 :app.dashboard/require-git-repo?
 (fn [db _]
   (:require-git-repo? db)))

(refx/reg-sub
 :app.dashboard/repos
 (fn [db _]
   (:repositories db)))

(refx/reg-sub
 :app.dashboard/is-sync-enabled?
 (fn [db _]
   (:sync-enabled db)))

(refx/reg-sub
 :app.dashboard/loading-sync?
 (fn [db _]
   (:loading-sync? db)))

(refx/reg-sub
 :app.dashboard/mock-has-changes?
 (fn [db [_ mock-id]]
   (let [curr-mock (->> (:mocks-raw db)
                        (filter #(= (str (:id %)) (str mock-id)))
                        first)
         server-mock (:server-mock db)]
     (not= (:content curr-mock) (:content server-mock)))))

(refx/reg-sub
 :app.dashboard/server-mock
 (fn [db _]
   (:server-mock db)))

(refx/reg-sub
 :app.dashboard/orgname-valid?
 (fn [db _]
   (:orgname-available db)))

(refx/reg-sub
 :app.dashboard/org-users
 (fn [db _]
   (:org-users db)))

(refx/reg-sub
 :app.dashboard/curr-org
 (fn [db _]
   (:curr-org db)))

(refx/reg-sub
 :app.user/git-orgs
 (fn [db _]
   (:git-orgs db)))

(refx/reg-sub
 :app.dashboard/git-docs-modal-open?
 (fn [db _]
   (:git-docs-modal-open? db)))
