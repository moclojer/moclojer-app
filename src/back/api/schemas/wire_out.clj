(ns back.api.schemas.wire-out)

(def User
  [:map
   [:uuid string?]
   [:email string?]])

(def Mock
  [:map
   [:id uuid?]
   [:name string?]
   [:org string?]
   [:subdomain string?]
   [:published boolean?]])

(def Mocks
  [:vector Mock])
