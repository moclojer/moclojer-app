(ns back.api.auth
  (:import
   (io.github.jan.supabase SupabaseClientBuilder SupabaseClientBuilderKt)
   (io.github.jan.supabase.gotrue GoTrueKt)))

(def c (SupabaseClientBuilderKt/createSupabaseClient
        "https://tgvdfxurgsddxouxmugs.supabase.co"
        (str "eyJhbGciOiJIUzI1NiIsInRcCI6IkpXVCJ9.eyJ"
             "pc3MiOiJzdXBhYmFzZSIsInJlZiI6InRndmRmeHV"
             "yZ3NkZHhvdXhtdWdzIiwicm9sZSI6ImFub24iLCJ"
             "pYXQiOjE2ODE1MDM0NDMsImV4cCI6MTkNzA3OTQ"
             "0M30.7pq4MM_ZldiWvOk_cnQuxlvUF8eFcxlPDB7"
             "jMTNMYb0")
        SupabaseClientBuilder
        ))

(prn (.sendOtpTo c {:email "matheusmachadoufsc@gmail.com"}))

