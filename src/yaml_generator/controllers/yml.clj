(ns yaml-generator.controllers.yml
  (:require [components.logs :as logs]
            [components.storage :as storage]))

 ; #TODO for now i'm sending on the message the content (yml) but it can grow remove it to get from db
(defn generate [message {:keys [database storage]}]
  (let [{:keys [id user-id content enable] :as msg} message
        path (str user-id "/" id "/mock.yml")
        file-exist? (storage/get-file storage "moclojer" path)]
    (logs/log :info :upload :path path :file-exist? file-exist?)
    ;; every time the message is received, it will be uploaded to the storage
    ;;and will overwrite the previous one
    (when enable
      (storage/upload! storage "moclojer" path content))))
