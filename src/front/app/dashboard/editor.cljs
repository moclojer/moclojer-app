(ns front.app.dashboard.editor
  (:require
   ["@codemirror/language" :as language]
   ["@codemirror/legacy-modes/mode/yaml" :as yaml]
   ["@codemirror/lint" :as clint]
   ["@uiw/codemirror-theme-github" :as theme]
   ["@uiw/react-codemirror" :as c]
   [front.app.components.status :refer [publication-status]]
   [front.app.components.svg :as svg]
   [front.app.dashboard.base :as base]
   [front.app.dashboard.linter :as linter]
   [mockingbird.lib :refer-macros [defnc]]
   [helix.core :refer [$]]
   [helix.dom :as d]
   [helix.hooks :as hooks]
   [refx.alpha :as refx]
   [reitit.frontend.easy :as rfe]))

(defnc editor [props]
  (let [{:keys [data set-dragging-over!]} props
        {:keys [content id]
         :or {content ""}} data
        ref-fn (hooks/use-callback
                [content]
                (fn [content]
                  (refx/dispatch-sync
                   [:app.dashboard/edit-mock {:mock-id id
                                              :content content}])))]

    ($ c/default
       {:height "calc(100vh - 171px)"
        :autoFocus true
        :value content
        :theme theme/githubLight
        :extensions #js [(.define language/StreamLanguage yaml/yaml)
                         (clint/lintGutter) linter/yaml-linter]
        :onDragOver #(set-dragging-over! true)
        :onChange (partial ref-fn)
        :mode "yaml"})))

(defn file-handler [on-load set-dragging-over! e]
  (set-dragging-over! false)
  (.preventDefault e)
  (when-not (= (.. e -target -value) "")
    (let [^js/File file (first (.. e -target -files))
          reader (js/FileReader.)]
      (.readAsText reader file)
      (set! (.-onload reader) #(on-load (.-result reader)))
      (set! (.-onerror reader) #(refx/dispatch-sync [:app/enqueue-notification
                                                     {:type :error
                                                      :message "File content is invalid!"}]))
      (set! (.. e -target -value) ""))))

(defnc drag-drop [{:keys [on-load dragging-over? set-dragging-over! handle-file-fn]}]
  (d/div {:class (str "flex items-center justify-center w-full "
                      (when-not dragging-over? "hidden"))
          :on-drop handle-file-fn}
         (d/label
          {:for "dropzone-file"
           :class (str "flex flex-col items-center justify-center w-full h-64 border-2 "
                       "border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 "
                       "dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 "
                       "dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600")}
          (d/div {:class-name "flex flex-col items-center justify-center pt-5 pb-6"}
                 ($ svg/upload {:class-name "mb-4 text-gray-500 dark:text-gray-400 w-8 h-8"})
                 (d/p {:class-name "mb-2 text-sm text-gray-500 dark:text-gray-400"}
                      (d/span {:class-name "font-semibold"} "Drop the YAML here to upload the mock"))
                 (d/p {:class-name "text-xs text-gray-500 dark:text-gray-400"} "YAML"))
          #_($ drop-input {:handle-file-fn handle-file-fn}))))

(defnc save-button [{:keys [mock-id full-width?]}]
  (let [mock-valid? (refx/use-sub [:app.dashboard/mock-valid?])]
    (d/button
     {:class-name (str "px-3 py-2 bg-pink-600 rounded-lg flex justify-center items-center btn-add space-x-2 "
                       (when full-width? "w-full ")
                       (when-not mock-valid? " opacity-50 cursor-not-allowed"))
      :on-click #(when mock-valid?
                   (refx/dispatch-sync [:app.dashboard/save-mock mock-id])
                   (refx/dispatch-sync [:app.dashboard/reset-mock-pub-stts mock-id]))}
     (d/div {:class-name "text-white text-xs font-bold leading-[18px]"} " save")
     ($ svg/save))))

(defnc file-upload-button [{:keys [handle-file-fn]}]
  (d/button {:class "w-full px-3 py-2 rounded-l-lg bg-gray-800"}
            (d/label {:class (str "text-white text-sm font-medium whitespace-nowrap "
                                  "flex flex-row justify-center items-center space-x-2 "
                                  "cursor-pointer")
                      :for "file-upload"}
                     "upload file"
                     (d/input {:id "file-upload"
                               :type "file"
                               :class "hidden"
                               :on-change handle-file-fn})
                     ($ svg/upload {:class-name "w-3 h-3 fill-white"}))))

(defnc index [{:keys [route]}]
  (let [on-load (fn [e fnstate]
                  (let [f (-> e .-target .-result)]
                    (fnstate f)))
        mock-id (-> route :parameters :path :mock-id)
        mock-data (refx/use-sub [:app.dashboard/mock mock-id])
        [dragging-over? set-dragging-over!] (hooks/use-state false)
        handle-file-fn (partial file-handler
                                #(refx/dispatch-sync
                                  [:app.dashboard/edit-mock
                                   {:mock-id mock-id
                                    :content %
                                    :uploaded? true}])
                                set-dragging-over!)
        [deleting? set-deleting!] (hooks/use-state false)
        mock-to-delete (refx/use-sub [:app.dashboard/mock-to-delete])]

    ;; since deleting the mock being currently being edited happens
    ;; outside of this component's state, this logic lets us know
    ;; when the popup `really delete this mock?` is confirmed (if so).
    (hooks/use-effect
     [mock-to-delete]
     (if (and deleting? (nil? mock-to-delete))
       (do
         (set-deleting! false)
         (rfe/push-state :app.core/mocks))
       (when (= (:id mock-to-delete) mock-id)
         (set-deleting! true))))

    ($ base/index
       (d/div
        (d/div
         {:class "flex w-full flex-col bg-white px-5 pt-5 lg:p-5"}
         (d/div
          {:class "bg-white rounded-br-lg flex-col justify-start inline-flex"}
          (d/div
           {:class "rounded-md justify-start items-center space-x-2 inline-flex"}
           ($ svg/box {:color "black"})
           (d/button
            {:class "justify-center items-center flex"
             :on-click #(rfe/push-state :app.core/mocks)}
            (d/p
             {:class "text-gray-700 text-sm font-medium underline"}
             "mocks"))
           (d/p ">")
           (d/div
            {:class "justify-center items-center flex"}
            (d/p
             {:class "text-gray-700 text-sm font-medium"}
             (or (:subdomain mock-data) "my")))))
         (d/div {:class-name "flex flex-col items-left lg:flex-row lg:justify-between"}
                (d/div {:class-name "flex flex-row items-center space-x-2"}
                       (if (:enabled mock-data)
                         ($ svg/mock-enabled)
                         ($ svg/mock-disabled))

                       ($ publication-status
                          (merge (select-keys mock-data [:enabled :id])
                                 {:stt-type :dns-status
                                  :title "DNS"}))
                       ($ publication-status
                          (merge (select-keys mock-data [:enabled :id])
                                 {:stt-type :unification-status
                                  :title "SERVER"}))

                       (let [url (:url mock-data)]
                         (d/a {:class "flex flex-row space-x-2 group"
                               :target "_blank"
                               :href (str "https://" url)}
                              (d/p {:class "text-zinc-500 text-lg truncate text-ellipsis lg:text-xl font-medium group-hover:underline"}
                                   url)
                              (d/button {:class (str "hidden p-2 rounded-lg bg-transparent fill-gray-800 "
                                                     "hover:bg-gray-200 group-hover:block")}
                                        ($ svg/arrow-link)))))

                (d/div {:class-name "w-full lg:w-1/2 xl:w-1/3 2xl:w-1/4 flex flex-row mt-2 mb-4 lg:my-0 space-x-2"}
                       (d/button {:class-name (str "w-full px-3 py-2 rounded-lg border border-gray-200 "
                                                   "flex flex-row justify-center items-center space-x-2")
                                  :on-click #(refx/dispatch-sync [:app.dashboard/set-mock-to-delete {:id mock-id}])}
                                 (d/div {:class-name "text-gray-800 text-sm font-medium"} "remove")
                                 ($ svg/trash))

                       ($ save-button {:mock-id mock-id
                                       :full-width? true})

                       ($ file-upload-button {:handle-file-fn handle-file-fn})))
         ($ drag-drop
            {:on-load (fn [e]
                        (on-load e
                                 #(refx/dispatch [:app.dashboard/edit-mock {:mock-id mock-id
                                                                            :content %}])))
             :dragging-over? dragging-over?
             :set-dragging-over! set-dragging-over!
             :handle-file-fn handle-file-fn}))
        ($ editor {:data mock-data
                   :set-dragging-over! set-dragging-over!
                   :handle-file-fn handle-file-fn})))))
