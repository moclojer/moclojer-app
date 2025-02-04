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
     [front.app.components.loading :refer [loading-spinner]]
     [mockingbird.lib :refer-macros [defnc]]
     [helix.core :refer [$ <>]]
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

    (hooks/use-effect
      [id]
      (when id
        (refx/dispatch-sync [:app.dashboard/start-mock-polling id]))
      #(refx/dispatch-sync [:app.dashboard/stop-mock-polling]))

    (let [mock-id (:id data)
          has-changes? (refx/use-sub [:app.dashboard/mock-has-changes? mock-id])]
      (d/div {:class (str "relative w-full h-full rounded-lg overflow-hidden m-2  "
                          (if has-changes? "border-2 border-yellow-500 "
                            "border-none "
                            ))}
             ($ c/default
                {:height "calc(100vh - 171px)"
                 :autoFocus true
                 :value content
                 :theme theme/githubLight
                 :extensions #js [(.define language/StreamLanguage yaml/yaml)
                                  (clint/lintGutter) linter/yaml-linter]
                 :onDragOver #(set-dragging-over! true)
                 :onChange (partial ref-fn)
                 :mode "yaml"})))))

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
          (d/div {:class "flex flex-col items-center justify-center pt-5 pb-6"}
                 ($ svg/upload {:class "mb-4 text-gray-500 dark:text-gray-400 w-8 h-8"})
                 (d/p {:class "mb-2 text-sm text-gray-500 dark:text-gray-400"}
                      (d/span {:class "font-semibold"} "Drop the YAML here to upload the mock"))
                 (d/p {:class "text-xs text-gray-500 dark:text-gray-400"} "YAML"))
          #_($ drop-input {:handle-file-fn handle-file-fn}))))

(defnc save-button [{:keys [mock-id full-width? sync-enabled?]}]
  (let [mock-valid? (refx/use-sub [:app.dashboard/mock-valid?])]
    (d/button
     {:class (str "w-full px-3 py-2 bg-pink-600 rounded-lg flex justify-center items-center btn-add space-x-2 transition-all duration-75 "
                  (when full-width? "w-full ")
                  (when-not mock-valid? " opacity-50 cursor-not-allowed"))
      :on-click #(when mock-valid?
                   (refx/dispatch-sync [:app.dashboard/save-mock mock-id])
                   (refx/dispatch-sync [:app.dashboard/push-mock mock-id])
                   (refx/dispatch-sync [:app.dashboard/reset-mock-pub-stts mock-id]))}
     (d/div {:class "text-white text-xs font-bold leading-[18px]"} "save")
     (if sync-enabled?
       ($ svg/github)
       ($ svg/save)))))

(defnc file-upload-button [{:keys [handle-file-fn]}]
  (d/button {:class "px-3 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-75 "}
            (d/label {:class (str "text-white text-sm font-medium whitespace-nowrap "
                                  "flex flex-row justify-center items-center space-x-2 "
                                  "cursor-pointer")
                      :for "file-upload"}
                     "upload file"
                     (d/input {:id "file-upload"
                               :type "file"
                               :class "hidden"
                               :on-change handle-file-fn})
                     ($ svg/upload))))

(defnc remove-button [{:keys [mock-id]}]
  (d/button {:class (str "w-full px-3 py-2 rounded-lg border border-gray-200 bg-white transition-all "
                         "hover:border-red-500  duration-75 "
                         "flex flex-row justify-center items-center space-x-2 ")
             :on-click #(refx/dispatch-sync [:app.dashboard/set-mock-to-delete {:id mock-id}])}
            (d/div {:class "text-gray-800 text-sm font-medium "} "remove")
            ($ svg/trash)))

(defnc reload-button [{:keys [mock-id]}]
  (d/button
   {:class (str "px-3 py-2 bg-yellow-500 rounded-lg flex justify-center items-center space-x-2 "
                "hover:bg-yellow-600 transition-all duration-75 ")
    :on-click #(refx/dispatch-sync [:app.dashboard/reload-mock mock-id])}
   (d/div {:class "text-white text-xs font-bold leading-[18px]"}
          "reload ")
   ($ loading-spinner)))

(defnc enable-sync-button [{:keys [mock-id]}]
  (d/button
   {:class (str "px-3 py-2 rounded-lg flex justify-center items-center space-x-2 "
                "transition-all duration-75 ")
    :on-click #(refx/dispatch-sync [:app.dashboard/reload-mock mock-id])}
   (d/div {:class "text-black text-xs font-bold leading-[18px]"}
          "enable git sync")
   ($ loading-spinner)))

(defnc enable-sync-status [{:keys [mock-id sync-enabled?]}]
  (let [loading-sync? (refx/use-sub [:app.dashboard/loading-sync?])]
    (hooks/use-effect
      []
      (when-not sync-enabled?
        (refx/dispatch-sync [:app.dashboard/enable-git-sync mock-id])))

    (when loading-sync?
      (d/div
       {:class "px-3 py-2 bg-gray-500 rounded-lg flex justify-center items-center space-x-2"}
       (d/div {:class "text-white text-xs font-bold leading-[18px]"}
              "Enabling sync...")
       ($ loading-spinner)))))

(defnc editor-toolbar [{:keys [mock-id]}]
  (let [has-changes? (refx/use-sub [:app.dashboard/mock-has-changes? mock-id])
        sync-enabled? (refx/use-sub [:app.dashboard/is-sync-enabled?])]
    (d/div {:class "flex items-center space-x-2"}
           (when-not sync-enabled?
             ($ enable-sync-button {:mock-id mock-id}))
           (when (and sync-enabled? has-changes?)
             ($ reload-button {:mock-id mock-id}))
           ($ remove-button {:mock-id mock-id})
           (if sync-enabled?
             ($ save-button {:mock-id mock-id
                             :sync-enabled? sync-enabled?
                             :class "ml-auto "})
             ($ enable-sync-status {:mock-id mock-id
                                    :sync-enabled? sync-enabled?})))))

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
         (d/div {:class "flex flex-col items-left lg:flex-row lg:justify-between"}
                (d/div {:class "flex flex-row items-center space-x-2"}
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

                (d/div {:class (str "w-full lg:w-1/2 xl:w-1/4 flex flex-row justify-start lg:justify-end "
                                    "items-center mt-2 mb-4 lg:my-0 space-x-2 lg:mr-4 sm:mr-0 ")}
                       ($ editor-toolbar {:mock-id mock-id})
                       ($ file-upload-button {:handle-file-fn handle-file-fn}))
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
                    :handle-file-fn handle-file-fn}))))))
