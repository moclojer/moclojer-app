(ns front.app.dashboard.views
  (:require
   [front.app.lib :refer [defnc]]
   ["@uiw/react-codemirror" :as c]
   ["@codemirror/language" :as language]
   ["@codemirror/legacy-modes/mode/yaml" :as yaml]
   [helix.core :refer [$]]
   [helix.dom :as d]
   [helix.hooks :as hooks]))

(defnc editor
  [{:keys [value ]}]
  ($ c/default
     {:value value 
      :height "400px"
      #_#_:width "500px"
      :extensions #js [(.define language/StreamLanguage yaml/yaml)]
      :onChange (fn [e] (prn :test e))}))

(defnc welcome []
  (let [[data set-data] (hooks/use-state "endpoints: ")]
    (d/main

     ($ editor {:value data })
     #_(d/div {:class-name "p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5 dark:bg-gray-800 dark:border-gray-700"}
              (d/div {:class-name "flex items-center divide-x divide-gray-100 dark:divide-gray-700"}
                     (d/div {:class-name "pl-3 text-sm font-medium text-gray-500"}
                            "Today, 11:01 AM")))
     #_(d/div {:class-name "p-5"}
              (d/div {:class-name "flex items-center mb-4"}
                     (d/div {:class-name "flex-shrink-0"}
                            (d/img {:class-name "w-8 h-8 rounded-full" :src "/images/users/avatar.png"}))
                     (d/div {:class-name "ml-4"}
                            (d/div {:class-name "text-base font-semibold text-gray-900 truncate dark:text-white"}
                                   "Avelino")
                            (d/div {:class-name "text-sm text-gray-500 text-normal dark:text-gray-400"}
                                   "avelino@cljazz.co")))
              (d/h1 {:class-name "mb-4 text-2xl font-bold text-gray-900 dark:text-white"}
                    "Welcome to moclojer SaaS beta")
              (d/div {:class-name "space-y-2"}
                     (d/p {:class-name "text-base font-normal text-gray-500 dark:text-gray-400"}
                          "Moclojer is an open source project developed by the company cljazz (with input from the Clojure community)." (d/br)
                          "I'm happy to have you here, we are launching the SaaS version of moclojer, seeking to make it simple for you to put a mock API in the air to develop your projects." (d/br))
                     (d/p {:class-name "text-base font-normal text-gray-500 dark:text-gray-400"}
                          "I look forward to your feedback (this is the only way we can improve the product).")

                     (d/p {:class-name "text-base font-normal text-gray-500 dark:text-gray-400"}
                          "Best Regards,"
                          (d/br)
                          "Avelino CEO"))))))
