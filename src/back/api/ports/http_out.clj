(ns back.api.ports.http-out
  (:require
   [co.cljazz.supabase-clj.core :as s.core]))

(defn supabase-get-user!
  [token]
  (-> (s.core/get-user
       {:base-url "https://tgvdfxurgsddxouxmugs.supabase.co"
        :token token
        :api-key (str "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ"
                      "pc3MiOiJzdXBhYmFzZSIsInJlZiI6InRndmRmeHV"
                      "yZ3NkZHhvdXhtdWdzIiwicm9sZSI6ImFub24iLCJ"
                      "pYXQiOjE2ODE1MDM0NDMsImV4cCI6MTk5NzA3OTQ"
                      "0M30.7pq4MM_ZldiWvOk_cnQuxlvUF8eFcxlPDB7"
                      "jMTNMYb0")})
      (select-keys [:email :id])))
