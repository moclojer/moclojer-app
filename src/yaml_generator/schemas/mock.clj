(ns yaml-generator.schemas.mock)

(def Method
  [:enum "GET" "POST" "DELETE"])

(def Response
  [:and
   [:map
    [:status int?]
    [:headers map?]
    [:body string?]]
   [:fn (fn [{:keys [status]}]
          (and (>= status 200) (<= status 500)))]])

(def Webhook
  [:map
   [:sleep-time int?]
   [:if string?]
   [:url string?]
   [:body string?]])

(def Endpoint
  [:map
   [:method Method]
   [:path string?]
   [:response Response]
   [:webhook {:optional true} Webhook]])

(def Mock
  [:vector
   [:map
    [:endpoint Endpoint]]])
