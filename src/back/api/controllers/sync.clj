(ns back.api.controllers.sync
  (:refer-clojure :exclude [ref])
  (:require
   [back.api.utils :as utils]
   [cheshire.core :as json]
   [clj-github-app.client :as gh-app]))

(defn inspect [a] (prn a) a)

(defn commit-message
  [author co-author email]
  (str "Auto genereted commit by " author "!!\n"
       "Co-authored-by: " co-author " <" email ">"))

(def committer
  {:name "Moclojer Git Sync App"
   :email "team@moclojer.com"
   :date (str (java.time.Instant/now))})

(defn create-github-client
  [github-api-url app-id private-key]
  (gh-app/make-app-client
   github-api-url
   app-id
   private-key {}))

(defn fetch-file
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

(defn get-default-branch-data
  [install-id owner repo components]
  (let [config (get-in components [:config :config :git-sync])
        github-api-url (:api-url config)
        app-id (:app-id config)
        private-key (:private-key config)
        gh-client (create-github-client github-api-url app-id private-key)
        response (gh-app/request gh-client install-id :get
                                 (format "%s/repos/%s/%s/branches" github-api-url owner repo)
                                 {})]
    (if (#{200 201} (:status response))
      (-> response
          :body
          (first)
          (select-keys [:commit :name]))
      (throw (ex-info "Failed to retrieve branches"
                      {:status (:status response)
                       :body (:body response)})))))

(defn get-user-repos
  [install-id components]
  (let [config (get-in components [:config :config :git-sync])
        github-api-url (:api-url config)
        app-id (:app-id config)
        private-key (:private-key config)
        gh-client (create-github-client github-api-url app-id private-key)
        response (gh-app/request gh-client install-id :get
                                 (format "%s/installation/repositories" github-api-url)
                                 {})]
    (if (#{200 201} (:status response))
      (-> response
          :body
          :repositories)
      (throw (ex-info "Failed to retrieve user repos"
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
              :content (fetch-file install-id owner repo file
                                   {:github-api-url github-api-url
                                    :app-id app-id
                                    :private-key private-key})}))

    @res))

(defn push!
  "Uses installation-id to auth as a github app 
  and push n files from a repo"
  [install-id owner repo email paths base-tree-sha branch files components ctx]
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
      (update-reference install-id owner repo (str "refs/heads/" branch) commit-sha
                        {:github-api-url github-api-url
                         :app-id app-id
                         :private-key private-key}))))

(comment
  (def app-id "1089795")
  (def private-key (slurp "/home/felipe-gsilva/Documents/documentos-pessoais/felipe-gsilva-auth-test.2024-12-17.private-key.pem"))
  (def github-api-url "https://api.github.com")
  (def install-id "58505217")
  (def base-sha "2679f7712ea94d9b7261f059f5dd95241ce1cfcf")
  (def paths ["file.md" "file2.md"])
  (def files (mapv utils/encode ["Hello world!!" "better \nHello world!!"]))
  (def user "Felipe-gsilva")
  (def gh-client (create-github-client
                  "https://api.github.com"
                  app-id
                  private-key))
  (create-commit install-id user "gh-app-test" "Felipe-gsilva@protonmail.com" paths files base-sha
                 {:github-api-url "https://api.github.com" :app-id app-id :private-key private-key})
  (create-tree install-id user "gh-app-test" paths files base-sha
               {:github-api-url "https://api.github.com" :app-id app-id :private-key private-key})

  (update-reference install-id
                    user
                    "gh-app-test"
                    "refs/heads/main"
                    "f75173c5f3acc456c61d8edcc2d47f6c0d7aef9d"
                    {:github-api-url "https://api.github.com"
                     :app-id app-id
                     :private-key private-key})

  (gh-app/request* gh-client install-id
                   {:method :get
                    :url (format "%s/repos/%s/%s/" github-api-url user "gh-app-test")
                    :headers {"Accept" "application/vnd.github+json"
                              "Content-Type" "application/json"}})
  (select-keys (first (:body (gh-app/request gh-client install-id :get
                                             (format "%s/repos/%s/%s/branches" github-api-url user "gh-app-test")
                                             {}))) [:commit :name]))

