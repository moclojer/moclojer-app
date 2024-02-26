(ns back.api.ports.workers
  (:require
   [back.api.controllers.mocks :as controllers.mocks]))

(defn update-mock-publication-status!
  [{{:keys [domain new-status]} :event} {:keys [database]}]
  (controllers.mocks/update-mock-publication-status!
   domain new-status database))

(def workers
  [{:handler update-mock-publication-status!
    :queue-name :mock.publication}])
