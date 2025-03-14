(ns front.app.dashboard.base
  (:require
   ["slugify" :as slugify]
   [front.app.components.container :refer [aside-container]]
   [front.app.components.modal :refer [modal]]
   [front.app.components.svg :as svg]
   [front.app.components.aside :refer [aside]]
   [mockingbird.components.input :refer [input]]
   [mockingbird.components.button :refer [button]]
   [front.app.components.navbar :refer [nav-bar]]
   [mockingbird.lib :refer-macros [defnc]]
   [helix.core :refer [$ <>]]
   [helix.dom :as d]
   [helix.hooks :as hooks]
   [refx.alpha :as refx]))

(defnc orgs-li [{:keys [orgname git id set-setting]}]
  (d/div {:class "p-2 flex justify-between items-center border-b "}
         (d/div {:class "flex space-x-4"}
                (d/div {:class "flex items-center justify-center p-1"} (if git
                                                                         ($ svg/github)
                                                                         ($ svg/people {:class "w-6 h-6 "})))
                (d/div {:class "flex flex-col select-none truncate grow-0 shrink overflow-none"}
                       (d/p {:class "text-lg"} orgname)))
         (d/div {:class "flex sm:flex-row flex-col justify-center items-center"}
                ($ button {:class "space-x-2 text-black hover:text-gray-800 group:duration-75 group:transition-all "
                           on-click #(set-setting {:view "git-org-update"
                                                   :org-id id
                                                   :orgname orgname})}
                   (d/p "Link to git")
                   ($ svg/github {:class "w-5 h-5 text-gray-800 "})))))

(defn settings-modal []
  (let [current-user (refx/use-sub [:app.auth/current-user])
        is-settings-open? (refx/use-sub [:app.dashboard/is-settings-open?])
        [setting set-setting] (hooks/use-state {:view "user"})
        orgs-data (refx/use-sub [:app.user/orgs])
        username (-> current-user
                     :user
                     :user_metadata
                     :user_name)
        username-to-save (refx/use-sub [:app.auth/username-to-save])
        username-available? (refx/use-sub [:app.auth/is-username-available?])
        [git-orgname-to-save set-git-orgname-to-save] (hooks/use-state "")
        git-orgs (refx/use-sub [:app.user/git-orgs])]

    (hooks/use-effect
      [git-orgs setting]
      (when (and (empty? git-orgs) (= (:view setting) "git-org-update"))
        (refx/dispatch-sync [:app.dashboard/get-user-git-orgs])))

    ($ modal
       {:title "Settings"
        :open? is-settings-open?
        :on-close #(refx/dispatch-sync [:app.dashboard/toggle-settings])
        :children
        (d/div {:class "w-screen md:w-[600px] p-6 gap-4"}
               (d/div {:class "grid grid-cols-4 grid-rows-8 gap-2"}
                      (d/div {:class "row-span-1"}
                             (d/div {:class (str "col-span-1 rounded-md hover:bg-gray-100 transition-all duration-75 "
                                                 (when (= (:view setting) "user") "bg-gray-50"))}
                                    ($ button {:size :full
                                               :class "outline-none "
                                               :on-click (fn []
                                                           (set-setting assoc :view "user"))}
                                       "User")))
                      (d/div {:class "row-span-1"}
                             (d/div {:class "col-span-1"}
                                    (d/div {:class (str "col-span-1 rounded-md hover:bg-gray-100 transition-all duration-75 "
                                                        (when (= (:view setting) "orgs") "bg-gray-50"))}
                                           ($ button {:size :full
                                                      :class "outline-none "
                                                      :on-click (fn []
                                                                  (set-setting assoc :view "orgs"))}
                                              "Orgs"))))
                      #_(d/div {:class "row-span-1"}
                               (d/div {:class (str "col-span-1 rounded-md hover:bg-gray-100 transition-all duration-75 "
                                                   (when (= (:view setting) "mocks") "bg-gray-50"))}
                                      ($ button {:size :full
                                                 :class "outline-none "
                                                 :on-click (fn []
                                                             (set-setting assoc :view "mocks"))}
                                         "Mocks")))
                      (d/div {:class "col-span-6 row-span-7 h-64 rounded-md bg-gray-50 space-y-4 p-4"}
                             (cond
                               (= (:view setting) "user")
                               (d/div
                                (d/form {:class "flex flex-col justify-between w-full items-start"
                                         :on-submit (fn [e]
                                                      (.preventDefault e)
                                                      (when (and (not-empty username-to-save) username-available?)
                                                        (refx/dispatch-sync [:app.dashboard/set-new-username username-to-save])))}
                                        (d/div {:class  "w-[calc(100%)]"}
                                               ($ input {:label "Edit Username"
                                                         :on-change (fn [e]
                                                                      (.preventDefault e)
                                                                      (refx/dispatch-sync [:app.auth/username-available? (.. e -target -value)]))
                                                         :placeholder username})
                                               (d/p {:class "text-sm select-none "}
                                                    (str "<" username ">.moclojer.com")))
                                        (d/div {:class  (str "w-[calc(20%)] flex justify-center items-center text-white rounded-md "
                                                             "my-2 p-2 ")}
                                               ($ button {:class (when (not username-available?) "cursor-not-allowed ")
                                                          :theme :mockingbird
                                                          :padding :sm
                                                          :type :submit}
                                                  "Update"))))

                               (= (:view setting) "orgs")
                               (d/div
                                (for [{:keys [orgname git-orgname id]} orgs-data]
                                  (<> {:key id}
                                      ($ orgs-li {:orgname orgname :git (not (nil? git-orgname)) :set-setting set-setting}))))

                               (= (:view setting) "mocks")
                               (d/div
                                (d/p "Work in Progress"))
                               (= (:view setting) "git-org-update")
                               (d/div
                                (for [org git-orgs]
                                  (<>
                                   (d/li {:key (str (random-uuid))
                                          :class "flex items-center p-3 border rounded-lg hover:bg-gray-50 cursor-pointer"
                                        ;:on-click #(refx/dispatch-sync [:app.dashboard/ (:html_url repo)]) 
                                          }
                                         (if (:git setting)
                                           ($ svg/github {:class "w-6 h-6 "})
                                           ($ svg/people {:class "w-6 h-6 "}))

                                         (d/span
                                          {:class "flex-1"})))))
                               :else
                               (set-setting assoc :view "user")))))})))

(defn new-mock-modal []
  (let [is-modal-open? (refx/use-sub [:app.dashboard/is-modal-open?])
        loading? (refx/use-sub [:app.dashboard/loading-creating-mock?])
        user-orgs (refx/use-sub [:app.user/orgs])
        mocks-raw (refx/use-sub [:app.dashboard/mocks-raw])
        [new-mock set-mock] (hooks/use-state {:enabled true})
        wildcard-available? (refx/use-sub [:app.dashboard/wildcard-available?])
        allow-save? (and (:subdomain new-mock)
                         (seq (:subdomain new-mock))
                         (:wildcard new-mock)
                         (some? (:enabled new-mock))
                         wildcard-available?)
        [default-wildcard set-default-wildcard!] (hooks/use-state "mock")
        default-subdomain (first user-orgs)]

    (hooks/use-effect
      [mocks-raw]
      (->> mocks-raw
           count
           inc
           (str "my-mock-")
           set-default-wildcard!))

    (hooks/use-effect
      [user-orgs]
      (when (nil? user-orgs)
        (refx/dispatch [:app.user/get-orgs-data])))

    (hooks/use-effect
      [new-mock]

      (let [wildcard (:wildcard new-mock)
            subdomain (:subdomain new-mock)]

        (when-not wildcard
          (set-mock assoc :wildcard default-wildcard))
        (when-not wildcard
          (set-mock assoc :subdomain default-subdomain))

        (when (and wildcard subdomain)
          (refx/dispatch-sync [:app.dashboard/wildcard-available?
                               (select-keys new-mock [:subdomain :wildcard])]))))

    ($ modal
       {:title "New mock"
        :open? is-modal-open?
        :loading? loading?
        :on-close #(do
                     (set-mock dissoc :wildcard :subdomain)
                     (refx/dispatch-sync [:app.dashboard/toggle-mock-modal]))
        :children
        (d/div
         {:class "w-screen md:w-[600px] p-6 space-y-4"}
         (d/div
          (d/div
           {:class "grid grid-cols-6 gap-4"}
           (d/div
            {:class "col-span-6 lm:col-span-3"}
            (d/label
             {:for "product-name"
              :class (str "block mb-2 text-sm font-medium text-gray-900 "
                          "dark:text-white")}
             "mock name")
            (d/input
             {:class (str "shadow-sm bg-gray-50 focus:ring-pink-500 "
                          "focus:border-pink-500 block w-full sm:text-sm "
                          "border-gray-300 rounded-md")
              :placeholder default-wildcard
              :on-load #(set-mock assoc :wildcard default-wildcard)
              :type "text"
              :on-change #(set-mock
                           assoc :wildcard
                           (slugify/default (or (.. % -target -value)
                                                default-wildcard)
                                            #js {:replacement "-"
                                                 :lower true
                                                 :trim true}))
              :name "product-name"
              :id "product-name"})))
          (d/div
           {:class "mb-4"}
           (d/label
            {:for "settings-language"
             :class-name (str "block mb-2 text-sm font-medium text-gray-900 "
                              "dark:text-white")}
            "Org name")
           (d/select
            {:id "settings-language"
             :name "subdomain"
             :value (or (:subdomain new-mock) default-subdomain)
             :on-change #(set-mock assoc :subdomain
                                   (or (.. % -target -value)
                                       default-subdomain))
             :class (str "bg-gray-50 border-gray-300 text-gray-900 "
                         "sm:text-sm rounded-lg focus:ring-primary-500 "
                         "focus:border-primary-500 block w-full p-2.5 "
                         "dark:bg-gray-700 dark:border-gray-600 "
                         "dark:placeholder-gray-400 dark:text-white "
                         "dark:focus:ring-primary-500 "
                         "dark:focus:border-primary-500")}
            (d/option {:value ""} "Select an org-name")
            (mapv #(d/option {:key % :value %} %)
                  user-orgs))
           (d/div
            {:class "mt-2 text-sm text-gray-500 dark:text-gray-400"}
            (d/span
             {:class "text-gray-900 text-base font-semibold "}
             (or (:wildcard new-mock) "<mock-name>"))
            (d/span
             {:class "text-gray-900 "}
             (str "-" (or (:subdomain new-mock) "<org-name>")
                  ".moclojer.com"))))

          (d/div
           {:class "divide-y divide-gray-200 dark:divide-gray-700 hidden"}
           (d/div
            {:class "flex justify-between items-center py-4"}
            (d/div
             {:class "flex flex-col flex-grow"}
             (d/div
              {:class "text-lg font-semibold text-gray-900 dark:text-white"}
              "public?")
             (d/div
              {:class "text-base font-normal text-gray-500 dark:text-gray-400"}
              "is this api ready to be published?"))
            (d/label
             {:for "rating-reminders"
              :class "flex relative items-center cursor-pointer"}
             (d/input
              {:type "checkbox"
               :id "rating-reminders"
               :class-name "sr-only peer cursor-not-allowed"
               :on-change (fn [e]
                            (set-mock assoc :enabled (= (.. e -target -value) "on")))})
             (d/span
              {:class (str "w-11 h-6 bg-gray-200 rounded-full peer "
                           "dark:bg-gray-700 peer-focus:ring-4 "
                           "peer-focus:ring-pink-300 dark:peer-focus:ring-pink-800 "
                           "peer-checked:after:translate-x-full "
                           "peer-checked:after:border-white after:content-[''] "
                           "after:absolute after:top-0.5 after:left-[2px] "
                           "after:bg-white after:border-gray-300 after:border "
                           "after:rounded-full after:h-5 after:w-5 "
                           "after:transition-all dark:border-gray-600 "
                           "peer-checked:bg-pink-500")}))))

          (d/div
           {:class "flex justify-between items-end py-4"}
           ($ button
              {:class
               (str "px-3 py-2 rounded-lg justify-end items-center gap-2 flex btn-add text-white "
                    (if allow-save? "bg-pink-600" "btn-add__disabled bg-gray-400 cursor-not-allowed"))
               :on-click #(when allow-save?
                            (if (= (:subdomain new-mock) default-subdomain)
                              (refx/dispatch [:app.dashboard/create-mock new-mock])
                              (refx/dispatch [:app.dashboard/create-mock new-mock (:subdomain new-mock)])))}
              (d/div
               {:class " text-xs font-bold leading-[18px] text-white hover:text-white flex space-x-2 justify-center items-center"}
               " save"
               ($ svg/save))))))})))

(defn mock-deletion-modal []
  (let [[open? set-open!] (hooks/use-state false)
        close-modal! #(do (set-open! false)
                          (refx/dispatch-sync
                           [:app.dashboard/set-mock-to-delete nil]))
        mock (refx/use-sub [:app.dashboard/mock-to-delete])]

    (hooks/use-effect
      [mock]
      (if (nil? mock)
        (close-modal!)
        (set-open! true)))

    ($ modal
       {:title nil
        :open? open?
        :loading? false
        :on-close close-modal!
        :children
        (d/div
         {:class "px-4 py-4 flex flex-col space-y-4 items-center align-center"}
         ($ svg/warning)
         (d/p "Do you want to delete this mock?")
         (d/div
          {:class "flex flex-row space-x-2"}
          ($ button
             {:class "px-4 py-2 bg-red-500 rounded-lg hover:opacity-80"
              :on-click #(do
                           (close-modal!)
                           (refx/dispatch-sync [:app.dashboard/delete-mock mock]))}
             (d/p
              {:class "text-white"}
              "Yes, I want to delete it"))
          ($ button
             {:class "px-4 py-2 border-2 border-gray-400 rounded-lg hover:bg-gray-200"}
             (d/p
              {:class-name "text-gray-800 text-sm font-medium"
               :on-click #(close-modal!)}
              "No, cancel"))))})))

(defn org-deletion-modal []
  (let [[open? set-open!] (hooks/use-state false)
        close-modal! #(do (set-open! false)
                          (refx/dispatch-sync
                           [:app.dashboard/set-org-to-delete nil]))
        org (refx/use-sub [:app.dashboard/org-to-delete])]

    (hooks/use-effect
      [org]
      (if (nil? org)
        (close-modal!)
        (set-open! true)))

    ($ modal
       {:title nil
        :open? open?
        :loading? false
        :on-close close-modal!
        :children
        (d/div
         {:class "px-4 py-4 flex flex-col space-y-4 items-center align-center"}
         ($ svg/warning)
         (d/p "Do you want to delete this org?")
         (d/div
          {:class "flex flex-row space-x-2"}
          ($ button
             {:class "px-4 py-2 bg-red-500 rounded-lg hover:opacity-80"
              :on-click #(do
                           (close-modal!)
                           (refx/dispatch-sync [:app.dashboard/delete-org org]))}
             (d/p
              {:class "text-white"}
              "Yes, I want to delete it"))
          ($ button
             {:class "px-4 py-2 border-2 border-gray-400 rounded-lg hover:bg-gray-200"}
             (d/p
              {:class-name "text-gray-800 text-sm font-medium"
               :on-click #(close-modal!)}
              "No, cancel"))))})))

(defn new-org-modal []
  (let [is-org-modal-open? (refx/use-sub [:app.dashboard/is-org-modal-open?])
        current-user (refx/use-sub [:app.auth/current-user])
        default-orgname (str (-> current-user :user :username) "-org")
        [new-org set-org] (hooks/use-state {:orgname default-orgname})
        allow-save? (refx/use-sub [:app.dashboard/orgname-valid?])]

    (hooks/use-effect
      [new-org]
      (when new-org
        (refx/dispatch [:app.dashboard/orgname-available? (:orgname new-org)])))

    ($ modal
       {:title "New org"
        :open? is-org-modal-open?
        :on-close #(refx/dispatch-sync [:app.dashboard/toggle-org-modal])
        :children
        (d/div
         {:class "w-screen md:w-[600px] p-6 space-y-4"}
         (d/div
          (d/div
           {:class "grid grid-cols-6 gap-4"}
           (d/div
            {:class "col-span-6 lm:col-span-3"}
            ($ input
               {:label "org name"
                :class (str "shadow-sm bg-gray-50 focus:ring-pink-500 "
                            "focus:border-pink-500 block w-full sm:text-sm "
                            "border-gray-300 rounded-md")
                :placeholder default-orgname
                :on-load #(set-org assoc :orgname default-orgname)
                :type "text"
                :on-change #(set-org
                             assoc :orgname
                             (slugify/default (or (.. % -target -value)
                                                  default-orgname)
                                              #js {:replacement "-"
                                                   :lower true
                                                   :trim true}))
                :name "product-name"
                :id "product-name"})))
          (d/div
           {:class "mb-4"}
           (d/div
            {:class "mt-2 text-sm text-gray-500 dark:text-gray-400"}
            (d/span
             {:class "text-gray-900 text-base font-semibold "}
             (or (str "<" (:orgname new-org) ">") "<org-name>"))))

          (d/div
           {:class "flex justify-between items-end py-4"}
           ($ button
              {:theme :mockingbird
               :class (str "px-3 py-2 rounded-lg justify-end items-center gap-2 flex btn-add bg-pink-600 text-white"
                           (when-not allow-save? "btn-add__disabled bg-gray-600 cursor-not-allowed "))
               :on-click #(when allow-save?
                            (refx/dispatch [:app.dashboard/create-org new-org]))}
              (d/div
               {:class "text-xs font-bold leading-[18px]"}
               " save")
              ($ svg/save)))))})))

(defn update-git-repo []
  (let [require-git-repo? (refx/use-sub [:app.dashboard/require-git-repo?])
        repos (refx/use-sub [:app.dashboard/repos])
        mock-id (:id (refx/use-sub [:app.dashboard/server-mock]))]
    (hooks/use-effect
      [repos mock-id]
      (when (empty? repos)
        (refx/dispatch-sync [:app.dashboard/verify-mock-repo mock-id])))

    ($ modal
       {:title "Add a repo to your mock"
        :open? require-git-repo?
        :on-close #(refx/dispatch-sync [:app.dashboard/toggle-git-repo-modal require-git-repo?])
        :children
        (d/div
         {:class "w-screen md:w-[600px] p-6 gap-4 z-10"}
         (d/div
          {:class "w-[calc(100%)]"}
          (d/ul
           {:class "space-y-2"}
           (for [repo repos]
             (d/li
              {:key (:full_name repo)
               :class "flex items-center p-3 border rounded-lg hover:bg-gray-50 cursor-pointer"
               :on-click #(do
                            (.preventDefault %)
                            (refx/dispatch-sync [:app.dashboard/update-git-repo (:html_url repo)])
                            (refx/dispatch-sync [:app.dashboard/toggle-git-repo-modal require-git-repo?]))}
              (d/img
               {:src (get-in repo [:owner :avatar_url])
                :alt (str (get-in repo [:owner :login]) "'s avatar")
                :class "w-8 h-8 rounded-full mr-3"})
              (d/span
               {:class "flex-1"}
               (:full_name repo)))))))})))

(defn git-docs-modal []
  (let [docs-modal-open? (refx/use-sub [:app.dashboard/git-docs-modal-open?])
        [page set-page] (hooks/use-state {:view 0})
        curr-user (refx/use-sub [:app.auth/current-user])
        git-username (get-in  curr-user [:user :user_metadata :user_name])
        sync-enabled? (refx/use-sub [:app.dashboard/is-sync-enabled?])
        change-page-btn-style "px-4 py-2 border rounded-lg hover:bg-gray-50 transition-all duration-75 "]
    ($ modal
       {:title (str "Docs 📖")
        :open? docs-modal-open?
        :on-close #(refx/dispatch-sync [:app.dashboard/toggle-git-docs docs-modal-open?])
        :children
        (d/div
         {:class "w-screen md:w-[600px] p-6 gap-4 z-10"}
         (d/div
          {:class "w-[calc(100%)]"}
          (d/div {:class "h-[300px]"}
                 (cond
                   (= (:view page) 0)
                   (d/div {:class "h-[95%] space-y-2 overflow-y-auto overscroll-contain p-4"}
                          (d/h1 {:class "text-2xl border-b border-gray-100"}
                                "1. Moclojer Git Sync")
                          (d/p {:class "w-full bg-slate-100 py-2  flex justify-center items-center"} "Orgs mocks cannot use git sync for now")
                          (d/p {:class "text-md"}
                               "Moclojer Git Sync is a feature designed to seamlessly synchronize user mocks with a GitHub repository. 
       This ensures that any changes made to your mocks are automatically reflected in your repository and vice versa."
                               (d/br)
                               (d/br)
                               "The feature leverages GitHub's infrastructure to provide a reliable and efficient syncing mechanism, 
       allowing you to focus on your work without worrying about manual updates."))

                   (= (:view page) 1)
                   (d/div {:class "h-[95%] space-y-2 overflow-y-auto overscroll-contain p-4"}
                          (d/h1 {:class "text-2xl border-b border-gray-100"}
                                "2. GitHub OAuth")
                          (if git-username
                            (d/div {:class "w-full bg-green-100 py-2 flex justify-center items-center"}
                                   (d/p
                                    "You are currently logged in as " (d/a {:class "underline transition-all duration-75"
                                                                            :target "_blank"
                                                                            :href (str "https://github.com/" git-username)} git-username)))
                            (d/div {:class "w-full bg-red-100 py-2 flex justify-center items-center"}
                                   (d/p
                                    "You are not logged with a git account" (d/a {:class "underline transition-all duration-75"
                                                                                  :target "_blank"
                                                                                  :href (str "https://github.com/" git-username)} git-username))))
                          (d/p {:class "text-md"}
                               "To use Moclojer Git Sync, you need to be logged in with a GitHub account. 
       If you are not already logged in with a GitHub account, you can log out and click the GitHub button 
       on the login page to authenticate. This will grant the necessary permissions for Moclojer 
       to interact with your repositories."))

                   (= (:view page) 2)
                   (d/div {:class "h-[95%] space-y-2 overflow-y-auto overscroll-contain p-4"}
                          (d/h1 {:class "text-2xl border-b border-gray-100"}
                                "3. Installing The Github App")
                          (d/div
                           (if sync-enabled?
                             (d/p {:class "w-full bg-green-100 py-2 flex justify-center items-center "}
                                  "Sync is already enabled! ")

                             (d/p {:class "w-full bg-slate-100 py-2 flex justify-center items-center "}
                                  "Install the app "
                                  (d/a {:class "underline ml-1"
                                        :target "_blank"
                                        :href "https://github.com/apps/moclojer-sync"} "here"))))
                          (d/p {:class "text-md"}
                               "To get started with Moclojer Git Sync, you need to install our app via the following link: "
                               (d/a {:class "underline"
                                     :target "_blank"
                                     :href "https://github.com/apps/moclojer-sync"} "Install Moclojer Git Sync "))
                          (d/br)

                          "You just need to install the app wherever you want it to be able to access. Install it and come back to the editor to update the git repo.")
                   (= (:view page) 3)
                   (d/div {:class "h-[95%] space-y-2 overflow-y-auto overscroll-contain p-4"}
                          (d/h1 {:class "text-2xl border-b border-gray-100"} "4. Usage")
                          (d/p {:class "text-md"}
                               "To use Moclojer Git Sync, you will need to link a mock with a repository. This is handled by our system. 
       Every push from outside our editor, located in the path"
                               (d/br)
                               (d/b {:class "bg-slate-100 py-2"} "`resources/mocks/<mock-wildcard-here>/moclojer.yml`")
                               "on your repository, will be updated on our server automatically." (d/br) "You can reload the editor or the page 
       to see the changes. If you want to push over the received push content, you will need to do it while 
       on the page; reloading it will erase any local progress.")
                          (d/br)
                          (d/h1 {:class "text-xl border-b border-gray-100"} "Pushing content")
                          (d/p
                           "Clicking the save button will push content to the source, following the same path.")
                          (d/p {:class "bg-slate-100 py-2"} "`resources/mocks/<mock-wildcard-here>/moclojer.yml`"))))
          (d/div {:class "w-full flex justify-end items-end space-x-2"}
                 (d/button {:class change-page-btn-style
                            :on-click #(set-page assoc :view (- (if (< 1 (:view page))
                                                                  (:view page)
                                                                  1) 1))}
                           "<")
                 (d/button {:class change-page-btn-style
                            :on-click #(set-page assoc :view (+ 1 (if (> 3 (:view page))
                                                                    (:view page)
                                                                    2)))}
                           ">"))))})))

(defnc user-li [{:keys [email username git user-id org-id]}]
  (d/div {:class "p-2 flex justify-between items-center border-b "}
         (d/div {:class "flex space-x-4"}
                (d/div {:class "flex items-center justify-center p-1"} (if git
                                                                         ($ svg/github)
                                                                         ($ svg/personal-mock)))
                (d/div {:class "flex flex-col select-none truncate grow-0 shrink overflow-none"}
                       ;; Since a user must have a username when it creates an account, we are adding 
                       ;; this invited tag which is resolved when the user enters the invite link
                       (if username
                         (d/p {:class "text-lg"} username)
                         (d/span  {:class "text-md flex justify-center items-center space-x-2 text-yellow-300 w-1/2"}
                                  ($ svg/mail {:class "w-4 h-4 "})
                                  (d/p "invited")))
                       (d/p {:class "text-sm italic text-gray-500"} email)))
         (d/div {:class "flex sm:flex-row flex-col"}
                ;; TODO this needs a org role update
                #_($ button "edit role")
                #_($ button {:on-click #(refx/dispatch-sync [:app.dashboard/remove-org-user org-id user-id])} "remove"))))

(defn add-user-org-modal []
  (let [is-add-user-org-modal-open? (refx/use-sub [:app.dashboard/is-add-user-org-modal-open?])
        current-user (refx/use-sub [:app.auth/current-user])
        default-email (str (-> current-user :user :username) "@email.com")
        [email set-email] (hooks/use-state default-email)
        org-users (refx/use-sub [:app.dashboard/org-users])
        org-id (refx/use-sub [:app.dashboard/curr-org])
        [allow-invite set-allow-invite] (hooks/use-state true)]

    (hooks/use-effect
      [email set-allow-invite]
      (if (and (string?  email)
               (re-matches #".+\@.+\..+" email))
        (set-allow-invite true)
        (set-allow-invite false)))

    (hooks/use-effect
      [org-users is-add-user-org-modal-open? org-id]
      (when (and (not (seq org-users)) is-add-user-org-modal-open?)
        (refx/dispatch-sync [:app.dashboard/get-org-users org-id])))

    ($ modal
       {:title "Add users"
        :open? is-add-user-org-modal-open?
        :on-close #(refx/dispatch-sync [:app.dashboard/toggle-add-user-org-modal nil])
        :children
        (d/div
         {:class "w-screen md:w-[600px] p-6 space-y-4"}
         (d/div
          (d/div
           {:class "grid grid-cols-6 gap-4"}
           (d/div
            {:class "col-span-6 lm:col-span-3"}
            ($ input
               {:label "send a invite"
                :class (str "shadow-sm bg-gray-50 focus:ring-pink-500 "
                            "focus:border-pink-500 block w-full sm:text-sm "
                            "border-gray-300 rounded-md")
                :placeholder default-email
                :on-load #(set-email default-email)
                :type "text"
                :on-change #(set-email
                             (or (.. % -target -value)
                                 default-email))

                :name "product-name"
                :id "product-name"})))

          (d/div
           {:class "flex justify-between items-end py-4"}
           ($ button
              {:theme :mockingbird
               :class (str "px-3 py-2 rounded-lg justify-end items-center gap-2 flex text-white "
                           (if-not allow-invite
                             "btn-add__disabled bg-gray-600 cursor-not-allowed "
                             "bg-pink-600 btn-add"))
               :on-click #(when allow-invite
                            (refx/dispatch-sync [:app.dashboard/add-org-user email org-id]))}
              (d/div
               {:class "text-xs font-bold leading-[18px]"}
               " invite")
              ($ svg/save))))
         (d/div {:class "border-t overflow-y-auto overscroll-contain flex flex-col flex-no-wrap  max-h-96"}
                (for [{:keys [email uuid username git-username]} org-users]
                  (<> {:key uuid}
                      ($ user-li {:email email :username username :git (not-empty git-username) :user-id uuid :org-id org-id})))))})))

(defnc index [{:keys [children]}]
  (let [user (-> (refx/use-sub [:app.auth/current-user])
                 :user)]
    (d/div {:class "bg-gray-50 dark:bg-gray-800"}
           ($ nav-bar {:user-data user})
           ($ aside)
           (d/div {:class "hidden fixed inset-0 z-10 bg-gray-900/50 dark:bg-gray-900/90"
                   :id "sidebarBackdrop"})
           (<>
            ($ aside-container children)
            ($ new-mock-modal)
            ($ mock-deletion-modal)
            ($ org-deletion-modal)
            ;; TODO fix and make settings usable
            #_($ settings-modal)
            ($ update-git-repo)
            ($ new-org-modal)
            ($ add-user-org-modal)
            ($ git-docs-modal)))))
