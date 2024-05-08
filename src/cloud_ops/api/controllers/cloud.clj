(ns cloud-ops.api.controllers.cloud
  (:require [clojure.core.async :refer [go]]
            [cloud-ops.api.controllers.cloudflare :as controllers.cf]
            [cloud-ops.api.controllers.digital-ocean :as controllers.do]
            [cloud-ops.api.logic.cloud :as logic.cloud]
            [cloud-ops.api.ports.http-out :as http-out]
            [cloud-ops.api.ports.producers :as producers]
            [components.logs :as logs]))

(defn get-current-data
  "Retrieves current data from both CloudFlare and DigitalOcean.
   The naming is agnostic to records and entire specs."
  [components]
  {:cf-records (controllers.cf/get-current-records components)
   :do-spec (controllers.do/get-current-spec components)})

(defn create-domain!
  "Calls domain creation controllers for both CloudFlare and DigitalOcean,
   making some safety checks beforehand."
  [{:keys [domain retrying?]} {:keys [publisher] :as components}]
  (let [{:keys [cf-records
                do-spec]} (-> (get-current-data components)
                              (logic.cloud/remove-existing-data domain))
        publish? (or cf-records do-spec)]

    (when publish?
      (producers/set-publication-status! domain "publishing" publisher)

      ;; run both in parallel (they don't need to be sequential)
      (future (controllers.cf/create-domain! cf-records domain components))
      @(future (controllers.do/create-domain! do-spec domain components))

      ;; opposing `retrying?` so we just do it once
      (producers/verify-health! :domain {:domain domain
                                         :retrying? (not retrying?)}
                                publisher))))

;; Not sure if this is the best option, but works fine for now,
;; since it isn't expected to have too many verifications ongoing
;; concurrently.
(def ongoing-verifications (atom []))

(defn verify-domain-ping-non-blocking
  "Asynchronously verifies the domain.

   20_000 milliseconds, 20 seconds * 1000"
  [domain attempt retrying? {:keys [config http publisher] :as components}]
  (let [max-attempts (or (get-in config [:cloud-providers
                                         :max-verification-attempts]) 6)
        timeout (* 20 1000)
        last-attempt? (>= attempt max-attempts)]

    (swap! ongoing-verifications conj domain)
    (logs/log :info "verifying domain (ping)"
              :ctx {:domain domain
                    :attempt attempt})

    (Thread/sleep timeout)
    (if (= (http-out/ping-domain domain http) 200)
      (do
        (swap! ongoing-verifications #(vec (remove (fn [ov]
                                                     (= ov domain))
                                                   %)))

        (producers/set-publication-status! domain "published" publisher)
        (logs/log :info "verified domain (ping)"
                  :ctx {:domain domain
                        :final-attempt attempt}))
      (cond
        (not last-attempt?)
        (verify-domain-ping-non-blocking domain (inc attempt) retrying? components)

        (and last-attempt? retrying?)
        (do
          (logs/log :error "failed to verify domain (ping) (timed out). trying to create again...")
          (producers/create-domain! domain true publisher))

        ;; did everything we could, throw an error sentry should catch and warn us
        (and  last-attempt? (not retrying?))
        (do
          (logs/log :error "failed to verify domain (ping), even after retrying"
                    :ctx {:domain domain})
          (throw (Exception. (str "failed to verify domain (ping) `"
                                  domain "`, even after retrying."))))))))

;; TODO
(defn verify-domain-providers
  "Verifies if domain was created in each provider spec/data."
  [])

(defn verify-domain
  "Performs recursive attempts on a job that verifies the created domain.
   Retries 6 times, with each attempt taking 20 seconds. If, after 2 minutes,
   the domain isn't up, there're high risks, and the staff should be warned."
  [{:keys [domain attempt retrying?]} components]
  (let [ongoing-ver-domains @ongoing-verifications]

    ;; if for some obscure reason the ongoing verifications atom
    ;; is destroyed, we just `reset!` it back.
    (when (nil? ongoing-ver-domains)
      (reset! ongoing-verifications []))

    (if-not (and (= attempt 1) (.contains ongoing-ver-domains domain))
      (go (verify-domain-ping-non-blocking domain attempt retrying? components))
      (logs/log :warn "domain already being verified (ping)"
                :ctx {:domain domain}))))
