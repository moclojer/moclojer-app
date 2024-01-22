(ns cloud-ops.api.ports.workers
  (:require
   [cloud-ops.api.controllers.cloud :as ctrls.cloud]
   [cloud-ops.api.ports.producers :as producers]
   [components.logs :as logs]))

(defn create-domain-handler
  [{:keys [event]} {:keys [publisher] :as components}]
  (if-let [domain (:domain event)]
    (some-> (ctrls.cloud/get-current-data domain components)
            (ctrls.cloud/create-domain! domain components)
            (producers/verify-domain! 1 publisher))
    (logs/log :error :create-domain :empty-domain)))

(defn verify-domain-handler
  [{:keys [event]} components]
  (if (:domain event)
    (ctrls.cloud/verify-domain event components)
    (logs/log :error :verify-domain :empty-domain)))

(def workers [{:handler create-domain-handler
               :queue-name :domain.create}
              {:handler verify-domain-handler
               :queue-name :domain.verify}])
