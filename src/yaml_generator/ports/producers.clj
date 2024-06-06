(ns yaml-generator.ports.producers
  (:require [com.moclojer.components.publisher :as publisher]))

(defn generate-unified-yml!
  [gen-yml-path append? publisher]
  (publisher/publish! publisher "yml.single.generated"
                      {:event {:gen-yml-path gen-yml-path
                               :append? append?}}))

(defn restart-mock!
  [publisher]
  (publisher/publish! publisher "restart.mocks"
                      {:event {:path "moclojer.yml"}}))

(defn set-unification-status!
  [mock-id new-status publisher]
  (publisher/publish! publisher "yml.unified.generated"
                      {:event {:mock.unification-status
                               {:mock-id mock-id
                                :new-status new-status}}}))
