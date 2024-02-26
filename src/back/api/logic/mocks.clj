(ns back.api.logic.mocks
  (:require
   [camel-snake-kebab.core :as csk]
   [clojure.java.io :as io]
   [clojure.string :as str])
  (:import
   [java.util UUID]))

(defn ->uuid []
  (UUID/randomUUID))

(def default-mock-content
  (slurp (io/resource "back/default-mock.yaml")))

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
        (merge {:mock/id new-uuid
                :mock/content (or content default-mock-content)
                :mock/publication "offline"}))))

(defn gen-host [wildcard subdomain]
  (str wildcard "-" subdomain ".moclojer.com"))

(defn unpack-domain
  "Retrieves the wildcard and the subdomain from a
   domain str.

   Ex: test-j0suetm.moclojer.com -> {:wildcard test
                                     :subdomain j0suetm}"
  [domain]
  (zipmap [:wildcard :subdomain]
          (-> (str/replace domain ".moclojer.com" "")
              (str/split #"-"))))

(defn group [mock-type mocks]
  (-> (reduce
       (fn [grouped-mocks mock]
         (let [subdomain (:subdomain mock)
               subdomain-group (get grouped-mocks subdomain)
               url {:url (gen-host (:wildcard mock) subdomain)}
               old-apis (vec (:apis subdomain-group))
               new-apis (->> (select-keys mock [:wildcard :subdomain :url :enabled
                                                :id :content :publication])
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
  (assoc mock :mock/enabled true))

(defn unpublish [mock]
  (assoc mock :mock/enabled false))

(defn update-publication-status [mock new-status]
  (assoc mock :mock/publication new-status))

(defn filter-by-id [mocks id]
  (->> mocks
       (filter #(= (-> % :mock/id str) (str id)))
       first))
