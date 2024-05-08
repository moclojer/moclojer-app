(ns cloud-ops.api.logic.cloud
  (:require [cloud-ops.api.logic.cloudflare :as logic.cf]
            [cloud-ops.api.logic.digital-ocean :as logic.do]))

(defn remove-existing-data
  "Given a map of provider data, keeps only the ones where given
  `domain` doesn't already exists. Helpful in order to, in the next
  steps, create and verify only the missing one, by failed attempt or
  any other issue."
  [{:keys [cf-records do-spec]} domain]
  {:cf-records (when (logic.cf/domain-exists? cf-records domain) cf-records)
   :do-spec (when (logic.do/domain-exists? do-spec domain) do-spec)})
