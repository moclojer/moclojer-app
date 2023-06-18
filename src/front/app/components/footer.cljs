(ns front.app.components.footer
  (:require
   [front.app.components.container :refer [container]]
   [front.app.lib :refer [defnc]]
   [cljs.pprint :as pprint]
   [helix.core :refer [$]]
   [helix.dom :as d]
   [refx.db :as db]))

(defnc footer-component []
  (d/footer {:class-name "bg-slate-50"}
            ($ container
               (d/pre (with-out-str (pprint/pprint @db/app-db))))))
