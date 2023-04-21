goog.provide('front.app.components.loading');
if(goog.DEBUG){
front.app.components.loading.sig62130 = helix.core.signature_BANG_();
} else {
}

front.app.components.loading.LoadingSpinner = (function (){var G__62137 = (function front$app$components$loading$LoadingSpinner_render(props__32635__auto__,maybe_ref__32636__auto__){
var vec__62140 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__32635__auto__),maybe_ref__32636__auto__], null);
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.app.components.loading.sig62130)){
(front.app.components.loading.sig62130.cljs$core$IFn$_invoke$arity$0 ? front.app.components.loading.sig62130.cljs$core$IFn$_invoke$arity$0() : front.app.components.loading.sig62130.call(null));
} else {
}
} else {
}

return helix.core.get_react().createElement("svg",(function (){var obj62149 = ({"className":"animate-spin -ml-1 mr-3 h-5 w-5 text-white","xmlns":"http://www.w3.org/2000/svg","fill":"none","viewBox":"0 0 24 24"});
return obj62149;
})(),helix.core.get_react().createElement("circle",(function (){var obj62156 = ({"className":"opacity-25","cx":"12","cy":"12","r":"10","stroke":"currentColor","strokeWidth":"4"});
return obj62156;
})()),helix.core.get_react().createElement("path",(function (){var obj62158 = ({"className":"opacity-75","fill":"currentColor","d":"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"});
return obj62158;
})()));
});
if(goog.DEBUG === true){
var G__62163 = G__62137;
(G__62163.displayName = "front.app.components.loading/LoadingSpinner");

return G__62163;
} else {
return G__62137;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.app.components.loading.sig62130)){
(front.app.components.loading.sig62130.cljs$core$IFn$_invoke$arity$4 ? front.app.components.loading.sig62130.cljs$core$IFn$_invoke$arity$4(front.app.components.loading.LoadingSpinner,"",null,null) : front.app.components.loading.sig62130.call(null,front.app.components.loading.LoadingSpinner,"",null,null));
} else {
}

helix.core.register_BANG_(front.app.components.loading.LoadingSpinner,"front.app.components.loading/LoadingSpinner");
} else {
}


//# sourceMappingURL=front.app.components.loading.js.map
