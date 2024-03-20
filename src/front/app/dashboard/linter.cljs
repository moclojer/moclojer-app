(ns front.app.dashboard.linter
  (:require
   ["@codemirror/lint" :as clint]
   ["js-yaml" :as js-yaml]
   [clojure.string :refer [join]]
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

(def EndpointSchema
  [:map
   [:method MethodSchema]
   [:path string?]
   [:response ResponseSchema]])

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
           content (->> (.-text doc)
                        (join \newline)
                        (.load js-yaml))
           diagnostics (or (some-> (m/explain MockSchema
                                              (js->clj content
                                                       :keywordize-keys true))
                                   :errors
                                   build-diagnostics)
                           #js [])]
       (refx/dispatch-sync
        [:app.dashboard/set-mock-validation (empty? diagnostics)])
       diagnostics))))
