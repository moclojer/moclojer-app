(ns cloud-ops.api.controllers.cloudflare
  (:require
   [cloud-ops.api.ports.http-out :as http-out]))

(defn get-current-records [{:keys [config http]}]
  (let [{:keys [cloudflare proxy]} (get-in config [:config :cloud-providers])
        {:keys [base-url zone-id token]} cloudflare
        url (str base-url "/zones/" zone-id "/dns_records")
        req-params (http-out/mount-basic-req url token proxy)]
    (http-out/get-current-cf-records http req-params)))

(defn create-domain! [domain {:keys [config http]}]
  (let [{:keys [cloudflare proxy]} (get-in config [:config :cloud-providers])
        {:keys [base-url zone-id token record-content]} cloudflare
        url (str base-url "/zones/" zone-id "/dns_records")
        req-params (http-out/mount-basic-req url token proxy)]
    (-> {:domain domain
         :record-content record-content}
        (http-out/create-cf-domain! http req-params))))
