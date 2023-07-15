(ns back.api.ports.http-in
  (:require
   [back.api.controllers.login :as controllers.login]
   [back.api.controllers.mocks :as controllers.mocks]
   [back.api.controllers.files :as controllers.files]
   [clojure.java.io :as io]))

(defn handler-create-user!
  [{{{:keys [access-token]} :body} :parameters
    components :components}]
  (let [user (controllers.login/create-customer!
              access-token components)]

    {:status 201
     :body {:user user}}))

(defn handler-upload!
  [{{{:keys [file]} :multipart} :parameters
    {:keys [user-id]} :session-data
    components :components}]
  (let [url (controllers.files/save-file! user-id file components)]

    {:status 200
     :body {:url url}}))

(defn handler-download
  [{{:keys [id]} :parameters
    components :components}]
  (let [file (controllers.files/get-file! id components)]

    {:status 200
     :headers {"Content-Type" "application/yaml"}
     :body (io/input-stream file)}))

;; TODO: Create an interceptor to get customer-id and org-id from cookies
;; TODO: Get customer-id and org-id from interceptor
(defn handler-create-mock!
  [{{{:keys [subdomain url]} :body} :parameters
    {:keys [user-id org-id]} :session-data
    components :components}]
  (prn ">>handler-create-mock!" user-id org-id subdomain url)
  (let [mock (controllers.mocks/create-mock!
              org-id
              user-id
              subdomain
              url
              components)]

    {:status 201
     :body {:mock mock}}))

(defn handler-get-mocks
  [{filter :session-data components :components}]
  (prn ">>handler-get-mocks" filter)
  (let [mocks (controllers.mocks/get-mocks filter components)]

    {:status 200
     :body {:mocks mocks}}))

(defn handler-enable-mock!
  [{{{:keys [id]} :path} :parameters
    components :components}]
  (prn ">>handler-enable-mock!" id)

  (controllers.mocks/enable-mock! id components)
  {:status 200 :body {}})

(defn handler-disable-mock!
  [{{{:keys [id]} :path} :parameters
    components :components}]
  (prn ">>handler-disable-mock!" id)

  (controllers.mocks/disable-mock! id components)
  {:status 200 :body {}})
