(ns cloud-ops.api.ports.workers
  (:require
   [cloud-ops.api.controllers.cloudflare :as ctrls.cf]
   [cloud-ops.api.controllers.digital-ocean :as ctrls.do]))

;; TODO: There's no check for errors for sake of continuity.
;; If CF fails, DO will still try to create its domain.
;; The solution here is to retrieve the data of both providers,
;; and see if the domains already exist. This covers only the error
;; possibility of duplication. Other errors should be treated as well.
;; For example, if CF crashes, we shouldn't go directly to DO,
;; but retry CF before, as planned. And then go to digitalocean.
;; If, in the end, digitalocean doesn't work, we should delete CF's.
(defn create-domain-handler
  [{:keys [event]} components]
  (when-let [domain (:domain event)]
    (ctrls.cf/create-domain! domain components)
    (ctrls.do/create-domain! domain components)))

(def workers [{:handler create-domain-handler
               :queue-name :domain.create}])
