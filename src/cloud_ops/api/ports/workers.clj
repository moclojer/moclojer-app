(ns cloud-ops.api.ports.workers
  (:require
   [cloud-ops.api.controllers.digital-ocean :as ctrls.do]))

(defn create-domain-handler
  [{:keys [event]} components]
  (ctrls.do/create-domain! (:domain event) components))

(def workers [{:handler create-domain-handler
               :queue-name :domain.create}])
