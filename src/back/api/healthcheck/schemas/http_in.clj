(ns back.api.healthcheck.schemas.http-in)

(def Content
  [:map
   [:content string?]])

(def HealthResponse
  [:map
   [:data Content]])

