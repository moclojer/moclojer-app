(ns back.api.schemas.wire-in)

(def AuthLogin
  [:map
   [:access-token string?]])

(def Mock
  [:map
   [:subdomain string?]
   [:url string?]])
