goog.provide('app.routes.events');
refx.alpha.reg_fx(new cljs.core.Keyword(null,"push-state","push-state",-1409397210),(function (route){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reitit.frontend.easy.push_state,route);
}));
refx.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.routes","push-state","app.routes/push-state",376935027),(function (_,p__25647){
var vec__25648 = p__25647;
var seq__25649 = cljs.core.seq(vec__25648);
var first__25650 = cljs.core.first(seq__25649);
var seq__25649__$1 = cljs.core.next(seq__25649);
var ___$1 = first__25650;
var route = seq__25649__$1;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"push-state","push-state",-1409397210),route], null);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.routes","navigated","app.routes/navigated",1254076289),(function (db,p__25651){
var vec__25652 = p__25651;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25652,(0),null);
var new_match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25652,(1),null);
var old_match = new cljs.core.Keyword(null,"current-route","current-route",2067529448).cljs$core$IFn$_invoke$arity$1(db);
var controllers = reitit.frontend.controllers.apply_controllers(new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(old_match),new_match);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-route","current-route",2067529448),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_match,new cljs.core.Keyword(null,"controllers","controllers",-1120410624),controllers));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.routes","current-route","app.routes/current-route",-1464184161),(function (db){
return new cljs.core.Keyword(null,"current-route","current-route",2067529448).cljs$core$IFn$_invoke$arity$1(db);
}));

//# sourceMappingURL=app.routes.events.js.map
