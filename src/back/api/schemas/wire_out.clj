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

(def PublicationStatus
  [:enum "offline" "offline-invalid" "publishing" "published"])

(def MockPublicationStatus
  [:map
   [:dns-status PublicationStatus]
   [:unification-status PublicationStatus]])

(def Mock
  [:map
   [:id uuid?]
   [:user-id uuid?]
   [:wildcard string?]
   [:content {:optional true} string?]
   [:subdomain string?]
   [:enabled boolean?]
   [:dns-status PublicationStatus]
   [:unification-status PublicationStatus]])

(def MockDeleteUnauthorized
  [:map [:error string?]])

(def GroupedMockAPI
  [:map
   [:id uuid?]
   [:wildcard string?]
   [:url string?]
   [:content {:optional true} string?]
   [:subdomain string?]
   [:enabled boolean?]
   [:dns-status PublicationStatus]
   [:unification-status PublicationStatus]])

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
  (require '[malli.generator :as mg])
  (m/validate User user-example)

  (m/validate User user-example-2)

  (def mock  {:id #uuid "19b3a076-8fd6-4b46-94fa-3650419b2a8f",
              :user-id #uuid "cd989358-af38-4a2f-a1a1-88096aa425a7",
              :wildcard "test"
              :subdomain "chico",
              :enabled true
              :dns-status "published"
              :unification-status "published"})

  (m/validate Mock mock)

  (m/explain GroupedMock
             {:subdomain "j0suetm"
              :mock-type "personal"
              :apis [{:id #uuid "19b3a076-8fd6-4b46-94fa-3650419b2a8f"
                      :wildcard "teste"
                      :subdomain "j0suetm"
                      :url "teste.j0suetm.moclojer.com"
                      :enabled true
                      :dns-status "published"
                      :unification-status "offline"}]})

  (m/explain GroupedMocks
             [{:subdomain "j0suetm"
               :mock-type "personal"
               :apis [{:id (random-uuid)
                       :wildcard "teste"
                       :url "teste.j0suetm.moclojer.com"
                       :content "aoetuhaoeu"
                       :subdomain "j0suetm"
                       :enabled true
                       :dns-status "offline"
                       :unification-status "offline"}
                      {:id (random-uuid)
                       :wildcard "teste2"
                       :url "teste2.j0suetm.moclojer.com"
                       :content "aoetuhaoeu"
                       :subdomain "j0suetm"
                       :enabled true
                       :dns-status "offline"
                       :unification-status "offline"}]}
              {:subdomain "hahaha"
               :mock-type "personal"
               :apis [{:id (random-uuid)
                       :wildcard "teste2"
                       :url "teste2.j0suetm.moclojer.com"
                       :subdomain "j0suetm"
                       :enabled true
                       :content "aoetuhaoeu"
                       :dns-status "offline"
                       :unification-status "offline"}]}])

  (m/explain MockPublicationStatus
             {:dns-status "offline", :unification-status "published"})

  ;;
  )
