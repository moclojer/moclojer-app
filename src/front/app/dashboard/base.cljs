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

(defn settings-modal []
  (let [current-user (refx/use-sub [:app.auth/current-user])
        is-settings-open? (refx/use-sub [:app.dashboard/is-settings-open?])
        [setting set-setting] (hooks/use-state {:view "user"})
        user-orgs (refx/use-sub [:app.user/orgs])
        username (-> current-user
                     :user
                     :user_metadata
                     :user_name)
        username-to-save  (refx/use-sub [:app.auth/username-to-save])
        available? (refx/use-sub [:app.auth/is-username-available?])]
    ($ modal
       {:title "Settings"
        :open? is-settings-open?
        :on-close #(refx/dispatch-sync [:app.dashboard/toggle-settings])
        :children
        (d/div
         {:class "w-screen md:w-[600px] p-6 gap-4"}
         (d/div {:class "grid grid-cols-4 grid-rows-8 gap-2"}
                (d/div {:class "row-span-1"}
                       (d/div {:class (str "col-span-1 rounded-md hover:bg-gray-100 transition-all duration-75 "
                                           (when (= (:view setting) "user") "bg-gray-50"))}
                              ($ button {:size :full
                                         :on-click (fn []
                                                     (set-setting assoc :view "user"))}
                                 "User")))
                (d/div {:class "row-span-1"}
                       (d/div {:class "col-span-1"}
                              (d/div {:class (str "col-span-1 rounded-md hover:bg-gray-100 transition-all duration-75 "
                                                  (when (= (:view setting) "orgs") "bg-gray-50"))}
                                     ($ button {:size :full
                                                :on-click (fn []
                                                            (set-setting assoc :view "orgs"))}
                                        "Orgs"))))
                (d/div {:class "row-span-1"}
                       (d/div {:class (str "col-span-1 rounded-md hover:bg-gray-100 transition-all duration-75 "
                                           (when (= (:view setting) "mocks") "bg-gray-50"))}
                              ($ button {:size :full
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
                                                (when (and (not-empty username-to-save) available?)
                                                  (refx/dispatch [:app.dashboard/set-new-username username-to-save])))}
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
                                         ($ button {:class (when (not available?) "cursor-not-allowed ")
                                                    :theme :mockingbird
                                                    :padding :sm
                                                    :type :submit}
                                            "Update"))))

                         (= (:view setting) "orgs")
                         (do
                           (d/div
                            (d/p "Work in Progress")
                            (if (> (count user-orgs) 1)
                              (doseq [org user-orgs]
                                (d/p org)))
                            (d/p user-orgs)))

                         (= (:view setting) "mocks")
                         (d/div
                          (d/p "Work in Progress"))
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
               (str "px-3 py-2 rounded-lg justify-end items-center gap-2 flex btn-add "
                    (if allow-save? "bg-pink-600" "btn-add__disabled bg-gray-600 cursor-not-allowed"))
               :on-click #(when allow-save?
                            (refx/dispatch [:app.dashboard/create-mock new-mock]))}
              (d/div
               {:class "text-white text-xs font-bold leading-[18px]"}
               " save")
              ($ svg/save)))))})))

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

(defn update-repo-modal []
  (let [require-git-repo? (refx/use-sub [:app.dashboard/require-git-repo?])
        repos (refx/use-sub [:app.dashboard/repos])]
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
                            (refx/dispatch-sync [:app.dashboard/update-git-repo (:html_url repo)])
                            (refx/dispatch-sync [:app.dashboard/toggle-git-repo-modal require-git-repo?]))}
              (d/img
               {:src (get-in repo [:owner :avatar_url])
                :alt (str (get-in repo [:owner :login]) "'s avatar")
                :class "w-8 h-8 rounded-full mr-3"})
              (d/span
               {:class "flex-1"}
               (:full_name repo)))))))})))

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
            ($ settings-modal)
            ($ update-repo-modal)))))
