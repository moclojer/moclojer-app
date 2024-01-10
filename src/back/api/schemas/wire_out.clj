(ns back.api.schemas.wire-out)

(def APIError
  [:map
   [:message string?]
   [:cause string?]
   [:value any?]])

(def Available
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

(def MockDeleteUnauthorized
  [:map [:error string?]])

(def GroupedMockAPI
  [:and
   [:map
    [:id uuid?]
    [:wildcard string?]
    [:url string?]
    [:content {:optional true} string?]
    [:subdomain string?]
    [:enabled boolean?]]
   [:fn (fn [{:keys [wildcard url subdomain]}]
          (= (str wildcard "-" subdomain ".moclojer.com") url))]])

(def GroupedMock
  [:map
   [:subdomain string?]
   [:mock-type string?]
   [:apis [:vector GroupedMockAPI]]])

(def GroupedMocks
  [:vector GroupedMock])

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

  (m/validate Mock mock)

  (m/validate GroupedMock
              {:subdomain "j0suetm"
               :mock-type "personal"
               :apis [{:id #uuid "19b3a076-8fd6-4b46-94fa-3650419b2a8f",
                       :wildcard "teste"
                       :subdomain "j0suetm"
                       :url "teste.j0suetm.moclojer.com"
                       :enabled true}]})

  (m/validate GroupedMocks
              [{:subdomain "j0suetm"
                :mock-type "personal"
                :apis [{:wildcard "teste"
                        :subdomain "j0suetm"
                        :enabled true
                        :url "teste.j0suetm.moclojer.com"
                        :id #uuid "c023eeff-7659-41d6-b2a1-ede27843d9bc"
                        :content "aoetuhaoeu"}
                       {:wildcard "teste2"
                        :subdomain "j0suetm"
                        :url "teste2.j0suetm.moclojer.com"
                        :enabled true
                        :id #uuid "c023eeff-7659-41d6-b2a1-ede27843d9bc"
                        :content "aoetuhaoeu"}]}
               {:subdomain "hahaha"
                :mock-type "personal"
                :apis [{:wildcard "teste"
                        :subdomain "hahaha"
                        :url "teste.hahaha.moclojer.com"
                        :enabled true
                        :id #uuid "c023eeff-7659-41d6-b2a1-ede27843d9bc"
                        :content "aoetuhaoeu"}]}]))
