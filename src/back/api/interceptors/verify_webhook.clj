(ns back.api.interceptors.verify-webhook
  (:require
   [com.moclojer.components.logs :as logs]
   [clj-github-app.webhook-signature :as webhook-signature]
   [clojure.data.json :as json]))

(defn inspect [a] (logs/log :info a) a)

(defn verify-webhook-signature
  "Checks if the webhook is valid."
  []
  {:webhook-signature
   (fn [{:keys [request] :as ctx}]
     (let [{:strs [x-github-delivery
                   x-github-event
                   x-hub-signature-256]}
           (inspect (:headers request))
           payload (slurp (:body request))]

       (prn "carlos")
       (case
        (webhook-signature/check-payload-signature-256 x-hub-signature-256 payload)
         ::webhook-signature/missing-signature {:status 400
                                                :body "x-hub-signature-256 header is missing"}
         ::webhook-signature/wrong-signature {:status 401
                                              :body "x-hub-signature-256 does not match"}
         :else {:status 201
                :body (inspect (json/read-str payload keyword))})))})
