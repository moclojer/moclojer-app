(ns cloud-ops.api.ports.http-out
  (:require
   [clj-http.client :as c]
   [components.logs :as logs]
   [muuntaja.core :as m]))

(defn get-current-do-spec
  "Retrieves the current App Specification from the `moclojer-cloud` app in DO.
   This spec contains everything (literally everything) there is stored about
   the app. We actually don't need all of that, so we clean it afterwards.

   `base-url`, `app-id` and `auth-token` are constant values defined in
   `resources/back/config.edn`."
  [base-url app-id auth-token]
  (try
    (let [url (str base-url "/apps/" app-id)
          {:keys [body]} (c/get
                          url
                          {:headers {:Content-Type "application/json"
                                     :Authorization (str "Bearer " auth-token)}})
          decoded (m/decode "application/json" body)
          spec (get-in decoded [:app :spec])]
      (logs/log :info :domain-create :spec-ok)
      spec)
    (catch Exception e
      (logs/log :error :domain-create-error e))))

