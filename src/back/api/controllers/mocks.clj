(ns back.api.controllers.mocks
  (:require [back.api.adapters.mocks :as adapter.mocks]
            [back.api.db.mocks :as db.mocks]
            [back.api.logic.mocks :as logic.mocks]
            [back.api.ports.producers :as ports.producers]
            [com.moclojer.components.logs :as logs]

            [clojure.string :as str]
            [clj-github-app.client :as gh-app]
            [clj-github.httpkit-client :as gh-client]
            [clojure.data.json :as json]))

;; GIT
(defn commit-message [co-author email] (str "Auto genereted commit by moclojer sync app!!" newline
                                            "Co-authored-by:" co-author "<" email ">"))

(defn inspect [a] (prn a) a)

(def app-id "")
(def private-key (slurp ""))
(def github-api-url "https://api.github.com")

(def app-client
  (gh-app/make-app-client
   github-api-url
   app-id
   private-key {}))

(defn get-installation-token [app-client installation-id]
  (let [response (gh-app/request app-client installation-id :post
                                 (format "/app/installations/%s/access_tokens" installation-id)
                                 {:accept "application/vnd.github+json"
                                  :X-GitHub-Api-Version "2022-11-28"})]
    (if (= 201 (:status response))
      (-> response :body json/read-str (get "token"))
      (do
        (prn "Response Status:" (:status response))
        (prn "Response Body:" (:body response))
        (throw (ex-info "Failed to retrieve installation token"
                        {:status (:status response)
                         :body (:body response)}))))))

(defn create-github-client [token]
  (gh-client/new-client {:oauth-token token}))

(defn fetch-file-content [gh-client owner repo branch file-path]
  (let [response (gh-client/request gh-client
                                    {:method :get
                                     :url  (format "https://api.github.com/repos/%s/%s/contents/%s" owner repo file-path)
                                     :query-params {:ref branch}
                                     :headers {"Accept" "application/vnd.github.v3+json"}})]
    (if (= 200 (:status response))
      (let [content (-> response :body json/read-str (get "content"))]
        content)
      (throw (ex-info "Failed to retrieve file"
                      {:status (:status response)
                       :body (:body response)})))))

(defn pull-file [installation-id owner repo branch file-path]
  (let [token (get-installation-token app-client installation-id)
        gh-client (create-github-client token)]
    (fetch-file-content gh-client owner repo branch file-path)))

(defn push-file [installation-id]
  (let [token (get-installation-token app-client installation-id)
        gh-client (create-github-client token)]
    (gh-client/request gh-client
                       {:method :post
                        :url  #_(format "https://api.github.com/repos/%s/%s/contents/%s" owner repo file-path)
                        ; :query-params {:ref branch}
                        :headers #_{"Accept" "application/vnd.github.v3+json"}})))

(defn enable-sync! [mock org & args]
  ;; TODO
  ;; add pro validation
  )

(comment
  (def install_id "")
  (gh-app/request app-client install_id :post
                  (format "/app/installations/%s/access_tokens" install_id)
                  {})

  (get-installation-token app-client install_id)
  (try
    (let [content (pull-file
                   install_id
                   "Felipe-gsilva"
                   "gh-app-test"
                   "main"
                   "README.md")]
      (println content))
    (catch Exception e
      (println "Error:" (.getMessage e)))))

(defn create-mock!
  [user-id mock {:keys [database mq]} ctx]
  (logs/log :info "creating mock"
            :ctx (merge ctx
                        {:mock mock
                         :user-id user-id}))
  (let [owner (assoc {:user-id (parse-uuid (str user-id))}
                     :org-id (parse-uuid (str (:org-id mock))))
        ?existing-mock (-> (select-keys mock [:wildcard :subdomain])
                           (merge owner)
                           (logic.mocks/->db-by-wildcard)
                           (db.mocks/get-mock-by-wildcard database ctx))]
    (if (seq ?existing-mock)
      (throw (ex-info "Mock with given wildcard and subdomain invalid"
                      {:status-code 412
                       :cause :invalid-wildcard
                       :value (adapter.mocks/->wire ?existing-mock)}))
      (let [new-mock (-> (logic.mocks/create (merge mock owner))
                         (db.mocks/insert! database ctx)
                         (adapter.mocks/->wire))]
        (ports.producers/generate-single-yml! (:id new-mock) mq ctx)
        (when (:enabled new-mock)
          (ports.producers/create-domain! (logic.mocks/pack-domain new-mock)
                                          mq ctx))
        new-mock))))

(defn wildcard-available?
  [mock {:keys [database]} ctx]
  (-> (logic.mocks/->db-by-wildcard mock)
      (db.mocks/get-mock-by-wildcard database ctx)
      (empty?)))

(defn update-mock!
  [id content {:keys [database mq]} ctx]
  (if-let [mock (db.mocks/get-mock-by-id id database ctx)]
    (let [updated-mock (-> mock
                           (logic.mocks/update {:content content})
                           (db.mocks/update! database ctx)
                           (adapter.mocks/->wire))
          ->wired-old-mock (adapter.mocks/->wire mock)]

      (ports.producers/generate-single-yml! (:id updated-mock) mq ctx)

      (when (and (= (:dns-status ->wired-old-mock) "offline")
                 (:enabled ->wired-old-mock))
        (ports.producers/create-domain! (logic.mocks/pack-domain ->wired-old-mock)
                                        mq
                                        ctx))

      updated-mock)
    (throw (ex-info "Mock with given id invalid"
                    {:status-code 412
                     :cause :invalid-id}))))

(defn get-mocks
  [{:keys [uuid username]} {:keys [database]} ctx]
  (logs/log :info "retrieving mocks"
            :ctx (merge ctx {:user/uuid uuid
                             :user/username username}))
  (logic.mocks/group
   (->> (db.mocks/get-mocks (parse-uuid (str uuid)) database ctx)
        (map adapter.mocks/->wire))
   username))

(defn publish-mock!
  [id {:keys [database mq]} ctx]
  (-> (db.mocks/get-mock-by-id id database ctx)
      logic.mocks/publish
      (db.mocks/update! database ctx)
      (adapter.mocks/->wire)
      :id
      (ports.producers/generate-single-yml! mq ctx))
  true)

(defn unpublish-mock!
  [id {:keys [database mq]} ctx]
  (-> (db.mocks/get-mock-by-id id database ctx)
      logic.mocks/unpublish
      (db.mocks/update! database ctx)
      (adapter.mocks/->wire)
      :id
      (ports.producers/generate-single-yml! mq ctx))
  true)

(defn delete-mock!
  [{:keys [user-id]} id {:keys [database mq]} ctx]
  (logs/log :info "deleting mock"
            :ctx (assoc ctx :mock-id id))
  (if-let [{:keys [id org-id user-id] :as ?mock}
           (some-> (db.mocks/get-mocks user-id database ctx)
                   (logic.mocks/filter-by-id id)
                   (adapter.mocks/->wire))]
    (do
      (db.mocks/delete-mock-by-id id database ctx)
      (ports.producers/delete-single-yml! id (or org-id user-id) mq ctx)
      (ports.producers/delete-domain! (logic.mocks/pack-domain ?mock) mq ctx)
      true)
    (throw (ex-info "No mock found with given id"
                    {:status-code 400
                     :cause :invalid-id
                     :value :id}))))

(defn get-mock-publication-status
  [id db ctx]
  (if-let [mock (db.mocks/get-mock-by-id (parse-uuid (str id)) db ctx)]
    (-> (adapter.mocks/->wire mock)
        (select-keys [:dns-status :unification-status]))
    (throw (ex-info "No mock found with given id"
                    {:status-code 400
                     :cause :invalid-id
                     :value id}))))

(defn update-mock-dns-status!
  [domain new-status db ctx]
  (if-let [mock (-> (logic.mocks/unpack-domain domain)
                    (logic.mocks/->db-by-wildcard)
                    (db.mocks/get-mock-by-wildcard db ctx))]
    (-> (logic.mocks/update-dns-status mock new-status)
        (select-keys [:mock/id :mock/dns_status])
        (db.mocks/update! db ctx))
    (throw (ex-info "No mock found with given domain"
                    {:cause :invalid-domain
                     :value domain}))))

(defn update-mock-unification-status!
  [mock-id new-status db ctx]
  (if-let [mock (db.mocks/get-mock-by-id (parse-uuid (str mock-id)) db ctx)]
    (-> (logic.mocks/update-unification-status mock new-status)
        (select-keys [:mock/id :mock/unification_status])
        (db.mocks/update! db ctx))
    (throw (ex-info "No mock found with given id"
                    {:status-code 400
                     :cause :invalid-id
                     :value mock-id}))))
