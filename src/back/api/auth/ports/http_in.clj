(ns back.api.auth.ports.http-in
  (:require
   [back.api.auth.ports.http-out :as http-out]))

(defn login
  [{{{:keys [email]} :body} :parameters
    components :components}]
  (http-out/supabase-auth-magic-link! email (:config components))
  {:status 200
   :body {:content "ok"}})

(defn create-user!
  [{{{:keys [url]} :query} :parameters
    components :components}]
  (let [resp
        (http-out/verify-token-supabase!
         (:http components)
         url)]
    (prn :here resp)
    {:status 200
     :body {:content "oi"}}))


