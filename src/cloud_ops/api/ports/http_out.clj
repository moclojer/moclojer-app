(ns cloud-ops.api.ports.http-out
  (:require [components.http :as hp]
            [components.logs :as logs]
            [muuntaja.core :as m]))

;; Since most of the requests here are a critical point of failure,
;; any unexpected behaviour throws an exepction straight away. We
;; need to be alerted of anything out of our expectations.

(defn ping-domain
  "Pings `domain` to see if its deployed."
  [domain http]
  (try
    (let [url (str "https://" domain ".moclojer.com")
          resp (hp/request http {:method :get
                                 :url url})]
      (:status resp))
    (catch Exception e
      (logs/log :warn "verifying domain"
                :ctx {:ex-message (.getMessage e)}))))

(defn mount-basic-req
  "Creates a list of parameters that can be later used as a basis
   on http requests to cloud providers' API."
  [url token proxy]
  (merge {:url url
          :headers {:Content-Type "application/json"
                    :Authorization (str "Bearer " token)}}
         proxy))

(defn get-current-cf-records
  "Retrieves the current domain records in CloudFlare."
  [http req-params]
  (let [req (assoc req-params :method :get)
        {:keys [body]} (hp/request-or-throw http req 200)
        {:keys [result]} (m/decode "application/json" body)]
    (logs/log :info "retrieved cloudflare records")
    result))

(defn create-cf-domain!
  "Creates a new CloudFlare DNS record."
  [{:keys [domain record-content]} http req-params]
  (let [enc-body (m/encode "application/json"
                           {:content record-content
                            :name domain
                            :proxied true
                            :type "CNAME"
                            :ttl 1})
        req (merge req-params {:method :post
                               :body enc-body})
        {:keys [body]} (hp/request-or-throw http req 200)
        decoded (m/decode "application/json" body)]
    (logs/log :info "created cloudflare domain"
              :ctx {:domain domain})
    decoded))

(defn get-current-do-spec
  "Retrieves the current App Specification from the `moclojer-cloud` app in DO.
   This spec contains everything (literally everything) there is stored about
   the app. We actually don't need all of that, so we clean it afterwards."
  [http req-params]
  (let [req (assoc req-params :method :get)
        {:keys [body]} (hp/request-or-throw http req 200)
        decoded (m/decode "application/json" body)]
    (logs/log :info "retrieved digital ocean spec")
    (get-in decoded [:app :spec])))

(defn update-do-spec!
  "Updates Digital Ocean `spec`, adding the new domain. Returns true when
   succesful.

   WARNING: The only modification allowed is adding a domain. Please
   take care on doing any other operation that could modify any other
   data besides the domain list."
  [new-spec http req-params]
  (let [enc-spec (m/encode "application/json" {:spec new-spec})
        req (merge req-params {:method :put
                               :body enc-spec})
        {:keys [body]} (hp/request-or-throw http req 200)
        decoded (m/decode "application/json" body)]
    (logs/log :info "updated digital ocean spec")
    decoded))
