(ns back.api.interceptors.extract-uuid-origin)

(defn extract-uuid-origin []
  {:enter
   (fn [{:keys [request] :as ctx}]
     (if (get-in request [:query-params :external])
       ctx
       (assoc-in ctx [:request :query-params :external] false)))})
