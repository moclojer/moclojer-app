(ns build
  (:refer-clojure :exclude [test])
  (:require [clojure.tools.build.api :as b]))

(def default-lib-api 'com.github.moclojer/api)
(def default-lib-yaml 'com.github.moclojer/yaml-service)
(def default-main-api 'back.api.server)
(def default-main-yml 'yaml-generator.server)
(def default-version-api "0.0.1-SNAPSHOT")
(def default-version-yml "0.0.1-SNAPSHOT")
(def class-dir "target/classes")

(defn uberjar "Build the Uberjar." [{:keys [uber-file lib main] :as opts}]
  (b/delete {:path "target"})

  (prn uber-file)
  (when (not uber-file)
    (throw (Exception. "No uber-file specified, you should pass clj -T:build uberjar-api :uber-file <name>")))

  (case (keyword uber-file)
    :api (let [actual-lib (or lib default-lib-api)
               actual-main (or main default-main-api)
               actual-uber-file (format "target/%s.jar"
                                        uber-file)

               opts-api (assoc opts
                               :lib actual-lib
                               :main actual-main
                               :uber-file actual-uber-file
                               :basis (b/create-basis {})
                               :class-dir class-dir
                               :src-dirs ["src"]
                               :ns-compile [actual-main])]
           (println "\nCopying source" class-dir)
           (b/copy-dir {:src-dirs ["resources" "src"] :target-dir class-dir})
           (println (str "\nCompiling " main))
           (b/compile-clj opts-api)
           (println "\nBuilding JAR on" uber-file)
           (b/uber opts-api)
           opts-api)
    :yaml-service (let [actual-lib (or lib default-lib-yaml)
                         actual-main (or main default-main-yml)
                         actual-uber-file (format "target/%s.jar"
                                                  uber-file)
                         opts-yml (assoc opts
                                         :lib actual-lib
                                         :main actual-main
                                         :uber-file actual-uber-file
                                         :basis (b/create-basis {})
                                         :class-dir class-dir
                                         :src-dirs ["src"]
                                         :ns-compile [actual-main])]
                     (println "\nCopying source" class-dir)
                     (b/copy-dir {:src-dirs ["resources" "src"] :target-dir class-dir})
                     (println (str "\nCompiling " main))
                     (b/compile-clj opts-yml)
                     (println "\nBuilding JAR on" uber-file)
                     (b/uber opts-yml)
                     opts-yml)
    :else (throw (ex-info "Invalid name uber-file" {:cause "invalid uber-file name" :error :invalid-uber-file-name}))))
