(ns front.app.components.footer
  (:require
   [front.app.components.container :refer [Container]]
   [front.app.components.navlink :refer [NavLink]]
   [front.app.lib :refer [defnc]]
   [cljs.pprint :as pprint]
   [helix.core :refer [$]]
   [helix.dom :as d]
   [refx.db :as db]))

(defnc FooterComponent []
  (d/footer {:class-name "bg-slate-50"}
            ($ Container
               (d/pre (with-out-str (pprint/pprint @db/app-db))))))
