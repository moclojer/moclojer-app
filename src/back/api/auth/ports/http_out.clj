(ns back.api.auth.ports.http-out
  (:require
   [back.components.http :as http]
   [co.cljazz.supabase-clj.core :as s.core]))

(defn supabase-auth-magic-link!
  [email config]
  (s.core/signin-with-email
   {:base-url "https://tgvdfxurgsddxouxmugs.supabase.co"
    :email email
    :api-key "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRndmRmeHVyZ3NkZHhvdXhtdWdzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE1MDM0NDMsImV4cCI6MTk5NzA3OTQ0M30.7pq4MM_ZldiWvOk_cnQuxlvUF8eFcxlPDB7jMTNMYb0"
    :email-redirect-to "http://localhost:3000/auth/login"}))

(defn verify-token-supabase!
  [http url {:keys [token auth-type]}]
  (prn :url url)
  (->> {:url "https://tgvdfxurgsddxouxmugs.supabase.co/auth/v1/verify"
        :as :json
        :query-params {:token token :type auth-type}
        :method :get}
       (http/request http)))
