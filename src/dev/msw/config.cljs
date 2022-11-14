(ns dev.msw.config)

(def default
  {"/login"
   {:get {:status 201
          :content-type :json
          :body #js {:ok true
                     :usename "msk.mock"}}}})
