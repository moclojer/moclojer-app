(ns back.api.ports.workers
  (:require
   [taoensso.telemere :as t]
   [back.api.controllers.mocks :as controllers.mocks]
   [com.moclojer.components.logs :as logs]))

(defn update-mock-dns-status!
  [{:keys [event]} {:keys [database]}]
  (when-let [{:keys [domain new-status ctx]} event]
    (logs/trace
     ::update-mock-dns-status! {:event event}
     (controllers.mocks/update-mock-dns-status! domain new-status database ctx))))

(defn update-mock-unification-status!
  [{:keys [event]} {:keys [database]}]
  (when-let [{:keys [mock-id new-status ctx]} (:mock.unification-status event)]
    (logs/trace
     ::update-mock-unification-status! {:event event}
     (controllers.mocks/update-mock-unification-status! mock-id new-status database ctx))))

(def workers
  [{:handler update-mock-dns-status!
    :channel "domain.updated"}
   {:handler update-mock-unification-status!
    :channel "yml.unified.generated"}])
