(ns front.app.dashboard.views
  (:require
   [mockingbird.components.message :refer [message]]
   [front.app.dashboard.base :as base]
   [mockingbird.lib :refer-macros [defnc]]
   [helix.core :refer [$]]
   [helix.dom :as d]))

(defnc welcome []
   ($ base/index
      (d/main
       ($ message
          {:title "Welcome to moclojer beta"
           :email "avelino@moclojer.com"
           :author "Avelino"
           :image "/images/users/avatar.png"
           :image-style "rounded"
           :message ["I'm happy to have you here, we are launching the SaaS version of moclojer, seeking to make it simple for you to put a mock API in the air to develop your projects." "I look forward to your feedback (this is the only way we can improve the product)."]}))))
