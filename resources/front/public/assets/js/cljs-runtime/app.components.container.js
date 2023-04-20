goog.provide('app.components.container');
if(goog.DEBUG){
app.components.container.sig23269 = helix.core.signature_BANG_();
} else {
}

app.components.container.Container = (function (){var G__23273 = (function app$components$container$Container_render(props__20503__auto__,maybe_ref__20504__auto__){
var vec__23274 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__20503__auto__),maybe_ref__20504__auto__], null);
var map__23277 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23274,(0),null);
var map__23277__$1 = cljs.core.__destructure_map(map__23277);
var props = map__23277__$1;
var class_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23277__$1,new cljs.core.Keyword(null,"class-name","class-name",945142584));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23277__$1,new cljs.core.Keyword(null,"children","children",-940561982));
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(app.components.container.sig23269)){
(app.components.container.sig23269.cljs$core$IFn$_invoke$arity$0 ? app.components.container.sig23269.cljs$core$IFn$_invoke$arity$0() : app.components.container.sig23269.call(null));
} else {
}
} else {
}

return helix.core.get_react().createElement("div",helix.impl.props.merge_obj((function (){var obj23291 = ({"className":["mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name)].join('')});
return obj23291;
})(),helix.impl.props._dom_props.cljs$core$IFn$_invoke$arity$1(props)),children);
});
if(goog.DEBUG === true){
var G__23297 = G__23273;
(G__23297.displayName = "app.components.container/Container");

return G__23297;
} else {
return G__23273;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(app.components.container.sig23269)){
(app.components.container.sig23269.cljs$core$IFn$_invoke$arity$4 ? app.components.container.sig23269.cljs$core$IFn$_invoke$arity$4(app.components.container.Container,"",null,null) : app.components.container.sig23269.call(null,app.components.container.Container,"",null,null));
} else {
}

helix.core.register_BANG_(app.components.container.Container,"app.components.container/Container");
} else {
}


//# sourceMappingURL=app.components.container.js.map
