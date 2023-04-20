goog.provide('front.app.components.alerts');
front.app.components.alerts.error_styles = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"card","card",-1430355152),"rounded border-l-4 border-red-500 bg-red-50 p-4",new cljs.core.Keyword(null,"tittle","tittle",-252581463),"block font-medium text-red-700",new cljs.core.Keyword(null,"desc","desc",2093485764),"mt-2 text-sm text-red-700"], null);
if(goog.DEBUG){
front.app.components.alerts.sig53500 = helix.core.signature_BANG_();
} else {
}

front.app.components.alerts.Error = (function (){var G__53503 = (function front$app$components$alerts$Error_render(props__27103__auto__,maybe_ref__27104__auto__){
var vec__53505 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27103__auto__),maybe_ref__27104__auto__], null);
var map__53512 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53505,(0),null);
var map__53512__$1 = cljs.core.__destructure_map(map__53512);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53512__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53512__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53512__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.app.components.alerts.sig53500)){
(front.app.components.alerts.sig53500.cljs$core$IFn$_invoke$arity$0 ? front.app.components.alerts.sig53500.cljs$core$IFn$_invoke$arity$0() : front.app.components.alerts.sig53500.call(null));
} else {
}
} else {
}

var map__53518 = front.app.components.alerts.error_styles;
var map__53518__$1 = cljs.core.__destructure_map(map__53518);
var card = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53518__$1,new cljs.core.Keyword(null,"card","card",-1430355152));
var tittle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53518__$1,new cljs.core.Keyword(null,"tittle","tittle",-252581463));
var desc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53518__$1,new cljs.core.Keyword(null,"desc","desc",2093485764));
return helix.core.get_react().createElement("div",(function (){var obj53523 = ({"id":id,"className":card});
return obj53523;
})(),helix.core.get_react().createElement("strong",(function (){var obj53532 = ({"className":tittle});
return obj53532;
})(),error),(cljs.core.truth_(description)?helix.core.get_react().createElement("p",(function (){var obj53537 = ({"className":desc});
return obj53537;
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(description)):null));
});
if(goog.DEBUG === true){
var G__53538 = G__53503;
(G__53538.displayName = "front.app.components.alerts/Error");

return G__53538;
} else {
return G__53503;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.app.components.alerts.sig53500)){
(front.app.components.alerts.sig53500.cljs$core$IFn$_invoke$arity$4 ? front.app.components.alerts.sig53500.cljs$core$IFn$_invoke$arity$4(front.app.components.alerts.Error,"",null,null) : front.app.components.alerts.sig53500.call(null,front.app.components.alerts.Error,"",null,null));
} else {
}

helix.core.register_BANG_(front.app.components.alerts.Error,"front.app.components.alerts/Error");
} else {
}


//# sourceMappingURL=front.app.components.alerts.js.map
