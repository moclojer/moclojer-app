(ns front.app.routes.core
  (:require
   [refx.alpha :as refx]
   [reitit.coercion.schema :as rsc]
   [reitit.frontend :as rf]
   [reitit.frontend.easy :as rfe]
   [goog.object :as gobj]
   [reitit.frontend.history :refer [ignore-anchor-click?]]))

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
   {:use-fragment true
    :ignore-anchor-click? (fn [router e el uri]
                            (prn :calling router e el uri)
                           ;; Add additional check on top of the default checks
                            (and (ignore-anchor-click? router e el uri)
                                 (not= "false" (gobj/get (.-dataset el) "reititHandleClick"))))}))


