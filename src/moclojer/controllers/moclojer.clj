(ns moclojer.controllers.moclojer
  (:require [clojure.java.io :as io]
            [components.logs :as logs]
            [components.storage :as storage]))

(defn write-on-disk [storage]
  (let [string-mock (storage/get-file storage "moclojer" "moclojer.yml")]
    (logs/log :info :moclojer :found string-mock)
    (when string-mock
      (->>
       (slurp
        (io/reader string-mock))
       (spit "resources/moclojer.yml")))))

(defn write-file-on-disk
  [{:keys [_event]}
   {:keys [storage]}]
  (write-on-disk storage))
