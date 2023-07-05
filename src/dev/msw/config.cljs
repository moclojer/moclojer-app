(ns dev.msw.config)

(def default
  {"http://localhost:3000/login/auth"
   {:post {:status 201
           :content-type :json
           :body (clj->js {:user {:email "msw.mock@email.com"
                                  :id "44498130-82a2-43d1-8d89-a51fa5a10ca3"}})}}})
