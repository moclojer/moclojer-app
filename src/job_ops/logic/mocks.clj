(ns job-ops.logic.mocks)

(defn pack-domain
  [{:keys [wildcard subdomain]}]
  (str wildcard "-" subdomain))

(defn group-by-user [mocks]
  (reduce
   (fn [acc mock]
     (if-let [user-id (:mock/user_id mock)]
       (update-in acc [user-id] conj (:mock/id mock))
       acc))
   {} mocks))
