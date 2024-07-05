(ns cloud-ops.api.controllers.cloudflare
  (:require [cloud-ops.api.ports.http-out :as http-out]
            [com.moclojer.components.logs :as logs]))

(defn- mount-records-base-req [config]
  (let [{:keys [cloudflare]} (get-in config [:config :cloud-providers])
        {:keys [base-url zone-id token]} cloudflare
        url (str base-url "/zones/" zone-id "/dns_records")
        req-params (http-out/mount-basic-req url token)]
    {:cf-config cloudflare
     :base-req req-params}))

(defn get-current-records [{:keys [config http]} ctx]
  (logs/log :info "retrieving cloudflare domains"
            :ctx ctx)
  (-> (mount-records-base-req config)
      :base-req
      (http-out/get-current-cf-records http ctx)))

(defn create-domain! [cur-records domain {:keys [config http]} ctx]
  (when cur-records
    (logs/log :info "creating cloudflare domain"
              :ctx (assoc ctx :domain domain))
    (let [{:keys [cf-config base-req]} (mount-records-base-req config)]
      (http-out/create-cf-domain! domain
                                  (:record-content cf-config)
                                  (pr-str #:record
                                           {:service :cloud-ops
                                            :created-at (* (System/currentTimeMillis)
                                                           1000)})
                                  base-req http ctx))))

(defn delete-domain! [domain-id {:keys [config http]} ctx]
  (logs/log :info "deleting cloudflare domain"
            :ctx (assoc ctx :domain-id domain-id))
  (http-out/delete-cf-domain! (-> (mount-records-base-req config)
                                  (update-in [:base-req :url]
                                             str "/" domain-id)
                                  :base-req)
                              http ctx))
