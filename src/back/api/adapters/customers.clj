(ns back.api.adapters.customers
  (:require
   [back.api.utils :refer [assoc-if]]))

(defn ->wire
  [{:customer/keys [uuid email external_uuid username]}]
  (->
   {:uuid (str uuid)
    :email email
    :external-id external_uuid}
   (assoc-if
    :username username)))
