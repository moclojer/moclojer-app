(ns cloud-ops.api.controllers.digital-ocean
  (:require [cloud-ops.api.logic.digital-ocean :as logic.do]
            [cloud-ops.api.ports.http-out :as http-out]))

(defn get-current-spec [{:keys [config http]}]
  (let [provider (get-in config [:config :cloud-providers :digital-ocean])
        {:keys [base-url app-id token]} provider
        url (str base-url "/apps/" app-id)
        req-params (http-out/mount-basic-req url token nil)]
    (http-out/get-current-do-spec http req-params)))

(defn create-domain! [cur-spec domain {:keys [config http]}]
  (when cur-spec
    (let [provider (get-in config [:config :cloud-providers :digital-ocean])
          {:keys [base-url app-id token]} provider
          url (str base-url "/apps/" app-id)
          req-params (http-out/mount-basic-req url token nil)]
      (some-> (logic.do/add-domain-to-spec cur-spec domain)
              (http-out/update-do-spec! http req-params)))))
