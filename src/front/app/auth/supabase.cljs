(ns front.app.auth.supabase
  (:require ["@supabase/supabase-js" :as sb]
            [promesa.core :as p]))

(def auth (sb/createClient
           "https://tgvdfxurgsddxouxmugs.supabase.co"
           "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRndmRmeHVyZ3NkZHhvdXhtdWdzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE1MDM0NDMsImV4cCI6MTk5NzA3OTQ0M30.7pq4MM_ZldiWvOk_cnQuxlvUF8eFcxlPDB7jMTNMYb0"))

(defn signin-with-email
  [email]
  ;; (prn :send-magic (.signIn
  ;;                   auth
  ;;                   email
  ;;                   #js {:redirectTo "http://127.0.0.1:8000/#/lerolero"}))
  )
