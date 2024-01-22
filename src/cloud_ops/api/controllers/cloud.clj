(ns cloud-ops.api.controllers.cloud
  (:require
   [clojure.core.async :refer [go]]
   [cloud-ops.api.controllers.cloudflare :as ctrls.cf]
   [cloud-ops.api.controllers.digital-ocean :as ctrls.do]
   [cloud-ops.api.logic.cloudflare :as logic.cf]
   [cloud-ops.api.logic.digital-ocean :as logic.do]
   [cloud-ops.api.ports.http-out :as http-out]
   [cloud-ops.api.ports.producers :as producers]
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
   making some safety checks beforehand.

   Returns domain so `verify-domain` can be chained in the handler."
  [{:keys [cf-records do-spec]} domain components]
  (when (and cf-records do-spec)
    (let [cf (ctrls.cf/create-domain! domain components)
          do (ctrls.do/create-domain! do-spec domain components)]
      (when (and cf do) domain))))

(defn verify-domain
  "Performs recursive attempts on a job that verifies the created domain.
   Retries 3 times, with each attempt taking 1 minute. If, after 3 minutes,
   the domain isn't up, there're high risks, and the staff should be warned.

   NOTE: 60000 milliseconds, 60 seconds * 1000
   
   see also: github.com/taoensso/carmine/blob/3e54188692529d232e2541c0c0fc226814b60c34/test/taoensso/carmine/tests/message_queue.clj#L203"
  [{:keys [domain attempt]} {:keys [config http publisher]}]
  (let [max-attempts (or (get-in config [:cloud-providers
                                         :max-verification-attempts]) 3)
        last-attempt? (>= attempt max-attempts)
        timeout (* 60 1000)]
    (logs/log :info :verify-domain domain :attempt attempt)
    (go
      (Thread/sleep timeout)
      (if (= (http-out/ping-domain domain http last-attempt?) 200)
          ;; TODO: set `publisher` in DB
        (logs/log :info :verify-domain domain :ok)
        (if last-attempt?
            ;; TODO: handle last attempt
          (logs/log :error :verify-domain domain :timed-out (* max-attempts timeout))
          (producers/verify-domain! domain (inc attempt) publisher))))))
