goog.provide('app.components.alerts');
app.components.alerts.error_styles = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"card","card",-1430355152),"rounded border-l-4 border-red-500 bg-red-50 p-4",new cljs.core.Keyword(null,"tittle","tittle",-252581463),"block font-medium text-red-700",new cljs.core.Keyword(null,"desc","desc",2093485764),"mt-2 text-sm text-red-700"], null);
if(goog.DEBUG){
app.components.alerts.sig50290 = helix.core.signature_BANG_();
} else {
}

app.components.alerts.Error = (function (){var G__50296 = (function app$components$alerts$Error_render(props__27104__auto__,maybe_ref__27105__auto__){
var vec__50297 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27104__auto__),maybe_ref__27105__auto__], null);
var map__50300 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50297,(0),null);
var map__50300__$1 = cljs.core.__destructure_map(map__50300);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50300__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50300__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50300__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(app.components.alerts.sig50290)){
(app.components.alerts.sig50290.cljs$core$IFn$_invoke$arity$0 ? app.components.alerts.sig50290.cljs$core$IFn$_invoke$arity$0() : app.components.alerts.sig50290.call(null));
} else {
}
} else {
}

var map__50303 = app.components.alerts.error_styles;
var map__50303__$1 = cljs.core.__destructure_map(map__50303);
var card = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50303__$1,new cljs.core.Keyword(null,"card","card",-1430355152));
var tittle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50303__$1,new cljs.core.Keyword(null,"tittle","tittle",-252581463));
var desc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50303__$1,new cljs.core.Keyword(null,"desc","desc",2093485764));
return helix.core.get_react().createElement("div",(function (){var obj50314 = ({"id":id,"className":card});
return obj50314;
})(),helix.core.get_react().createElement("strong",(function (){var obj50322 = ({"className":tittle});
return obj50322;
})(),error),(cljs.core.truth_(description)?helix.core.get_react().createElement("p",(function (){var obj50326 = ({"className":desc});
return obj50326;
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(description)):null));
});
if(goog.DEBUG === true){
var G__50330 = G__50296;
(G__50330.displayName = "app.components.alerts/Error");

return G__50330;
} else {
return G__50296;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(app.components.alerts.sig50290)){
(app.components.alerts.sig50290.cljs$core$IFn$_invoke$arity$4 ? app.components.alerts.sig50290.cljs$core$IFn$_invoke$arity$4(app.components.alerts.Error,"",null,null) : app.components.alerts.sig50290.call(null,app.components.alerts.Error,"",null,null));
} else {
}

helix.core.register_BANG_(app.components.alerts.Error,"app.components.alerts/Error");
} else {
}


//# sourceMappingURL=app.components.alerts.js.map
