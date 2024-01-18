(ns cloud-ops.api.ports.http-out
  (:require
   [clj-http.client :as c]
   [components.logs :as logs]
   [muuntaja.core :as m]))

(defn mount-req
  "Creates a list of parameters that can be later used
   on http requests to digitalocean API with `apply`."
  [base-url app-id token]
  (let [url (str base-url "/apps/" app-id)
        headers {:Content-Type "application/json"
                 :Authorization (str "Bearer " token)}]
    [url {:headers headers}]))

(defn get-current-do-spec
  "Retrieves the current App Specification from the `moclojer-cloud` app in DO.
   This spec contains everything (literally everything) there is stored about
   the app. We actually don't need all of that, so we clean it afterwards."
  [req-params]
  (try
    (let [{:keys [body]} (apply c/get req-params)
          decoded (m/decode "application/json" body)
          spec (get-in decoded [:app :spec])]
      (logs/log :info :domain-create :spec-ok)
      spec)
    (catch Exception e
      (logs/log :error :domain-create-error e))))

#_(defn update-do-spec!
    "Updates Digital Ocean `spec`."
    [req-params])
