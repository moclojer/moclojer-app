(ns components.logs
  (:require
   [taoensso.timbre :as timbre]
   [taoensso.timbre.appenders.core :as core-appenders]
   [timbre-json-appender.core :as tas]))

(defn setup [level stream env]
  (timbre/set-level! level)
  (timbre/merge-config!
   {:appenders
    (if (= env :dev)
      {:println (core-appenders/println-appender {:stream stream})}
      {:json (tas/json-appender)})}))

(defmacro log [level & args]
  `(timbre/log ~level ~@args))
