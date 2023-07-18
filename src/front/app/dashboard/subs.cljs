(ns front.app.dashboard.subs
  (:require [refx.alpha :as refx]))

(refx/reg-sub
 :app.dashboard/mocks-api
 (fn [db _]
   [{:type :personal :name "my" :apis [{:enable false :url "test01.avelino.moclojer.com" :id 1}
                                       {:enable true  :url "test02.avelino.moclojer.com" :id 2}]}
    {:type :org :name "cljazz" :apis [{:enable false :url "test01.avelino.moclojer.com" :id 1}
                                      {:enable true  :url "test02.avelino.moclojer.com" :id 2}]}]))


(refx/reg-sub
 :app.dashboard/is-menu-open?
 (fn [db _]
   (:is-menu-open? db)))
