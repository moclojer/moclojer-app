goog.provide('front.app.components.alerts');
front.app.components.alerts.error_styles = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"card","card",-1430355152),"rounded border-l-4 border-red-500 bg-red-50 p-4",new cljs.core.Keyword(null,"tittle","tittle",-252581463),"block font-medium text-red-700",new cljs.core.Keyword(null,"desc","desc",2093485764),"mt-2 text-sm text-red-700"], null);
if(goog.DEBUG){
front.app.components.alerts.sig33770 = helix.core.signature_BANG_();
} else {
}

front.app.components.alerts.Error = (function (){var G__33786 = (function front$app$components$alerts$Error_render(props__32635__auto__,maybe_ref__32636__auto__){
var vec__33787 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__32635__auto__),maybe_ref__32636__auto__], null);
var map__33790 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33787,(0),null);
var map__33790__$1 = cljs.core.__destructure_map(map__33790);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33790__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33790__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33790__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.app.components.alerts.sig33770)){
(front.app.components.alerts.sig33770.cljs$core$IFn$_invoke$arity$0 ? front.app.components.alerts.sig33770.cljs$core$IFn$_invoke$arity$0() : front.app.components.alerts.sig33770.call(null));
} else {
}
} else {
}

var map__33793 = front.app.components.alerts.error_styles;
var map__33793__$1 = cljs.core.__destructure_map(map__33793);
var card = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33793__$1,new cljs.core.Keyword(null,"card","card",-1430355152));
var tittle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33793__$1,new cljs.core.Keyword(null,"tittle","tittle",-252581463));
var desc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33793__$1,new cljs.core.Keyword(null,"desc","desc",2093485764));
return helix.core.get_react().createElement("div",(function (){var obj33799 = ({"id":id,"className":card});
return obj33799;
})(),helix.core.get_react().createElement("strong",(function (){var obj33801 = ({"className":tittle});
return obj33801;
})(),error),(cljs.core.truth_(description)?helix.core.get_react().createElement("p",(function (){var obj33803 = ({"className":desc});
return obj33803;
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(description)):null));
});
if(goog.DEBUG === true){
var G__33804 = G__33786;
(G__33804.displayName = "front.app.components.alerts/Error");

return G__33804;
} else {
return G__33786;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.app.components.alerts.sig33770)){
(front.app.components.alerts.sig33770.cljs$core$IFn$_invoke$arity$4 ? front.app.components.alerts.sig33770.cljs$core$IFn$_invoke$arity$4(front.app.components.alerts.Error,"",null,null) : front.app.components.alerts.sig33770.call(null,front.app.components.alerts.Error,"",null,null));
} else {
}

helix.core.register_BANG_(front.app.components.alerts.Error,"front.app.components.alerts/Error");
} else {
}


//# sourceMappingURL=front.app.components.alerts.js.map
