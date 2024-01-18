(ns cloud-ops.api.controllers.cloudflare
  (:require
   [cloud-ops.api.ports.http-out :as http-out]))

(defn create-domain! [domain {:keys [config http]}]
  (let [provider (get-in config [:config :cloud-providers :cloudflare])
        {:keys [base-url zone-id token record-content]} provider
        url (str base-url "/zones/" zone-id "/dns_records")
        req-params (http-out/mount-basic-req url token)]
    (-> {:domain domain
         :record-content record-content}
        (http-out/create-cf-domain! http req-params))))
