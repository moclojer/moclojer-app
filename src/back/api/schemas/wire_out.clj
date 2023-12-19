(ns back.api.schemas.wire-out)

(def UsernameAvailable
  [:map
   [:available boolean?]])

(def User
  [:map
   [:uuid string?]
   [:email string?]
   [:username {:optional true} string?]])

(def Mock
  [:map
   [:id uuid?]
   [:user-id uuid?]
   [:wildcard string?]
   [:content {:optional true} string?]
   [:subdomain string?]
   [:enabled boolean?]])

(def Mocks
  [:vector Mock])

(comment

  (def user-example {:uuid "uuid"
                     :email "email"
                     :username "username"})

  (def user-example-2 {:uuid "uuid"
                       :email "email"})

  (require '[malli.core :as m])
  (m/validate User user-example)

  (m/validate User user-example-2)

  (def mock  {:id #uuid "19b3a076-8fd6-4b46-94fa-3650419b2a8f",
              :user-id #uuid "cd989358-af38-4a2f-a1a1-88096aa425a7",
              :wildcard "test"
              :subdomain "chico",
              :enabled true})

  (m/validate Mock mock))

