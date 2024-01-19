(ns cloud-ops.api.ports.workers
  (:require
   [cloud-ops.api.controllers.cloudflare :as ctrls.cf]
   [cloud-ops.api.controllers.digital-ocean :as ctrls.do]
   [cloud-ops.api.log-utils :refer [log-ex]]))

(defn create-domain-handler
  [{:keys [event]} components]
  (try
    (when-let [domain (:domain event)]
      (ctrls.cf/create-domain! domain components)
      (ctrls.do/create-domain! domain components))
    (catch Exception e
      (log-ex e :create-domain))))

(def workers [{:handler create-domain-handler
               :queue-name :domain.create}])
