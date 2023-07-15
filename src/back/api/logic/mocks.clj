(ns back.api.logic.mocks
  (:import [java.util UUID]))

(defn ->uuid []
  (UUID/randomUUID))

(defn create
  [{:keys [org-id user-id subdomain url]}]

  (when (and (nil? org-id)
             (nil? user-id))
    (throw (Exception. "org-id or user-id must be provided")))

  {:mock/id (->uuid)
   :mock/org-id org-id
   :mock/user-id user-id
   :mock/subdomain subdomain
   :mock/url url
   :mock/enabled true})

(defn enable [mock]
  (assoc mock :mock/enabled true))

(defn disable [mock]
  (assoc mock :mock/enabled false))
