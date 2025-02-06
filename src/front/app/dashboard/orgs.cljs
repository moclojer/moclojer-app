(ns front.app.dashboard.orgs
  (:require
   [front.app.components.svg :as svg]
   [front.app.dashboard.base :as base]
   [front.app.lib :refer [defnc]]
   [mockingbird.components.button :refer [button]]
   [helix.core :refer [$ <>]]
   [helix.dom :as d]
   [helix.hooks :as hooks]
   [refx.alpha :as refx]
   [reitit.frontend.easy :as rfe]))

(defnc user-li [{:keys [username email]}]
  (d/div {:class "flex flex-row space-x-2 items-center"}
         (d/div {:class (str "px-3 py-1 rounded-full border-2 "
                             (or (first (random-sample 0.5 ["border-blue-500"
                                                            "border-green-500"
                                                            "border-pink-500"
                                                            "border-purple-500"]))
                                 "border-pink-500"))}
                (d/p {:class "text-xs"} username))

         (d/button {:class (str "border-2 px-2 w-max h-max rounded-full z-100 hover:bg-gray-100 "
                                "transition-all duration-75 text-sm text-gray-200 hover:border-gray-400 "
                                "hover:text-gray-400 ")
                    :on-click #(refx/dispatch [:app.dashboard/toggle-settings])}
                   "+")))

(defnc org [{:keys [orgname slug id users]}]
  (let [filtered-users (take 5 users)]
    (d/a {:class "w-full hover:cursor-pointer"
          :on-click (fn [_] (rfe/push-state :app.core/orgs-view {:org-id id}))}
         (d/div {:class "w-full flex flex-col items-start border-b-2 "}
                (d/div {:class "flex justify-between w-full items-center "}
                       (d/div {:class "w-full text-black flex flex-col my-2 space-y-2"}

                              (d/p {:class "font-bold text-black "} orgname)
                              (d/div {:class " h-1/3"}
                                     (for [{:keys [username email]} filtered-users]
                                       (<> {:key username}
                                           ($ user-li {:username username :email email})))))

                       (d/button {:class "px-3 py-2 mt-2 rounded-lg border border-gray-200 justify-center items-center gap-2 flex button-remove "
                                       ;; TODO create this event
                                  :on-click #(refx/dispatch-sync [:app.dashboard/set-org-to-delete {:id id}])}
                                 (d/div {:class "text-gray-800 text-sm font-medium leading-[21px]"}
                                        "remove")
                                 ($ svg/trash)))))))

(defnc user-orgs [{:keys [username orgs]}]
  (d/div {:class (str "w-full h-full px-6 py-4 bg-white rounded-lg shadow flex-col justify-center items-start inline-flex "
                      "lg:p-8 space-y-2")
          :key (str username)}
         (d/div {:class "self-stretch justify-start items-center gap-[15px] inline-flex"}
                (d/div {:class "w-full self-stretch text-gray-900 text-xl font-bold leading-[30px]"} username))
         (for [{:keys [orgname slug users id]} orgs]
           (<> {:key slug}
               ($ org {:orgname orgname :slug slug :id id :users users})))
         (d/div {:class "self-stretch justify-start items-start inline-flex text-white text-xs font-bold leading-[18px]"})

         ($ button {:class "px-3 py-2 text-white hover:text-white bg-pink-600 rounded-lg justify-end items-center gap-2 flex btn-add"
                    :theme :mockingbird
                    :on-click (fn [e] (.preventDefault e)
                                (refx/dispatch-sync [:app.dashboard/toggle-add-user-org-modal]))}
            (d/svg {:width "16"
                    :height "17"
                    :viewBox "0 0 16 17"
                    :fill "none"}
                   (d/path {:fill-rule "evenodd"
                            :clip-rule "evenodd"
                            :d "M8 4.5C8.21217 4.5 8.41566 4.58429 8.56569 4.73431C8.71571 4.88434 8.8 5.08783 8.8 5.3V7.7H11.2C11.4122 7.7 11.6157 7.78429 11.7657 7.93431C11.9157 8.08434 12 8.28783 12 8.5C12 8.71217 11.9157 8.91566 11.7657 9.06569C11.6157 9.21571 11.4122 9.3 11.2 9.3H8.8V11.7C8.8 11.9122 8.71571 12.1157 8.56569 12.2657C8.41566 12.4157 8.21217 12.5 8 12.5C7.78783 12.5 7.58434 12.4157 7.43431 12.2657C7.28429 12.1157 7.2 11.9122 7.2 11.7V9.3H4.8C4.58783 9.3 4.38434 9.21571 4.23431 9.06569C4.08429 8.91566 4 8.71217 4 8.5C4 8.28783 4.08429 8.08434 4.23431 7.93431C4.38434 7.78429 4.58783 7.7 4.8 7.7H7.2V5.3C7.2 5.08783 7.28429 4.88434 7.43431 4.73431C7.58434 4.58429 7.78783 4.5 8 4.V4.Z"
                            :fill "white"}))
            (d/span
             " new org")
            ($ svg/box))))

(defnc orgs-view [props]
  (let [{:keys [route]} props
        {:keys [path-params]} route
        {:keys [org-id]} path-params]
    ($ base/index
       (d/div {:class "flex flex-col lg:p-8"}
              (d/p "ok: " org-id)))))

(defnc orgs []
  (let [current-user (refx/use-sub [:app.auth/current-user])
        username (-> current-user :user :username)
        orgs (refx/use-sub [:app.dashboard/orgs-data])]

    (hooks/use-effect
      []
      (refx/dispatch-sync [:app.dashboard/get-orgs]))

    (hooks/use-effect
      [orgs]
      (when (and (empty? orgs) (not (nil? orgs)))
        (refx/dispatch-sync [:app.dashboard/toggle-org-modal])))

    ($ base/index
       (d/div {:class "flex flex-col lg:p-8"}
              (if (and (some? orgs) (not-empty orgs))
                (<>
                 ($ user-orgs {:username username :orgs orgs})))))))
