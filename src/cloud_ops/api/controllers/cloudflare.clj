(ns cloud-ops.api.controllers.cloudflare
  (:require [cloud-ops.api.ports.http-out :as http-out]
            [com.moclojer.components.logs :as logs]))

(defn- mount-records-base-req [config]
  (let [{:keys [cloudflare proxy]} (get-in config [:config :cloud-providers])
        {:keys [base-url zone-id token]} cloudflare
        url (str base-url "/zones/" zone-id "/dns_records")
        req-params (http-out/mount-basic-req url token proxy)]
    {:cf-config cloudflare
     :base-req req-params}))

(defn get-current-records [{:keys [config http]}]
  (logs/log :info "retrieving CF domains")
  (->> (mount-records-base-req config)
       :base-req
       (http-out/get-current-cf-records http)))

(defn create-domain! [cur-records domain {:keys [config http]}]
  (when cur-records
    (logs/log :info "creating CF domain"
              :ctx {:domain domain})
    (let [{:keys [cf-config base-req]} (mount-records-base-req config)]
      (http-out/create-cf-domain! domain
                                  (:record-content cf-config)
                                  (pr-str #:record
                                           {:service :cloud-ops
                                            :created-at (* (System/currentTimeMillis)
                                                           1000)})
                                  http base-req))))

(defn delete-domain! [domain-id {:keys [config http]}]
  (logs/log :info "deleting CF domain"
            :ctx {:domain-id domain-id})
  (http-out/delete-cf-domain! http
                              (-> (mount-records-base-req config)
                                  (update-in [:base-req :url]
                                             str "/" domain-id)
                                  :base-req)))
