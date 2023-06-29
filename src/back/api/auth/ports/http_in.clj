(ns back.api.auth.ports.http-in
  (:require [co.cljazz.supabase-clj.core :as s.core]))

(def c 1#_ (SupabaseClientBuilderKt/createSupabaseClient
            "https://tgvdfxurgsddxouxmugs.supabase.co"
            (str "eyJhbGciOiJIUzI1NiIsInRcCI6IkpXVCJ9.eyJ"
                 "pc3MiOiJzdXBhYmFzZSIsInJlZiI6InRndmRmeHV"
                 "yZ3NkZHhvdXhtdWdzIiwicm9sZSI6ImFub24iLCJ"
                 "pYXQiOjE2ODE1MDM0NDMsImV4cCI6MTkNzA3OTQ"
                 "0M30.7pq4MM_ZldiWvOk_cnQuxlvUF8eFcxlPDB7"
                 "jMTNMYb0")))

(prn (.sendOtpTo c {:email "matheusmachadoufsc@gmail.com"}))

