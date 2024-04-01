(ns dev.shadow.hooks
  (:require
   [babashka.process :as proc]
   [clojure.java.io :as io]
   [clojure.string :as str]
   [shadow.build :as build]
   [shadow.cljs.util :as s.util]))

(defn build-css
  {:shadow.build/stage :configure}
  [{::build/keys [mode] :as build-state} watch? src dst]
  (let [proc-data ["./node_modules/.bin/postcss" src
                   "-o" dst "--verbose"]]
    (proc/process
     (if watch? (conj proc-data "-w") proc-data)
     {:env (if watch?
             {"TAILWIND_MODE" "watch"}
             {"NODE_MODE" (if (= mode :release)
                            "production"
                            "build")})}))
  build-state)

(defn hash-files
  {:shadow.build/stage :flush}
  [{::build/keys [mode] :as build-state} files]
  (doall
   (assoc build-state ::hashed-files
          (for [old-file-fpath files]
            (let [old-file (io/file old-file-fpath)
                  old-fname (.getName old-file)
                  hashed-files {:old-file-full-path old-file-fpath
                                :old-file-name old-fname}]
              (if (= mode :release)
                (let [new-file-name (-> (slurp old-file-fpath)
                                        s.util/md5hex
                                        (str "." old-fname))
                      new-file-fpath (str (.getParentFile old-file)
                                          "/"
                                          new-file-name)]
                  (.renameTo old-file (io/file new-file-fpath))
                  (merge hashed-files
                         {:new-file-full-path new-file-fpath
                          :new-file-name new-file-name}))

                (merge hashed-files
                       {:new-file-full-path old-file-fpath
                        :new-file-name old-fname})))))))

(defn spit-new-html
  [target-file new-html]
  (io/make-parents target-file)
  (spit target-file new-html))

(defn replace-hashed-files
  {:shadow.build/stage :flush}
  [{::build/keys [mode] :as build-state} source target]
  (let [source-file (io/file source)
        target-file (io/file target)]
    (cond
      (not (.exists source-file))
      (do (s.util/log {:type ::source-does-not-exist
                       :source source})
          (constantly build-state))

      (and (= mode :dev)
           (= (.lastModified source-file) (::source-last-mod build-state))
           (.exists target-file))
      build-state

      (= mode :release)
      (do
        (spit-new-html target-file
                       (reduce
                        (fn [accum {:keys [old-file-name new-file-name]}]
                          (str/replace accum old-file-name new-file-name))
                        (slurp source-file)
                        (::hashed-files build-state)))

        (assoc build-state ::source-last-mod
               (.lastModified source-file)))

      :else
      (do
        (spit-new-html target-file (slurp source-file))
        (assoc build-state ::source-last-mod
               (.lastModified source-file))))))
