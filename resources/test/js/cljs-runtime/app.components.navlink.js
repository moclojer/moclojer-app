goog.provide('app.components.navlink');
if(goog.DEBUG){
app.components.navlink.sig50286 = helix.core.signature_BANG_();
} else {
}

app.components.navlink.NavLink = (function (){var G__50302 = (function app$components$navlink$NavLink_render(props__27104__auto__,maybe_ref__27105__auto__){
var vec__50307 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27104__auto__),maybe_ref__27105__auto__], null);
var map__50310 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50307,(0),null);
var map__50310__$1 = cljs.core.__destructure_map(map__50310);
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50310__$1,new cljs.core.Keyword(null,"href","href",-793805698));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50310__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50310__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(app.components.navlink.sig50286)){
(app.components.navlink.sig50286.cljs$core$IFn$_invoke$arity$0 ? app.components.navlink.sig50286.cljs$core$IFn$_invoke$arity$0() : app.components.navlink.sig50286.call(null));
} else {
}
} else {
}

return helix.core.get_react().createElement("a",(function (){var obj50318 = ({"href":href,"onClick":on_click,"className":" inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"});
return obj50318;
})(),children);
});
if(goog.DEBUG === true){
var G__50323 = G__50302;
(G__50323.displayName = "app.components.navlink/NavLink");

return G__50323;
} else {
return G__50302;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(app.components.navlink.sig50286)){
(app.components.navlink.sig50286.cljs$core$IFn$_invoke$arity$4 ? app.components.navlink.sig50286.cljs$core$IFn$_invoke$arity$4(app.components.navlink.NavLink,"",null,null) : app.components.navlink.sig50286.call(null,app.components.navlink.NavLink,"",null,null));
} else {
}

helix.core.register_BANG_(app.components.navlink.NavLink,"app.components.navlink/NavLink");
} else {
}


//# sourceMappingURL=app.components.navlink.js.map
