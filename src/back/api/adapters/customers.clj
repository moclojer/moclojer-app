(ns back.api.adapters.customers)

(defn ->wire
  [{:customer/keys [uuid email external_uuid username]}]
  {:uuid (str uuid)
   :email email
   :username username
   :external-id external_uuid})
