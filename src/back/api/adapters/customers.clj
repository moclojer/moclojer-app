(ns back.api.adapters.customers)

(defn ->wire
  [{:customer/keys [uuid email external_uuid]}]
  {:uuid (str uuid)
   :email email
   :external-id external_uuid})
