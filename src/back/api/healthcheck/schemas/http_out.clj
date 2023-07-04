(ns back.api.healthcheck.schemas.http-out)

(def Content
  [:map
   [:content string?]])

(def HealthResponse
  [:map
   [:data Content]])

