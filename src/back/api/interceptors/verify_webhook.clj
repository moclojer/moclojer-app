(ns back.api.interceptors.verify-webhook
  (:require
   [clj-github-app.webhook-signature :as webhook-signature]
   [clojure.data.json :as json]
   [com.moclojer.components.logs :as logs]))

(defn verify-webhook-signature []
  {:enter
   (fn [{:keys [request] :as ctx}]
     (let [body (:body request)
           secret-key (get-in request [:components :config :config :git-sync :secret])
           {:strs [x-hub-signature-256]}
           (:headers request)]
       (case (webhook-signature/check-payload-signature-256
              secret-key
              x-hub-signature-256
              body)
         ::webhook-signature/missing-signature
         (assoc ctx
                :response
                {:status 400
                 :body "x-hub-signature-256 header is missing"})
         ::webhook-signature/wrong-signature
         (assoc ctx
                :response
                {:status 401
                 :body "x-hub-signature-256 does not match"})
         ::webhook-signature/ok
         (assoc ctx
                :response
                {:status 201
                 :body (json/read-str body :key-fn keyword)})
         :else
         (assoc ctx
                :response
                {:status 400
                 :body "Bad Request"}))))})
