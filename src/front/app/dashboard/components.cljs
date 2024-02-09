(ns front.app.dashboard.components
  (:require
   [clojure.string :as str]
   [front.app.auth.supabase :as supabase]
   [front.app.components.svg :as svg]
   [front.app.lib :refer [defnc]]
   [helix.core :refer [$]]
   [helix.dom :as d]
   [helix.hooks :as hooks]
   [promesa.core :as p]
   [refx.alpha :as refx]
   [reitit.frontend.easy :as rfe]))

(def gravatar-base-url "https://gravatar.com/avatar/")
(def auth0-cdn-base-url "https://cdn.auth0.com/avatars/")

(defn get-simple-avatar-url [username]
  (let [uq-names (-> username
                     (str/split #" "))
        initials (->> uq-names
                      (take 2)
                      (map #(take 1 %))
                      flatten
                      (str/join "")
                      str/lower-case)]
    (str auth0-cdn-base-url initials ".png")))

(defnc user-profile [{:keys [user-data]}]
  (let [[pfp-url set-pfp-url!] (hooks/use-state nil)
        username (:username user-data)
        default-pfp-url (if username
                          (get-simple-avatar-url username)
                          "/images/default-pfp.png")
        pfp-loading? (and (nil? pfp-url) (not= pfp-url default-pfp-url))]

    ;; https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest
    ;; https://cdn.auth0.com/avatars/jt.png
    (hooks/use-effect
     [pfp-url]
     (when (and pfp-loading? (nil? pfp-url))
       (if-let [email (some->> (:email user-data)
                               str/trim
                               str/lower-case
                               (.encode (js/TextEncoder. "utf-8")))]
         (-> (.digest (.-subtle js/crypto) "SHA-256" email)
             (p/then
              (fn [hash-buf]
                (-> (.from js/Array (js/Uint8Array. hash-buf))
                    (.map #(-> (.toString % 16)
                               (.padStart 2 "0")))
                    (.join ""))))
             (p/then
              (fn [hex]
                (set-pfp-url! (str gravatar-base-url hex
                                   "?default=" default-pfp-url))))
             (p/catch
              (fn [err]
                (.log js/console "failed to digest email hash:" err)
                (set-pfp-url! default-pfp-url))))
         (set-pfp-url! default-pfp-url))))

    (d/div {:class-name "hidden lg:block"}
           (d/button {:type "button"
                      :class-name "flex text-sm bg-gray-800 aspect-square rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                      :id "user-menu-button-2"
                      :aria-expanded "false"
                      :data-dropdown-toggle "dropdown-2"}
                     (d/span {:class-name "sr-only"} "Open user menu")
                     (d/img {:class-name (str "w-8 h-8 rounded-full opacity-100"
                                              (when pfp-loading? " opacity-30 animate-pulse"))
                             :src (if pfp-loading?
                                    "/images/default-pfp.png"
                                    pfp-url)}))
           (d/div {:class-name "hidden z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                   :id "dropdown-2"}
                  (d/div {:class-name "py-3 px-4" :role "none"}
                         (d/p {:class-name "text-sm font-medium text-gray-900 truncate dark:text-gray-300" :role "none"}
                              (:email user-data)))
                  (d/ul {:class-name "py-1" :role "none"}
                        (d/li
                         (d/a {:href ""
                               :class-name "block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                               :role "menuitem"}
                              "Settings"))

                        (d/li

                         (d/button
                          {:class-name "w-full block py-2 px-4 text-sm text-left text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                           :on-click (fn [e]
                                       (.preventDefault e)
                                       (supabase/sign-out
                                        #(refx/dispatch-sync [:app.auth/logout %])))
                           :role "menuitem"}
                          "Logout")))))))

(defnc new-mock-btn []
  (d/button {:class-name "px-3 py-2 bg-pink-600 rounded-lg flex flex-row space-x-2 items-center btn-add"
             :on-click #(refx/dispatch [:app.dashboard/toggle-mock-modal])}
            (d/svg {:width "16"
                    :height "17"
                    :viewBox "0 0 16 17"
                    :fill "none"}
                   (d/path {:fill-rule "evenodd"
                            :clip-rule "evenodd"
                            :d "M8 4.5C8.21217 4.5 8.41566 4.58429 8.56569 4.73431C8.71571 4.88434 8.8 5.08783 8.8 5.3V7.7H11.2C11.4122 7.7 11.6157 7.78429 11.7657 7.93431C11.9157 8.08434 12 8.28783 12 8.5C12 8.71217 11.9157 8.91566 11.7657 9.06569C11.6157 9.21571 11.4122 9.3 11.2 9.3H8.8V11.7C8.8 11.9122 8.71571 12.1157 8.56569 12.2657C8.41566 12.4157 8.21217 12.5 8 12.5C7.78783 12.5 7.58434 12.4157 7.43431 12.2657C7.28429 12.1157 7.2 11.9122 7.2 11.7V9.3H4.8C4.58783 9.3 4.38434 9.21571 4.23431 9.06569C4.08429 8.91566 4 8.71217 4 8.5C4 8.28783 4.08429 8.08434 4.23431 7.93431C4.38434 7.78429 4.58783 7.7 4.8 7.7H7.2V5.3C7.2 5.08783 7.28429 4.88434 7.43431 4.73431C7.58434 4.58429 7.78783 4.5 8 4.5V4.5Z"
                            :fill "white"}))
            (d/p {:class-name "text-white text-xs font-bold"}
                 " new mock")
            ($ svg/box)))

(defnc nav-bar [{:keys [aside-open? toggle-aside! user-data]}]
  (d/nav
   {:class-name "fixed z-30 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700"}
   (d/div
    {:class-name "py-3 px-3 lg:px-5 lg:pl-3"}
    (d/div
     {:class-name "flex justify-between items-center"}
     (d/div {:class-name "flex justify-start items-center"}
            (d/button {:id "toggleSidebar"
                       :aria-expanded "true"
                       :aria-controls "sidebar"
                       :on-click #(toggle-aside! not)
                       :class (str "p-2 mr-3 text-gray-600 rounded cursor-pointer "
                                   "hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 "
                                   "dark:hover:text-white dark:hover:bg-gray-700 lg:hidden")}
                      (if aside-open?
                        ($ svg/hamburger-menu-close)
                        ($ svg/hamburger-menu)))
            (d/button {:class-name "flex"
                       :on-click #(rfe/push-state :app.core/dashboard)}
                      (d/img {:src "/images/logo.svg"
                              :class-name "mr-3 h-9"})))
     (d/div {:class-name "flex items-center lg:gap-3"}
            ($ new-mock-btn)
            ($ user-profile {:user-data user-data}))))))

(defnc aside [{:keys [aside-open? toggle-aside!]}]
  (let [mocks-raw (refx/use-sub [:app.dashboard/mocks-raw])
        menu-open? (refx/use-sub [:app.dashboard/is-menu-open?])
        current-user (refx/use-sub [:app.auth/current-user])
        [window-size set-window-size!] (hooks/use-state {:width 0 :height 0})
        mobile? (<= (:width window-size) 1000)]

    (hooks/use-effect
     :once
     (let [handle-resize-fn #(set-window-size! {:width (.-innerWidth js/window)
                                                :height (.-innerHeight js/window)})]
       (.addEventListener js/window "resize" handle-resize-fn)
       (handle-resize-fn)

       #(.removeEventListener js/window "resize " handle-resize-fn)))

    (hooks/use-effect
     [mocks-raw]
     (when (nil? mocks-raw)
       (refx/dispatch-sync [:app.dashboard/get-mocks current-user])))

    (d/div {:class-name "flex overflow-hidden pt-16 bg-gray-50 dark:bg-gray-900"}
           (d/aside {:id "sidebar"
                     :on-mouse-enter #(when (and (not mobile?)
                                                 (not aside-open?)) (toggle-aside! true))
                     :on-mouse-leave #(when (and (not mobile?)
                                                 aside-open?) (toggle-aside! false))
                     :class (str "fixed top-0 left-0 z-20 flex-col flex-shrink-0 pt-16 w-full h-full duration-75 transition-width "
                                 (if aside-open? "flex lg:w-64" "hidden lg:flex lg:w-16"))
                     :aria-label "Sidebar"}
                    (d/div {:class-name "flex relative flex-col flex-1 pt-0 min-h-0 bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700"}
                           (d/div {:class-name "flex overflow-y-auto flex-col flex-1 pt-5 pb-4"}
                                  (d/div {:class-name "flex-1 px-3 space-y-1 bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700"}
                                         (d/ul {:class-name "pb-2 space-y-2"}
                                               (d/li
                                                (d/button {:class-name "w-full flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700"
                                                           :on-click #(do
                                                                        (rfe/push-state :app.core/dashboard)
                                                                        (toggle-aside! false))}
                                                          ($ svg/house)
                                                          (d/span {:class-name (str "ml-3 "
                                                                                    (when-not aside-open?
                                                                                      "lg:hidden lg:absolute"))} "Home")))
                                               (d/li
                                                (d/div {:class "flex flex-row"}
                                                       (d/button
                                                        {:on-click #(do (rfe/push-state :app.core/mocks)
                                                                        (toggle-aside! false))
                                                         :class-name "flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                                                         :aria-controls "dropdown-mocks"
                                                         :aria-expanded aside-open?
                                                         :data-collapse-toggle "dropdown-mocks"}
                                                        ($ svg/mock-list-box)
                                                        (d/span {:class-name (str "flex-1 ml-3 text-left whitespace-nowrap "
                                                                                  (when-not aside-open?
                                                                                    "lg:hidden lg:absolute"))} "Mocks"))
                                                       (d/button {:class "px-2 rounded-lg fill-gray-200 bg-transparent hover:bg-gray-200 hover:fill-gray-400"
                                                                  :on-click #(refx/dispatch-sync [:app.dashboard/toggle-menu])}
                                                                 ($ svg/arrow {:direction (if menu-open? :up :down)})))
                                                (d/ul {:id "dropdown-mocks"
                                                       :class-name (str "py-2 space-y-2"
                                                                        (when (or (not menu-open?) (not aside-open?)) " hidden"))}
                                                      (if (empty? mocks-raw)
                                                        (d/div {:class "w-full pl-11 space-y-2"}
                                                               (d/p {:class "text-gray-700 text-sm"} "You currently don't have any mocks. Create one!")
                                                               ($ new-mock-btn))
                                                        (for [{:keys [mock-type wildcard id]
                                                               :or {mock-type :personal}} mocks-raw]
                                                          (d/li
                                                           {:key wildcard}
                                                           (d/button {:on-click #(rfe/push-state :app.core/mocks-view {:mock-id id})
                                                                      :class-name (str "pl-11 w-full flex items-center overflow-hidden ellipsis p-2 "
                                                                                       "text-base font-normal text-gray-900 rounded-lg transition "
                                                                                       "duration-75 group hover:bg-gray-100 dark:text-gray-200 "
                                                                                       "dark:hover:bg-gray-700")}
                                                                     (if (= mock-type :personal)
                                                                       ($ svg/personal-mock)
                                                                       ($ svg/org-mock))
                                                                     (d/span {:class-name "flex-1 ml-3 text-left truncate"} wildcard))))))))
                                         (d/div {:class-name "pt-2 space-y-2"}
                                                (d/a {:href "https://docs.moclojer.com/"
                                                      :target "_blank"
                                                      :class-name "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700"}
                                                     (d/svg {:class-name "flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                                                             :fill "currentColor"
                                                             :viewBox "0 0 20 20"}
                                                            (d/path {:d "M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"})
                                                            (d/path {:d "M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                                                                     :clip-rule "evenodd"}))
                                                     (d/span {:class-name
                                                              (str "ml-3 "
                                                                   (when-not aside-open?
                                                                     "lg:hidden lg:absolute"))}
                                                             "Docs"))
                                                (d/a {:href "https://discord.gg/pbhBzKjhTb"
                                                      :target "_blank"
                                                      :class-name "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700"}
                                                     (d/svg {:class-name "flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                                                             :fill "currentColor"
                                                             :viewBox "0 0 20 20"}
                                                            (d/path {:fill-rule "evenodd"
                                                                     :d "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z"}))
                                                     (d/span
                                                      {:class-name
                                                       (str "ml-3 "
                                                            (when-not aside-open?
                                                              "lg:hidden lg:absolute"))}
                                                      "Help")))))
                           (d/div {:class-name (str  "absolute bottom-0 left-0 justify-center p-4 space-x-4 w-full lg:flex"
                                                     (when aside-open?
                                                       " flex-col space-y-4 p-2"))}
                                  (d/button
                                   {:on-click (fn [e]
                                                (.preventDefault e)
                                                (supabase/sign-out
                                                 #(refx/dispatch-sync [:app.auth/logout %])))
                                    :class-name "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700"}
                                   (d/svg {:class-name "flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                                           :fill "currentColor"
                                           :viewBox "0 0 20 20"}
                                          (d/path {:fill-rule "evenodd"
                                                   :d "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z"}))
                                   (when aside-open?
                                     (d/span {:class-name "ml-3"}
                                             "Logout")))))))))

(defnc dns-status [{:keys [status loading?]}]
  (d/div {:class (str "px-3 mr-2 flex flex-row space-x-2 items-center rounded-md dns-"
                      (name status) (when loading? " opacity-70 animate-pulse"))}
         ($ (case status
              :offline svg/dns-offline
              :publishing svg/dns-publishing
              :published svg/dns-published
              :default svg/dns-offline))
         (d/p {:class "text-sm font-semibold"} "DNS")))
