(ns yaml-generator.logic.yml
  (:require
   [clojure.string :as str]
   [yaml.core :as yaml]))

(defn to-yaml-string [data]
  (yaml/generate-string data))

(defn parse-yaml [yml-string]
  (yaml/parse-string yml-string))

(defn gen-path [user-id id]
  (str user-id "/" id "/mock.yml"))

(defn gen-host [wildcard subdomain]
  (str wildcard "-" subdomain ".moclojer.com"))

;; TODO: are we sure this is safe?
(defn get-domain-from-mock [mock-content host-key]
  (when (and mock-content host-key)
    (-> mock-content
        parse-yaml
        first
        (get-in [:endpoint host-key])
        (str/replace #".moclojer.com" ""))))

(defn add-host [host-key host content]
  (let [yml (parse-yaml content)]
    (->>
     yml
     (map #(update-in % [:endpoint host-key] (constantly host)))
     to-yaml-string)))

;; TODO: there should be a check for the mock content's
;; authenticity. We've already created an issue for the
;; creation of Moclojer's spec/schema though.
;; This is a problem because inner data is NECESSARY in
;; order for okayish execution. For example: in the following
;; function, we try to get the host from the new mock. If this
;; data ins't checked beforehand, things could (and probably will)
;; go south.

(defn unified-yaml
  "There are 2 possible operations:
  
   1. append?=true will first look for the new-mock
      in the old mock, and will create if it doesn't exist,
      update otherwise.

   2. append?=false will simply delete the mock from the old-mock
      if it exists.

   Also, if new-mock is an invalid moclojer mock, it will
   raise an exception."
  [old-um new-mock append? host-key]
  (let [parsed-old-um (parse-yaml old-um)
        parsed-new-mock (parse-yaml new-mock)]
    (if-let [host (get-in (first parsed-new-mock) [:endpoint host-key])]
      (let [other-mocks (filter #(not= host (get-in % [:endpoint host-key])) parsed-old-um)]
        (-> (if append?
              (reduce conj other-mocks parsed-new-mock)
              other-mocks)
            to-yaml-string))
      (throw (ex-info "Invalid moclojer mock"
                      {:cause :missing-host
                       :value new-mock})))))
