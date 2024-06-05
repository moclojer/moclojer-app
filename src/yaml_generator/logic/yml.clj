(ns yaml-generator.logic.yml
  (:require [clojure.edn :as edn]
            [clojure.pprint :refer [pprint]]
            [clojure.string :as str]
            [malli.core :as m]
            [muuntaja.core :as mu]
            [yaml-generator.schemas.mock :as s.mock]
            [yaml.core :as yaml]))

(defn to-yaml-string [data]
  (yaml/generate-string data))

(defn parse-yaml [yml-string]
  (yaml/parse-string yml-string))

(defn parse-yaml-&-body [yml-string]
  (map #(update-in % [:endpoint :response :body]
                   (partial mu/decode "application/json"))
       (parse-yaml yml-string)))

(comment
  (def foobar-mock "
- endpoint:
    method: GET
    path: /hello/:username
    response:
      status: 200
      headers:
        Content-Type: application/json
      body: >
        {
          \"hello\": \"{{path-params.username}}!\"
        }")

  (parse-yaml-&-body foobar-mock)
  ;;
  )

(defn parse-yaml-read-literal [raw-mock]
  (-> (parse-yaml raw-mock)
      pprint
      with-out-str
      edn/read-string))

(defn validate-mock [raw-mock]
  (->> (parse-yaml-read-literal raw-mock)
       (m/validate s.mock/Mock)))

(defn explain-mock-validation [raw-mock]
  (->> (parse-yaml-read-literal raw-mock)
       (m/explain s.mock/Mock)))

(defn gen-path [user-id id]
  (str user-id "/" id "/mock.yml"))

(defn gen-host [wildcard subdomain]
  (str wildcard "-" subdomain ".moclojer.com"))

(defn unpack-path [path]
  (->> (str/split path #"/")
       (take 2)
       (zipmap [:user-id :mock-id])))

(comment
  (unpack-path "j0suetm/hello/mock.yml")
  ;; => {:user-id "j0suetm", :mock-id "hello"}
  )

(defn add-host [host-key host content]
  (let [yml (parse-yaml content)]
    (->>
     yml
     (map #(update-in % [:endpoint host-key] (constantly host)))
     to-yaml-string)))

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

(defn reduce-paths [mocks]
  (->> (reduce-kv
        (fn [acc user-id mock-id]
          (conj acc (map #(gen-path (name user-id) (name %)) mock-id)))
        [] mocks)
       flatten
       (into [])))

(comment
  (reduce-paths {:j0suetm [:my-mock :my-another-mock]
                 :chico [:mock1]})
  ;; => ["j0suetm/my-mock/mock.yml"
  ;;     "j0suetm/my-another-mock/mock.yml"
  ;;     "chico/mock1/mock.yml"]
  )

(defn filter-missing-mocks [mocks unified host-key]
  (remove
   (fn [mock]
     (every? (fn [{:keys [endpoint]}]
               (some #(and (= (:path endpoint)
                              (get-in % [:endpoint :path]))
                           (= (:method endpoint)
                              (get-in % [:endpoint :method]))
                           (= (get endpoint host-key)
                              (get-in % [:endpoint host-key])))
                     (:content unified)))
             (:content mock)))
   mocks))

(comment
  (filter-missing-mocks
   [{:path "cd989358-af38-4a2f-a1a1-88096aa425a7/10f62424-c8f7-4793-bc7c-bfe5d26655a5/mock.yml"
     :content [{:endpoint
                {:method "GET"
                 :path "/hello/:username"
                 :local-host "test-j0suetm.moclojer.com"}}]}]
   {:path "moclojer.yml", :content []}
   :host)
  ;; => ({:path "cd989358-af38-4a2f-a1a1-88096aa425a7/10f62424-c8f7-4793-bc7c-bfe5d26655a5/mock.yml", :content [{:endpoint {:method "GET", :path "/hello/:username", :local-host "test-j0suetm.moclojer.com"}}]})

  (filter-missing-mocks
   [{:path "cd989358-af38-4a2f-a1a1-88096aa425a7/10f62424-c8f7-4793-bc7c-bfe5d26655a5/mock.yml"
     :content [{:endpoint
                {:method "GET"
                 :path "/hello/:username"
                 :response {:status 200
                            :headers {:Content-Type "application/json"}
                            :body "{\n  \"hello\": \"{{path-params.username}}!\"\n}"}
                 :local-host "test-j0suetm.moclojer.com"}}]}]
   {:path "moclojer.yml"
    :content [{:endpoint
               {:method "GET"
                :path "/hello/:username"
                :response {:status 200
                           :headers {:Content-Type "application/json"}
                           :body "{\n  \"hello\": \"{{path-params.username}}!\"\n}"}
                :local-host "test-j0suetm.moclojer.com"}}]}
   :host)
  ;; => ()
  )
