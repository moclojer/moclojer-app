(ns back.api.interceptors.extract-user
  (:require
   [back.api.db.customers :as db.customers]
   [buddy.sign.jwt :as jwt]
   [clojure.string :as string]))

(defn get-user-sub [auth secret]
  (let [token (second (string/split auth #" "))]
    (jwt/unsign token secret {:alg :hs256})))

(defn extract-user-interceptor []
  {:enter
   (fn [{:keys [request] :as ctx}]
     (if (:public request)
       ctx
       (if-let [auth (get-in request [:headers "authorization"])]
         (let [secret (-> request :components :config :config :supabase-jwt-secret)
               decoded (get-user-sub auth secret)
               database (-> request :components :database)
               external-id (-> decoded :sub parse-uuid)
               user (db.customers/get-by-external-id external-id database)
               session-data {:org (:customer/username user)
                             :user-id (:customer/uuid user)}]
           (-> ctx
               (assoc-in [:request :session-data] session-data)
               (assoc-in [:request :user] user)))
         (throw (ex-info "Unauthorized" {:status-code 401
                                         :cause :missing-token})))))})
