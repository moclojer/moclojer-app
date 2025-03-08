(ns front.app.dashboard.views
  (:require
   [mockingbird.components.button :refer [button]]
   [mockingbird.components.message :refer [message]]
   [mockingbird.lib :refer-macros [defnc]]
   [front.app.components.svg :as svg]
   [front.app.dashboard.base :as base]
   [front.app.components.messages :refer [blogpost-message]]
   [helix.core :refer [$]]
   [helix.dom :as d]
   [refx.alpha :as refx]))

(defnc welcome []
  ($ base/index
     (d/main
      ($ message
         {:title "Welcome to moclojer beta"
          :email "avelino@moclojer.com"
          :author "Avelino"
          :image "/images/users/avatar.png"
          :image-style "rounded"
          :message ["I'm happy to have you here, we are launching the SaaS version of moclojer, seeking to make it simple for you to put a mock API in the air to develop your projects."
                    "I look forward to your feedback (this is the only way we can improve the product)."]})
      (d/div {:class "pb-4"}
             ($ blogpost-message
                {:title (d/span {:class "flex items-center space-x-2 "} (d/p "New Moclojer Sync Feature") ($ svg/github {:class "w-6 h-6 "}))
                 :email "team@moclojer.com"
                 :author "Moclojer Team"
                 :image "/images/default-pfp.png"
                 :image-style "rounded"
                 :link "https://github.com/moclojer/moclojer-app"
                 :message [(d/span "We are happy to announce we are releasing a new (work in progress) feature. " (d/span {:class "font-bold"} "Github Synchronization"))
                           "Take a look at the documentation and help us improve this project by giving your feedback"]}
                ($ button {:class "text-gray-500 px-4 py-2 border border-gray-500 rounded-lg hover:bg-gray-200 flex space-x-2 items-center justify-center transition duration-75 "
                           :theme :mockingbird
                           :type :icon
                           :size :md
                           :on-click #(refx/dispatch-sync [:app.dashboard/toggle-git-docs])}
                   (d/p {:class "text-center"} "docs")
                   ($ svg/book {:class "w-6 h-6 "})))))))
