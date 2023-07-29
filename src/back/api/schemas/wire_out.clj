(ns back.api.schemas.wire-out)

(def User
  [:map
   [:uuid string?]
   [:email string?]])

(def Mock
  [:map
   [:id uuid?]
   [:org-id [:maybe uuid?]]
   [:user-id [:maybe uuid?]]
   [:subdomain string?]
   [:url string?]
   [:enabled boolean?]])

(def Mocks
  [:vector Mock])
