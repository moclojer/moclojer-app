goog.provide('app.routes');
refx.alpha.reg_fx(new cljs.core.Keyword(null,"push-state","push-state",-1409397210),(function (route){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reitit.frontend.easy.push_state,route);
}));
refx.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.routes","push-state","app.routes/push-state",376935027),(function (_,p__43000){
var vec__43001 = p__43000;
var seq__43002 = cljs.core.seq(vec__43001);
var first__43003 = cljs.core.first(seq__43002);
var seq__43002__$1 = cljs.core.next(seq__43002);
var ___$1 = first__43003;
var route = seq__43002__$1;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"push-state","push-state",-1409397210),route], null);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.routes","navigated","app.routes/navigated",1254076289),(function (db,p__43004){
var vec__43005 = p__43004;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43005,(0),null);
var new_match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43005,(1),null);
var old_match = new cljs.core.Keyword(null,"current-route","current-route",2067529448).cljs$core$IFn$_invoke$arity$1(db);
var controllers = reitit.frontend.controllers.apply_controllers(new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(old_match),new_match);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-route","current-route",2067529448),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_match,new cljs.core.Keyword(null,"controllers","controllers",-1120410624),controllers));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.routes","current-route","app.routes/current-route",-1464184161),(function (db){
return new cljs.core.Keyword(null,"current-route","current-route",2067529448).cljs$core$IFn$_invoke$arity$1(db);
}));
app.routes.router = (function app$routes$router(routes){
return reitit.frontend.router.cljs$core$IFn$_invoke$arity$2(routes,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"controllers","controllers",-1120410624),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["start","root-controller"], 0)),new cljs.core.Keyword(null,"stop","stop",-2140911342),cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["stop","root controller"], 0))], null)], null),new cljs.core.Keyword(null,"coercion","coercion",904067157),reitit.coercion.schema.coercion,new cljs.core.Keyword(null,"public?","public?",786025269),false], null)], null));
});
app.routes.on_navigate = (function app$routes$on_navigate(new_match){
if(cljs.core.truth_(new_match)){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.routes","navigated","app.routes/navigated",1254076289),new_match], null));
} else {
return null;
}
});
app.routes.init_routes_BANG_ = (function app$routes$init_routes_BANG_(routes){
console.log("initializing routes");

return reitit.frontend.easy.start_BANG_(app.routes.router(routes),app.routes.on_navigate,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"use-fragment","use-fragment",-1617737154),true], null));
});

//# sourceMappingURL=app.routes.js.map
