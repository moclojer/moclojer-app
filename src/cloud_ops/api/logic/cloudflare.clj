(ns cloud-ops.api.logic.cloudflare)

(defn domain-exists?
  "Verifies if domain is already in record list"
  [records domain]
  (and
   (seq records)
   (-> #(= (:name %) (str domain ".moclojer.com"))
       (filter records)
       seq)))

(comment
  (domain-exists? [{:name "test-j0suetm"}] "test-j0suetm")
  ;; => ({:name "test-j0suetm"})

  (domain-exists? [] "test-j0suetm")
  ;; => nil
  )
