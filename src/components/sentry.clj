(ns components.sentry
  (:require [com.stuartsierra.component :as component]
            [components.logs :as logs]
            [sentry-clj.core :as sentry]
            [sentry-clj.tracing :as sentry-tr])
  (:import [io.sentry CustomSamplingContext]))

(defprotocol SentryLogger
  (send-event! [this event])
  (set-as-default-exception-handler [this]))

(defrecord Sentry [config]
  component/Lifecycle
  (start [this]
    (let [sentry-cfg (get-in config [:config :sentry])]
      (when (:dns sentry-cfg)
        (println "starting sentry" :env (:env sentry-cfg))
        (sentry/init! (:dns sentry-cfg) sentry-cfg)
        (set-as-default-exception-handler this)))
    this)
  (stop [_])

  SentryLogger
  (send-event! [_ event]
    (try
      (let [evt-id (sentry/send-event event)]
        (logs/log :info :sent-event evt-id))
      (catch Exception e
        (logs/log :error :sentry :send-event! e))))

  (set-as-default-exception-handler [this]
    (Thread/setDefaultUncaughtExceptionHandler
     (reify Thread$UncaughtExceptionHandler
       (uncaughtException [_ _ exception]
         (logs/log :warn :uncaught-exception)
         (send-event! this {:throwable exception}))))))

(defn new-sentry []
  (->Sentry {}))

(comment
  (def sc
    (-> {:config {:sentry {:dns "foobar"
                           :traces-sample-rate 1.0
                           :env "prod"}}}
        ->Sentry
        component/start))

  (send-event! sc {:message "Oh no!"
                   :throwable (RuntimeException. "Something has happened")})

  (sentry-tr/with-start-child-span "task" "logging in"
    (send-event! sc {:throwable (ex-info "failed to log in" {})}))

  (let [tr (sentry-tr/start-transaction "update-user" "Updates a user in db"
                                        (CustomSamplingContext.)
                                        nil)]
    (sentry-tr/with-start-child-span "get-user" "getting user"
      (Thread/sleep 2000)
      (sentry-tr/with-start-child-span "update-user" "updating user"
        (send-event! sc {:user {:id (str (random-uuid))
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
