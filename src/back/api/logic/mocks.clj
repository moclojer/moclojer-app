(ns back.api.logic.mocks
  (:import [java.util UUID]))

(defn ->uuid []
  (UUID/randomUUID))

(defn create
  [{:keys [org subdomain content]}]
  {:mock/id (->uuid)
   :mock/org org
   :mock/subdomain subdomain
   :mock/content content
   :mock/enabled true})

(defn update
  [mock {:keys [content]}]
  (assoc mock :mock/content content))

(defn publish [mock]
  (assoc mock :mock/published true))

(defn unpublish [mock]
  (assoc mock :mock/published false))
