(ns components.logs
  (:require [clojure.string :as str]
            [taoensso.timbre :as timbre]
            [taoensso.timbre.appenders.core :as core-appenders]
            [timbre-json-appender.core :as tas])
  (:import [java.util.logging Filter Handler Logger]))

(defn clean-dep-logs
  "clean logs on prod that are not from our application"
  []
  (doseq [^Handler handler (.. (Logger/getGlobal)
                               getParent
                               getHandlers)]
    (.setFilter
     handler
     (reify Filter
       (isLoggable [_ record]
         (let [hideable ["org.eclipse.jetty" "com.zaxxer.hikari"]]
           (not-any? #(str/starts-with? (.getLoggerName record) %) hideable)))))))

(defn setup [level stream env]
  (when (= env :prod)
    (clean-dep-logs))
  (timbre/merge-config! {:min-level level})
  (if (= env :dev)
    (timbre/merge-config!
     {:appenders
      {:println (core-appenders/println-appender {:stream stream})}})
    (tas/install)))

(defmacro log [level & args]
  `(timbre/log ~level ~@args))

(comment
  (setup [["*" :info]] :auto :prod)
  (log :info :world)
  ;;
  )
