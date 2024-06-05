(ns front.app.components.publication-status
  (:require [front.app.dashboard.components :as dash-comps]
            [front.app.lib :refer [defnc]]
            [helix.core :refer [$]]
            [helix.hooks :as hooks]
            [refx.alpha :as refx]))

(defnc publication-status
  "There are 4 possible status:

   1. offline
   2. offline-invalid
   3. publishing
   4. published

   A mock is offline only if its not enabled, not
   saved yet, or invalid. When saved, we ping the
   domain, and while not returning a 200 OK for
   the max of 24 attempts, it will be :publishing,
   or :published otherwise.

   When :offline, it will try to ping as well,
   since newly created mocks are offline, but
   they do need to be pinged."
  [{:keys [children enabled id stt-type title]
    :or {enabled (:enabled children)
         id (:id children)
         stt-type (:stt-type children)
         title (:title children)}}]
  (let [{:keys [attempt]
         :or {attempt 0}
         :as pub-stt} (refx/use-sub [:app.dashboard/mock-pub-stts id])
        status (get pub-stt stt-type)
        loading? (and enabled (< attempt 24)
                      (some #(= % status)
                            ["publishing" "offline"]))]

    (hooks/use-effect
      [status attempt]
      (when loading?
        (js/setTimeout #(refx/dispatch
                         [:app.dashboard/get-mock-pub-stts
                          {:mock-id id}])
                       5000)))

    ($ dash-comps/status-card
       {:status (if enabled
                  (or (keyword status) :publishing)
                  :offline)
        :loading? loading?
        :title title})))

