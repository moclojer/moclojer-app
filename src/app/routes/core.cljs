(ns app.routes.core 
  (:require
    [reitit.frontend :as rf]
    [reitit.coercion.schema :as rsc]
    [refx.alpha :as refx]
    [reitit.frontend.easy :as rfe]))

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

