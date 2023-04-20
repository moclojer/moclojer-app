(ns api.healthcheck.ports.http-in)


(defn say-hello [{{{:keys [] :as body} :body} :parameters
                  components :components}]
  {:status 200
   :body {:data {:content "Hello api in clojure deployed on flyio"}}})
