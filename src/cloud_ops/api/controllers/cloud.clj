(ns cloud-ops.api.controllers.cloud
  (:require
   [clojure.core.async :refer [go]]
   [cloud-ops.api.controllers.cloudflare :as controllers.cf]
   [cloud-ops.api.controllers.digital-ocean :as controllers.do]
   [cloud-ops.api.logic.cloudflare :as logic.cf]
   [cloud-ops.api.logic.digital-ocean :as logic.do]
   [cloud-ops.api.ports.http-out :as http-out]
   [cloud-ops.api.ports.producers :as producers]
   [components.logs :as logs]))

(defn get-current-data
  "Retrieves current data from both CloudFlare and DigitalOcean.
   The naming is agnostic to records and entire specs."
  [domain components]
  (let [cf-records (controllers.cf/get-current-records components)
        do-spec (controllers.do/get-current-spec components)]
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

   Returns domain so `set-publication-status!` can be chained in
   the handler."
  [{:keys [do-spec]} domain components]
  (let [cf (controllers.cf/create-domain! domain components)
        do (controllers.do/create-domain! do-spec domain components)]
    (when (and cf do) domain)))

;; Not sure if this is the best option, but works fine for now,
;; since it isn't expected to have too many verifications ongoing
;; concurrently.
(def ongoing-verifications (atom []))

(defn verify-domain-non-blocking
  "Asynchronously verifies the domain.

   20_000 milliseconds, 20 seconds * 1000"
  [domain attempt {:keys [config http publisher]}]
  (let [max-attempts (or (get-in config [:cloud-providers
                                         :max-verification-attempts]) 6)
        timeout (* 20 1000)
        last-attempt? (>= attempt max-attempts)]

    (swap! ongoing-verifications conj domain)
    (logs/log :info :verify-domain domain :attempt attempt)

    (Thread/sleep timeout)
    (if (= (http-out/ping-domain domain http last-attempt?) 200)
      (do
        (swap! ongoing-verifications #(vec (remove (fn [ov]
                                                     (= ov domain))
                                                   %)))

        (producers/set-publication-status! domain "published" publisher)
        (logs/log :info :verify-domain domain :ok))
      (if-not last-attempt?
        ;; TODO: warn staff of last attempt
        (producers/verify-domain! domain (inc attempt) publisher)
        (logs/log :error :verify-domain domain
                  :timed-out (* max-attempts timeout))))))

(defn verify-domain
  "Performs recursive attempts on a job that verifies the created domain.
   Retries 6 times, with each attempt taking 20 seconds. If, after 2 minutes,
   the domain isn't up, there're high risks, and the staff should be warned.

   see also: github.com/taoensso/carmine/blob/3e54188692529d232e2541c0c0fc226814b60c34/test/taoensso/carmine/tests/message_queue.clj#L203"
  [{:keys [domain attempt]} components]
  (let [ongoing-ver-domains @ongoing-verifications]

    ;; if for some obscure reason the ongoing verifications atom
    ;; is destroyed, we just `reset!` it back.
    (when (nil? ongoing-ver-domains)
      (reset! ongoing-verifications []))

    (if-not (and (= attempt 1) (.contains ongoing-ver-domains domain))
      (go (verify-domain-non-blocking domain attempt components))
      (logs/log :warn :verify-domain domain :ongoing-verification))))
