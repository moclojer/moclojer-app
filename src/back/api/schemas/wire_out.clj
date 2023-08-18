(ns back.api.schemas.wire-out)

(def User
  [:map
   [:uuid string?]
   [:email string?]
   [:username {:optional true} string?]])

(def Mock
  [:map
   [:id uuid?]
   [:name string?]
   [:org string?]
   [:subdomain string?]
   [:published boolean?]])

(def Mocks
  [:vector Mock])

(comment

  (def user-example {:uuid "uuid"
                     :email "email"
                     :username "username"})

  (def user-example-2 {:uuid "uuid"
                       :email "email"})

  (require '[malli.core :as m])
  (m/validate User user-example) ; => true

  (m/validate User user-example-2) ; => true 
  )
