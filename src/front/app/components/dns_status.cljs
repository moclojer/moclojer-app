(ns front.app.components.dns-status
  (:require [front.app.dashboard.components :as dash-comps]
            [front.app.lib :refer [defnc]]
            [helix.core :refer [$]]
            [helix.hooks :as hooks]
            [refx.alpha :as refx]))

(defnc mock-dns-status
  "There are 3 possible DNS status:

   1. offline
   2. offline-invalid
   2. publishing
   3. published

   A mock is offline only if its not enabled, not
   saved yet, or invalid. When saved, we ping the
   domain, and while not returning a 200 OK for
   the max of 24 attempts, it will be :publishing,
   or :published otherwise.

   When :offline, it will try to ping as well,
   since newly created mocks are offline, but
   they do need to be pinged."
  [{:keys [children enabled id]}]
  (let [[enabled id] (if children
                       [(:enabled children) (:id children)]
                       [enabled id])
        {:keys [publication attempt]
         :or {attempt 0}} (refx/use-sub [:app.dashboard/mock-pub-stts id])
        loading? (and enabled (< attempt 24)
                      (some #(= % publication) ["publishing" "offline"]))]

    (hooks/use-effect
      [publication attempt]
      (when loading?
        (js/setTimeout #(refx/dispatch
                         [:app.dashboard/get-mock-pub-stts
                          {:mock-id id}])
                       5000)))

    ($ dash-comps/dns-status
       {:status (if enabled
                  (or (keyword publication) :publishing)
                  :offline)
        :loading? loading?})))

