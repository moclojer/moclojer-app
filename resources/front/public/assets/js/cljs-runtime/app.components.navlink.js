goog.provide('app.components.navlink');
if(goog.DEBUG){
app.components.navlink.sig22339 = helix.core.signature_BANG_();
} else {
}

app.components.navlink.NavLink = (function (){var G__22354 = (function app$components$navlink$NavLink_render(props__20503__auto__,maybe_ref__20504__auto__){
var vec__22365 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__20503__auto__),maybe_ref__20504__auto__], null);
var map__22368 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22365,(0),null);
var map__22368__$1 = cljs.core.__destructure_map(map__22368);
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22368__$1,new cljs.core.Keyword(null,"href","href",-793805698));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22368__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22368__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(app.components.navlink.sig22339)){
(app.components.navlink.sig22339.cljs$core$IFn$_invoke$arity$0 ? app.components.navlink.sig22339.cljs$core$IFn$_invoke$arity$0() : app.components.navlink.sig22339.call(null));
} else {
}
} else {
}

return helix.core.get_react().createElement("a",(function (){var obj22395 = ({"href":href,"onClick":on_click,"className":" inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"});
return obj22395;
})(),children);
});
if(goog.DEBUG === true){
var G__22406 = G__22354;
(G__22406.displayName = "app.components.navlink/NavLink");

return G__22406;
} else {
return G__22354;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(app.components.navlink.sig22339)){
(app.components.navlink.sig22339.cljs$core$IFn$_invoke$arity$4 ? app.components.navlink.sig22339.cljs$core$IFn$_invoke$arity$4(app.components.navlink.NavLink,"",null,null) : app.components.navlink.sig22339.call(null,app.components.navlink.NavLink,"",null,null));
} else {
}

helix.core.register_BANG_(app.components.navlink.NavLink,"app.components.navlink/NavLink");
} else {
}


//# sourceMappingURL=app.components.navlink.js.map
