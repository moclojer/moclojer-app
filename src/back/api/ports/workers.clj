(ns back.api.ports.workers
  (:require [back.api.controllers.mocks :as controllers.mocks]))

(defn update-mock-publication-status!
  [{{:keys [domain new-status]} :event} {:keys [database]}]
  (controllers.mocks/update-mock-publication-status!
   domain new-status database))

(defn dispatch-domains-verification!
  [_ components]
  (controllers.mocks/dispatch-domains-verification! components))

(defn dispatch-unified-yml-verification!
  [_ components]
  (controllers.mocks/dispatch-unified-yml-verification! components))

(def workers
  [{:handler update-mock-publication-status!
    :queue-name "mock.publication"}
   {:handler dispatch-domains-verification!
    :queue-name "domains.verification.dispatch"}
   {:handler dispatch-unified-yml-verification!
    :queue-name "unified.verification.dispatch"}])
