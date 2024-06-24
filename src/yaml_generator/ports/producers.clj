(ns yaml-generator.ports.producers
  (:require [com.moclojer.components.publisher :as publisher]))

(defn generate-unified-yml!
  [gen-yml-path append? publisher ctx]
  (publisher/publish! publisher "yml.single.generated"
                      {:event {:gen-yml-path gen-yml-path
                               :append? append?
                               :ctx ctx}}))

(defn restart-mock!
  [publisher ctx]
  (publisher/publish! publisher "restart.mocks"
                      {:event {:path "moclojer.yml"
                               :ctx ctx}}))

(defn set-unification-status!
  [mock-id new-status publisher ctx]
  (publisher/publish! publisher "yml.unified.generated"
                      {:event {:mock.unification-status
                               {:mock-id mock-id
                                :new-status new-status
                                :ctx ctx}}}))
