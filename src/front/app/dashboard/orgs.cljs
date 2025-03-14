(ns front.app.dashboard.orgs
  (:require
   [front.app.components.svg :as svg]
   [front.app.components.loading :refer [loading-spinner]]
   [front.app.dashboard.base :as base]
   [front.app.dashboard.mocks :as mocks]
   [mockingbird.lib :refer-macros [defnc]]
   [mockingbird.components.button :refer [button]]
   [mockingbird.components.input :refer [input]]
   [helix.core :refer [$ <>]]
   [helix.dom :as d]
   [helix.hooks :as hooks]
   [refx.alpha :as refx]
   [reitit.frontend.easy :as rfe]))

(defnc user-li [{:keys [username email] :as user}]
  (d/div {:class "flex flex-row space-x-2 items-center"}
         (d/div {:class (str "px-3 py-1 rounded-full border-2 "
                             (or (first (random-sample 0.5 ["border-blue-500"
                                                            "border-green-500"
                                                            "border-pink-500"
                                                            "border-purple-500"]))
                                 "border-pink-500"))}
                (d/p {:class "text-xs"} username))))

(defnc org [{:keys [orgname slug id users]} should-orgs-view]
  (let [filtered-users (take 5 users)]
    (d/div {:class "w-full "}
           (d/div {:class "w-full flex flex-col items-start border-b space-y-2"}
                  (d/div {:class "flex flex-col sm:flex-row justify-between w-full items-center "}
                         (d/div {:class "w-full text-black flex flex-col my-2 space-y-2 hover:cursor-pointer"
                                 :on-click (fn [e]
                                             (.preventDefault e)
                                             (when should-orgs-view
                                               (rfe/push-state :app.core/orgs-view {:org-id id})))}
                                (d/p {:class "font-bold text-black "} orgname)
                                (d/div {:class "border-gray-200 overflow-x-auto max-w-128 flex space-x-2"}
                                       (for [{:keys [username email]} filtered-users]
                                         (<> {:key username}
                                             ($ user-li {:username username :email email :org-id id})))))

                         (d/button {:class "sm:w-max w-full px-3 py-2 mt-2 rounded-lg border border-gray-200 justify-center items-center gap-2 flex button-remove "
                                    :on-click #(refx/dispatch-sync [:app.dashboard/set-org-to-delete {:id id}])}
                                   (d/div {:class "text-gray-800 text-sm font-medium leading-[21px]"}
                                          "remove")
                                   ($ svg/trash)))))))

(defnc user-orgs [{:keys [username orgs]}]
  (d/div {:class (str "w-full h-full px-6 py-4 bg-white rounded-lg shadow flex-col justify-center items-start inline-flex "
                      "lg:p-8 space-y-2")
          :key (str username)}
         (d/div {:class "self-stretch justify-start items-center gap-[15px] inline-flex"}
                ($ svg/people {:class "w-6 w-6 "})
                (d/div {:class "w-full self-stretch text-gray-900 text-xl font-bold leading-[30px]"} username))
         (for [{:keys [orgname slug users id]} orgs]
           (<> {:key slug}
               ($ org {:orgname orgname :slug slug :id id :users users})))
         (d/div {:class "self-stretch justify-start items-start inline-flex text-white text-xs font-bold leading-[18px]"})

         ($ button {:class "px-3 py-2 text-white hover:text-white bg-pink-600 rounded-lg justify-end items-center gap-2 flex btn-add"
                    :theme :mockingbird
                    :on-click (fn [e]
                                (.preventDefault e)
                                (refx/dispatch-sync [:app.dashboard/toggle-org-modal]))}
            ($ svg/plus-sign)
            (d/span
             " new org")
            ($ svg/box))))

(defnc apis-mocks [{:keys [subdomain mock-type apis]}]
  (d/div {:id "custom-mock"
          :class (str "w-full px-6 py-4 flex-col justify-center items-start inline-flex "
                      "lg:p-8")
          :key (str subdomain)}
         (for [{:keys [enabled url id]} apis]
           (<> {:key id}
               ($ mocks/api-mock {:enabled enabled :url url :id id})))))

(defnc orgs-mocks [{:keys [orgname org-id]}]
  (let [mocks (refx/use-sub [:app.dashboard/org-mocks])
        loading? (refx/use-sub [:app.dashboard/loading-mocks?])]

    (hooks/use-effect
      [mocks org-id]
      (when (or (empty? mocks)
                (not= (:org-id (first (:apis (first mocks)))) org-id))
        (refx/dispatch-sync [:app.dashboard/get-org-mocks org-id])))

    (d/div {:class "w-full self-stretch flex flex-col justify-start items-center gap-[15px] inline-flex "}
           (d/div {:class "w-full self-stretch text-gray-900 text-xl font-bold leading-[30px] flex justify-between"}
                  (if loading?
                    ($ loading-spinner)
                    (for [{:keys [mock-type subdomain apis] :or {mock-type "personal"}} mocks]
                      (<> {:key subdomain}
                          (when (= mock-type "org")
                            ($ apis-mocks {:mock-type mock-type :subdomain subdomain :apis apis}))))))
           (d/div {:class "self-stretch pt-6 justify-start items-start inline-flex text-white text-xs font-bold leading-[18px]"}

                  ($ button {:class "px-3 py-2 text-white hover:text-white bg-pink-600 rounded-lg justify-end items-center gap-2 flex btn-add"
                             :theme :mockingbird
                             :on-click (fn [_] (refx/dispatch [:app.dashboard/toggle-mock-modal]))}
                     ($ svg/plus-sign)
                     (d/span
                      " new mock")
                     ($ svg/box))))))

(defnc orgs-view-editor [{:keys [orgname slug id git-orgname users] :or {git-orgname ""}}]
  (let [filtered-users (into [] (take 5 users))
        [show-slug? set-show-slug] (hooks/use-state false)
        [editing-org? set-editing-org] (hooks/use-state false)
        [orgname-to-save set-orgname-to-save] (hooks/use-state nil)]
    (d/div {:class "space-y-2 w-full "}
           (d/div
            {:class "rounded-br-lg flex-col justify-start inline-flex"}
            (d/div
             {:class "rounded-md justify-start items-center space-x-2 inline-flex"}
             ($ svg/people {:class "w-3 h-3 "})
             (d/button
              {:class "justify-center items-center flex"
               :on-click #(rfe/push-state :app.core/orgs)}
              (d/p
               {:class "text-gray-700 text-sm font-medium underline"}
               "orgs"))
             (d/p ">")
             (d/div
              {:class "justify-center items-center flex"}
              (d/p
               {:class "text-gray-700 text-sm font-medium"}
               (or orgname "my")))))
           (d/div {:class (str "w-full h-full px-6 py-4 bg-white rounded-lg shadow flex-col justify-center items-start inline-flex "
                               "lg:p-8 space-y-2 ")}
                  (d/div {:class "self-stretch justify-start items-center gap-[15px] inline-flex "}
                         (d/div {:class "w-full self-stretch text-gray-900 text-xl font-bold leading-[30px] flex justify-between"}
                                (if editing-org?
                                  (d/span {:class "flex items-center space-x-2"}
                                          (d/button {:class "text-gray-400 hover:text-gray-900 "} ($ svg/save))
                                          ($ input {:class "bg-none border-b focus:border-blue-500 focus:border-gray-500 focus:outline-none"
                                                    :type :login
                                                    :border :none
                                                    :placeholder orgname
                                                    :on-change (fn [e] (set-orgname-to-save  (.. e -target -value)))}))
                                  (d/span {:class "flex items-center space-x-2"}
                                          (d/button {:class " transition-all duration-75 flex justify-center items-center mt-1"
                                                     :on-click #(set-show-slug (not show-slug?))}
                                                    (if show-slug?
                                                      ($ svg/eye-opened)
                                                      ($ svg/eye-closed)))

                                          (if show-slug?
                                            (d/p slug)
                                            (d/p orgname))))
                                (d/span {:class "flex items-center justify-around "}
                                        (when editing-org?
                                          (d/span {:class "flex"}
                                                  ($ button {:class "text-gray-200 hover:underline transition-all duration-75 bg-pink-600 hover:bg-pink-700 text-white space-x-1"
                                                             :on-click #((set-editing-org false)
                                                                         (refx/dispatch [:app.dashboard/set-new-orgname id orgname-to-save]))} (d/p "save") ($ svg/save))
                                                  ($ button {:class "text-gray-200 hover:underline transition-all duration-75 border-none outline-none"
                                                             :on-click #(set-editing-org (not editing-org?))} "cancel")))
                                        ($ button {:class "border-none outline-none "
                                                   :on-click #(set-editing-org (not editing-org?))}
                                           ($ svg/edit-pen)))))

                  (d/div {:class "w-full border-b border-gray-200 pb-2 overflow-x-auto max-w-128 flex space-x-2"}
                         (for [{:keys [username email]} filtered-users]
                           (<> {:key username}
                               ($ user-li {:username username :email email :org-id id})))
                         (d/button {:class (str "border-2 py-[4px] px-[5px] w-max h-max rounded-full z-100 hover:bg-gray-100 "
                                                "transition-all duration-75 text-sm text-gray-200 hover:border-gray-400 "
                                                "hover:text-gray-400 ")

                                    :on-click #(refx/dispatch-sync [:app.dashboard/toggle-add-user-org-modal])}
                                   ($ svg/plus-sign)))

                  (d/div {:class "w-full "}
                         ($ orgs-mocks {:orgname orgname :org-id id}))))))

(defnc orgs-view [props]
  (let [{:keys [route]} props
        {:keys [path-params]} route
        {:keys [org-id]} path-params
        orgs (refx/use-sub [:app.user/orgs-data])
        org (->> orgs
                 (filter #(= (:id %) org-id))
                 (first))
        {:keys [orgname slug id git-orgname users]} org]

    (hooks/use-effect
      :once
      (refx/dispatch-sync [:app.dashboard/set-curr-org org-id]))

    (hooks/use-effect
      [orgs]
      (when-not (seq orgs)
        (refx/dispatch-sync [:app.user/get-orgs-data])))

    ($ base/index
       (d/div {:class "flex flex-col lg:p-8"}
              ($ orgs-view-editor {:orgname orgname :slug slug :id id
                                   :git-orgname git-orgname :users users})))))

(defnc orgs []
  (let [current-user (refx/use-sub [:app.auth/current-user])
        username (-> current-user :user :username)
        orgs (refx/use-sub [:app.user/orgs-data])]

    (hooks/use-effect
      [orgs]
      (when (empty? orgs)
        (refx/dispatch-sync [:app.user/get-orgs-data])))

    (hooks/use-effect
      [orgs]
      (when (and (empty? orgs) (not (nil? orgs)))
        (refx/dispatch-sync [:app.dashboard/toggle-org-modal])))

    ($ base/index
       (d/div {:class "flex flex-col lg:p-8"}
              (if (and (some? orgs) (not-empty orgs))
                (<>
                 ($ user-orgs {:username username :orgs orgs})))))))
