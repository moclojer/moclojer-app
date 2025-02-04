(ns cloud-ops.api.logic.cloud
  (:require [cloud-ops.api.logic.cloudflare :as logic.cf]
            [cloud-ops.api.logic.digital-ocean :as logic.do]))

(defn remove-existing-data
  "Given a map of provider data, keeps only the ones where given
  `domain` doesn't already exists. Helpful in order to, in the next
  steps, create and verify only the missing one, by failed attempt or
  any other issue."
  [{:keys [cf-records do-spec]} domain]
  {:cf-records (when-not (logic.cf/domain-exists? cf-records domain)
                 cf-records)
   :do-spec (when-not (logic.do/domain-exists? (:domains do-spec) domain)
              do-spec)})

(comment
  (remove-existing-data {:cf-records [{:name "test-j0suetm"}]
                         :do-spec {:domains [{:domain "test-j0suetm.moclojer.com"}]}}
                        "test-j0suetm")
  ;; => {:cf-records nil, :do-spec nil}

  (remove-existing-data {:cf-records []
                         :do-spec {:domains []}}
                        "test-j0suetm")
  ;;
  )
