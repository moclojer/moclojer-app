(ns yaml-generator.schemas.mock)

(def Method
  [:enum "GET" "POST" "DELETE"])

(def Response
  [:and
   [:map
    [:status int?]
    [:headers map?]
    [:body string?]]
   [:fn (fn [{:keys [stt]}]
          (and (>= stt 200) (<= stt 500)))]])

(def Endpoint
  [:map
   [:method Method]
   [:path string?]
   [:response Response]])

(def Mock
  [:vector
   [:map
    [:endpoint Endpoint]]])
