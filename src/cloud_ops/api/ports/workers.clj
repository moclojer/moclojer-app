(ns cloud-ops.api.ports.workers
  (:require
   [cloud-ops.api.controllers.provider :as ctrls.provider]
   [components.logs :as logs]))

(defn create-domain-handler
  [{:keys [event]} components]
  (if-let [domain (:domain event)]
    (some-> (ctrls.provider/get-current-data domain components)
            (ctrls.provider/create-domain! domain components))
    (logs/log :error :create-domain :empty-domain)))

(def workers [{:handler create-domain-handler
               :queue-name :domain.create}])
