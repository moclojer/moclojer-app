(ns front.app.components.messages
  (:require
    [cljs.pprint :as pprint]
    [clojure.string :as str]
    [front.app.lib :refer [defnc]]
    [front.app.components.profile :refer [pfp-img]]
    [helix.dom :as d]
    [helix.core :refer [$]]))

(defn gen-today-date []
  (let [date (js/Date.)
        pad-comp-fn #(-> (.toString %)
                         (.padStart 2 "0"))]
    (->> [(.getDate date) (inc (.getMonth date)) (.getFullYear date)]
         (map pad-comp-fn)
         (str/join "/"))))

(defnc text
  [{:keys [message index]}]
  (let [msg-seq (seq message)]
    (d/div
      (d/p {:class-name "text-base font-normal text-gray-500 dark:text-gray-400"}
           (nth msg-seq index))
      (when (< index (dec (count message)))
        (do
          (d/br)
          ($ text {:message message :index (inc index)}))))))

(defnc default-message 
  [{:keys [children] :as props}]
  (d/section
    (d/div {:class-name (str "p-4 bg-white block sm:flex items-center justify-between border-b" 
                             "border-gray-200 lg:mt-1.5 dark:bg-gray-800 dark:border-gray-700")}
           (d/div {:class-name "flex items-center divide-x divide-gray-100 dark:divide-gray-700"}
                  (d/div {:class-name "pl-3 text-sm font-medium text-gray-500"}
                         (gen-today-date))))

    (d/div {:class-name "p-5"}
           (d/div {:class-name "flex items-center mb-4"}
                  (d/div {:class-name "flex-shrink-0"}
                         ($ pfp-img 
                            {:image-style (props :image-style)
                             :pfp-url (props :image)
                             :pfp-loading? false}))
                  (d/div {:class-name "ml-4"}
                         (d/p (props :author))
                         (d/div {:class-name "mltext-sm text-gray-500 text-normal dark:text-gray-400"}
                                (d/i (props :email)))))
           (d/h1 {:class-name "mb-4 text-2xl font-bold text-gray-900 dark:text-white"}
                 (props :title))
           (d/div {:class-name "space-y-1"}
                  ($ text {:message (seq (props :message)) :index 0})
                  (d/p {:class-name "p-2 text-base font-normal text-gray-500 dark:text-gray-400"}
                       "Best Regards,"
                       (d/br)
                       (d/i "Avelino Founder Team"))))))

(defnc blogpost-message 
  [{:keys [children] :as props}]
  (d/div {:class-name (str "p-4 bg-gray-200 block sm:flex items-center justify-left border-b mr-8 py-8" 
                           "border-gray-200 lg:mt-1.5 dark:bg-gray-800 dark:border-gray-700")}
         (d/div {:class-name "flex items-center mb-4"}
                (d/div {:class-name "flex-shrink-0"}
                       ($ pfp-img 
                          {:image-style (props :image-style)
                           :pfp-loading? false 
                           :pfp-url (props :image)}))
                (d/div {:class-name "ml-4"}
                       (d/div {:class-name "mltext-sm text-gray-500 text-normal dark:text-gray-400"}
                              (d/p (props :author))
                              (d/i (props :email)))))

         (d/div {:class-name "ml-4"}
                (d/a {:class-name "text-blue-500 " :href (props :link) :target "_blank"} (props :link)))))

