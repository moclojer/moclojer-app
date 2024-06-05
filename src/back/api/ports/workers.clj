(ns back.api.ports.workers
  (:require [back.api.controllers.mocks :as controllers.mocks]))

(defn update-mock-dns-status!
  [{{:keys [domain new-status]} :event} {:keys [database]}]
  (controllers.mocks/update-mock-dns-status! domain new-status database))

(defn update-mock-unification-status!
  [{event :event} {:keys [database]}]
  (when-let [{:keys [mock-id new-status]} (:mock.unification-status event)]
    (controllers.mocks/update-mock-unification-status! mock-id new-status database)))

(defn dispatch-domains-verification!
  [_ components]
  (controllers.mocks/dispatch-domains-verification! components))

(defn dispatch-unified-yml-verification!
  [_ components]
  (controllers.mocks/dispatch-unified-yml-verification! components))

(def workers
  [{:handler update-mock-dns-status!
    :queue-name "domain.updated"}
   {:handler update-mock-unification-status!
    :queue-name "yml.unified.generated"}
   {:handler dispatch-domains-verification!
    :queue-name "domains.verification.fired"}
   {:handler dispatch-unified-yml-verification!
    :queue-name "yml.unified.verification.fired"}])
