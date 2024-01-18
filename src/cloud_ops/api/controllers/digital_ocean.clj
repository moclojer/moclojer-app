(ns cloud-ops.api.controllers.digital-ocean
  (:require
   [cloud-ops.api.logic.digital-ocean :as logic.do]
   [cloud-ops.api.ports.http-out :as http-out]
   [components.logs :as logs]))

(defn get-current-spec [config]
  (let [{:keys [base-url app-id token]} (get-in config
                                                [:cloud-providers
                                                 :digital-ocean])]
    (logs/log :info :config base-url app-id token)
    (http-out/get-current-do-spec base-url app-id token)))

(defn create-domain! [domain {:keys [config]}]
  (some->
   (:config config)
   get-current-spec
   (logic.do/add-domain-to-spec domain)))
