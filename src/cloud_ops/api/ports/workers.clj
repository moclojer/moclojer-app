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

(defn verify-health-handler
  [{{:keys [scope args]} :event} components]
  (case (keyword scope)
    :domain (let [{:keys [domain retrying?]
                   :or {retrying? false}} args]
              (producers/verify-domain!
               domain retrying? (:publisher components)))

    (logs/log :warn (str "scope `" scope "` not implemented yet"))))

(def workers
  [{:handler create-domain-handler
    :queue-name "domain.create"}
   {:handler verify-domain-handler
    :queue-name "domain.verify"}
   {:handler verify-health-handler
    :queue-name "health.verify"}])
