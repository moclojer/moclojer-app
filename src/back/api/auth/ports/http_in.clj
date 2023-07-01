(ns back.api.auth.ports.http-in
  (:require
   [back.api.auth.logic :as auth.logic]
   [back.api.auth.ports.http-out :as http-out]))

(defn login
  [{{{:keys [email]} :body} :parameters
    components :components}]
  (http-out/supabase-auth-magic-link! email (:config components))
  {:status 200
   :body {:content "ok"}})

(defn create-user!
  [{{{:keys [url]} :query} :parameters
    {:keys [http]} :components}]
  (let [token (auth.logic/extract-params url)
        _ (prn token)
        #_#_resp (http-out/verify-token-supabase! http url token)]
    (prn :url url)
    {:status 200
     :body {:content "oi"}}))

(defn xpto!
  [{p :parameters
    {:keys [http]} :components}]
  (prn p)
  {:status 200
   :body {:content "oi"}})
