(ns cloud-ops.api.controllers.provider
  (:require
   [cloud-ops.api.controllers.cloudflare :as ctrls.cf]
   [cloud-ops.api.controllers.digital-ocean :as ctrls.do]
   [cloud-ops.api.logic.cloudflare :as logic.cf]
   [cloud-ops.api.logic.digital-ocean :as logic.do]
   [components.logs :as logs]))

(defn get-current-data
  "Retrieves current data from both CloudFlare and DigitalOcean.
   The naming is agnostic to records and entire specs."
  [domain components]
  (let [cf-records (ctrls.cf/get-current-records components)
        do-spec (ctrls.do/get-current-spec components)]
    {:cf-records (if-not (logic.cf/domain-exists? cf-records domain)
                   cf-records
                   (logs/log :error :create-domain :cloudflare
                             :get-current-data :domain-exists domain))
     :do-spec (if-not (logic.do/domain-exists? (:domains do-spec) domain)
                do-spec
                (logs/log :error :create-domain :digital-ocean
                          :get-current-data :domain-exists domain))}))

(defn create-domain!
  "Calls domain creation controllers for both CloudFlare and DigitalOcean,
   making some safety checks beforehand."
  [{:keys [cf-records do-spec]} domain components]
  (when (and cf-records do-spec)
    (ctrls.cf/create-domain! domain components)
    (ctrls.do/create-domain! do-spec domain components)))
