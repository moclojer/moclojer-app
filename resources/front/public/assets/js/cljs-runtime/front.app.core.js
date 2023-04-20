goog.provide('front.app.core');
var module$node_modules$react_dom$client=shadow.js.require("module$node_modules$react_dom$client", {});
front.app.core.default_db = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-route","current-route",2067529448),null,new cljs.core.Keyword(null,"current-user","current-user",-868792091),null], null);
refx.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("front.app.core","initialize-db","front.app.core/initialize-db",-1423097137),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [refx.alpha.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.auth","cookie","app.auth/cookie",645627376))], null),(function (p__40531,_){
var map__40532 = p__40531;
var map__40532__$1 = cljs.core.__destructure_map(map__40532);
var cookie_current_user = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40532__$1,new cljs.core.Keyword(null,"cookie-current-user","cookie-current-user",140042850));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(front.app.core.default_db,new cljs.core.Keyword(null,"current-user","current-user",-868792091),cookie_current_user)], null);
}));
if(goog.DEBUG){
front.app.core.sig40533 = helix.core.signature_BANG_();
} else {
}

front.app.core.dashboard_screen = (function (){var G__40534 = (function front$app$core$dashboard_screen_render(props__32635__auto__,maybe_ref__32636__auto__){
var vec__40535 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__32635__auto__),maybe_ref__32636__auto__], null);
var map__40538 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40535,(0),null);
var map__40538__$1 = cljs.core.__destructure_map(map__40538);
var user = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40538__$1,new cljs.core.Keyword(null,"user","user",1532431356));
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.app.core.sig40533)){
(front.app.core.sig40533.cljs$core$IFn$_invoke$arity$0 ? front.app.core.sig40533.cljs$core$IFn$_invoke$arity$0() : front.app.core.sig40533.call(null));
} else {
}
} else {
}

return helix.core.get_react().createElement("body",(function (){var obj40540 = ({"className":"relative bg-yellow-50 overflow-hidden max-h-screen"});
return obj40540;
})(),helix.core.get_react().createElement(front.app.components.dashboard.header.Header,null),helix.core.get_react().createElement(front.app.components.aside.Aside,null),helix.core.get_react().createElement(front.app.components.dashboard.main.Main,null));
});
if(goog.DEBUG === true){
var G__40541 = G__40534;
(G__40541.displayName = "front.app.core/dashboard-screen");

return G__40541;
} else {
return G__40534;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.app.core.sig40533)){
(front.app.core.sig40533.cljs$core$IFn$_invoke$arity$4 ? front.app.core.sig40533.cljs$core$IFn$_invoke$arity$4(front.app.core.dashboard_screen,"",null,null) : front.app.core.sig40533.call(null,front.app.core.dashboard_screen,"",null,null));
} else {
}

helix.core.register_BANG_(front.app.core.dashboard_screen,"front.app.core/dashboard-screen");
} else {
}

if(goog.DEBUG){
front.app.core.sig40542 = helix.core.signature_BANG_();
} else {
}

front.app.core.landing_screen = (function (){var G__40543 = (function front$app$core$landing_screen_render(props__32635__auto__,maybe_ref__32636__auto__){
var vec__40544 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__32635__auto__),maybe_ref__32636__auto__], null);
var map__40547 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40544,(0),null);
var map__40547__$1 = cljs.core.__destructure_map(map__40547);
var user = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40547__$1,new cljs.core.Keyword(null,"user","user",1532431356));
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.app.core.sig40542)){
(front.app.core.sig40542.cljs$core$IFn$_invoke$arity$0 ? front.app.core.sig40542.cljs$core$IFn$_invoke$arity$0() : front.app.core.sig40542.call(null));
} else {
}
} else {
}

var current_route = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.routes","current-route","app.routes/current-route",-1464184161)], null));
var route_data = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(current_route);
return helix.core.get_react().createElement("div",null,helix.core.get_react().createElement(front.app.components.nav.NavBar,(function (){var obj40549 = ({"user":user});
return obj40549;
})()),(cljs.core.truth_((function (){var or__5045__auto__ = user;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"public?","public?",786025269).cljs$core$IFn$_invoke$arity$1(route_data);
}
})())?(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(route_data);
if(cljs.core.truth_(temp__5804__auto__)){
var view = temp__5804__auto__;
return helix.core.get_react().createElement(view,(function (){var obj40551 = ({"match":current_route});
return obj40551;
})());
} else {
return null;
}
})():helix.core.get_react().createElement(front.app.auth.views.login_view,null)),helix.core.get_react().createElement(front.app.components.footer.FooterComponent,null));
});
if(goog.DEBUG === true){
var G__40552 = G__40543;
(G__40552.displayName = "front.app.core/landing-screen");

return G__40552;
} else {
return G__40543;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.app.core.sig40542)){
(front.app.core.sig40542.cljs$core$IFn$_invoke$arity$4 ? front.app.core.sig40542.cljs$core$IFn$_invoke$arity$4(front.app.core.landing_screen,"(refx/use-sub [:app.routes/current-route])",null,null) : front.app.core.sig40542.call(null,front.app.core.landing_screen,"(refx/use-sub [:app.routes/current-route])",null,null));
} else {
}

helix.core.register_BANG_(front.app.core.landing_screen,"front.app.core/landing-screen");
} else {
}

if(goog.DEBUG){
front.app.core.sig40553 = helix.core.signature_BANG_();
} else {
}

front.app.core.app = (function (){var G__40554 = (function front$app$core$app_render(props__32635__auto__,maybe_ref__32636__auto__){
var vec__40555 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__32635__auto__),maybe_ref__32636__auto__], null);
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.app.core.sig40553)){
(front.app.core.sig40553.cljs$core$IFn$_invoke$arity$0 ? front.app.core.sig40553.cljs$core$IFn$_invoke$arity$0() : front.app.core.sig40553.call(null));
} else {
}
} else {
}

var user = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","current-user","app.auth/current-user",-1927966660)], null));
return helix.core.get_react().createElement("div",null,(cljs.core.truth_(user)?helix.core.get_react().createElement(front.app.core.dashboard_screen,(function (){var obj40559 = ({"user":user});
return obj40559;
})()):helix.core.get_react().createElement(front.app.core.landing_screen,(function (){var obj40561 = ({"user":user});
return obj40561;
})())));
});
if(goog.DEBUG === true){
var G__40562 = G__40554;
(G__40562.displayName = "front.app.core/app");

return G__40562;
} else {
return G__40554;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.app.core.sig40553)){
(front.app.core.sig40553.cljs$core$IFn$_invoke$arity$4 ? front.app.core.sig40553.cljs$core$IFn$_invoke$arity$4(front.app.core.app,"(refx/use-sub [:app.auth/current-user])",null,null) : front.app.core.sig40553.call(null,front.app.core.app,"(refx/use-sub [:app.auth/current-user])",null,null));
} else {
}

helix.core.register_BANG_(front.app.core.app,"front.app.core/app");
} else {
}

if((typeof front !== 'undefined') && (typeof front.app !== 'undefined') && (typeof front.app.core !== 'undefined') && (typeof front.app.core.root !== 'undefined')){
} else {
front.app.core.root = module$node_modules$react_dom$client.createRoot(document.getElementById("app"));
}
front.app.core.render = (function front$app$core$render(){
return front.app.core.root.render(helix.core.get_react().createElement(front.app.core.app,null));
});
front.app.core.setup_BANG_ = (function front$app$core$setup_BANG_(){
refx.alpha.clear_subscription_cache_BANG_();

refx.alpha.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("front.app.core","initialize-db","front.app.core/initialize-db",-1423097137)], null));

return front.app.routes.core.init_routes_BANG_(front.app.routes.bookmarks.routes);
});
front.app.core.init = (function front$app$core$init(){
front.app.core.setup_BANG_();

return front.app.core.render();
});
goog.exportSymbol('front.app.core.init', front.app.core.init);

//# sourceMappingURL=front.app.core.js.map
