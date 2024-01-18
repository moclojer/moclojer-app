(ns cloud-ops.api.controllers.digital-ocean
  (:require
   [cloud-ops.api.logic.digital-ocean :as logic.do]
   [cloud-ops.api.ports.http-out :as http-out]))

(defn create-domain! [domain {:keys [config]}]
  (let [provider (get-in config [:config :cloud-providers :digital-ocean])
        {:keys [base-url app-id token]} provider
        req-params (http-out/mount-req base-url app-id token)]
    (some->
     (http-out/get-current-do-spec req-params)
     (logic.do/add-domain-to-spec domain))))
