(ns cloud-ops.api.ports.workers
  (:require [cloud-ops.api.controllers.cloud :as controllers.cloud]))

(defn create-domain-handler
  [{:keys [event]} components]
  (when-let [{:keys [domain retrying?]} (:domain.create event)]
    (controllers.cloud/create-domain! domain retrying? components)))

(defn verify-domain-handler
  [{:keys [event]} components]
  (when-let [{:keys [domain retrying? skip-data?]} event]
    (controllers.cloud/verify-domain domain retrying? skip-data? components)))

(def workers
  [{:handler create-domain-handler
    :queue-name "mock.updated"}
   {:handler verify-domain-handler
    :queue-name "domain.verification.dispatched"}])
