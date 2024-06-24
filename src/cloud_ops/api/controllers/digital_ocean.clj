(ns cloud-ops.api.controllers.digital-ocean
  (:require [cloud-ops.api.logic.digital-ocean :as logic.do]
            [cloud-ops.api.ports.http-out :as http-out]
            [com.moclojer.components.logs :as logs]))

(defn get-current-spec [{:keys [config http]} ctx]
  (let [provider (get-in config [:config :cloud-providers :digital-ocean])
        {:keys [base-url app-id token]} provider
        url (str base-url "/apps/" app-id)
        req-params (http-out/mount-basic-req url token nil)]
    (http-out/get-current-do-spec req-params http ctx)))

(defn- mount-app-base-req [config]
  (let [provider (get-in config [:config :cloud-providers :digital-ocean])
        {:keys [base-url app-id token]} provider
        url (str base-url "/apps/" app-id)]
    (http-out/mount-basic-req url token nil)))

(defn create-domain! [cur-spec domain {:keys [config http]} ctx]
  (when cur-spec
    (logs/log :info "creating digital ocean domain"
              :ctx (assoc ctx :domain domain))
    (-> (logic.do/add-domain-to-spec cur-spec domain)
        (http-out/update-do-spec! (mount-app-base-req config) http ctx))))

(defn delete-domain! [cur-spec domain {:keys [config http]} ctx]
  (when cur-spec
    (logs/log :info "deleting digital ocean domain"
              :ctx (assoc ctx :domain domain))
    (-> (logic.do/rm-domain-from-spec cur-spec domain)
        (http-out/update-do-spec! (mount-app-base-req config) http ctx))))
