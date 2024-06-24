(ns cloud-ops.api.ports.workers
  (:require [cloud-ops.api.controllers.cloud :as controllers.cloud]
            [com.moclojer.components.logs :as logs]))

(defn create-domain-handler
  [{:keys [event]} components]
  (when-let [{:keys [domain retrying? ctx]} (:domain.create event)]
    (logs/log :info "creating domain"
              :ctx (:domain.create event))
    (controllers.cloud/create-domain! domain retrying? components ctx)))

(defn verify-domain-handler
  [{:keys [event]} components]
  (when-let [{:keys [domain retrying? skip-data? ctx]} event]
    (logs/log :info "verifying domain"
              :ctx event)
    (controllers.cloud/verify-domain domain retrying? skip-data? components ctx)))

(defn delete-domain-handler
  [{:keys [event]} components]
  (when-let [{:keys [domain ctx]} (:domain.delete event)]
    (logs/log :info "deleting domain"
              :ctx event)
    (controllers.cloud/delete-domain! domain components ctx)))

(def workers
  [{:handler create-domain-handler
    :queue-name "mock.updated"}
   {:handler delete-domain-handler
    :queue-name "mock.deleted"}
   {:handler verify-domain-handler
    :queue-name "domain.verification.dispatched"}])
