(ns front.app.auth.supabase
  (:require ["@supabase/supabase-js" :as sb]))

(defn create-client
  "creates a supabase client"
  ([url key]
   (.createClient sb url key))
  ([url key options]
   (.createClient sb url key options)))

(defn signin-with-email [^js client email]
  (prn :signin-with-email email)
  (let [auth (.-auth client)
        promise (.signInWithOtp auth #js {:email email})]
    promise))

(comment
  ; auth supabase with client side using email
  (def client
    (create-client
     "https://tgvdfxurgsddxouxmugs.supabase.co"
     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRndmRmeHVyZ3NkZHhvdXhtdWdzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE1MDM0NDMsImV4cCI6MTk5NzA3OTQ0M30.7pq4MM_ZldiWvOk_cnQuxlvUF8eFcxlPDB7jMTNMYb0"))

  (prn :client client)
  (signin-with-email client "matheusmachadoufsc@gmail.com")

  ;
  )

