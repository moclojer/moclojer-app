(ns back.api.schemas.wire-in)

(def AuthLogin
  [:map
   [:access-token string?]])

(def Mock
  [:map
   [:subdomain string?]
   [:wildcard string?]
   [:content {:optional true} string?]])

(def MockUpdate
  [:map
   [:content {:optional true} string?]])
