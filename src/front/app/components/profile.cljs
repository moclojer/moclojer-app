(ns front.app.components.profile
  (:require
   [clojure.string :as str]
   [front.app.auth.supabase :as supabase]
   [front.app.lib :refer [defnc]]
   [mockingbird.components.pfp :refer [pfp]]
   [helix.core :refer [$]]
   [helix.dom :as d]
   [helix.hooks :as hooks]
   [promesa.core :as p]
   [refx.alpha :as refx]))

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
        pfp-loading? (and (nil? pfp-url) (not= pfp-url default-pfp-url))
        [dropdown-open? toggle-dropdown!] (hooks/use-state false)]

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

    (d/div {:class "hidden lg:block"}
           (d/button {:type "button"
                      :class (str "flex text-sm bg-gray-800 aspect-square rounded-full "
                                  (when dropdown-open? "focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"))
                      :on-click #(toggle-dropdown! not)}
                     (d/span {:class "sr-only"} "Open user menu")
                     ($ pfp {:roundness :full
                             :loading? pfp-loading?
                             :src (if (= true pfp-loading?)
                                    "/images/default-pfp.png"
                                    pfp-url)}))
           (d/div {:class (str "absolute z-50 my-4 right-0 text-base list-none bg-white rounded divide-y"
                               "divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 "
                               (when-not dropdown-open? "hidden"))}
                  (d/div {:class "py-3 px-4" :role "none"}
                         (d/p {:class "text-sm font-medium text-gray-900 truncate dark:text-gray-300" :role "none"}
                              (:email user-data)))
                  (d/ul {:class "py-1" :role "none"}
                        (d/li
                         (d/a {:href ""
                               :class (str  "block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 "
                                            "dark:hover:bg-gray-600 dark:hover:text-white transition duration-75")
                               :role "menuitem"
                               :on-click (fn [e]
                                           (.preventDefault e)
                                           (refx/dispatch [:app.dashboard/toggle-settings]))}
                              "Settings"))

                        (d/li
                         (d/button
                          {:class (str "w-full block py-2 px-4 text-sm text-left text-gray-700 hover:bg-gray-100 transition duration-75 "
                                       "dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white")
                           :on-click (fn [e]
                                       (.preventDefault e)
                                       (supabase/sign-out
                                        #(refx/dispatch-sync [:app.auth/logout %])))
                           :role "menuitem"}
                          "Logout")))))))
