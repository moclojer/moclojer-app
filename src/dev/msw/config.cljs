(ns dev.msw.config)

(def default
  {"/login/send-email"
   {:post {:lag 1500
           :status 201
           :content-type :json
           :body #js {:ok true}}}
   "/login/auth"
   {:post {:status 201
           :content-type :json
           :body #js {:ok true
                      :usename "msk.mock"}}}})
