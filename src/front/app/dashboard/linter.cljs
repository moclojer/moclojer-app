(ns front.app.dashboard.linter
  (:require ["@codemirror/lint" :as clint]
            ["js-yaml" :as js-yaml]
            [clojure.string :as str]
            [malli.core :as m]
            [refx.alpha :as refx]))

(def MethodSchema
  [:enum
   "HEAD" "GET" "POST" "DELETE"
   "PUT" "CONNECT" "OPTIONS" "TRACE"
   "PATCH"])

(def ResponseSchema
  [:and
   [:map
    [:status {:optional true
              :default 200}
     int?]
    [:headers map?]
    [:body string?]]
   [:fn (fn [{:keys [status]}]
          (and (>= status 200) (<= status 500)))]])

(def WebhookSchema
  [:map
   [:sleep-time {:optional true
                 :default 60}
    int?]
   [:if {:optional true
         :default true}
    string?]
   [:url string?]
   [:body string?]])

(def EndpointSchema
  [:map
   [:method {:optional true
             :default "GET"}
    MethodSchema]
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
  (if-not (empty? errs)
    (-> (map (fn [{:keys [type value in]}]
               {:from 0 :to 0
                :message (format-diagnostic type value in)})
             errs)
        vec
        clj->js)

    #js []))

(defn lint-endpoints
  [endpoints]
  (reduce
   (fn [{:keys [endpoints errors]} {:keys [method path]
                                    :or {method "GET"}}]
     (let [endpoint {:method method :path path}]
       {:endpoints (conj endpoints endpoint)
        :errors (or (when-let [repeating (some #{endpoint} endpoints)]
                      (conj errors {:value (str "Repeating endpoint\n\n"
                                                (.dump js-yaml (clj->js repeating)))}))
                    errors)}))
   {:errors []}
   (map :endpoint endpoints)))

(comment
  (lint-endpoints [{:endpoint {:path "/hello"}}])
  ;; => {:endpoints ({:method "GET", :path "/hello"}), :errors []}

  (lint-endpoints [{:endpoint {:path "/hello"}}
                   {:endpoint {:path "/hello"}}])
  ;; => {:endpoints ({:method "GET", :path "/hello"}
  ;;                 {:method "GET", :path "/hello"})
  ;;     :errors [{:value "Repeating endpoint\n\nmethod: GET\npath: /hello\n"}]}

  (lint-endpoints [{:endpoint {:method "POST"
                               :path "/hello"}}
                   {:endpoint {:method "POST"
                               :path "/hello"}}])
  ;; => {:endpoints ({:method "POST", :path "/hello"}
  ;;                 {:method "POST", :path "/hello"})
  ;;     :errors [{:value "Repeating endpoint\n\nmethod: POST\npath: /hello\n"}]}
  )

(defn lint-yaml
  [doc-ctt]
  (try
    (let [ctt (js->clj (.load js-yaml doc-ctt)
                       :keywordize-keys true)]
      {:ctt ctt
       :errs (into (:errors (m/explain MockSchema ctt))
                   (:errors (lint-endpoints ctt)))})
    (catch :default e
      {:errs [{:type (.-reason e)
               :value (.-message e)}]})))

(defn lint-json [raw-ctt]
  (try
    (.parse js/JSON raw-ctt) nil
    (catch :default e
      [{:value (.-message e)}])))

(comment
  (lint-json "{invalid?}")
  ;;
  )

(defn lint-resps-body-by-hdr
  [yml-ctt hdr-key hdr-val]
  (reduce
   (fn [lints {:keys [endpoint]}]
     (let [{:keys [headers body]} (:response endpoint)
           lower-case-hdrs (reduce-kv
                            (fn [hdrs k v]
                              (assoc hdrs
                                     (str/lower-case (name k))
                                     (str/lower-case (name v))))
                            {} headers)]
       (when (= (get lower-case-hdrs hdr-key) hdr-val)
         (update-in lints [:errs] conj (lint-json body)))))
   {} yml-ctt))

(comment
  (lint-resps-body-by-hdr
   [{:endpoint
     {:response
      {:headers {"Content-Type" "Application/JSON"}
       :body "{invalidhello\": \"world\"}"}}}
    {:endpoint
     {:response
      {:headers {"Content-Type" "Application/JSON"}
       :body "{\"oi\": {\"a\": {\"b\" 1}, \"c\" {\"d\": 1}}}"}}}]
   "content-type"
   "application/json")
  ;;
  )

(def yaml-linter
  (clint/linter
   (fn [view]
     (let [doc-ctt (.. view -state -doc toString)
           yml-lint (lint-yaml doc-ctt)
           json-lint (-> (:ctt yml-lint)
                         (lint-resps-body-by-hdr
                          "content-type" "application/json"))
           diags (->> (:errs yml-lint)
                      (conj (:errs json-lint))
                      flatten
                      (filter some?)
                      build-diagnostics)]

       (refx/dispatch-sync
        [:app.dashboard/set-mock-validation (empty? diags)])

       diags))))
