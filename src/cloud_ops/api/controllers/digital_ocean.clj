(ns cloud-ops.api.controllers.digital-ocean
  (:require
   [cloud-ops.api.logic.digital-ocean :as logic.do]
   [cloud-ops.api.ports.http-out :as http-out]))

(defn create-domain! [domain {:keys [config http]}]
  (let [provider (get-in config [:config :cloud-providers :digital-ocean])
        {:keys [base-url app-id token]} provider
        req-params (http-out/mount-do-req base-url app-id token)]
    (some->
     (http-out/get-current-do-spec http req-params)
     (logic.do/add-domain-to-spec domain)
     (http-out/update-do-spec! http req-params))))
