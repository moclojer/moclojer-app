(ns yaml-generator.ports.producers
  (:require [com.moclojer.components.mq :as mq]))

(defn generate-unified-yml!
  [gen-yml-path append? mq ctx]
  (mq/try-op! mq :publish!
              ["yml.single.generated"
               {:event {:gen-yml-path gen-yml-path
                        :append? append?
                        :ctx ctx}}]
              ctx))

(defn restart-mock!
  [mq ctx]
  (mq/try-op! mq :publish!
              ["restart.mocks"
               {:event {:path "moclojer.yml"
                        :ctx ctx}}]
              ctx))

(defn set-unification-status!
  [mock-id new-status mq ctx]
  (mq/try-op! mq :publish!
              ["yml.unified.generated"
               {:event {:mock.unification-status
                        {:mock-id mock-id
                         :new-status new-status
                         :ctx ctx}}}]
              ctx))
