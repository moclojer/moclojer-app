(ns front.app.dashboard.mocks
  (:require
   [mockingbird.components.button :refer [button]]
   [front.app.components.status :refer [publication-status]]
   [front.app.components.svg :as svg]
   [front.app.dashboard.base :as base]
   [front.app.lib :refer [defnc]]
   [helix.core :refer [$ <>]]
   [helix.dom :as d]
   [helix.hooks :as hooks]
   [refx.alpha :as refx]
   [reitit.frontend.easy :as rfe]))

(defnc api-mock [{:keys [enabled url id]}]
  (d/div {:class (str "w-full py-4 bg-white border-b border-gray-200 flex flex-col items-left cursor-pointer "
                      "lg:flex-row lg:justify-between")
          :id id
          :key id}
         (d/div {:class "flex flex-col items-left lg:flex-row"
                 :on-click (fn [_] (rfe/push-state :app.core/mocks-view {:mock-id id}))}
                (d/div {:class "flex flex-row items-center lg:space-x-4"}
                       (d/div {:class "hidden lg:block"}
                              (if enabled
                                ($ svg/mock-enabled)
                                ($ svg/mock-disabled)))

                       (d/div {:class "flex flex-col"}
                              (d/div {:class "flex flex-col lg:flex-row"}
                                     (d/div {:class "flex flex-row"}
                                            (d/div {:class "lg:hidden mr-2"}
                                                   (if enabled
                                                     ($ svg/mock-enabled)
                                                     ($ svg/mock-disabled)))

                                            ($ publication-status
                                               {:enabled enabled
                                                :id id
                                                :stt-type :dns-status
                                                :title "DNS"})

                                            ($ publication-status
                                               {:enabled enabled
                                                :id id
                                                :stt-type :unification-status
                                                :title "SERVER"}))

                                     (d/div {:class (str "w-full flex flex-row font-semibold truncate text-ellipsis lg:mt-0 "
                                                         (if enabled
                                                           "text-gray-900"
                                                           "h-6 text-neutral-400"))}

                                            url))
                              (d/div {:class "w-full text-gray-500 text-sm font-normal lg:mt-2"}
                                     " my first mock server"))))

         (d/button {:class "px-3 py-2 mt-2 rounded-lg border border-gray-200 justify-center items-center gap-2 flex button-remove"
                    :on-click #(refx/dispatch-sync [:app.dashboard/set-mock-to-delete {:id id}])}
                   (d/div {:class "text-gray-800 text-sm font-medium leading-[21px]"}
                          "remove")
                   ($ svg/trash))))

(defn mock-svg-by-type [type]
  (case type
    "personal" svg/personal-mock
    "org" svg/org-mock
    :else svg/org-mock))

(defnc apis-mocks [{:keys [subdomain mock-type apis org-id]}]
  (d/div {:id "custom-mock"
          :class (str "w-full px-6 py-4 bg-white rounded-lg shadow flex-col justify-center items-start inline-flex "
                      "lg:p-8")
          :key (str subdomain)}
         (d/div {:class "self-stretch justify-start items-center gap-[15px] inline-flex"}
                ($ (mock-svg-by-type mock-type))
                (d/div {:on-click #(when (= mock-type "org") (rfe/push-state :app.core/orgs-view {:org-id org-id}))
                        :class (str "w-full self-stretch text-gray-900 text-xl font-bold leading-[30px] "
                                    (when (= mock-type "org") "hover:cursor-pointer "))} subdomain))
         (for [{:keys [enabled url id]} apis]
           (<> {:key id}
               ($ api-mock {:enabled enabled :url url :id id})))
         (d/div {:class "self-stretch pt-6 justify-start items-start inline-flex text-white text-xs font-bold leading-[18px]"}

                ($ button {:class "px-3 py-2 text-white hover:text-white bg-pink-600 rounded-lg justify-end items-center gap-2 flex btn-add"
                           :theme :mockingbird
                           :on-click (fn [_] (refx/dispatch [:app.dashboard/toggle-mock-modal]))}
                   ($ svg/plus-sign)
                   (d/span
                    " new mock")
                   ($ svg/box)))))

(defnc mocks []
  (let [current-user (refx/use-sub [:app.auth/current-user])
        mocks (refx/use-sub [:app.dashboard/mocks])
        loading-mocks? (refx/use-sub [:app.dashboard/loading-mocks?])
        orgs (into [] (map #(select-keys % [:id]) (refx/use-sub [:app.dashboard/orgs-data])))]

    (hooks/use-effect
      [orgs]
      (when (empty? orgs)
        (refx/dispatch-sync [:app.dashboard/get-orgs])))

    (hooks/use-effect
      [mocks]
      (when (nil? mocks)
        (refx/dispatch-sync [:app.dashboard/get-mocks current-user])))

    (hooks/use-effect
      [mocks loading-mocks?]
      (when (and (or (nil? mocks)
                     (empty? mocks))
                 (not loading-mocks?))
        (refx/dispatch-sync [:app.dashboard/toggle-mock-modal])))

    ($ base/index
       (d/div {:class "flex flex-col lg:p-8 space-y-4"}
              (if (and (some? mocks) (not loading-mocks?))
                (for [{:keys [mock-type subdomain apis] :or {mock-type "personal"}} mocks
                      {:keys [id]} orgs]
                  (<> {:key subdomain}
                      ($ apis-mocks {:mock-type mock-type :subdomain subdomain :apis apis :org-id id}))))))))
