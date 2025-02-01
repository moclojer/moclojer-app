(ns back.api.ports.http-in
  (:require
   [back.api.adapters.customers :as adapters.customers]
   [back.api.controllers.login :as controllers.login]
   [back.api.controllers.mocks :as controllers.mocks]
   [back.api.controllers.orgs :as controllers.orgs]
   [back.api.controllers.user :as controllers.user]
   [back.api.controllers.sync :as controllers.sync]
   [back.api.logic.mocks :as logic.mocks]
   [back.api.logic.customers :as logic.users]
   [back.api.logic.orgs :as logic.orgs]
   [back.api.utils :as utils]
   [clojure.string :as str]
   [com.moclojer.components.logs :as logs]
   [clojure.stacktrace :as stacktrace]))

(defn handler-create-user!
  [{{{:keys [access-token]} :body} :parameters
    components :components
    ctx :ctx}]
  (let [user (controllers.login/create-customer! access-token components ctx)]
    {:status 201
     :body {:user user}}))

(defn edit-user!
  [{{{:keys [username install-id]} :body} :parameters
    {:keys [user-id]} :session-data
    {:keys [database]} :components
    ctx :ctx}]
  {:status 200
   :body {:user (controllers.user/edit-user! user-id username install-id database ctx)}})

(defn handler-get-user
  [{{{:keys [id]} :path} :parameters
    {:keys [database]} :components
    ext-user :user
    ctx :ctx}]
  ;; since we're already fetching the current session user,
  ;; it doesn't make sense to make another request, incase the
  ;; user being retrieved, is the same one in the session.
  ;; So we just return the extracted user.
  (let [same-user? (= (some-> ext-user :customer/uuid str) id)
        user (if same-user?
               (adapters.customers/->wire ext-user)
               (controllers.user/get-user-by-id id {:database database} ctx))
        valid-user? (some-> user :uuid uuid?)]
    (if valid-user?
      {:status 200
       :body {:user user}}
      {:status 404})))

(defn handler-get-user-by-external-id
  [{:keys [user]}]
  (if (some-> user :customer/uuid uuid?)
    {:status 200
     :body {:user (adapters.customers/->wire user)}}
    {:status 404}))

(defn handler-create-mock!
  [{:keys [parameters session-data components ctx]}]
  (let [user-id (:user-id session-data)
        mock (:body parameters)]
    {:status 201
     :body {:mock (controllers.mocks/create-mock! user-id mock components ctx)}}))

(defn inspect [a] (prn "inspeciona " a) a)

(defn handler-update-mock!
  [{:keys [parameters session-data components ctx]}]
  (let [user-id (:user-id session-data)
        old-mock (:body parameters)
        content (:content old-mock)
        id (:id old-mock)
        sha (:sha old-mock)
        git-path (:git-repo old-mock)
        git-repo (when git-path (last (str/split git-path #"/")))
        new-mock (controllers.mocks/update-mock! (parse-uuid (str id))
                                                 (-> {}
                                                     (utils/assoc-if :content content)
                                                     (cond->
                                                      (not= sha "") (utils/assoc-if :sha sha)
                                                      (not= git-repo "") (utils/assoc-if :git-repo git-path)))
                                                 components
                                                 ctx)]
    ;; TODO check if it is a org or user
    (when (and git-repo sha)
      (when-let [git-user (controllers.user/get-user-by-id user-id components ctx)]
        (let [owner (inspect (-> (str/split git-path  #"/")
                                 (as-> [e] (take-last 2 e))
                                 (first)))
              install-id (:git-install-id git-user)
              repo (inspect (controllers.sync/get-default-branch-data install-id owner git-repo components))
              base-sha (-> repo :commit :sha)
              branch (-> repo :name)
              wildcard (:wildcard new-mock)
              path (into [] (str "resoureces/mocks/" wildcard "/moclojer.yml"))
              email (:email git-user)
              encoded-content (into [] (utils/encode content))]
          (controllers.sync/push! install-id owner git-repo email path base-sha branch
                                  encoded-content components ctx))))
    {:status 200
     :body {:mock new-mock}}))

(defn handler-get-mocks
  [{:keys [session-data components ctx]}]
  (let [user (controllers.user/get-user-by-id
              (:user-id session-data) components ctx)
        mocks (controllers.mocks/get-mocks user components ctx)]
    (prn mocks)
    {:status 200
     :body {:mocks mocks}}))

(defn handler-publish-mock!
  [{{{:keys [id]} :path} :parameters
    components :components
    ctx :ctx}]
  (controllers.mocks/publish-mock! id components ctx)
  {:status 200 :body {}})

(defn handler-unpublish-mock!
  [{{{:keys [id]} :path} :parameters
    components :components
    ctx :ctx}]
  (controllers.mocks/unpublish-mock! id components ctx)
  {:status 200 :body {}})

(defn handler-delete-mock!
  [{{{id :id} :body} :parameters
    session :session-data
    components :components
    ctx :ctx}]
  (if (controllers.mocks/delete-mock! session id components ctx)
    {:status 200 :body {}}
    {:status 401 :body {}}))

(defn handler-username-available?
  [{{{:keys [username]} :path} :parameters
    components :components
    ctx :ctx}]
  {:status 200
   :body {:available (controllers.user/username-available? username components ctx)}})

(defn handler-wildcard-available?
  [{{mock :path} :parameters
    {:keys [user-id]} :session-data
    components :components
    ctx :ctx}]
  (let [available (controllers.mocks/wildcard-available?
                   (merge mock {:user-id user-id}) components ctx)]
    {:status 200
     :body {:available available}}))

(defn handler-get-mock-publication-status
  [{params :parameters
    {:keys [database]} :components
    ctx :ctx}]
  (let [id (get-in params [:path :id])
        pub-stts (controllers.mocks/get-mock-publication-status id database ctx)]
    {:status 200
     :body pub-stts}))

(defn handler-get-orgs
  [{:keys [session-data components ctx]}]
  (let [user-id (:user-id session-data)
        orgs (controllers.orgs/get-orgs-by-user-id user-id components ctx)]
    {:status 200
     :body {:orgs (map #(->> (controllers.user/get-users-by-org-id
                              (:id %) components ctx)
                             (logic.orgs/group-org-with-users %))
                       orgs)}}))

(defn handler-create-org
  [{:keys [session-data parameters components ctx]}]
  (let [org (get-in parameters [:body :org])
        user-id (:user-id session-data)
        new-org (controllers.orgs/create-org! org components ctx)
        {:keys [user-id]} (controllers.orgs/add-org-user!
                           new-org user-id true components ctx)
        new-user (controllers.user/get-user-by-id user-id components ctx)]
    {:status 201
     :body {:org (logic.orgs/group-org-with-users new-org [new-user])}}))

(defn handler-get-org
  [{:keys [parameters components ctx]}]
  (let [id (get-in parameters [:path :id])
        org (controllers.orgs/get-org-by-id id components ctx)
        users (controllers.user/get-users-by-org-id (:id org) components ctx)]
    {:status 200
     :body {:org (logic.orgs/group-org-with-users org users)}}))

(defn handler-update-org
  [{:keys [parameters components ctx]}]
  (let [id (get-in parameters [:path :id])
        org (assoc (get-in parameters [:body :org])
                   :id id)]
    {:status 200
     :body {:org (controllers.orgs/update-org! org components ctx)}}))

(defn handler-delete-org
  [{:keys [parameters components ctx]}]
  (let [id (get-in parameters [:path :id])]
    {:status 200
     :body {:success (controllers.orgs/delete-org! {:id id} components ctx)}}))

(defn handler-get-org-users
  [{:keys [parameters components ctx]}]
  (let [id (get-in parameters [:path :id])]
    {:status 200
     :body {:users (controllers.user/get-users-by-org-id id components ctx)}}))

(defn handler-add-org-user
  [{:keys [parameters components ctx]}]
  (let [org-id (get-in parameters [:path :id])
        user-id (get-in parameters [:body :user-id])
        org (controllers.orgs/get-org-by-id org-id components ctx)
        old-users (controllers.user/get-users-by-org-id (:id org) components ctx)]
    (if (logic.users/exists? old-users user-id)
      (throw (ex-info "user is already in org"
                      {:status-code 412
                       :cause :user-already-in-org
                       :value {:org-id org-id
                               :user-id user-id}}))
      (let [new-org-user (controllers.orgs/add-org-user!
                          org user-id false components ctx)
            new-user (controllers.user/get-user-by-id
                      (:user-id new-org-user) components ctx)]
        {:status 200
         :body {:users (conj old-users new-user)}}))))

(defn handler-delete-org-user
  [{:keys [parameters components ctx]}]
  (let [org-id (get-in parameters [:path :org-id])
        user-id (get-in parameters [:path :user-id])]
    {:status 200
     :body {:success (controllers.orgs/remove-org-user! org-id user-id components ctx)
            :users (controllers.user/get-users-by-org-id org-id components ctx)}}))

(defn- filter-mocks [files]
  (into [] (filter #(and (= (last (str/split % #"/")) "moclojer.yml")
                         (str/includes? % "mocks/"))
                   files)))
(defn inspect [a]
  (prn "inspecionando " a (newline))
  a)

(defn handler-webhook
  [{:keys [headers parameters components ctx]}]
  (let [body (:body parameters)
        event-type (get headers "x-github-event")
        install-id (get-in body [:installation :id])]
    (logs/log :info "Webhook received"
              :ctx (assoc ctx :event-type event-type))
    (cond
      (nil? install-id)
      {:status 401
       :body {:message "Forbidden"}}
      (= event-type "push")
      (let [repo (:repository body)
            commits  (:commits body)
            git-slug (get-in repo [:owner :name])
            repo-name (:name repo)
            org (controllers.orgs/get-by-git-orgname git-slug components ctx)
            user (controllers.user/get-by-git-username git-slug components ctx)
            id (or (parse-uuid (:id org)) (parse-uuid (:uuid user)))
            slug (or (:orgname org) (:username user))]
        (logs/log :info "Processing Push Event"
                  :ctx (assoc ctx
                              :id id
                              :repo repo-name))

        (if-not id
          {:status 404
           :body {:message "User and org not found"}}
          (let [user-mocks (controllers.mocks/get-mocks {:uuid id :username slug} components ctx)
                mocks (filter-mocks (->> commits
                                         (mapcat #(vals (select-keys % [:added :modified])))
                                         (apply concat)
                                         vec))
                source-files (when mocks (controllers.sync/pull! install-id git-slug repo-name mocks components ctx))]
            (when (seq source-files)
              (logs/log :info "Processing modified mocks"
                        :ctx (assoc ctx
                                    :mocks mocks
                                    :user-mocks user-mocks
                                    :modified-count (count source-files)))
              (doseq [mock source-files
                      :let [content (utils/decode (get-in mock [:content :content]))
                            sha (get-in mock [:content :sha])
                            ;; "resources/mocks/moclojer-test/moclojer.yml" ==> moclojer-test
                            wildcard (-> (:file mock)
                                         (str/split #"/")
                                         (as-> e (take-last 2 e))
                                         (first))
                            existing-mock (when user-mocks
                                            (first (filter #(= (:wildcard %) wildcard)
                                                           (->> user-mocks
                                                                first
                                                                :apis
                                                                (map #(select-keys % [:wildcard :id]))))))]]
                (if (seq existing-mock)
                  (if-let [mock-id (:id existing-mock)]
                    (try
                      (controllers.mocks/update-mock! mock-id
                                                      {:content content
                                                       :git-repo (:url repo)
                                                       :sha sha}
                                                      components ctx)
                      (catch Exception e
                        (logs/log :error "Failed to update mock"
                                  :ctx (assoc ctx :error (.getMessage e) :mock-id mock-id))
                        {:status 500
                         :body {:message (.getMessage e)}}))
                    (logs/log :error "Mock found but has no ID"
                              :ctx (assoc ctx :wildcard wildcard)))
                  (try
                    (controllers.mocks/create-mock!
                     id
                     (logic.mocks/create {:content content
                                          :sha sha
                                          :wildcard wildcard
                                          :subdomain slug
                                          :enabled true
                                          :git-repo (:url repo)})
                     components ctx)
                    (catch Exception e
                      (logs/log :error "Failed to create mock"
                                :ctx (assoc ctx :error (.getMessage e)))
                      {:status 500
                       :body {:message (.getMessage e)}})))))
            {:status 200
             :body {:message "Files updated from source"}})))
      (= event-type "installation")
      (let [sender-type (get-in body [:installation :account :type])
            git-slug (get-in body [:installation :account :login])
            org (when (= sender-type "Organization") (controllers.orgs/get-by-git-orgname git-slug components ctx))
            user  (when (= sender-type "User") (controllers.user/get-by-git-username git-slug components ctx))
            id (or (parse-uuid (:id org)) (parse-uuid (:uuid user)))]
        (logs/log :info "Processing Installation Event"
                  :ctx (assoc ctx :id id))
        (if-not (nil? (or (:id org) (:uuid user)))
          {:status 200
           :body {:message "Enabled Git Sync"
                  :content (if org
                             (controllers.orgs/enable-sync install-id id components ctx)
                             (controllers.user/enable-sync install-id id components ctx))}}
          {:status 404
           :body {:message "no org or user found"}}))
      :else {:status 400
             :body {:message "Unhandled event type"}})))

(defn handler-get-repos
  [{:keys [session-data components ctx]}]
  (let [user (controllers.user/get-user-by-id (:user-id session-data) components ctx)
        install-id (:git-install-id user)]
    (if install-id
      {:status 200
       :body {:repositories (->> (controllers.sync/get-user-repos install-id components)
                                 (map #(select-keys % [:full_name :html_url :owner])))}}
      {:status 404
       :body {:message "Could not retrieve user repos"}})))

(defn handler-sync-status
  [{:keys [session-data components ctx]}]
  (let [user (controllers.user/get-user-by-id (:user-id session-data) components ctx)
        install-id (:git-install-id user)]
    (if (number? install-id)
      {:status 200
       :body {:sync-enabled true
              :message "Sync Enabled"}}
      {:status 404
       :body {:sync-enabled false
              :message "Sync Disabled"}})))

(defn handler-push-mock!
  [{{{:keys [id]} :path
     {:keys [content git-repo wildcard]} :body} :parameters
    {:keys [user-id]} :session-data
    components :components
    ctx :ctx}]
  (let [git-user (controllers.user/get-user-by-id user-id components ctx)
        [owner repo-name] (-> git-repo
                             (str/replace #"https://github.com/" "")
                             (str/split #"/"))
        install-id (:git-install-id git-user)
        path [(str "resources/mocks/" wildcard "/moclojer.yml")]
        email (:email git-user)]
    
    (logs/log :info "Starting GitHub push"
              :ctx (assoc ctx
                         :owner owner
                         :repo repo-name
                         :path path
                         :install-id install-id))
    
    (if (and install-id owner repo-name content)
      (try
        (let [repo (controllers.sync/get-default-branch-data install-id owner repo-name components)
              base-sha (-> repo :commit :sha)
              branch (-> repo :name)
              encoded-content [content]
              response (controllers.sync/push! install-id owner repo-name email path base-sha branch
                                             encoded-content components ctx)]
          
          (logs/log :info "Push successful"
                    :ctx (assoc ctx :response response))
          
          {:status 200
           :body {:response response}})
        
        (catch Exception e
          (logs/log :error "Failed to push to GitHub"
                    :ctx (assoc ctx
                              :error (.getMessage e)
                              :mock-id id
                              :paths path
                              :content-length (count content)
                              :stack-trace (with-out-str (clojure.stacktrace/print-stack-trace e))))
          {:status 500
           :body {:message "Failed to push to GitHub"
                  :details (.getMessage e)}}))  
      
      {:status 400
       :body {:error {:message "Missing required git sync data"}}})))
