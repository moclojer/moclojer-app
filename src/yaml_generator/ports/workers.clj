(ns yaml-generator.ports.workers
  (:require
   [components.logs :as logs]
   [yaml-generator.controllers.yml :as controller.yml]))

(defn generate-yml-handler
  [{:keys [event]} components]
  (logs/log :info :generate-yml :received event)
  (controller.yml/generate event components))

(defn unified-mock-handler
  [{:keys [event]} components]
  (logs/log :info :unified-handler :received event)
  (controller.yml/generate-unified-yml event components))

(defn deleted-mock-handler
  [{:keys [event]} components]
  (logs/log :info :deleted-mock :received event)
  (controller.yml/delete event components))

(def workers
  [{:handler generate-yml-handler
    :queue-name "mock.changed"}
   {:handler unified-mock-handler
    :queue-name "mock.unified"}
   {:handler deleted-mock-handler
    :queue-name "mock.deleted"}])
