(ns app.integration.aux
  (:require [app.aux :as aux]
            [cljs.test :refer [async]]
            [refx.alpha :as refx]))

(refx/reg-event-db
 :test/initialize-db
 (fn [_ _]
   {:current-route nil
    :current-user nil
    :login-loading? false
    :login-error nil
    :login-email-sent nil}))

(defn before-fn []
  (async done
         (refx/clear-subscription-cache!)
         (refx/dispatch-sync [:test/initialize-db])
         (aux/cleanup)
         (done)))

(defn after-fn []
  (aux/cleanup))
