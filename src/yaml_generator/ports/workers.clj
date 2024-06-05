(ns yaml-generator.ports.workers
  (:require [com.moclojer.components.logs :as logs]
            [yaml-generator.controllers.yml :as controller.yml]))

(defn generate-single-yml-handler
  [{:keys [event]} components]
  (logs/log :info "generating single yaml"
            :ctx {:event event})
  (when-let [{:keys [mock-id]} (:yml.single.generate event)]
    (controller.yml/generate-single-yml! mock-id components)))

(defn delete-single-yml-handler
  [{:keys [event]} components]
  (when-let [{:keys [mock-id user-id]} (:yml.single.delete event)]
    (logs/log :info "deleting single yaml"
              :ctx {:event event})
    (controller.yml/delete-single-yml! mock-id user-id components)))

(defn generate-unified-yml-handler
  [{:keys [event]} components]
  (logs/log :info "generating unified yaml"
            :ctx {:event event})
  (when-let [{:keys [gen-yml-path]} event]
    (controller.yml/generate-unified-yml! gen-yml-path true components)))

(defn verify-unified-yml-handler
  [{:keys [event]} components]
  (logs/log :info "verifying unified mock"
            :ctx {:event event})
  (controller.yml/verify-unified-yml! event components))

(def workers
  [{:handler generate-single-yml-handler
    :queue-name "mock.updated"}
   {:handler delete-single-yml-handler
    :queue-name "mock.deleted"}
   {:handler generate-unified-yml-handler
    :queue-name "yml.single.generated"}
   {:handler verify-unified-yml-handler
    :queue-name "yml.unified.verification.dispatched"}])
