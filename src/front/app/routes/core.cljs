(ns front.app.routes.core
  (:require [reitit.coercion.schema :as rsc]
            [reitit.frontend :as rf]
            [reitit.frontend.easy :as rfe]
            [refx.alpha :as refx]))

(defn router [routes]
  (rf/router
   routes
   {:data {:controllers [{:start (fn [ctx]
                                   (println "start" "root controller")
                                   (prn :ctx ctx))
                          :stop (fn [ctx]
                                  (println "stop" "root controller")
                                  (prn :ctx ctx))}]
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
   {:use-fragment false}))

