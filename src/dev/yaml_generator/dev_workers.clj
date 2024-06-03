(ns dev.yaml-generator.dev-workers
  (:require [com.moclojer.components.core :as components]
            [com.moclojer.components.logs :as logs]
            [com.moclojer.components.migrations :as migrations]
            [com.moclojer.components.publisher :as publisher]
            [com.moclojer.components.storage :as storage]
            [com.stuartsierra.component :as component]
            [pg-embedded-clj.core :as pg-emb]
            [yaml-generator.ports.workers :as p.workers]))

;; namespace to publish manually on redis-queue
;; to check some implementation details using repl session
;; create atom
(def system-atom (atom {}))

;; system map
(def system-map
  (component/system-map
   :config (components/new-config "back/config.edn")
   :publisher (component/using (components/new-publisher) [:config])
   :database (component/using (components/new-database) [:config])
   :workers (component/using (components/new-consumer p.workers/workers)
                             [:config :database :storage :publisher])
   :storage (component/using (storage/new-storage) [:config])))

;; start system
(defn start-system-dev! [system-map]
  (components/setup-logger [["*" :info]] :auto :dev)
  (pg-emb/init-pg)
  (migrations/migrate (migrations/build-complete-db-config "back/config.edn"))
  (->> system-map
       component/start
       (reset! system-atom)))

;; stop system
(defn stop-system-dev! []
  (logs/log :info "stopping system")
  (swap!
   system-atom
   (fn [s] (when s (component/stop s))))
  (pg-emb/halt-pg!))

(comment
  (start-system-dev! system-map)

  (def publisher (:publisher @system-atom))

  (def yml "
- endpoint:
    # Note: the method could be omitted because GET is the default
    method: GET
    path: /hello/:username
    response:
      # Note: the status could be omitted because 200 is the default
      status: 200
      headers:
        Content-Type: application/json
      # Note: the body will receive the value passed in the url using the
      # :username placeholder
      body: >
        {
          \"hello\": \"{{path-params.username}}!\"
        }")

  (publisher/publish! publisher
                      :mock.changed {:event
                                     {:user-id #uuid "cd989358-af38-4a2f-a1a1-88096aa425a7",
                                      :id (random-uuid)
                                      :wildcard "test",
                                      :subdomain "chico",
                                      :enabled true,
                                      :content yml}})

  (stop-system-dev!)
  ;;
  )
