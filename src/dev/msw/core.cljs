(ns dev.msw.core
  (:require ["msw" :as msw]
            [dev.msw.config :as config]
            [dev.msw.mount :as mount]
            [dev.session-storage :as ss]
            [promesa.core :as p]))

(def ^:private ss-key "mock-active?")

(defonce mock-state (atom nil))

(defn start-browser [handlers]
  (when-not (nil? @mock-state)
    (.resetHandlers ^js/Object @mock-state))
  (p/do (reset! mock-state handlers)
        (.start @mock-state #js {:onUnhandledRequest "bypass"})
        (ss/set-item! ss-key true)))

(defn stop-browser []
  (.stop @mock-state)
  (reset! mock-state nil)
  (ss/remove-item! ss-key))

(defn start!
  ([] (start! config/default))
  ([custom-config]
   (let [[start-fn setup-fn] [start-browser msw/setupWorker]]
     (start-fn (apply setup-fn (mount/mount custom-config))))))

(defn stop! []
  (stop-browser))

(defn init! []
  (if (ss/get-item ss-key)
    (start!)
    (js/Promise.resolve)))
