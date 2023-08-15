(ns front.app.dashboard.subs
  (:require [refx.alpha :as refx]))

(refx/reg-sub
 :app.dashboard/mocks-api
 (fn [db _]
   (:mocks db)))


(refx/reg-sub
 :app.dashboard/is-menu-open?
 (fn [db _]
   (:is-menu-open? db)))

(refx/reg-sub
 :app.dashboard/is-modal-open?
 (fn [db _]
   (:is-modal-open? db)))

