(ns front.app.auth.supabase
  (:require
   ["@supabase/supabase-js" :as sb]
   [promesa.core :as p]))

(defn create-client
  "creates a supabase client"
  ([url key]
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
  (let [auth (.-auth client)
        promise (.signInWithOtp
                 auth
                 (clj->js {:email email
                           :options {:emailRedirectTo "http://localhost:8000/auth/callback"}}))]
    promise))

(defn sign-out [dispatch-fn-logout]
  (let [auth (.-auth client)]
    (-> (.signOut auth)
        (p/then (fn [e]
                  (prn :supabase-logout e)
                  (dispatch-fn-logout e))))))

(defn event-changes [invoke]
  (.onAuthStateChange (.-auth client)
                      (fn [event new-session]
                        (prn :event event)
                        (invoke event new-session))))

(comment
  ; auth supabase with client side using email
  (def client-test
    (create-client
     "url"
     "token"))

  (prn :client client-test)
  (signin-with-email client "chicao@cljazz.co"))
