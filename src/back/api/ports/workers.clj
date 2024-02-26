(ns back.api.ports.workers
  (:require
   [back.api.controllers.mocks :as controllers.mocks]))

(defn set-mock-publication-status!
  [{{:keys [domain new-status]} :event} {:keys [database]}]
  (controllers.mocks/set-mock-publication-status!
   domain new-status database))

(def workers
  [{:handler set-mock-publication-status!
    :queue-name :mock.publication}])
