(ns front.app.components.footer
  (:require [cljs.pprint :as pprint]
            [front.app.components.container :refer [container]]
            [front.app.lib :refer [defnc]]
            [helix.core :refer [$]]
            [helix.dom :as d]
            [refx.alpha :as refx]))

(defnc footer-component []
  (let [db (refx/use-sub [:app.database/db])]
    (d/footer {:class-name "bg-slate-50"}
              ($ container
                 (d/pre (with-out-str
                          (pprint/pprint db)))))))
