(ns front.app.auth.db
  (:require
   ["js-cookie" :as cookie]
   [cljs.reader :as reader]
   [refx.alpha :as refx]))

(defn set-cookie
  [name expires value]
  (cookie/set name (str value) #js {:expires expires}))

(defn get-cookie
  [name]
  (cookie/get name))

(defn remove-cookie
  [name]
  (cookie/remove name))

(refx/reg-cofx
 :app.auth/cookie
 (fn [cofx _]
   (assoc cofx
          :cookie-current-user (-> "current-user"
                                   get-cookie
                                   reader/read-string))))

(defn clear-localstorage []
  (.clear js/localStorage))
