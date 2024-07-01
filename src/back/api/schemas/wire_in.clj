(ns back.api.schemas.wire-in)

(def AuthLogin
  [:map
   [:access-token string?]])

(def Mock
  [:map
   [:subdomain string?]
   [:wildcard string?]
   [:enabled boolean?]
   [:content {:optional true} string?]])

(def MockCreate
  (conj Mock [:org-id {:optional true} string?]))

(def MockUpdate
  [:map
   [:id string?]
   [:content {:optional true} string?]])

(def MockDelete
  [:map [:id string?]])

(def OrgCreate
  [:map
   [:orgname string?]])

(def OrgUpdate
  [:map
   [:orgname string?]])
