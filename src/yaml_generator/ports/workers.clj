(ns yaml-generator.ports.workers
  (:require [com.moclojer.components.logs :as logs]
            [yaml-generator.controllers.yml :as controller.yml]))

(defn generate-single-yml-handler
  [{:keys [event]} components]
  (when-let [{:keys [mock-id ctx]} (:yml.single.generate event)]
    (logs/log :info "generating single yaml"
              :ctx event)
    (controller.yml/generate-single-yml! mock-id components ctx)))

(defn delete-single-yml-handler
  [{:keys [event]} components]
  (when-let [{:keys [mock-id owner-id ctx]} (:yml.single.delete event)]
    (logs/log :info "deleting single yaml"
              :ctx event)
    (controller.yml/delete-single-yml! mock-id owner-id components ctx)))

(defn generate-unified-yml-handler
  [{:keys [event]} components]
  (when-let [{:keys [gen-yml-path ctx]} event]
    (logs/log :info "generating unified yaml"
              :ctx event)
    (controller.yml/generate-unified-yml! gen-yml-path true components ctx)))

(defn verify-unified-yml-handler
  [{:keys [event]} components]
  (logs/log :info "verifying unified mock"
            :ctx event)
  (controller.yml/verify-unified-yml! event components (:ctx event)))

(def workers
  [{:handler generate-single-yml-handler
    :queue-name "mock.updated"}
   {:handler delete-single-yml-handler
    :queue-name "mock.deleted"}
   {:handler generate-unified-yml-handler
    :queue-name "yml.single.generated"}
   {:handler verify-unified-yml-handler
    :queue-name "yml.unified.verification.dispatched"}])
