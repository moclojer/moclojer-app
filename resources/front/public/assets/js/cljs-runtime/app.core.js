goog.provide('app.core');
var module$node_modules$react_dom$client=shadow.js.require("module$node_modules$react_dom$client", {});
app.core.default_db = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-route","current-route",2067529448),null,new cljs.core.Keyword(null,"current-user","current-user",-868792091),null], null);
refx.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app.core","initialize-db","app.core/initialize-db",-1080380188),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [refx.alpha.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.auth","cookie","app.auth/cookie",645627376))], null),(function (p__25321,_){
var map__25322 = p__25321;
var map__25322__$1 = cljs.core.__destructure_map(map__25322);
var cookie_current_user = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25322__$1,new cljs.core.Keyword(null,"cookie-current-user","cookie-current-user",140042850));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.core.default_db,new cljs.core.Keyword(null,"current-user","current-user",-868792091),cookie_current_user)], null);
}));
if(goog.DEBUG){
app.core.sig25323 = helix.core.signature_BANG_();
} else {
}

app.core.dashboard_screen = (function (){var G__25324 = (function app$core$dashboard_screen_render(props__20503__auto__,maybe_ref__20504__auto__){
var vec__25325 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__20503__auto__),maybe_ref__20504__auto__], null);
var map__25328 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25325,(0),null);
var map__25328__$1 = cljs.core.__destructure_map(map__25328);
var user = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25328__$1,new cljs.core.Keyword(null,"user","user",1532431356));
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(app.core.sig25323)){
(app.core.sig25323.cljs$core$IFn$_invoke$arity$0 ? app.core.sig25323.cljs$core$IFn$_invoke$arity$0() : app.core.sig25323.call(null));
} else {
}
} else {
}

return helix.core.get_react().createElement("body",(function (){var obj25330 = ({"className":"relative bg-yellow-50 overflow-hidden max-h-screen"});
return obj25330;
})(),helix.core.get_react().createElement(app.components.dashboard.header.Header,null),helix.core.get_react().createElement(app.components.aside.Aside,null),helix.core.get_react().createElement(app.components.dashboard.main.Main,null));
});
if(goog.DEBUG === true){
var G__25331 = G__25324;
(G__25331.displayName = "app.core/dashboard-screen");

return G__25331;
} else {
return G__25324;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(app.core.sig25323)){
(app.core.sig25323.cljs$core$IFn$_invoke$arity$4 ? app.core.sig25323.cljs$core$IFn$_invoke$arity$4(app.core.dashboard_screen,"",null,null) : app.core.sig25323.call(null,app.core.dashboard_screen,"",null,null));
} else {
}

helix.core.register_BANG_(app.core.dashboard_screen,"app.core/dashboard-screen");
} else {
}

if(goog.DEBUG){
app.core.sig25332 = helix.core.signature_BANG_();
} else {
}

app.core.landing_screen = (function (){var G__25333 = (function app$core$landing_screen_render(props__20503__auto__,maybe_ref__20504__auto__){
var vec__25334 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__20503__auto__),maybe_ref__20504__auto__], null);
var map__25337 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25334,(0),null);
var map__25337__$1 = cljs.core.__destructure_map(map__25337);
var user = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25337__$1,new cljs.core.Keyword(null,"user","user",1532431356));
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(app.core.sig25332)){
(app.core.sig25332.cljs$core$IFn$_invoke$arity$0 ? app.core.sig25332.cljs$core$IFn$_invoke$arity$0() : app.core.sig25332.call(null));
} else {
}
} else {
}

var current_route = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.routes","current-route","app.routes/current-route",-1464184161)], null));
var route_data = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(current_route);
return helix.core.get_react().createElement("div",null,helix.core.get_react().createElement(app.components.nav.NavBar,(function (){var obj25339 = ({"user":user});
return obj25339;
})()),(cljs.core.truth_((function (){var or__5045__auto__ = user;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"public?","public?",786025269).cljs$core$IFn$_invoke$arity$1(route_data);
}
})())?(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(route_data);
if(cljs.core.truth_(temp__5804__auto__)){
var view = temp__5804__auto__;
return helix.core.get_react().createElement(view,(function (){var obj25341 = ({"match":current_route});
return obj25341;
})());
} else {
return null;
}
})():helix.core.get_react().createElement(app.auth.views.login_view,null)),helix.core.get_react().createElement(app.components.footer.FooterComponent,null));
});
if(goog.DEBUG === true){
var G__25342 = G__25333;
(G__25342.displayName = "app.core/landing-screen");

return G__25342;
} else {
return G__25333;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(app.core.sig25332)){
(app.core.sig25332.cljs$core$IFn$_invoke$arity$4 ? app.core.sig25332.cljs$core$IFn$_invoke$arity$4(app.core.landing_screen,"(refx/use-sub [:app.routes/current-route])",null,null) : app.core.sig25332.call(null,app.core.landing_screen,"(refx/use-sub [:app.routes/current-route])",null,null));
} else {
}

helix.core.register_BANG_(app.core.landing_screen,"app.core/landing-screen");
} else {
}

if(goog.DEBUG){
app.core.sig25343 = helix.core.signature_BANG_();
} else {
}

app.core.app = (function (){var G__25344 = (function app$core$app_render(props__20503__auto__,maybe_ref__20504__auto__){
var vec__25345 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__20503__auto__),maybe_ref__20504__auto__], null);
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(app.core.sig25343)){
(app.core.sig25343.cljs$core$IFn$_invoke$arity$0 ? app.core.sig25343.cljs$core$IFn$_invoke$arity$0() : app.core.sig25343.call(null));
} else {
}
} else {
}

var user = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","current-user","app.auth/current-user",-1927966660)], null));
return helix.core.get_react().createElement("div",null,(cljs.core.truth_(user)?helix.core.get_react().createElement(app.core.dashboard_screen,(function (){var obj25349 = ({"user":user});
return obj25349;
})()):helix.core.get_react().createElement(app.core.landing_screen,(function (){var obj25351 = ({"user":user});
return obj25351;
})())));
});
if(goog.DEBUG === true){
var G__25352 = G__25344;
(G__25352.displayName = "app.core/app");

return G__25352;
} else {
return G__25344;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(app.core.sig25343)){
(app.core.sig25343.cljs$core$IFn$_invoke$arity$4 ? app.core.sig25343.cljs$core$IFn$_invoke$arity$4(app.core.app,"(refx/use-sub [:app.auth/current-user])",null,null) : app.core.sig25343.call(null,app.core.app,"(refx/use-sub [:app.auth/current-user])",null,null));
} else {
}

helix.core.register_BANG_(app.core.app,"app.core/app");
} else {
}

if((typeof app !== 'undefined') && (typeof app.core !== 'undefined') && (typeof app.core.root !== 'undefined')){
} else {
app.core.root = module$node_modules$react_dom$client.createRoot(document.getElementById("app"));
}
app.core.render = (function app$core$render(){
return app.core.root.render(helix.core.get_react().createElement(app.core.app,null));
});
app.core.setup_BANG_ = (function app$core$setup_BANG_(){
refx.alpha.clear_subscription_cache_BANG_();

refx.alpha.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.core","initialize-db","app.core/initialize-db",-1080380188)], null));

return app.routes.core.init_routes_BANG_(app.routes.bookmarks.routes);
});
app.core.init = (function app$core$init(){
app.core.setup_BANG_();

return app.core.render();
});
goog.exportSymbol('app.core.init', app.core.init);

//# sourceMappingURL=app.core.js.map
