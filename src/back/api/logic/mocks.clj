(ns back.api.logic.mocks
  (:refer-clojure :exclude [update])
  (:require
   [camel-snake-kebab.core :as csk]
   [clojure.java.io :as io]
   [clojure.string :as str]))

(def default-mock-content
  (slurp (io/resource "back/default-mock.yaml")))

(defn create [mock]
  (let [new-uuid (random-uuid)
        content (or (:content mock) (:mock/content mock))]
    (-> (reduce-kv
         (fn [acc k v]
           (assoc acc (->> (name k)
                           (str "mock/")
                           csk/->snake_case
                           keyword) v))
         {} mock)
        (-> (merge {:mock/id new-uuid
                    :mock/content (or content default-mock-content)
                    :mock/dns_status "offline"
                    :mock/unification_status "offline"})))))

(defn gen-host [wildcard subdomain]
  (str wildcard "-" subdomain ".moclojer.com"))

(defn pack-domain
  [{:keys [wildcard subdomain]}]
  (str wildcard "-" subdomain))

(defn unpack-domain
  "Retrieves the wildcard and the subdomain from a
   domain str.

   Ex: test-j0suetm.moclojer.com -> {:wildcard test
                                     :subdomain j0suetm}"
  [domain]
  (let [last-dash (.lastIndexOf domain "-")
        [wildcard subdomain] (->> (str/replace domain ".moclojer.com" "")
                                  (split-at last-dash)
                                  (map (partial str/join "")))]
    {:wildcard wildcard
     ;; -j0suetm -> j0suetm
     :subdomain (subs subdomain 1)}))

(defn group
  "Groups mocks based on subdomain. If the mock subdomain isn't the same
  as the given `username`, then it's an org-typed mock. Personal otherwise."
  [mocks username]
  (-> (reduce
       (fn [grouped-mocks mock]
         (let [subdomain (:subdomain mock)
               subdomain-group (get grouped-mocks subdomain)
               url {:url (gen-host (:wildcard mock) subdomain)}
               old-apis (vec (:apis subdomain-group))
               new-apis (->> (select-keys mock [:wildcard :subdomain :url :enabled
                                                :id :content :dns-status :org-id
                                                :unification-status :git-repo :sha])
                             (merge url)
                             (conj old-apis))]
           (assoc grouped-mocks
                  subdomain
                  {:subdomain subdomain
                   :mock-type (if (= subdomain username) "personal" "org")
                   :apis new-apis})))
       {} mocks)
      vals
      vec))

(defn group-by-user [mocks]
  (reduce
   (fn [acc mock]
     (if-let [user-id (:mock/user_id mock)]
       (update-in acc [user-id] conj (:mock/id mock))
       acc))
   {} mocks))

(comment
  (let [user-id (random-uuid)]
    (group-by-user [#:mock{:id (random-uuid) :user_id user-id}
                    #:mock{:id (random-uuid) :user_id user-id}]))
  ;;
  )

(defn enable [mock]
  (assoc mock :mock/enabled true))

(defn disable [mock]
  (assoc mock :mock/enabled false))

(defn update-sha [mock sha]
  (assoc mock :mock/sha sha))

(defn update-repo [mock git-repo]
  (assoc mock :mock/git_repo git-repo))

(defn update-content [mock content]
  (assoc mock :mock/content content))

(defn publish [mock]
  (assoc mock :mock/enabled true))

(defn unpublish [mock]
  (assoc mock :mock/enabled false))

(defn update-dns-status [mock new-status]
  (assoc mock :mock/dns_status new-status))

(defn update-unification-status [mock new-status]
  (assoc mock :mock/unification_status new-status))

(defn filter-by-id [mocks id]
  (->> mocks
       (filter #(= (-> % :mock/id str) (str id)))
       first))

(defn ->db-by-wildcard [{:keys [wildcard subdomain user-id org-id]}]
  (let [owner-key (if org-id :mock/org_id :mock/user_id)
        owner-id (or org-id user-id)
        base-mock {:mock/wildcard wildcard
                   :mock/subdomain subdomain}]
    (if owner-id
      (assoc base-mock owner-key owner-id)
      base-mock)))
