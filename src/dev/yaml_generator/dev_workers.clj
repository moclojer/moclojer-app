(ns dev.yaml-generator.dev
  (:require [com.stuartsierra.component :as component]
            [components.config :as config]
            [components.database :as database]
            [components.logs :as logs]
            [components.migrations :as migrations]
            [components.redis-publisher :as redis-publisher]
            [components.redis-queue :as redis-queue]
            [components.storage :as storage]
            [pg-embedded-clj.core :as pg-emb]
            [yaml-generator.ports.workers :as p.workers]))

;; namespace to publish manually on redis-queue
;; to check some implementation details using repl session
;; create atom
(def system-atom (atom {}))

;; system map
(def system-map
  (component/system-map
   :config (config/new-config)
   :publisher (component/using (redis-publisher/new-redis-publisher) [:config])
   :database (component/using (database/new-database) [:config])
   :workers (component/using
             (redis-queue/new-redis-queue p.workers/workers) [:config :database :storage])
   :storage (component/using
             (storage/new-storage) [:config])))

;; start system
(defn start-system-dev! [system-map]
  (logs/setup [["*" :info]] :auto)
  (pg-emb/init-pg)
  (migrations/migrate (migrations/configuration-with-db))
  (->> system-map
       component/start
       (reset! system-atom)))

;; stop system
(defn stop-system-dev! []
  (logs/log :info :system-stop)
  (swap!
   system-atom
   (fn [s] (when s (component/stop s))))
  (pg-emb/halt-pg!))

;;invoke start system 
(start-system-dev! system-map)

(comment


;;invoke stop system 
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
  ;;publish msg
  (-> publisher
      (redis-publisher/publish! :mock.changed {:event
                                               {:user-id #uuid "cd989358-af38-4a2f-a1a1-88096aa425a7",
                                                :id (random-uuid)
                                                :wildcard "test",
                                                :subdomain "chico",
                                                :enabled true,
                                                :content yml}}))
  (stop-system-dev!)
  ;
  )


