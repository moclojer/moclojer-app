(ns front.app.auth.supabase
  (:require
   ["@supabase/supabase-js" :as sb]
   [promesa.core :as p]
   [reitit.frontend.easy :as rfe]))

(defn inspect [a] (js/console.log a) a)

(goog-define SUPABASE_URL "")
(goog-define SUPABASE_TOKEN "")
(goog-define SUPABASE_OAUTH_REDIRECT "http://localhost:8200/#/first-login")
(when-not (every? not-empty [SUPABASE_URL SUPABASE_TOKEN])
  (throw (js/Error. "SUPABASE_URL or SUPABASE_TOKEN weren't defined")))
(goog-define SUPABASE_REDIRECT "http://localhost:8200/#/")

(defn create-client
  "creates a supabase client"
  ([url key]
   (.createClient sb url key))
  ([url key options]
   (.createClient sb url key options)))

(def client
  (let [options (clj->js {:auth {:autoRefreshToken true
                                 :persistSession true
                                 :detectSessionInUrl true}})]
    (create-client SUPABASE_URL SUPABASE_TOKEN options)))

(defn signin-with-email [^js client email]
  (let [auth (.-auth client)
        options (clj->js
                 {:email email
                  :options {:emailRedirectTo SUPABASE_REDIRECT}})]
    (.signInWithOtp auth options)))

(defn signin-with-oauth [^js client provider]
  (let [auth (.-auth client)
        options (clj->js
                 {:provider (clj->js provider)
                  :options {:redirect-to SUPABASE_OAUTH_REDIRECT}})]
    (.signInWithOAuth auth options)))

(defn sign-out [dispatch-fn-logout]
  (let [auth (.-auth client)]
    (-> (.signOut auth)
        (p/then (fn [e]
                  (dispatch-fn-logout e)
                  (rfe/push-state :app.core/login))))))

(defn event-changes [invoke]
  (.onAuthStateChange (.-auth client)
                      (fn [event new-session]
                        (invoke event new-session))))

(comment
  ; auth supabase with client side using email
  (def client-test
    (create-client
     "url"
     "token"))

  (prn :client client-test)
  (signin-with-email client "chicao@cljazz.co")
  (signin-with-oauth client "github"))
