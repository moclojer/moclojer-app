(ns job-ops.ports.workers
  (:require [job-ops.controllers.mocks :as controllers.mocks]))

(defn dispatch-domains-verification!
  [_ components]
  (controllers.mocks/dispatch-domains-verification! components {}))

(defn dispatch-unified-yml-verification!
  [_ components]
  (controllers.mocks/dispatch-unified-yml-verification! components {}))

(def workers
  [{:handler dispatch-domains-verification!
    :channel "domains.verification.fired"}
   {:handler dispatch-unified-yml-verification!
    :channel "yml.unified.verification.fired"}])
