(ns back.api.routes
  (:require [reitit.swagger :as swagger]
            [schema.core :as s]
            [back.api.healthcheck.ports.http-in :as healthcheck.ports.http-in]
            [back.api.healthcheck.schemas.http-in :as healthcheck.schemas.http-in]))

(def routes
  [["/swagger.json"
    {:get {:no-doc true
           :swagger {:info {:title "api"
                            :description "Api"}}
           :handler (swagger/create-swagger-handler)}}]
   ["/healthcheck"
    {:swagger {:tags ["healthcheck"]}
     :get {:summary "Health check api"
           :responses {200 {:body healthcheck.schemas.http-in/HealthResponse}}
           :handler healthcheck.ports.http-in/say-hello}}]])


