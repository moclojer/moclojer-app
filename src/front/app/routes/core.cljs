(ns front.app.routes.core
  (:require [reitit.coercion.schema :as rsc]
            [reitit.frontend :as rf]
            [reitit.frontend.easy :as rfe]
            [refx.alpha :as refx]))

(defn router [routes]
  (rf/router
   routes
   {:data {:controllers [{:start (println "start" "root-controller")
                          :stop (println "stop" "root controller")}]
           :coercion rsc/coercion
           :public? false}}))

(defn on-navigate [new-match]
  (when new-match
    (refx/dispatch [:app.routes/navigated new-match])))

(defn init-routes! [routes]
  (js/console.log "initializing routes")
  (rfe/start!
   (router routes)
   on-navigate
   {:use-fragment true}))

