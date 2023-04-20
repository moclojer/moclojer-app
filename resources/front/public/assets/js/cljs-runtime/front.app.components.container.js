goog.provide('front.app.components.container');
if(goog.DEBUG){
front.app.components.container.sig35391 = helix.core.signature_BANG_();
} else {
}

front.app.components.container.Container = (function (){var G__35392 = (function front$app$components$container$Container_render(props__32635__auto__,maybe_ref__32636__auto__){
var vec__35393 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__32635__auto__),maybe_ref__32636__auto__], null);
var map__35396 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35393,(0),null);
var map__35396__$1 = cljs.core.__destructure_map(map__35396);
var props = map__35396__$1;
var class_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35396__$1,new cljs.core.Keyword(null,"class-name","class-name",945142584));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35396__$1,new cljs.core.Keyword(null,"children","children",-940561982));
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.app.components.container.sig35391)){
(front.app.components.container.sig35391.cljs$core$IFn$_invoke$arity$0 ? front.app.components.container.sig35391.cljs$core$IFn$_invoke$arity$0() : front.app.components.container.sig35391.call(null));
} else {
}
} else {
}

return helix.core.get_react().createElement("div",helix.impl.props.merge_obj((function (){var obj35398 = ({"className":["mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name)].join('')});
return obj35398;
})(),helix.impl.props._dom_props.cljs$core$IFn$_invoke$arity$1(props)),children);
});
if(goog.DEBUG === true){
var G__35399 = G__35392;
(G__35399.displayName = "front.app.components.container/Container");

return G__35399;
} else {
return G__35392;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.app.components.container.sig35391)){
(front.app.components.container.sig35391.cljs$core$IFn$_invoke$arity$4 ? front.app.components.container.sig35391.cljs$core$IFn$_invoke$arity$4(front.app.components.container.Container,"",null,null) : front.app.components.container.sig35391.call(null,front.app.components.container.Container,"",null,null));
} else {
}

helix.core.register_BANG_(front.app.components.container.Container,"front.app.components.container/Container");
} else {
}


//# sourceMappingURL=front.app.components.container.js.map
