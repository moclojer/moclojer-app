(ns app.routes
  (:require [reitit.coercion.schema :as rsc]
            [reitit.frontend :as rf]
            [reitit.frontend.controllers :as rfc]
            [reitit.frontend.easy :as rfe]
            [refx.alpha :as refx]))

;;; Effects ;;;

(refx/reg-fx
 :push-state
 (fn [route]
   (apply rfe/push-state route)))

;;; Events ;;;

(refx/reg-event-fx
 ::push-state
 (fn [_ [_ & route]]
   {:push-state route}))

(refx/reg-event-db
 ::navigated
 (fn [db [_ new-match]]
   (let [old-match   (:current-route db)
         controllers (rfc/apply-controllers (:controllers old-match) new-match)]
     (assoc db :current-route (assoc new-match :controllers controllers)))))

;;; Subscriptions ;;;

(refx/reg-sub
 ::current-route
 (fn [db]
   (:current-route db)))

;;; Setup ;;;

(defn router [routes]
  (rf/router
   routes
   {:data {:controllers [{:start (println "start" "root-controller")
                          :stop (println "stop" "root controller")}]
           :coercion rsc/coercion
           :public? false}}))

(defn on-navigate [new-match]
  (when new-match
    (refx/dispatch [::navigated new-match])))

(defn init-routes! [routes]
  (js/console.log "initializing routes")
  (rfe/start!
   (router routes)
   on-navigate
   {:use-fragment true}))
