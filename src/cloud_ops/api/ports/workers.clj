(ns cloud-ops.api.ports.workers
  (:require [cloud-ops.api.controllers.cloud :as controllers.cloud]
            [cloud-ops.api.ports.producers :as producers]
            [components.logs :as logs]))

(defn create-domain-handler
  [{:keys [event]} {:keys [publisher] :as components}]
  (if-let [domain (:domain event)]
    (let [{:keys [cf-records do-spec] :as cur-data}
          (controllers.cloud/get-current-data domain components)]
      (if (and cf-records do-spec)
        (some->
          cur-data
          (controllers.cloud/create-domain! domain components)
          (producers/set-publication-status! "publishing" publisher)
          (producers/verify-domain! 1 publisher))
        (producers/set-publication-status! domain "published" publisher)))
    (logs/log :error "failed to create domain (empty)")))

(defn verify-domain-handler
  [{:keys [event]} components]
  (if (:domain event)
    (controllers.cloud/verify-domain event components)
    (logs/log :error "failed to verify domain (empty)")))

(def workers
  [{:handler create-domain-handler
    :queue-name "domain.create"}
   {:handler verify-domain-handler
    :queue-name "domain.verify"}])
