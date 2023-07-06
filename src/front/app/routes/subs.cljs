(ns front.app.routes.subs 
  (:require
    [refx.alpha :as refx]))

(refx/reg-sub
 :app.route/current-route
 (fn [db]
   (:current-route db)))

