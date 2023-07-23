(ns front.app.dashboard.editor
  (:require
   ["@codemirror/language" :as language]
   ["@codemirror/legacy-modes/mode/yaml" :as yaml]
   ["@uiw/react-codemirror" :as c]
   [front.app.components.svg :as svg]
   [front.app.dashboard.base :as base]
   [front.app.lib :refer [defnc]]
   [helix.core :refer [$]]
   [helix.dom :as d]))

(defnc editor
  [{:keys [value]}]
  ($ c/default
     {:value value
      :height "400px"
      #_#_:width "500px"
      :extensions #js [(.define language/StreamLanguage yaml/yaml)]
      :onChange (fn [e] (prn :test e))}))

(def swagger "# This mock register route: GET /hello/:username
- endpoint:
    # Note: the method could be omitted because GET is the default
    method: GET
    path: /hello/:username
    response:
      # Note: the status could be omitted because 200 is the default
      status: 200
      headers:
        Content-Type: application/json
      # Note: the body will receive the value passed in the url using the
      # :username placeholder
      body: >
        {
          'hello': '{{path-params.username}}!'
        }")

(defnc index []
  ($ base/index

     (d/div (d/div {:class-name "w-[1350px] h-[185px] p-5 bg-white rounded-bl-lg rounded-br-lg flex-col justify-start items-center gap-5 inline-flex"}
                   (d/div {:class-name "w-[1310px] rounded-md justify-start items-center gap-4 inline-flex"}
                          ($ svg/box {:color "black"})
                          (d/div {:class-name "justify-center items-center flex"}
                                 (d/div {:class-name "text-gray-700 text-sm font-medium leading-[21px]"} "mocks"))
                          (d/div {:class-name "w-5 h-5 relative"} ">")
                          (d/div {:class-name "justify-center items-center flex"}
                                 (d/div {:class-name "text-gray-700 text-sm font-medium leading-[21px]"} "my")))
                   (d/div {:class-name "flex-col justify-start items-start gap-4 flex"}
                          (d/div {:class-name "w-[1310px] rounded-md justify-start items-center gap-4 inline-flex"}
                                 ($ svg/mock-enable)
                                 (d/div {:class-name "text-zinc-500 text-xl font-medium leading-[30px]"} "test01.avelino.moclojer.com"))
                          (d/div {:class-name "self-stretch justify-start items-center inline-flex"}
                                 (d/div {:class-name "justify-start items-center gap-4 flex"}
                                        (d/div {:class-name "w-5 h-5 relative"})
                                        (d/div {:class-name "w-5 h-5 relative"}))

                                 (d/div {:class-name "grow shrink basis-0 h-[37px] justify-end items-center gap-2.5 flex"}
                                        (d/div {:class-name "px-3 py-2 rounded-lg border border-gray-200 justify-center items-center gap-2 flex"}
                                               (d/div {:class-name "text-gray-800 text-sm font-medium leading-[21px]"} "remove"))

                                        (d/div {:class-name "px-3 py-2 bg-pink-600 rounded-lg justify-end items-center gap-2 flex"}
                                               (d/button {:class-name "text-white text-xs font-bold leading-[18px]"} " new mock")
                                               ($ svg/box)))))

                   (d/div {:class-name "w-[1350px] h-[185px] p-5 bg-white rounded-bl-lg rounded-br-lg flex-col justify-start items-center gap-5 inline-flex"}
                          (d/div {:class-name "w-[1341px] h-px justify-start items-center inline-flex"}
                                 (d/div {:class-name "grow shrink basis-0 h-px bg-gray-200"}))))
            ($ editor {:value swagger}))))

