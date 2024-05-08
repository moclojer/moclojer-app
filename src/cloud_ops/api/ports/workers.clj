(ns cloud-ops.api.ports.workers
  (:require [cloud-ops.api.controllers.cloud :as controllers.cloud]
            [cloud-ops.api.ports.producers :as producers]
            [components.logs :as logs]))

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

(defn verify-health
  [{{:keys [scope constraints]} :event} components]
  (case scope
    :all  (logs/log :error "all scope verification not implemented yet")
    :user (logs/log :error "user scope verification not implemented yet"
                    :ctx {:constraints constraints})
    :domain (producers/verify-domain!
             (assoc constraints :attempt 1)
             (:publisher components))))

(def workers
  [{:handler create-domain-handler
    :queue-name "domain.create"}
   {:handler verify-domain-handler
    :queue-name "domain.verify"}
   {:handler verify-health
    :queue-name "health.verify"}])
