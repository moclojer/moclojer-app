(ns back.api.ports.http-in
  (:require
   [back.api.adapters.customers :as adapters.customers]
   [back.api.controllers.login :as controllers.login]
   [back.api.controllers.mocks :as controllers.mocks]
   [back.api.controllers.orgs :as controllers.orgs]
   [back.api.controllers.user :as controllers.user]
   [back.api.controllers.sync :as controllers.sync]
   [back.api.logic.customers :as logic.users]
   [back.api.logic.orgs :as logic.orgs]
   [back.api.utils :as utils]
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
  [{{{:keys [id content git-repo sha]} :body} :parameters
    components :components
    ctx :ctx}]
  ;; TODO update push correctly
  #_(prn body
         (keys body))
  (let [mock (controllers.mocks/update-mock! (java.util.UUID/fromString id)
                                             content
                                             components
                                             ctx)]
    #_(when install-id
        (let [path (str "mocks/" "/moclojer.yml")]
          (controllers.mocks/push! install-id owner repo email path sha
                                   (utils/encode content) components ctx)))
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
            head-commit (:head_commit body)
            git-slug (get-in repo [:owner :name])
            repo-name (:name repo)
            updated-files (into [] (concat
                                    (:modified head-commit)
                                    (:added head-commit)))
            mocks (into [] (filter #(and (= (last (str/split % #"/")) "moclojer.yml")
                                         (str/includes? % "mocks/"))
                                   updated-files))
            pull-response (when mocks
                            (controllers.sync/pull! install-id git-slug repo-name mocks components ctx))
            content (:content pull-response)
            org (controllers.orgs/get-by-git-orgname git-slug components ctx)
            org? (not (nil? (:orgname org)))
            user (when-not org? (controllers.user/get-by-git-username git-slug components ctx))]
        (if-not (nil? (:uuid (if org? org user)))
          (do
            (logs/log :info "mocks"
                      :ctx (assoc ctx :mocks mocks))
            (doseq [[mock-content sha] mocks]
              (let [mock-id (controllers.mocks/get-mocks {:uuid (if org? org user)
                                                          :username git-slug}
                                                         components ctx)
                    decoded-mock (utils/decode mock-content)]
                (controllers.mocks/update-mock! mock-id decoded-mock sha components ctx)))
            {:status 200
             :body {:content content
                    :message "Files updated from source"}})
          {:status 500
           :body {:message "no org or user found"}}))
      (= event-type "installation")
      (let [git-slug (get-in body [:installation :account :login])
            user  (controllers.user/get-by-git-username git-slug components ctx)
            org nil #_(controllers.orgs/get-by-git-orgname git-slug components ctx)
            org? false #_(not (nil? (:orgname org)))]
        (logs/log :info  git-slug
                  :ctx (assoc ctx
                              :id (if org? org user)))
        (if-not (nil? (:uuid (if org? org user)))
          {:status 200
           :body {:message "Enabled Git Sync"
                  :content (if org?
                             (controllers.orgs/enable-sync install-id org components ctx)
                             (controllers.user/enable-sync install-id user components ctx))}}
          {:status 404
           :body {:message "no org or user found"}}))
      :else {:status 400
             :body {:message "Unhandled event type"}})))
