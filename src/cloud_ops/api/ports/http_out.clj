(ns cloud-ops.api.ports.http-out
  (:require
   [components.http :as hp]
   [components.logs :as logs]
   [muuntaja.core :as m]))

(defn mount-do-req
  "Creates a list of parameters that can be later used as a basis
   on http requests to digitalocean API."
  [base-url app-id token]
  {:url (str base-url "/apps/" app-id)
   :headers {:Content-Type "application/json"
             :Authorization (str "Bearer " token)}})

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
      (logs/log :info :domain-create :get-current-spec :ok)
      spec)
    (catch Exception e
      (logs/log :error :domain-create-error :get-current-spec e))))

(defn update-do-spec!
  "Updates Digital Ocean `spec`, adding the new domain.

   WARNING: The only modification allowed is adding a domain. Please
   take care on doing any other operation that could modify any other
   data besides the domain list."
  [new-spec http req-params]
  (try
    (let [enc-spec (m/encode "application/json" {:spec new-spec})
          new-req-params (merge req-params {:method :put
                                            :body enc-spec})]
      (hp/request http new-req-params)
      (logs/log :info :domain-create :ok))
    (catch Exception e
      (logs/log :error :domain-create-error :update-do-spec e))))
