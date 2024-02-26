(ns front.app.dashboard.mocks
  (:require
   [front.app.components.svg :as svg]
   [front.app.dashboard.base :as base]
   [front.app.dashboard.components :as dash-comps]
   [front.app.lib :refer [defnc]]
   [helix.core :refer [$ <>]]
   [helix.dom :as d]
   [helix.hooks :as hooks]
   [refx.alpha :as refx]
   [reitit.frontend.easy :as rfe]))

(defnc mock-dns-status
  "There are 3 possible DNS status:

   1. offline
   2. publishing
   3. published

   A mock is offline only if its not enabled or
   not saved yet. When saved, we ping the domain,
   and while not returning a 200 OK for the max
   of 15 attempts , it will be :publishing, or
   :published otherwise.

   When :offline, it will try to ping as well,
   since newly created mocks are offline, but
   they do need to be pinged."
  [{:keys [enabled id]}]
  (let [{:keys [publication attempt]
         :or {attempt 0}} (refx/use-sub [:app.dashboard/mock-pub-stts id])
        loading? (and enabled (< attempt 15)
                      (some #(= % publication) ["publishing" "offline"]))]

    (hooks/use-effect
     [publication attempt]
     (when loading?
       (js/setTimeout #(refx/dispatch
                        [:app.dashboard/get-mock-pub-stts
                         {:mock-id id}])
                      2000)))

    ($ dash-comps/dns-status
       {:status (if enabled
                  (or (keyword publication) :publishing)
                  :offline)
        :loading? loading?})))

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

                                            ($ mock-dns-status {:enabled enabled
                                                                :id id}))
                                     (d/div {:class (str "w-full flex flex-row font-semibold truncate text-ellipsis lg:mt-0 "
                                                         (if enabled
                                                           "text-gray-900"
                                                           "h-6 text-neutral-400"))}

                                            url))
                              (d/div {:class "w-full text-gray-500 text-sm font-normal lg:mt-2"}
                                     " my first mock server"))))

         (d/button {:class "px-3 py-2 mt-2 rounded-lg border border-gray-200 justify-center items-center gap-2 flex button-remove"
                    :on-click #(refx/dispatch-sync [:app.dashboard/delete-mock {:id id}])}
                   (d/div {:class "text-gray-800 text-sm font-medium leading-[21px]"}
                          "remove")
                   ($ svg/trash))))

(defn mock-svg-by-type [type]
  (case type
    "personal" svg/personal-mock
    :else svg/org-mock))

(defnc apis-mocks [{:keys [subdomain mock-type apis]}]
  (d/div {:id "custom-mock"
          :class (str "w-full px-6 py-4 bg-white rounded-lg shadow flex-col justify-center items-start inline-flex "
                      "lg:p-8")
          :key (str subdomain)}
         (d/div {:class "self-stretch justify-start items-center gap-[15px] inline-flex"}
                ($ (mock-svg-by-type mock-type))
                (d/div {:class "w-full self-stretch text-gray-900 text-xl font-bold leading-[30px]"} subdomain))
         (for [{:keys [enabled url id]} apis]
           (<> {:key id}
               ($ api-mock {:enabled enabled :url url :id id})))
         (d/div {:class "self-stretch pt-6 justify-start items-start inline-flex text-white text-xs font-bold leading-[18px]"}
                (d/button {:class "px-3 py-2 bg-pink-600 rounded-lg justify-end items-center gap-2 flex btn-add"
                           :on-click (fn [_] (refx/dispatch [:app.dashboard/toggle-mock-modal]))}
                          (d/svg {:width "16"
                                  :height "17"
                                  :viewBox "0 0 16 17"
                                  :fill "none"}
                                 (d/path {:fill-rule "evenodd"
                                          :clip-rule "evenodd"
                                          :d "M8 4.5C8.21217 4.5 8.41566 4.58429 8.56569 4.73431C8.71571 4.88434 8.8 5.08783 8.8 5.3V7.7H11.2C11.4122 7.7 11.6157 7.78429 11.7657 7.93431C11.9157 8.08434 12 8.28783 12 8.5C12 8.71217 11.9157 8.91566 11.7657 9.06569C11.6157 9.21571 11.4122 9.3 11.2 9.3H8.8V11.7C8.8 11.9122 8.71571 12.1157 8.56569 12.2657C8.41566 12.4157 8.21217 12.5 8 12.5C7.78783 12.5 7.58434 12.4157 7.43431 12.2657C7.28429 12.1157 7.2 11.9122 7.2 11.7V9.3H4.8C4.58783 9.3 4.38434 9.21571 4.23431 9.06569C4.08429 8.91566 4 8.71217 4 8.5C4 8.28783 4.08429 8.08434 4.23431 7.93431C4.38434 7.78429 4.58783 7.7 4.8 7.7H7.2V5.3C7.2 5.08783 7.28429 4.88434 7.43431 4.73431C7.58434 4.58429 7.78783 4.5 8 4.V4.Z"
                                          :fill "white"}))
                          (d/span
                           " new mock")
                          ($ svg/box)))))

(defnc mocks []
  (let [current-user (refx/use-sub [:app.auth/current-user])
        mocks (refx/use-sub [:app.dashboard/mocks])
        loading-mocks? (refx/use-sub [:app.dashboard/loading-mocks?])]

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
       (d/div {:class "flex flex-col lg:p-8"}
              (if (and (some? mocks) (not loading-mocks?))
                (for [{:keys [mock-type subdomain apis] :or {mock-type "personal"}} mocks]
                  (<> {:key subdomain}
                      ($ apis-mocks {:mock-type mock-type :subdomain subdomain :apis apis})))
                (d/p {:class "todo"}
                     "loading..."))))))
