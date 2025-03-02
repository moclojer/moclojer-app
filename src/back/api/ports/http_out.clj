(ns back.api.ports.http-out
  (:require
   [co.cljazz.supabase-clj.core :as s.core]))

(defn supabase-get-user!
  [token config]
  (let [user (s.core/get-user
              {:base-url (-> config :config :supabase-url)
               :token token
               :api-key (-> config :config :supabase-api-key)})
        _ (prn "usuario fera " user)
        filter [:email :id :user-metadata]]
    (select-keys user (if (:identities user)
                        (conj filter :identities)
                        filter))))
