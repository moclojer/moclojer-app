(ns back.api.interceptors.extract-user
  (:require
   [back.api.db.customers :as db.customers]
   [buddy.sign.jwt :as jwt]
   [clojure.string :as string]))

(defn get-user-sub [auth secret]
  (try
    (let [token (second (string/split auth #" "))]
      (jwt/unsign token secret {:alg :hs256}))
    (catch Exception _ nil)))

(defn throw-unauthorized
  ([] (throw-unauthorized "unauthorized"))
  ([body]
   (throw (ex-info "unauthorized" {:status 401 :body body}))))

(defn extract-user-interceptor []
  {:enter
   (fn [{:keys [request] :as ctx}]
     (if (:public request)
       ctx
       (if-let [auth (get-in request [:headers "authorization"])]
         (let [secret (-> request :components :config :config :supabase-jwt-secret)
               decoded (get-user-sub auth secret)]
           (prn :auth auth :secret secret :decoded decoded)
           (if decoded
             (let [external-id (-> decoded :sub parse-uuid)
                   database (-> request :components :database)
                   user (->> external-id (db.customers/get-by-external-id database))
                   session-data {:org (:customer/username user)
                                 :user-id (:customer/uuid user)}]
               (assoc-in ctx [:request :session-data] session-data))
             (throw-unauthorized "token expired")))
         (throw-unauthorized))))
   ;; http://pedestal.io/pedestal/0.6/reference/error-handling.html
   :error
   (fn [ctx ex]
     (-> ctx
         (dissoc :error)
         (assoc :response (:data ex))))})
