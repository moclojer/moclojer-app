(ns yaml-generator.schemas.mock)

(def Method
  [:enum
   "HEAD" "GET" "POST" "DELETE"
   "PUT" "CONNECT" "OPTIONS" "TRACE"
   "PATCH"])

(def Response
  [:and
   [:map
    [:status {:optional true
              :default 200}
     int?]
    [:headers map?]
    [:body string?]]
   [:fn (fn [{:keys [status]}]
          (and (>= status 200) (<= status 500)))]])

(def Webhook
  [:map
   [:sleep-time {:optional true
                 :default 60}
    int?]
   [:if {:optional true
         :default true}
    string?]
   [:url string?]
   [:body string?]])

(def Endpoint
  [:map
   [:method {:optional true
             :default "GET"}
    MethodSchema]
   [:path string?]
   [:response Response]
   [:webhook {:optional true} Webhook]])

(def Mock
  [:vector
   [:map
    [:endpoint Endpoint]]])
