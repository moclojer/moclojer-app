(ns job-ops.controllers.mocks
  (:require [com.moclojer.components.logs :as logs]
            [job-ops.adapters.mocks :as adapters.mocks]
            [job-ops.db.mocks :as db.mocks]
            [job-ops.logic.mocks :as logic.mocks]
            [job-ops.ports.producers :as ports.producers]))

(def ^:private still-verifying-all? (atom false))

(defn dispatch-domains-verification!
  "Dispatches batches of 10 mock domains for verification to avoid overloading providers. 
  Sleeps for 30 seconds between batches, based on the median verification time for a mock domain."
  [{:keys [database mq]} ctx]
  (if-not @still-verifying-all?
    (do
      (reset! still-verifying-all? true)
      (let [defective-mocks (db.mocks/get-mocks-by-publication
                             :dns_status
                             ["offline" "offline-invalid" "publishing"]
                             database
                             ctx)]
        (future
          (loop [batch 0]
            (let [cur-mocks (->> (drop (* batch 10) defective-mocks)
                                 (take 10))]
              (if (>= (count cur-mocks) 1)
                (do
                  (doseq [mock cur-mocks]
                    (-> (adapters.mocks/->wire mock)
                        logic.mocks/pack-domain
                        (ports.producers/verify-domain! true false mq ctx)))
                  (Thread/sleep 30000)
                  (recur (inc batch)))
                (reset! still-verifying-all? false)))))))
    (logs/log :info "still verifying all. skipping for now...")))

(defn dispatch-unified-yml-verification!
  "Gathers published mocks and dispatches them for unified YAML verification."
  [{:keys [database mq]} ctx]
  (let [published-mocks (db.mocks/get-mocks-by-publication :unification_status
                                                           ["published"]
                                                           database
                                                           ctx)
        grouped-mocks (logic.mocks/group-by-user published-mocks)]
    (ports.producers/verify-unified-yml! grouped-mocks mq ctx)))
