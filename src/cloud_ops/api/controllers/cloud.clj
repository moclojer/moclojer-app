(ns cloud-ops.api.controllers.cloud
  (:require [cloud-ops.api.controllers.cloudflare :as controllers.cf]
            [cloud-ops.api.controllers.digital-ocean :as controllers.do]
            [cloud-ops.api.logic.cloud :as logic.cloud]
            [cloud-ops.api.logic.cloudflare :as logic.cf]
            [cloud-ops.api.logic.digital-ocean :as logic.do]
            [cloud-ops.api.ports.http-out :as http-out]
            [cloud-ops.api.ports.producers :as producers]
            [com.moclojer.components.logs :as logs]))

(defn get-current-data
  "Retrieves current data from both CloudFlare and DigitalOcean.
   The naming is agnostic to records and entire specs."
  [components ctx]
  {:cf-records (controllers.cf/get-current-records components ctx)
   :do-spec (controllers.do/get-current-spec components ctx)})

(defn create-domain!
  "Calls domain creation controllers for both CloudFlare and DigitalOcean,
   making some safety checks beforehand."
  [domain retrying? {:keys [mq] :as components} ctx]
  (let [{:keys [cf-records do-spec]} (logic.cloud/remove-existing-data
                                      (get-current-data components ctx)
                                      domain)
        do-domains (:domains do-spec)
        ;; a nil data means it was removed for already existing
        both-exist? (and (nil? cf-records) (nil? do-domains))]

    ;; opposing `retrying?` so we just do it once
    (if both-exist?
      (producers/verify-domain! domain (not retrying?) true mq ctx)
      (do
        (producers/set-dns-status! domain "publishing" mq ctx)
        (controllers.cf/create-domain! cf-records domain components ctx)
        (controllers.do/create-domain! do-spec domain components ctx)
        (producers/verify-domain! domain (not retrying?) false mq ctx)))))

(defn delete-domain!
  "Calls domain deletion controllers for both CloudFlare and DigitalOcean."
  [domain components ctx]
  (let [{:keys [cf-records do-spec]} (get-current-data components ctx)]
    (when-let [?record (first (logic.cf/domain-exists? cf-records domain))]
      (controllers.cf/delete-domain! (:id ?record) components ctx))
    (when (logic.do/domain-exists? (:domains do-spec) domain)
      (controllers.do/delete-domain! do-spec domain components ctx))))

;; Not sure if this is the best option, but works fine for now,
;; since it isn't expected to have too many verifications ongoing
;; concurrently.
(def ongoing-verifications (atom []))

(defn verify-domain-ping
  "Asynchronously verifies the domain.

  3000 milliseconds, 3 seconds * 1000 attempts
  20 attempts per domain verification, 1 minute"
  [domain attempt retrying? rm-ongoing-fn
   {:keys [config http mq] :as components} ctx]
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
      (= (http-out/ping-domain domain http ctx) 200)
      (do
        (producers/set-dns-status! domain "published" mq ctx)
        (logs/log :info "verified domain (ping)"
                  :ctx {:domain domain
                        :final-attempt attempt})
        :ok)

      ;; still pinging?
      (not last-attempt?)
      (verify-domain-ping domain (inc attempt) retrying? rm-ongoing-fn components ctx)

      ;; last ping, but will retry to create domain?
      retrying?
      (do
        (logs/log :error "failed to verify domain (ping) (timed out). trying to create again..."
                  :ctx ctx)
        (producers/create-domain! domain true mq ctx))

      ;; did everything we could, throw an error sentry should catch and warn us
      (not retrying?)
      (do
        (logs/log :error "failed to verify domain (ping), even after retrying"
                  :ctx (assoc ctx :domain domain))
        (throw (ex-info (str "failed to verify domain (ping) `"
                             domain "`, even after retrying.")
                        ctx))))))

(defn verify-domain-providers
  "Verifies if domain was created in each provider spec/data."
  [domain retrying? rm-ongoing-fn {:keys [config mq] :as components} ctx]

  (logs/log :info "verifying domain (providers)"
            :ctx (assoc ctx
                        :domain domain
                        :retrying? retrying?))

  (let [{:keys [cf-records do-spec]} (logic.cloud/remove-existing-data
                                      (get-current-data components ctx)
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
                  :ctx (assoc ctx :domain domain))
        :ok)

      ;; either one isn't right, but will retry
      retrying?
      (do
        (logs/log :error "failed to verify domain (providers). trying to create again...")
        (producers/create-domain! domain true mq ctx))

      ;; did everything we could, throw exception
      (not retrying?)
      (do
        (logs/log :error "failed to verify domain (providers), even after retrying"
                  :ctx (assoc ctx :domain domain))
        (throw (ex-info (str "failed to verify domain (providers) `"
                             domain "`, even after retrying.")
                        ctx))))))

(defn verify-domain
  [domain retrying? skip-data? components ctx]
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
        (future
          (reduce
           (fn [res cur-fn]
             (if (= res :ok) (cur-fn) res))
           :ok
           [#(if skip-data?
               :ok
               (verify-domain-providers domain retrying? rm-ongoing-fn components ctx))
            #(verify-domain-ping domain 1 retrying? rm-ongoing-fn components ctx)])))

      (logs/log :warn "domain already being verified"
                :ctx (assoc ctx :domain domain)))))
