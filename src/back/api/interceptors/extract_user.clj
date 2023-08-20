(ns back.api.interceptors.extract-user
  (:require
   [back.api.db.customers :as db.customers]
   [buddy.sign.jwt :as jwt]
   [clojure.string :as string]))

(defn get-user-sub [auth secret]
  (let [token (second (string/split auth #" "))]
    (jwt/unsign token secret {:alg :hs256})))

(defn extract-user-interceptor []
  {:enter (fn [{:keys [request] :as ctx}]
            (if (get-in request [:public])
              ctx
              (if-let [auth (get-in request [:headers "authorization"])]
                (let [secret (get-in request [:components :config :config :supabase-jwt-secret])
                      decoded (get-user-sub auth secret)
                      database (get-in request [:components :database])
                      external-id (-> decoded :sub parse-uuid)
                      user (db.customers/get-by-external-id external-id database)
                      session-data {:org (:customer/username user)}]
                  (assoc-in ctx [:request :session-data] session-data))
                (throw (ex-info "Unauthorized" {:status 401 :body "Unauthorized"})))))})

