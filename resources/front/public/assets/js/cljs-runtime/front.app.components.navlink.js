goog.provide('front.app.components.navlink');
if(goog.DEBUG){
front.app.components.navlink.sig27078 = helix.core.signature_BANG_();
} else {
}

front.app.components.navlink.NavLink = (function (){var G__27086 = (function front$app$components$navlink$NavLink_render(props__24071__auto__,maybe_ref__24072__auto__){
var vec__27096 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__24071__auto__),maybe_ref__24072__auto__], null);
var map__27099 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27096,(0),null);
var map__27099__$1 = cljs.core.__destructure_map(map__27099);
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27099__$1,new cljs.core.Keyword(null,"href","href",-793805698));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27099__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27099__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.app.components.navlink.sig27078)){
(front.app.components.navlink.sig27078.cljs$core$IFn$_invoke$arity$0 ? front.app.components.navlink.sig27078.cljs$core$IFn$_invoke$arity$0() : front.app.components.navlink.sig27078.call(null));
} else {
}
} else {
}

return helix.core.get_react().createElement("a",(function (){var obj27113 = ({"href":href,"onClick":on_click,"className":" inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"});
return obj27113;
})(),children);
});
if(goog.DEBUG === true){
var G__27116 = G__27086;
(G__27116.displayName = "front.app.components.navlink/NavLink");

return G__27116;
} else {
return G__27086;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.app.components.navlink.sig27078)){
(front.app.components.navlink.sig27078.cljs$core$IFn$_invoke$arity$4 ? front.app.components.navlink.sig27078.cljs$core$IFn$_invoke$arity$4(front.app.components.navlink.NavLink,"",null,null) : front.app.components.navlink.sig27078.call(null,front.app.components.navlink.NavLink,"",null,null));
} else {
}

helix.core.register_BANG_(front.app.components.navlink.NavLink,"front.app.components.navlink/NavLink");
} else {
}


//# sourceMappingURL=front.app.components.navlink.js.map
