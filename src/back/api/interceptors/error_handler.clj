(ns back.api.interceptors.error-handler)

(defn- parse-exception-cause
  "Some exceptions comes with a keyword as its
   cause, like {:cause :exp}, which crashes our server,
   since Pedestal doesn't know how to transform a keyword
   to a writeable response message."
  [ex]
  (let [cause (-> ex ex-data :cause)]
    (cond
      (nil? cause) (.getMessage ex)
      (keyword? cause) (name cause)
      :else cause)))

;; http://pedestal.io/pedestal/0.6/reference/error-handling.html
(defn error-handler-interceptor []
  {:error
   (fn [ctx ex]
     (let [data (ex-data ex)
           status-code (or (:status-code data) 500)
           resp-err {:message (or (.getMessage ex)
                                  "Server failed to process request")
                     :cause (parse-exception-cause ex)
                     :value (or (:value data) "none")}]
       (-> ctx
           (dissoc :error)
           (assoc :response {:status status-code
                             :body {:error resp-err}}))))})
