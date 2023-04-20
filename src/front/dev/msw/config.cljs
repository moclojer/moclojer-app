(ns front.dev.msw.config)

(def default
  {"/login/send-email"
   {:post {:lag 1500
           :status 201
           :content-type :json
           :body #js {:ok true}}}
   ;; /#/login/auth?code=123ABC456DEF
   "/login/auth"
   {:post {:status 201
           :content-type :json
           :body (clj->js {:profile {:email "msw.mock@email.com"
                                     :name "Msw Mock"}
                           :token "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1za0BlbWFpbC5jb20ifQ._M8ecsfRagfoZhCxLiCSWr9j7JVRyrOKPf-VTKsinU8"
                           :expires_in 1})}}})
