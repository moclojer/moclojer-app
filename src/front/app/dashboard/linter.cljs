(ns front.app.dashboard.linter
  (:require
   ["@codemirror/lint" :as clint]
   ["js-yaml" :as js-yaml]
   [malli.core :as m]
   [refx.alpha :as refx]))

(def MethodSchema
  [:enum "GET" "POST" "DELETE"])

(def ResponseSchema
  [:and
   [:map
    [:status int?]
    [:headers map?]
    [:body string?]]
   [:fn (fn [{:keys [status]}]
          (and (>= status 200) (<= status 500)))]])

(def WebhookSchema
  [:map
   [:sleep-time int?]
   [:if string?]
   [:url string?]
   [:body string?]])

(def EndpointSchema
  [:map
   [:method MethodSchema]
   [:path string?]
   [:response ResponseSchema]
   [:webhook {:optional true} WebhookSchema]])

(def MockSchema
  [:vector
   [:map
    [:endpoint EndpointSchema]]])

(defn format-diagnostic [type value in]
  (str type
       (when value (str " -- " value))
       (when in (str " in " in))))

(defn build-diagnostics [errs]
  (-> (map (fn [{:keys [type value in]}]
             {:from 0 :to 0
              :message (format-diagnostic type value in)})
           errs)
      vec
      clj->js))

(def yaml-linter
  (clint/linter
   (fn [view]
     (let [doc (.. view -state -doc)
           [content valid-yaml?] (try
                                   [(.load js-yaml (.toString doc)) true]
                                   (catch :default e
                                     [{:type (.-reason e)
                                       :value (.-message e)}
                                      false]))
           edn-content (js->clj content :keywordize-keys true)
           diagnostics (or (some-> (if valid-yaml?
                                     (:errors (m/explain MockSchema edn-content))
                                     [content])
                                   build-diagnostics)
                           #js [])]
       (refx/dispatch-sync
        [:app.dashboard/set-mock-validation (empty? diagnostics)])
       diagnostics))))
