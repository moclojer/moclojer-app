(ns cloud-ops.api.controllers.cloud
  (:require [clojure.core.async :as async]
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

  (logs/log :info "creating domain"
            :ctx {:domain domain :retrying? (not retrying?)})

  (let [{:keys [cf-records do-spec]} (logic.cloud/remove-existing-data
                                      (get-current-data components)
                                      domain)
        do-domains (:domains do-spec)
        ;; a nil data means it was removed for already existing
        both-exist? (and (nil? cf-records) (nil? do-domains))]

    ;; opposing `retrying?` so we just do it once
    (if both-exist?
      (producers/verify-domain! domain (not retrying?) true publisher)
      (do
        (producers/set-publication-status! domain "publishing" publisher)
        (controllers.cf/create-domain! cf-records domain components)
        (controllers.do/create-domain! do-spec domain components)
        (producers/verify-domain! domain (not retrying?) false publisher)))))

;; Not sure if this is the best option, but works fine for now,
;; since it isn't expected to have too many verifications ongoing
;; concurrently.
(def ongoing-verifications (atom []))

(defn verify-domain-ping
  "Asynchronously verifies the domain.

  3000 milliseconds, 3 seconds * 1000 attempts
  20 attempts per domain verification, 1 minute"
  [domain attempt retrying? rm-ongoing-fn {:keys [config http publisher] :as components}]
  (let [max-attempts (get-in config [:cloud-providers :max-verification-attempts] 20)
        timeout (get-in config [:cloud-providers :verification-timeout-ms] 3000)
        last-attempt? (>= attempt max-attempts)]

    (logs/log :info "verifying domain (ping)"
              :ctx {:domain domain
                    :attempt attempt
                    :retrying? retrying?})

    (rm-ongoing-fn)
    (Thread/sleep timeout)
    (cond
      ;; everything ok?
      (= (http-out/ping-domain domain http) 200)
      (do
        (producers/set-publication-status! domain "published" publisher)
        (logs/log :info "verified domain (ping)"
                  :ctx {:domain domain
                        :final-attempt attempt})
        :ok)

      ;; still pinging?
      (not last-attempt?)
      (verify-domain-ping domain (inc attempt) retrying? rm-ongoing-fn components)

      ;; last ping, but will retry to create domain?
      retrying?
      (do
        (logs/log :error "failed to verify domain (ping) (timed out). trying to create again...")
        (producers/create-domain! domain true publisher))

      ;; did everything we could, throw an error sentry should catch and warn us
      (not retrying?)
      (do
        (logs/log :error "failed to verify domain (ping), even after retrying"
                  :ctx {:domain domain})
        (throw (Exception. (str "failed to verify domain (ping) `"
                                domain "`, even after retrying.")))))))

(defn verify-domain-providers
  "Verifies if domain was created in each provider spec/data."
  [domain retrying? rm-ongoing-fn {:keys [config publisher] :as components}]

  (logs/log :info "verifying domain (providers)"
            :ctx {:domain domain :retrying? retrying?})

  (let [{:keys [cf-records do-spec]} (logic.cloud/remove-existing-data
                                      (get-current-data components)
                                      domain)
        do-domains (:domains do-spec)
        timeout (get-in config [:cloud-providers :verification-timeout-ms] 3000)]

    (rm-ongoing-fn)
    (Thread/sleep timeout)
    (cond
      ;; everything ok?
      ;; to be nil?, means it contained the domain, therefore success
      (and (nil? cf-records) (nil? do-domains))
      (do
        (logs/log :info "verified domain (providers)"
                  :ctx {:domain domain})
        :ok)

      ;; either one isn't right, but will retry
      retrying?
      (do
        (logs/log :error "failed to verify domain (providers). trying to create again...")
        (producers/create-domain! domain true publisher))

      ;; did everything we could, throw exception
      (not retrying?)
      (do
        (logs/log :error "failed to verify domain (providers), even after retrying"
                  :ctx {:domain domain})
        (throw (Exception. (str "failed to verify domain (providers) `"
                                domain "`, even after retrying.")))))))

(defn verify-domain
  [{:keys [domain retrying? skip-data?]} components]
  (let [ongoing-ver-domains @ongoing-verifications
        rm-ongoing-fn #(swap! ongoing-verifications
                              (fn [c]
                                (-> (fn [ov] (= ov domain))
                                    (remove c) vec)))]

    ;; if for some obscure reason the ongoing verifications atom
    ;; is destroyed, we just `reset!` it back.
    (when (nil? ongoing-ver-domains)
      (reset! ongoing-verifications []))

    (if-not (.contains ongoing-ver-domains domain)

      (do
        (swap! ongoing-verifications conj domain)
        ;; if any halts, halt everything
        (async/go
          (reduce
           (fn [res cur-fn]
             (if (= res :ok) (cur-fn) res))
           :ok
           [#(if skip-data?
               :ok
               (verify-domain-providers domain retrying? rm-ongoing-fn components))
            #(verify-domain-ping domain 1 retrying? rm-ongoing-fn components)])))

      (logs/log :warn "domain already being verified"
                :ctx {:domain domain}))))
