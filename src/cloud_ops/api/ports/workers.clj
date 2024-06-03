(ns cloud-ops.api.ports.workers
  (:require [cloud-ops.api.controllers.cloud :as controllers.cloud]
            [com.moclojer.components.logs :as logs]))

(defn create-domain-handler
  [{:keys [event]} components]
  (if (some? (:domain event))
    (controllers.cloud/create-domain! event components)
    (logs/log :warn "cannot create empty domain")))

(defn verify-domain-handler
  [{:keys [event]} components]
  (if (:domain event)
    (controllers.cloud/verify-domain event components)
    (logs/log :warn "cannot verify empty domain")))

(def workers
  [{:handler create-domain-handler
    :queue-name "domain.create"}
   {:handler verify-domain-handler
    :queue-name "domain.verify"}])
