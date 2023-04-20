(ns api.healthcheck.schemas.http-in 
  (:require [schema.core :as s]))


(s/defschema Content 
  {:content s/Str})

(s/defschema HealthResponse 
  {:data Content})
