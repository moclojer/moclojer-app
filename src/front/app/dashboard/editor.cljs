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

(def spec-moclojer "# This mock register route: GET /hello/:username
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

     (d/div
      (d/div {:class-name "flex w-full flex-col bg-white p-5 "}
             (d/div {:class-name "bg-white rounded-br-lg flex-col justify-start  inline-flex"}
                    (d/div {:class-name " rounded-md justify-start items-center gap-4 inline-flex"}
                           ($ svg/box {:color "black"})
                           (d/div {:class-name "justify-center items-center flex"}
                                  (d/div {:class-name "text-gray-700 text-sm font-medium leading-[21px]"} "mocks"))
                           (d/div {:class-name "w-5 "} ">")
                           (d/div {:class-name "justify-center items-center flex"}
                                  (d/div {:class-name "text-gray-700 text-sm font-medium leading-[21px]"} "my"))))
             (d/div {:class-name "flex bg-white justify-between items-center"}
                    (d/div {:class-name " bg-white  gap-4 flex "}
                           (d/div {:class-name " rounded-md  items-center gap-4 inline-flex"}
                                  ($ svg/mock-enable)
                                  (d/div {:class-name "text-zinc-500 text-xl font-medium leading-[30px]"} "test01.avelino.moclojer.com")))

                    (d/div {:class-name "flex gap-2.5 p-2 bg-white"}
                           (d/button {:class-name "px-3 py-2 rounded-lg border border-gray-200 justify-center items-center gap-2 flex"}
                                     (d/div {:class-name "text-gray-800 text-sm font-medium leading-[21px]"} "remove")
                                     ($ svg/trash))

                           (d/button {:class-name "px-3 py-2 bg-pink-600 rounded-lg justify-end items-center gap-2 flex btn-add"}
                                     (d/button {:class-name "text-white text-xs font-bold leading-[18px] "} " save")
                                     ($ svg/save))))

             (d/div {:class-name "w-full  bg-white rounded-bl-lg rounded-br-lg flex-col justify-start items-center gap-5 inline-flex"}
                    (d/div {:class-name "w-full justify-start items-center inline-flex"}
                           (d/div {:class-name "grow shrink basis-0 h-px bg-gray-200"}))))
      ($ editor {:value spec-moclojer}))))


