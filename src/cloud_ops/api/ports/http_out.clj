(ns cloud-ops.api.ports.http-out
  (:require
   [components.http :as hp]
   [components.logs :as logs]
   [muuntaja.core :as m]))

(defn ping-domain
  "Pings `domain` to see if its deployed.

   `last-attempt?` is so we can print the complete error
   only in the final attempt, so the screen doesn't fill up
   with error messages of the first 2 attempts."
  [domain http last-attempt?]
  (try
    (let [url (str "https://" domain ".moclojer.com")
          resp (hp/request http {:method :get
                                 :url url})]
      (:status resp))
    (catch Exception e
      (logs/log :error "failed to verify domain"
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
  (try
    (let [req-params (assoc req-params :method :get)
          {:keys [body]} (hp/request http req-params)
          decoded (m/decode "application/json" body)]
      (logs/log :info "retrieved cloudflare records")
      (:result decoded))
    (catch Exception e
      (logs/log :error "failed to retrieve cloudflare records"
                :ctx {:ex-message (.getMessage e)}))))

(defn create-cf-domain!
  "Creates a new CloudFlare DNS record. Returns true when succesful."
  [{:keys [domain record-content]} http req-params]
  (try
    (let [req-body {:content record-content
                    :name domain
                    :proxied true
                    :type "CNAME"
                    :ttl 1}
          enc-body (m/encode "application/json" req-body)
          new-req-params (merge req-params {:method :post
                                            :body enc-body})]
      (hp/request http new-req-params)
      (logs/log :info "created cloudflare domain"
                :ctx {:domain domain})

      true)
    (catch Exception e
      (logs/log :error "failed to create cloudflare domain"
                :ctx {:domain domain
                      :ex-message (.getMessage e)}))))

(defn get-current-do-spec
  "Retrieves the current App Specification from the `moclojer-cloud` app in DO.
   This spec contains everything (literally everything) there is stored about
   the app. We actually don't need all of that, so we clean it afterwards."
  [http req-params]
  (try
    (let [new-req-params (assoc req-params :method :get)
          {:keys [body]} (hp/request http new-req-params)
          decoded (m/decode "application/json" body)
          spec (get-in decoded [:app :spec])]
      (logs/log :info "retrieved digital ocean spec")
      spec)
    (catch Exception e
      (logs/log :error "failed to retrieve digital ocean spec"
                :ctx {:ex-message (.getMessage e)}))))

(defn update-do-spec!
  "Updates Digital Ocean `spec`, adding the new domain. Returns true when
   succesful.

   WARNING: The only modification allowed is adding a domain. Please
   take care on doing any other operation that could modify any other
   data besides the domain list."
  [new-spec http req-params]
  (try
    (let [enc-spec (m/encode "application/json" {:spec new-spec})
          new-req-params (merge req-params {:method :put
                                            :body enc-spec})]
      (hp/request http new-req-params)
      (logs/log :info "updated digital ocean spec")

      true)
    (catch Exception e
      (logs/log :error "failed to update digital ocean spec"
                :ctx {:new-spec new-spec
                      :ex-message (.getMessage e)}))))
