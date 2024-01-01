(ns yaml-generator.controllers.yml
  (:require
   [clojure.java.io :as io]
   [components.logs :as logs]
   [components.storage :as storage]
   [yaml-generator.logic.yml :as logic.yml]
   [yaml-generator.ports.producers :as ports.producers]))

(defn generate [{:keys [id user-id wildcard content subdomain enabled]}
                {:keys [storage publisher]}]
  (let [path (str user-id "/" id "/mock.yml")
        host (str wildcard "." subdomain ".moclojer.com")
        content-with-host (logic.yml/add-host host content)
        file-exist? (storage/get-file storage "moclojer" path)]

    (logs/log :info :upload :path path :file-exist? file-exist?)
    (storage/upload! storage "moclojer" path content-with-host)
    (when enabled
      (ports.producers/mock-unified! path publisher))
    (logs/log :info :upload-success :path path)))

(defn generate-unified-yml [{:keys [path]} {:keys [storage]}]
  (let [file-mock (slurp
                   (io/reader
                    (storage/get-file storage "moclojer" path)))
        unified-mock (storage/get-file storage "moclojer" "moclojer.yml")]
    (logs/log :info :generate-unified-yml :path path :mock file-mock)
    (logs/log :info :moclojer :unified unified-mock)
    (if unified-mock
      (->> (logic.yml/to-yaml-string
            (logic.yml/unified-yaml file-mock (slurp (io/reader unified-mock))))
           (storage/upload! storage "moclojer" "moclojer.yml"))
      (storage/upload! storage "moclojer" "moclojer.yml" file-mock))))


