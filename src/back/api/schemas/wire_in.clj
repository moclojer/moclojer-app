(ns back.api.schemas.wire-in)

(def AuthLogin
  [:map
   [:access-token string?]
   [:git-username {:optional true} string?]
   [:org-id {:optional true} string?]])

(def Mock
  [:map
   [:subdomain string?]
   [:wildcard string?]
   [:enabled boolean?]
   [:content {:optional true} string?]
   [:sha {:optional true} string?]])

(def MockCreate
  (conj Mock
        [:org-id {:optional true} string?]))

(def MockPush
  [:map
   [:content string?]
   [:git-repo string?]
   [:wildcard string?]])

(def MockUpdate
  [:map
   [:id string?]
   [:content {:optional true} string?]
   [:git-repo {:optional true} string?]
   [:sha {:optional true} string?]])

(def MockDelete
  [:map [:id string?]])

(def OrgCreate
  [:map
   [:orgname string?]])

(def OrgUpdate
  [:map
   [:orgname {:optional true} string?]
   [:git-install-id {:optional true} integer?]])

(def UserUpdate
  [:map
   [:username {:optional true} string?]
   [:install-id {:optional true} integer?]])
