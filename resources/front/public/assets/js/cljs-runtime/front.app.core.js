goog.provide('front.app.core');
var module$node_modules$react_dom$client=shadow.js.require("module$node_modules$react_dom$client", {});
front.app.core.default_db = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-route","current-route",2067529448),null,new cljs.core.Keyword(null,"current-user","current-user",-868792091),null], null);
refx.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("front.app.core","initialize-db","front.app.core/initialize-db",-1423097137),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [refx.alpha.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.auth","cookie","app.auth/cookie",645627376))], null),(function (p__33819,_){
var map__33820 = p__33819;
var map__33820__$1 = cljs.core.__destructure_map(map__33820);
var cookie_current_user = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33820__$1,new cljs.core.Keyword(null,"cookie-current-user","cookie-current-user",140042850));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(front.app.core.default_db,new cljs.core.Keyword(null,"current-user","current-user",-868792091),cookie_current_user)], null);
}));
if(goog.DEBUG){
front.app.core.sig33821 = helix.core.signature_BANG_();
} else {
}

front.app.core.dashboard_screen = (function (){var G__33822 = (function front$app$core$dashboard_screen_render(props__24071__auto__,maybe_ref__24072__auto__){
var vec__33823 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__24071__auto__),maybe_ref__24072__auto__], null);
var map__33826 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33823,(0),null);
var map__33826__$1 = cljs.core.__destructure_map(map__33826);
var user = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33826__$1,new cljs.core.Keyword(null,"user","user",1532431356));
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.app.core.sig33821)){
(front.app.core.sig33821.cljs$core$IFn$_invoke$arity$0 ? front.app.core.sig33821.cljs$core$IFn$_invoke$arity$0() : front.app.core.sig33821.call(null));
} else {
}
} else {
}

return helix.core.get_react().createElement("body",(function (){var obj33828 = ({"className":"relative bg-yellow-50 overflow-hidden max-h-screen"});
return obj33828;
})(),helix.core.get_react().createElement(front.app.components.dashboard.header.Header,null),helix.core.get_react().createElement(front.app.components.aside.Aside,null),helix.core.get_react().createElement(front.app.components.dashboard.main.Main,null));
});
if(goog.DEBUG === true){
var G__33829 = G__33822;
(G__33829.displayName = "front.app.core/dashboard-screen");

return G__33829;
} else {
return G__33822;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.app.core.sig33821)){
(front.app.core.sig33821.cljs$core$IFn$_invoke$arity$4 ? front.app.core.sig33821.cljs$core$IFn$_invoke$arity$4(front.app.core.dashboard_screen,"",null,null) : front.app.core.sig33821.call(null,front.app.core.dashboard_screen,"",null,null));
} else {
}

helix.core.register_BANG_(front.app.core.dashboard_screen,"front.app.core/dashboard-screen");
} else {
}

if(goog.DEBUG){
front.app.core.sig33830 = helix.core.signature_BANG_();
} else {
}

front.app.core.landing_screen = (function (){var G__33831 = (function front$app$core$landing_screen_render(props__24071__auto__,maybe_ref__24072__auto__){
var vec__33832 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__24071__auto__),maybe_ref__24072__auto__], null);
var map__33835 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33832,(0),null);
var map__33835__$1 = cljs.core.__destructure_map(map__33835);
var user = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33835__$1,new cljs.core.Keyword(null,"user","user",1532431356));
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.app.core.sig33830)){
(front.app.core.sig33830.cljs$core$IFn$_invoke$arity$0 ? front.app.core.sig33830.cljs$core$IFn$_invoke$arity$0() : front.app.core.sig33830.call(null));
} else {
}
} else {
}

var current_route = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.routes","current-route","app.routes/current-route",-1464184161)], null));
var route_data = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(current_route);
return helix.core.get_react().createElement("div",null,helix.core.get_react().createElement(front.app.components.nav.NavBar,(function (){var obj33837 = ({"user":user});
return obj33837;
})()),(cljs.core.truth_((function (){var or__5045__auto__ = user;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"public?","public?",786025269).cljs$core$IFn$_invoke$arity$1(route_data);
}
})())?(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(route_data);
if(cljs.core.truth_(temp__5804__auto__)){
var view = temp__5804__auto__;
return helix.core.get_react().createElement(view,(function (){var obj33842 = ({"match":current_route});
return obj33842;
})());
} else {
return null;
}
})():helix.core.get_react().createElement(front.app.auth.views.login_view,null)),helix.core.get_react().createElement(front.app.components.footer.FooterComponent,null));
});
if(goog.DEBUG === true){
var G__33844 = G__33831;
(G__33844.displayName = "front.app.core/landing-screen");

return G__33844;
} else {
return G__33831;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.app.core.sig33830)){
(front.app.core.sig33830.cljs$core$IFn$_invoke$arity$4 ? front.app.core.sig33830.cljs$core$IFn$_invoke$arity$4(front.app.core.landing_screen,"(refx/use-sub [:app.routes/current-route])",null,null) : front.app.core.sig33830.call(null,front.app.core.landing_screen,"(refx/use-sub [:app.routes/current-route])",null,null));
} else {
}

helix.core.register_BANG_(front.app.core.landing_screen,"front.app.core/landing-screen");
} else {
}

if(goog.DEBUG){
front.app.core.sig33845 = helix.core.signature_BANG_();
} else {
}

front.app.core.app = (function (){var G__33846 = (function front$app$core$app_render(props__24071__auto__,maybe_ref__24072__auto__){
var vec__33847 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__24071__auto__),maybe_ref__24072__auto__], null);
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.app.core.sig33845)){
(front.app.core.sig33845.cljs$core$IFn$_invoke$arity$0 ? front.app.core.sig33845.cljs$core$IFn$_invoke$arity$0() : front.app.core.sig33845.call(null));
} else {
}
} else {
}

var user = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","current-user","app.auth/current-user",-1927966660)], null));
return helix.core.get_react().createElement("div",null,(cljs.core.truth_(user)?helix.core.get_react().createElement(front.app.core.dashboard_screen,(function (){var obj33851 = ({"user":user});
return obj33851;
})()):helix.core.get_react().createElement(front.app.core.landing_screen,(function (){var obj33853 = ({"user":user});
return obj33853;
})())));
});
if(goog.DEBUG === true){
var G__33854 = G__33846;
(G__33854.displayName = "front.app.core/app");

return G__33854;
} else {
return G__33846;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.app.core.sig33845)){
(front.app.core.sig33845.cljs$core$IFn$_invoke$arity$4 ? front.app.core.sig33845.cljs$core$IFn$_invoke$arity$4(front.app.core.app,"(refx/use-sub [:app.auth/current-user])",null,null) : front.app.core.sig33845.call(null,front.app.core.app,"(refx/use-sub [:app.auth/current-user])",null,null));
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
