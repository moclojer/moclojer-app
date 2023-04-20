goog.provide('front.app.components.container');
if(goog.DEBUG){
front.app.components.container.sig27463 = helix.core.signature_BANG_();
} else {
}

front.app.components.container.Container = (function (){var G__27464 = (function front$app$components$container$Container_render(props__24071__auto__,maybe_ref__24072__auto__){
var vec__27465 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__24071__auto__),maybe_ref__24072__auto__], null);
var map__27468 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27465,(0),null);
var map__27468__$1 = cljs.core.__destructure_map(map__27468);
var props = map__27468__$1;
var class_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27468__$1,new cljs.core.Keyword(null,"class-name","class-name",945142584));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27468__$1,new cljs.core.Keyword(null,"children","children",-940561982));
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.app.components.container.sig27463)){
(front.app.components.container.sig27463.cljs$core$IFn$_invoke$arity$0 ? front.app.components.container.sig27463.cljs$core$IFn$_invoke$arity$0() : front.app.components.container.sig27463.call(null));
} else {
}
} else {
}

return helix.core.get_react().createElement("div",helix.impl.props.merge_obj((function (){var obj27471 = ({"className":["mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name)].join('')});
return obj27471;
})(),helix.impl.props._dom_props.cljs$core$IFn$_invoke$arity$1(props)),children);
});
if(goog.DEBUG === true){
var G__27472 = G__27464;
(G__27472.displayName = "front.app.components.container/Container");

return G__27472;
} else {
return G__27464;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.app.components.container.sig27463)){
(front.app.components.container.sig27463.cljs$core$IFn$_invoke$arity$4 ? front.app.components.container.sig27463.cljs$core$IFn$_invoke$arity$4(front.app.components.container.Container,"",null,null) : front.app.components.container.sig27463.call(null,front.app.components.container.Container,"",null,null));
} else {
}

helix.core.register_BANG_(front.app.components.container.Container,"front.app.components.container/Container");
} else {
}


//# sourceMappingURL=front.app.components.container.js.map
