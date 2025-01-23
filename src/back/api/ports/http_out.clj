(ns back.api.ports.http-out
  (:require
   [co.cljazz.supabase-clj.core :as s.core]))

(defn supabase-get-user!
  [token config]
  (-> (s.core/get-user
       {:base-url (-> config :config :supabase-url)
        :token token
        :api-key (-> config :config :supabase-api-key)})
      (select-keys [:email :id :user-metadata])))
