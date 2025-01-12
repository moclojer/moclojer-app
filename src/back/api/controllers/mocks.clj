(ns back.api.controllers.mocks
  (:refer-clojure :exclude [ref])
  (:require [back.api.adapters.mocks :as adapter.mocks]
            [back.api.db.mocks :as db.mocks]
            [back.api.logic.mocks :as logic.mocks]
            [back.api.ports.producers :as ports.producers]
            [back.api.utils :as utils]

            [cheshire.core :as json]
            [clojure.string :as str]
            [clj-github-app.client :as gh-app]
            [com.moclojer.components.logs :as logs]))

(defn inspect [a] (prn a) a)

(defn create-mock!

  [user-id mock {:keys [database mq]} ctx]
  (logs/log :info "creating mock"
            :ctx (merge ctx
                        ()
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
  ([id content components ctx]
   (update-mock! id content nil components ctx))
  ([id content sha {:keys [database mq]} ctx]
   (if-let [mock (db.mocks/get-mock-by-id id database ctx)]
     (let [updated-mock (-> mock
                            (logic.mocks/update {:content content
                                                 :sha sha})
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
                      :cause :invalid-id})))))

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

(defn commit-message
  [author co-author email]
  (str "Auto genereted commit by " author "!!\n"
       "Co-authored-by: " co-author " <" email ">"))

(def committer
  {:name "Moclojer Git Sync App"
   :email "moclojer@gmail.com"
   :date (str (java.time.Instant/now))})

(defn create-github-client
  [github-api-url app-id private-key]
  (gh-app/make-app-client
   github-api-url
   app-id
   private-key {}))

(defn fetch-file-content
  [install-id owner repo file-path {:keys [github-api-url app-id private-key]}]
  (let [gh-client (create-github-client github-api-url app-id private-key)
        response (gh-app/request gh-client install-id :get
                                 (format "%s/repos/%s/%s/contents/%s" github-api-url owner repo file-path)
                                 {})]
    (if (#{200 201} (:status response))
      (let [content (-> response
                        :body)]
        content)
      (throw (ex-info "Failed to retrieve file"
                      {:status (:status response)
                       :body (:body response)})))))

(defn create-blob [gh-client install-id owner repo file]
  (let [response (gh-app/request* gh-client install-id
                                  {:method :post
                                   :url (inspect (format "%s/repos/%s/%s/git/blobs" "https://api.github.com" owner repo))
                                   :headers {"Accept" "application/vnd.github+json"
                                             "Content-Type" "application/json"}
                                   :body (json/encode {:content file
                                                       :encoding "base64"})})]
    (if (#{200 201} (:status response))
      (let [content (-> response
                        :body
                        :sha)]
        content)
      (do
        (throw (ex-info "Failed to create a blob"
                        {:status (:status response)
                         :body (:body response)}))))))

(defn create-file-map [gh-client install-id paths contents owner repo]
  (let [file-map (atom [])]
    (doseq [[path file] (map vector paths contents)]
      (swap! file-map conj {:path path
                            :mode "100644"
                            :type "blob"
                            :sha (create-blob gh-client install-id owner repo file)}))

    @file-map))

(defn create-tree [install-id owner repo paths contents base-tree-sha {:keys [github-api-url app-id private-key]}]
  (let [gh-client (create-github-client github-api-url app-id private-key)
        response (gh-app/request* gh-client install-id
                                  {:method :post
                                   :url (format "%s/repos/%s/%s/git/trees" github-api-url owner repo)
                                   :headers {"Accept" "application/vnd.github+json"
                                             "Content-Type" "application/json"}
                                   :body (inspect (json/encode {:base_tree (str base-tree-sha)
                                                                :tree (create-file-map gh-client install-id paths contents owner repo)}))})]
    (if (#{200 201} (:status response))
      (let [content (inspect (-> response
                                 :body
                                 :sha))]
        content)
      (throw (ex-info "Failed to create a tree"
                      {:status (:status response)
                       :body (:body response)})))))

(defn create-commit
  [install-id owner repo email paths files base-tree-sha {:keys [github-api-url app-id private-key] :as config}]
  (let [gh-client (create-github-client github-api-url app-id private-key)
        tree (create-tree install-id owner repo paths files base-tree-sha config)
        response (gh-app/request* gh-client install-id
                                  {:method :post
                                   :url (format "%s/repos/%s/%s/git/commits" github-api-url owner repo)
                                   :body (json/encode
                                          {:message (commit-message (:name committer) owner email)
                                           :author committer
                                           :committer committer
                                           :parents [base-tree-sha]
                                           :tree tree})})]
    (if (#{200 201} (:status response))
      (let [content (-> response
                        :body)]
        content)
      (throw (ex-info "Failed to create commit"
                      {:status (:status response)
                       :body (:body response)})))))

(defn update-reference
  [install-id owner repo ref commit-sha {:keys [github-api-url app-id private-key]}]
  (let [gh-client (create-github-client github-api-url app-id private-key)
        response (gh-app/request* gh-client install-id
                                  {:method :patch
                                   :url (format "%s/repos/%s/%s/git/%s" github-api-url owner repo ref)
                                   :headers {"Accept" "application/vnd.github+json"
                                             "Content-Type" "application/json"}
                                   :body (json/encode {:sha commit-sha
                                                       :force true})})]
    (if (#{200 201} (:status response))
      (-> response :body)
      (throw (ex-info "Failed to update reference"
                      {:status (:status response)
                       :body (:body response)})))))

(defn get-git-user-email
  [install-id user {:keys [github-api-url app-id private-key]}]
  (let [gh-client (create-github-client github-api-url app-id private-key)
        response (gh-app/request gh-client install-id  :get
                                 (format "%s/installations/%s/access_tokens" github-api-url install-id)
                                 {})]
    (if (#{200 201} (:status response))
      (if-let [content (-> response
                           :body)]
        content)
      (throw (ex-info "Failed to retrieve file"
                      {:status (:status response)
                       :body (:body response)})))))

(defn pull!
  "Uses installation-id to auth as a github app 
  and pull n files from a repo"
  [install-id owner repo files components ctx]
  (let [res (atom [])
        config (get-in components [:config :config :git-sync])
        github-api-url (:api-url config)
        app-id (:app-id config)
        private-key (:private-key config)]
    (doseq [file files]
      (swap! res conj
             {:file file
              :content (fetch-file-content install-id owner repo file
                                           {:github-api-url github-api-url
                                            :app-id app-id
                                            :private-key private-key})}))
    @res))

(defn push!
  "Uses installation-id to auth as a github app 
  and push n files from a repo"
  [install-id owner repo email paths base-tree-sha files components ctx]
  (let [config (get-in components [:config :config :git-sync])
        github-api-url (:api-url config)
        app-id (:app-id config)
        private-key (:private-key config)
        encoded-files (mapv utils/encode files)
        commit (create-commit install-id owner repo email paths encoded-files base-tree-sha
                              {:github-api-url github-api-url
                               :app-id app-id
                               :private-key private-key})
        commit-sha (:sha commit)]
    (when commit-sha
      (update-reference install-id owner repo "refs/heads/main" commit-sha
                        {:github-api-url github-api-url
                         :app-id app-id
                         :private-key private-key}))))

(comment
  (create-commit install-id user "gh-app-test" "Felipe-gsilva@protonmail.com" paths files base-sha
                 {:github-api-url "https://api.github.com" :app-id app-id :private-key private-key})
  (create-tree install-id user "gh-app-test" paths files base-sha
               {:github-api-url "https://api.github.com" :app-id app-id :private-key private-key})

  (update-reference install-id
                    user
                    "gh-app-test"
                    "refs/heads/main"
                    "0d773304d6f0c83178d9947a08a53078c1beeb11"
                    {:github-api-url "https://api.github.com"
                     :app-id app-id
                     :private-key private-key})

  (get-git-user-email install-id user {:github-api-url "https://api.github.com" :app-id app-id :private-key private-key}))
