(ns back.api.auth.ports.http-in
  (:require
   [back.api.auth.ports.http-out :as http-out]))

#_(def c 1#_ (SupabaseClientBuilderKt/createSupabaseClient
              ""))

(defn login
  [{{{:keys [email]} :body} :parameters
    components :components}]
  (http-out/supabase-auth-magic-link! email (:config components))
  {:status 200
   :body {:content "ok"}})


(defn create-user! [arg1]
  {:status 200
   :body {:content "oi"}})
