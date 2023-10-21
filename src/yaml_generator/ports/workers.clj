(ns yaml-generator.ports.workers
  (:require [components.logs :as logs]
            [yaml-generator.controllers.yml :as controller.yml]))

(defn generate-yml-handler
  [{:keys [message]}
   components]
  (logs/log :info :generate-yml :received message)
  (controller.yml/generate message components))

(def workers [{:handler generate-yml-handler
               :queue-name :mock.changed}])
