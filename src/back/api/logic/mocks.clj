(ns back.api.logic.mocks
  (:require
   [back.api.utils :refer [assoc-if]]
   [camel-snake-kebab.core :as csk])
  (:import
   [java.util UUID]))

(defn ->uuid []
  (UUID/randomUUID))

(defn create [mock]
  (let [new-uuid (->uuid)
        content (:content mock)]
    (-> (reduce-kv
         (fn [acc k v]
           (assoc acc (->> (name k)
                           (str "mock/")
                           csk/->snake_case
                           keyword) v))
         {} mock)
        (assoc :mock/id new-uuid)
        (assoc-if :mock/content content))))

(defn enable [mock]
  (assoc mock :mock/enabled true))

(defn disable [mock]
  (assoc mock :mock/enabled false))

(defn update
  [mock {:keys [content]}]
  (assoc mock :mock/content content))

(defn publish [mock]
  (assoc mock :mock/published true))

(defn unpublish [mock]
  (assoc mock :mock/published false))
