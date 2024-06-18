(ns cloud-ops.api.ports.workers
  (:require [cloud-ops.api.controllers.cloud :as controllers.cloud]
            [com.moclojer.components.logs :as logs]))

(defn create-domain-handler
  [{:keys [event]} components]
  (when-let [{:keys [domain retrying?]} (:domain.create event)]
    (logs/log :info "creating domain"
              :ctx {:event event})
    (controllers.cloud/create-domain! domain retrying? components)))

(defn verify-domain-handler
  [{:keys [event]} components]
  (when-let [{:keys [domain retrying? skip-data?]} event]
    (logs/log :info "verifying domain"
              :ctx {:event event})
    (controllers.cloud/verify-domain domain retrying? skip-data? components)))

(defn delete-domain-handler
  [{:keys [event]} components]
  (when-let [{:keys [domain]} (:domain.delete event)]
    (logs/log :info "deleting domain"
              :ctx {:event event})
    (controllers.cloud/delete-domain! domain components)))

(def workers
  [{:handler create-domain-handler
    :queue-name "mock.updated"}
   {:handler delete-domain-handler
    :queue-name "mock.deleted"}
   {:handler verify-domain-handler
    :queue-name "domain.verification.dispatched"}])
