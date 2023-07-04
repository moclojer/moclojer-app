(ns back.api.auth.schemas.wire-out)

(def User
  [:map
   [:id string?]
   [:email string?]])
