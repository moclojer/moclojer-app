(ns moclojer.api.ports.workers
  (:require [components.logs :as logs]
            [moclojer.api.controllers.moclojer :as controller.moclojer]))

(defn restart-mock-file-handler
  [{:keys [event]} components]
  (logs/log :info :restart-mock-handler :received event)
  (controller.moclojer/write-file-on-disk event components))

(def workers [{:handler restart-mock-file-handler
               :queue-name :restart.mocks}])
