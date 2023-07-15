(ns back.api.adapters.files)

(defn- ->url [base-url uuid]
  (str base-url "/files/download?uuid=" uuid))

(defn ->wire
  [{:file/keys [uuid]} {:keys [base-url]}]
  {:uuid uuid
   :url (->url base-url uuid)})
