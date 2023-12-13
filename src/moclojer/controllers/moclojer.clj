(ns moclojer.controllers.moclojer
  (:require [clj-yaml.core :as yaml]
            [clojure.java.io :as io]
            [components.storage :as storage]))

(defn write-on-disk [mock]
  (spit "resources/moclojer.yml" mock))

(defn write-file-on-disk
  [{:keys [_event]}
   {:keys [storage]}]
  (let [mock (slurp
              (io/reader
               (storage/get-file storage "moclojer" "moclojer.yml")))]
    (when mock
      (-> (yaml/parse-string mock)
          (write-on-disk)))))
