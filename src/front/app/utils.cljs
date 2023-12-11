(ns front.app.utils
  (:require
   [clojure.string :as str]))

(defn replace-str [^String s]
  (.replace s "_" "-"))

(defn convert-keys [obj]
  (reduce-kv (fn [m k v]
               (assoc m (-> k
                            (name)
                            (replace-str)
                            keyword) v))
             {}
             obj))

(defn js->cljs-key [obj]
  (js->clj obj :keywordize-keys true))

(def ^:private callback-keys
  ["access_token"
   "expires_at"
   "expires_in"
   "token_type"
   "type"])

(defn check-in-callback?
  ([] (check-in-callback? (.. js/window -location -href)))
  ([href] (every? #(str/includes? href %) callback-keys)))
