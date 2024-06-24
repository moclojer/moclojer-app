(ns back.api.ports.workers
  (:require [back.api.controllers.mocks :as controllers.mocks]
            [com.moclojer.components.logs :as logs]))

(defn update-mock-dns-status!
  [{:keys [event]} {:keys [database]}]
  (when-let [{:keys [domain new-status ctx]} event]
    (logs/log :info "updating mock dns status"
              :ctx event)
    (controllers.mocks/update-mock-dns-status! domain new-status database ctx)))

(defn update-mock-unification-status!
  [{event :event} {:keys [database]}]
  (when-let [{:keys [mock-id new-status ctx]} (:mock.unification-status event)]
    (logs/log :info "updating mock unification status"
              :ctx (:mock.unification-status event))
    (controllers.mocks/update-mock-unification-status! mock-id new-status database ctx)))

(defn dispatch-domains-verification!
  [_ components]
  (controllers.mocks/dispatch-domains-verification! components {}))

(defn dispatch-unified-yml-verification!
  [_ components]
  (controllers.mocks/dispatch-unified-yml-verification! components {}))

(def workers
  [{:handler update-mock-dns-status!
    :queue-name "domain.updated"}
   {:handler update-mock-unification-status!
    :queue-name "yml.unified.generated"}
   {:handler dispatch-domains-verification!
    :queue-name "domains.verification.fired"}
   {:handler dispatch-unified-yml-verification!
    :queue-name "yml.unified.verification.fired"}])
