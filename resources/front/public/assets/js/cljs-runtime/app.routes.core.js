goog.provide('app.routes.core');
app.routes.core.router = (function app$routes$core$router(routes){
return reitit.frontend.router.cljs$core$IFn$_invoke$arity$2(routes,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"controllers","controllers",-1120410624),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["start","root-controller"], 0)),new cljs.core.Keyword(null,"stop","stop",-2140911342),cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["stop","root controller"], 0))], null)], null),new cljs.core.Keyword(null,"coercion","coercion",904067157),reitit.coercion.schema.coercion,new cljs.core.Keyword(null,"public?","public?",786025269),false], null)], null));
});
app.routes.core.on_navigate = (function app$routes$core$on_navigate(new_match){
if(cljs.core.truth_(new_match)){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.routes","navigated","app.routes/navigated",1254076289),new_match], null));
} else {
return null;
}
});
app.routes.core.init_routes_BANG_ = (function app$routes$core$init_routes_BANG_(routes){
console.log("initializing routes");

return reitit.frontend.easy.start_BANG_(app.routes.core.router(routes),app.routes.core.on_navigate,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"use-fragment","use-fragment",-1617737154),true], null));
});

//# sourceMappingURL=app.routes.core.js.map
