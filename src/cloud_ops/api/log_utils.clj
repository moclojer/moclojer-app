(ns cloud-ops.api.log-utils
  (:require
   [components.logs :as logs]))

(defn log-ex
  "Logs an exception."
  [ex head]
  (let [parsed-err (-> (into '() (ex-data ex))
                       flatten
                       (conj (.getMessage ex)))
        log-fn (partial logs/log :error head)]
    (apply log-fn parsed-err)))

(comment
  (try
    (throw (ex-info "something-bad" {:eita "hello"
                                     :bye "good"}))
    (catch Exception e
      (log-ex e :my-head))))
