(ns back.api.auth.logic)

(defn extract-params
  [url]
  (let [params (re-find #"redirect_to=(.*)&token=(.*)&type=(.*)" url)
        [redirect-to token auth-type] (rest params)]
    {:redirect-to redirect-to
     :token token
     :type auth-type}))


