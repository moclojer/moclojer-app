(ns back.api.auth.logic 
  (:require
   [clojure.string :as str]))

(defn extract-params
  [url]
  (let [params (re-find #"redirect_to=(.*)&token=(.*)&type=(.*)" url)
        [redirect-to token auth-type] (rest params)]
    {:redirect-to redirect-to
     :token token
     :auth-type (str/replace auth-type #"/" "")}))


