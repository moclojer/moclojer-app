(ns front.app.auth.supabase
  (:require
   ["@supabase/supabase-js" :as sb]
   [promesa.core :as p]
   [reitit.frontend.easy :as rfe]))

(goog-define SUPABASE_URL "")
(goog-define SUPABASE_TOKEN "")
(when-not (every? not-empty [SUPABASE_URL SUPABASE_TOKEN])
  (throw (js/Error. "SUPABASE_URL or SUPABASE_TOKEN weren't defined")))

(goog-define SUPABASE_OAUTH_REDIRECT "")
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
  (when-not (contains? #{"github"} provider)
    (throw (js/Error. (str "Unsupported OAuth provider: " provider))))
  (let [auth (.-auth client)
        options (clj->js
                 {:provider provider
                  :options (clj->js {:redirectTo SUPABASE_OAUTH_REDIRECT})})]
    (-> (.signInWithOAuth auth options)
        (.catch (fn [error]
                  (js/console.error "OAuth sign-in failed:" error)
                  (throw error))))))

(defn sign-out [dispatch-fn-logout]
  (let [auth (.-auth client)]
    (-> (.signOut auth)
        (p/then (fn [e]
                  (dispatch-fn-logout e)
                  (rfe/push-state :app.core/login))))))

(defn invite-user-to-org [^js client email org-id]
  (let [auth (.-admin (.-auth client))
        options (clj->js
                 {:options {:redirectTo SUPABASE_REDIRECT
                            :data (clj->js {:org-id org-id})}})]
    (prn auth options)
    (.inviteUserByEmail auth email options)))

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
