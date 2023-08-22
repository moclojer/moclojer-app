(ns back.api.adapters.customers)

(defn assoc-if [m k v]
  (if v
    (assoc m k v)
    m))

(defn ->wire
  [{:customer/keys [uuid email external_uuid username]}]
  (assoc-if
   {:uuid (str uuid)
    :email email
    :external-id external_uuid}
   :username username))

