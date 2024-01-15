(ns front.app.dashboard.linter
  (:require
   ["@codemirror/lint" :as clint]
   ["ajv" :as ajv]
   ["js-yaml" :as js-yaml]
   [clojure.string :refer [join]]
   [refx.alpha :as refx]))

(def moclojer-yaml-schema "
$schema: http://json-schema.org/draft-07/schema#

title: Moclojer Schema
description: Schema for describing <https://github.com/moclojer/moclojer> config

type: array
items:
  type: object
  required:
    - endpoint
  properties:
    endpoint:
      type: object
      required:
        - path
      properties:
        method:
          type: string
          # FIXME: there's probably more.
          enum: [\"GET\", \"POST\", \"PUT\", \"DELETE\", \"PATCH\"]
          default: \"GET\"
        path:
          type: string
          minLength: 1
        response:
          type: object
          properties:
            status:
              type: integer
              minimum: 100
              maximum: 599
              default: 200
            headers:
              type: object
            body:
              type: string")

;; TODO: maybe block mock saving if failed to retrieve schema?
;; if we can't retrieve a static resource, then there's a deeper
;; problem.

;; NOTE: AJV works in a closure-like model. A function that returns
;; other functions which know about their innerstate.
;; This is why this is a function (that also returns a function XD).
;; Incase we fail to retrieve the moclojer schema, we return a function
;; that returns `false` everytime

(defn gen-ajv-validate-fn [raw-schema]
  (or (try
        (let [ajv-inst (ajv. #js {:allErrors true
                                  :jsonPointers true})]
          (->> raw-schema
               (.load js-yaml)
               (.compile ajv-inst)))
        (catch :default e
          (.error js/console "failed to load moclojer schema: " e)
          nil))
      #(constantly false)))

(def validate-moclojer-yaml
  (gen-ajv-validate-fn moclojer-yaml-schema))

(defn handle-lint-ex [ex]
  (let [mark (.-mark ex)
        from (if mark (dec (.-position mark)) 0)]
    (clj->js [{:from from :to from
               :message (.-reason ex)
               :severity "error"}])))

;; TODO: for now, we'll be rendering one error at a time.
(defn handle-validation-errs [errs]
  (let [err (first ^js errs)]
    (clj->js [{:from 0 :to 0
               :message (str (.-keyword err) " " (.-message err))
               :severity "error"}])))

(def yaml-linter
  (clint/linter
   (fn [view]
     (let [doc (.. view -state -doc)
           content (join \newline (.-text doc))
           ;; so we don't raise an error when there's no text
           validate (if (not-empty content)
                      validate-moclojer-yaml
                      nil?)
           diagnostics (try
                         (if-not (-> (.load js-yaml content)
                                     validate)
                           (handle-validation-errs (.-errors validate))
                           #js [])
                         (catch :default ex (handle-lint-ex ex)))]
       (refx/dispatch-sync [:app.dashboard/set-mock-validation (empty? diagnostics)])
       diagnostics))))
