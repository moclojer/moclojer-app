(ns front.app.utils)

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
