goog.provide('app.components.loading');
if(goog.DEBUG){
app.components.loading.sig50285 = helix.core.signature_BANG_();
} else {
}

app.components.loading.LoadingSpinner = (function (){var G__50301 = (function app$components$loading$LoadingSpinner_render(props__27104__auto__,maybe_ref__27105__auto__){
var vec__50304 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27104__auto__),maybe_ref__27105__auto__], null);
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(app.components.loading.sig50285)){
(app.components.loading.sig50285.cljs$core$IFn$_invoke$arity$0 ? app.components.loading.sig50285.cljs$core$IFn$_invoke$arity$0() : app.components.loading.sig50285.call(null));
} else {
}
} else {
}

return helix.core.get_react().createElement("svg",(function (){var obj50313 = ({"className":"animate-spin -ml-1 mr-3 h-5 w-5 text-white","xmlns":"http://www.w3.org/2000/svg","fill":"none","viewBox":"0 0 24 24"});
return obj50313;
})(),helix.core.get_react().createElement("circle",(function (){var obj50320 = ({"className":"opacity-25","cx":"12","cy":"12","r":"10","stroke":"currentColor","strokeWidth":"4"});
return obj50320;
})()),helix.core.get_react().createElement("path",(function (){var obj50328 = ({"className":"opacity-75","fill":"currentColor","d":"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"});
return obj50328;
})()));
});
if(goog.DEBUG === true){
var G__50329 = G__50301;
(G__50329.displayName = "app.components.loading/LoadingSpinner");

return G__50329;
} else {
return G__50301;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(app.components.loading.sig50285)){
(app.components.loading.sig50285.cljs$core$IFn$_invoke$arity$4 ? app.components.loading.sig50285.cljs$core$IFn$_invoke$arity$4(app.components.loading.LoadingSpinner,"",null,null) : app.components.loading.sig50285.call(null,app.components.loading.LoadingSpinner,"",null,null));
} else {
}

helix.core.register_BANG_(app.components.loading.LoadingSpinner,"app.components.loading/LoadingSpinner");
} else {
}


//# sourceMappingURL=app.components.loading.js.map
