(ns cloud-ops.api.logic.cloudflare)

(defn domain-exists?
  "Verifies if domain is already in record list"
  [records domain]
  (let [complete-domain (str domain ".moclojer.com")]
    (-> #(= (:name %) complete-domain)
        (filter records)
        seq)))
