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

(defn group [mock-type mocks]
  (-> (reduce
       (fn [grouped-mocks mock]
         (let [subdomain (:subdomain mock)
               subdomain-group (get grouped-mocks subdomain)
               url {:url (str (:wildcard mock) "." subdomain ".moclojer.com")}
               old-apis (vec (:apis subdomain-group))
               new-apis (->> (select-keys mock [:wildcard :subdomain :url :enabled
                                                :id :content])
                             (merge url)
                             (conj old-apis))]
           (assoc grouped-mocks
                  subdomain
                  {:subdomain subdomain
                   :mock-type mock-type
                   :apis new-apis})))
       {} mocks)
      vals
      vec))

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
