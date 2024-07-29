(ns job-ops.controllers.mocks
  (:require [com.moclojer.components.logs :as logs]
            [job-ops.adapters.mocks :as adapters.mocks]
            [job-ops.db.mocks :as db.mocks]
            [job-ops.logic.mocks :as logic.mocks]
            [job-ops.ports.producers :as ports.producers]))

(def ^:private still-verifying-all? (atom false))

(defn dispatch-domains-verification!
  "Dispatches a batch of 10 mock domains for verification at a time.
  This is so we don't overload our providers. After sending every
  batch, sleeps for 30 seconds, which is the overall median time
  that a mock domain takes to be verified."
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
  "Gathers published mocks and sends them dispatches them to be verified."
  [{:keys [database mq]} ctx]
  (let [published-mocks (db.mocks/get-mocks-by-publication :unification_status
                                                           ["published"]
                                                           database
                                                           ctx)
        grouped-mocks (logic.mocks/group-by-user published-mocks)]
    (ports.producers/verify-unified-yml! grouped-mocks mq ctx)))
