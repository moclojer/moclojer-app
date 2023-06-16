(ns front.app.auth.supabase
  (:require ["@supabase/supabase-js" :as sb]))

(defn create-client
  "creates a supabase client"
  ([url key]
   (prn ::create-client)
   (.createClient sb url key))
  ([url key options]
   (.createClient sb url key options)))

(def client
  (create-client
   "https://tgvdfxurgsddxouxmugs.supabase.co"
   (str "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ"
        "pc3MiOiJzdXBhYmFzZSIsInJlZiI6InRndmRmeHV"
        "yZ3NkZHhvdXhtdWdzIiwicm9sZSI6ImFub24iLCJ"
        "pYXQiOjE2ODE1MDM0NDMsImV4cCI6MTk5NzA3OTQ"
        "0M30.7pq4MM_ZldiWvOk_cnQuxlvUF8eFcxlPDB7"
        "jMTNMYb0")))

(defn signin-with-email [^js client email]
  (prn :signin-with-email email)
  (let [auth (.-auth client)
        promise (.signInWithOtp
                 auth
                 (clj->js {:email email
                           :option {:emailRedirectTo "http://localhost:8000/#/"}}))]
    promise))

(comment
  ; auth supabase with client side using email
  (def client-test
    (create-client
     "url"
     "token"))

  (prn :client client-test)
  (signin-with-email client "chicao@cljazz.co"))
