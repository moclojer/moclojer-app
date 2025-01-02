(ns back.api.ports.http-in
  (:require
   [back.api.adapters.customers :as adapters.customers]
   [back.api.controllers.login :as controllers.login]
   [back.api.controllers.mocks :as controllers.mocks]
   [back.api.controllers.orgs :as controllers.orgs]
   [back.api.controllers.user :as controllers.user]
   [back.api.logic.customers :as logic.users]
   [back.api.logic.orgs :as logic.orgs]
   [clojure.string :as str]
   [com.moclojer.components.logs :as logs]))

(defn handler-create-user!
  [{{{:keys [access-token]} :body} :parameters
    components :components
    ctx :ctx}]
  (let [user (controllers.login/create-customer! access-token components ctx)]
    {:status 201
     :body {:user user}}))

(defn edit-user!
  [{{{:keys [username]} :body} :parameters
    {:keys [user-id]} :session-data
    {:keys [database]} :components
    ctx :ctx}]
  {:status 200
   :body {:user (controllers.user/edit-user! user-id username database ctx)}})

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
               (controllers.user/get-user-by-id id database ctx))
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

(defn handler-update-mock!
  [{{{:keys [id content]} :body} :parameters
    components :components
    ctx :ctx}]
  (let [mock (controllers.mocks/update-mock! (java.util.UUID/fromString id)
                                             content
                                             components
                                             ctx)]
    {:status 200
     :body {:mock mock}}))

(defn handler-get-mocks
  [{:keys [session-data components ctx]}]
  (let [user (controllers.user/get-user-by-id
              (:user-id session-data) (:database components) ctx)
        mocks (controllers.mocks/get-mocks user components ctx)]
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
  (let [{:keys [database]} components
        org (get-in parameters [:body :org])
        user-id (:user-id session-data)
        new-org (controllers.orgs/create-org! org components ctx)
        {:keys [user-id]} (controllers.orgs/add-org-user!
                           new-org user-id true components ctx)
        new-user (controllers.user/get-user-by-id user-id database ctx)]
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
                      (:user-id new-org-user) (:database components) ctx)]
        {:status 200
         :body {:users (conj old-users new-user)}}))))

(defn handler-delete-org-user
  [{:keys [parameters components ctx]}]
  (let [org-id (get-in parameters [:path :org-id])
        user-id (get-in parameters [:path :user-id])]
    {:status 200
     :body {:success (controllers.orgs/remove-org-user! org-id user-id components ctx)
            :users (controllers.user/get-users-by-org-id org-id components ctx)}}))

(defn inspect [a]
  (logs/log :inspecting a)
  a)

(defn decode [encoded-str]
  (let [cleaned-str (clojure.string/replace encoded-str #"\s+" "")
        decoder (java.util.Base64/getDecoder)]
    (String. (.decode decoder cleaned-str) "UTF-8")))

(defn handler-post-webhook
  [request]
  (let [body (:body-params request)
        event-type (get-in request [:headers "x-github-event"])]
    (cond
      (= event-type "push")
      (do
        (let [installation-id (get-in body [:installation :id])
              repo (:repository body)
              head-commit (:head_commit body)
              response {:status 500
                        :body {:message "Webhook received successfully"}}
              modified-files (into []
                                   (concat
                                    (:modified head-commit)
                                    (:added head-commit)))
              mocks (into [] (filter #(and
                                       (= (last (str/split % #"/")) "moclojer.yml")
                                       (str/includes? % "mocks/"))
                                     modified-files))
              partial-response (inspect (when mocks
                                          (controllers.mocks/pull-file
                                           installation-id
                                           (get-in repo [:owner :name])
                                           (:name repo)
                                           mocks)))]
          (when partial-response
            (assoc (:body response)
                   :paths mocks
                   :content partial-response))
          (newline)
          (prn response)
          (inspect (assoc (dissoc response :status)
                          :status 200
                          :message "Webhook received successfully and files handled"))))
      (= event-type "installation")
      (do
        (let [installation-id (get-in body [:installation :id])]
          (doseq [repo (:repositories body)]
            (let [response {:status 200
                            :body {:message "Webhook received successfully"
                                   :response (controllers.mocks/pull-file
                                              installation-id
                                              (first (str/split (:full_name repo) #"/"))
                                              (:name repo)
                                              "README.md")}}]
              (prn response)
              response))))
      :else {:status 403
             :body {:message "Unhandled event type"}})
    {:status 200
     :body {:message "Webhook received successfully"}}))

