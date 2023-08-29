(ns back.api.logic.mocks
  (:require [back.api.utils :refer [assoc-if]]) 
  (:import [java.util UUID]))

(defn ->uuid []
  (UUID/randomUUID))

(defn create
  [{:keys [subdomain content user-id wildcard]}]
  (-> {:mock/id (->uuid)
       :mock/subdomain subdomain
       :mock/wildcard wildcard 
       :mock/user_id user-id
       :mock/enabled true}
      (assoc-if :mock/content content)))

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
