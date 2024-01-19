(ns cloud-ops.api.controllers.cloudflare
  (:require
   [cloud-ops.api.logic.cloudflare :as logic.cf]
   [cloud-ops.api.ports.http-out :as http-out]))

(defn create-domain! [domain {:keys [config http]}]
  (let [provider (get-in config [:config :cloud-providers :cloudflare])
        {:keys [base-url zone-id token record-content]} provider
        url (str base-url "/zones/" zone-id "/dns_records")
        req-params (http-out/mount-basic-req url token)
        cur-records (http-out/get-current-cf-records http req-params)]
    (if-not (logic.cf/domain-exists? cur-records domain)
      (-> {:domain domain
           :record-content record-content}
          (http-out/create-cf-domain! http req-params))
      (throw (ex-info "domain already exists"
                      {:provider "cloudflare"
                       :domain domain})))))
