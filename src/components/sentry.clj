(ns components.sentry
  (:require [com.stuartsierra.component :as component]
            [components.logs :as logs]
            [sentry-clj.core :as sentry]
            [sentry-clj.tracing :as sentry-tr])
  (:import [io.sentry CustomSamplingContext]))

(defn send-event [event]
  (try
    (let [evt-id (sentry/send-event event)]
      (logs/log :info :sent-event evt-id))
    (catch Exception e
      (println "failed to submit event to sentry" (.getMessage e)))))

(defn set-default-exception-handler []
  (Thread/setDefaultUncaughtExceptionHandler
   (reify Thread$UncaughtExceptionHandler
     (uncaughtException [_ _ exception]
       (logs/log :warn :uncaught-exception)
       (send-event {:throwable exception})))))

(defrecord Sentry [config]
  component/Lifecycle
  (start [this]
    (let [sentry-cfg (get-in config [:config :sentry])]
      (when (:dns sentry-cfg)
        (println "starting sentry" :env (:env sentry-cfg))
        (sentry/init! (:dns sentry-cfg) sentry-cfg)
        (set-default-exception-handler)))
    this)
  (stop [_]))

(defn new-sentry []
  (->Sentry {}))

(comment
  (-> {:config {:sentry {:dns "foobar"
                         :traces-sample-rate 1.0
                         :env "prod"}}}
      ->Sentry
      component/start)

  (send-event  {:message "Oh no!"
                :throwable (RuntimeException. "Something has happened")})

  (sentry-tr/with-start-child-span "task" "logging in"
    (send-event {:throwable (ex-info "failed to log in" {})}))

  (let [tr (sentry-tr/start-transaction "update-user" "Updates a user in db"
                                        (CustomSamplingContext.)
                                        nil)]
    (sentry-tr/with-start-child-span "get-user" "getting user"
      (Thread/sleep 2000)
      (sentry-tr/with-start-child-span "update-user" "updating user"
        (send-event {:user {:id (str (random-uuid))
                            :email "teodoro.josue@pm.me"}
                     :breadcrumbs [{:type "http"
                                    :category "xhr"
                                    :data {"method" "PUT"
                                           "url" "/users/j0suetm"}}
                                   {:type "query"
                                    :category "update"
                                    :data {"query" "UPDATE AAA;; INVALID"}}]
                     :throwable (ex-info "failed to update user" {})})))

    (sentry-tr/finish-transaction! tr))
  ;;
  )
