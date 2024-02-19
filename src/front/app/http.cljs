(ns front.app.http
  (:require
   [front.app.utils :as utils]
   [lambdaisland.fetch :as fetch]
   [promesa.core :as p]
   [refx.alpha :refer [dispatch reg-fx]]))

(goog-define API_URL "http://localhost:3000")
(def api-url API_URL)

(defn- send-request!
  [{:keys [url on-success on-failure _] :as request} fn-request]
  (let [external? (.includes url "https://")
        rurl (if external? url (str api-url url))
        req (if external? (assoc request :mode :cors) request)]
    (-> (fn-request rurl req)
        (.then (fn [{:keys [status] :as resp}]
                 (if (>= status 400)
                   (dispatch (conj on-failure (utils/js->cljs-key resp)))
                   (dispatch (conj on-success (utils/js->cljs-key resp))))))
        (.catch (fn [resp]
                  (dispatch (conj on-failure (utils/js->cljs-key resp))))))))

(defn http-effect
  [fn-request]
  (fn [request]
    (if (sequential? request)
      (doseq [req request]
        (send-request! req fn-request))
      (send-request! request fn-request))))

(defn fetch-request-mock [responses]
  (fn [url _request]
    (let [{:keys [lag] :as response}
          (get-in responses
                  [url]
                  {:status 500
                   :body "Response not set in mocks!"})]
      (p/delay (or lag 100) response))))

(reg-fx :http (http-effect fetch/request))

(comment
  ; is possible to mock directly this effect
  (reg-fx
   :http (http-effect (fetch-request-mock
                       {"/login/send-email" {:status 201
                                             :body #js {:ok true}}})))

  #_(reg-fx
     :http (http-effect (fetch/request
                         {"http://localhost:3000/login/auth"
                          {:status 201
                           :body #js {:ok true}}})))

  #_(-> (fetch/request "http://localhost:3000/login/auth" {:method :post})
        (.then (fn [e] (prn :e e)))
        (.catch (fn [e] (prn :e e))))

;
  )
