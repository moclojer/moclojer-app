goog.provide('app.auth.views');
app.auth.views.form_classes = "block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm";
if(goog.DEBUG){
app.auth.views.sig51065 = helix.core.signature_BANG_();
} else {
}

app.auth.views.text_field = (function (){var G__51066 = (function app$auth$views$text_field_render(props__27104__auto__,maybe_ref__27105__auto__){
var vec__51067 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27104__auto__),maybe_ref__27105__auto__], null);
var map__51070 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51067,(0),null);
var map__51070__$1 = cljs.core.__destructure_map(map__51070);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51070__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var required = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51070__$1,new cljs.core.Keyword(null,"required","required",1807647006));
var name_field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51070__$1,new cljs.core.Keyword(null,"name-field","name-field",-1347695388));
var disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51070__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51070__$1,new cljs.core.Keyword(null,"value","value",305978217));
var type_field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51070__$1,new cljs.core.Keyword(null,"type-field","type-field",-905349238));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51070__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51070__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51070__$1,new cljs.core.Keyword(null,"class-name","class-name",945142584));
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(app.auth.views.sig51065)){
(app.auth.views.sig51065.cljs$core$IFn$_invoke$arity$0 ? app.auth.views.sig51065.cljs$core$IFn$_invoke$arity$0() : app.auth.views.sig51065.call(null));
} else {
}
} else {
}

return helix.core.get_react().createElement("div",(function (){var obj51074 = ({"className":class_name});
return obj51074;
})(),(cljs.core.truth_(label)?helix.core.get_react().createElement("label",(function (){var obj51076 = ({"htmlFor":id,"className":"mb-3 block text-sm font-medium text-gray-700"});
return obj51076;
})(),label):null),helix.core.get_react().createElement("input",(function (){var obj51079 = ({"id":id,"type":type_field,"className":app.auth.views.form_classes,"name":name_field,"value":helix.impl.props.or_undefined(value),"onChange":on_change,"disabled":disabled,"required":required});
return obj51079;
})()));
});
if(goog.DEBUG === true){
var G__51080 = G__51066;
(G__51080.displayName = "app.auth.views/text-field");

return G__51080;
} else {
return G__51066;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(app.auth.views.sig51065)){
(app.auth.views.sig51065.cljs$core$IFn$_invoke$arity$4 ? app.auth.views.sig51065.cljs$core$IFn$_invoke$arity$4(app.auth.views.text_field,"",null,null) : app.auth.views.sig51065.call(null,app.auth.views.text_field,"",null,null));
} else {
}

helix.core.register_BANG_(app.auth.views.text_field,"app.auth.views/text-field");
} else {
}

if(goog.DEBUG){
app.auth.views.sig51082 = helix.core.signature_BANG_();
} else {
}

app.auth.views.AuthLayout = (function (){var G__51084 = (function app$auth$views$AuthLayout_render(props__27104__auto__,maybe_ref__27105__auto__){
var vec__51085 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27104__auto__),maybe_ref__27105__auto__], null);
var map__51088 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51085,(0),null);
var map__51088__$1 = cljs.core.__destructure_map(map__51088);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51088__$1,new cljs.core.Keyword(null,"children","children",-940561982));
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(app.auth.views.sig51082)){
(app.auth.views.sig51082.cljs$core$IFn$_invoke$arity$0 ? app.auth.views.sig51082.cljs$core$IFn$_invoke$arity$0() : app.auth.views.sig51082.call(null));
} else {
}
} else {
}

return helix.core.get_react().createElement("div",(function (){var obj51090 = ({"className":"relative flex min-h-full justify-center md:px-12 lg:px-0"});
return obj51090;
})(),helix.core.get_react().createElement("div",(function (){var obj51092 = ({"className":"relative z-10 flex flex-1 flex-col bg-white py-10 px-4 shadow-2xl sm:justify-center md:flex-none md:px-28"});
return obj51092;
})(),helix.core.get_react().createElement("div",(function (){var obj51094 = ({"className":"mx-auto w-full max-w-md sm:px-4 md:w-96 md:max-w-sm md:px-0"});
return obj51094;
})(),children)));
});
if(goog.DEBUG === true){
var G__51095 = G__51084;
(G__51095.displayName = "app.auth.views/AuthLayout");

return G__51095;
} else {
return G__51084;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(app.auth.views.sig51082)){
(app.auth.views.sig51082.cljs$core$IFn$_invoke$arity$4 ? app.auth.views.sig51082.cljs$core$IFn$_invoke$arity$4(app.auth.views.AuthLayout,"",null,null) : app.auth.views.sig51082.call(null,app.auth.views.AuthLayout,"",null,null));
} else {
}

helix.core.register_BANG_(app.auth.views.AuthLayout,"app.auth.views/AuthLayout");
} else {
}

if(goog.DEBUG){
app.auth.views.sig51096 = helix.core.signature_BANG_();
} else {
}

app.auth.views.SignInBtn = (function (){var G__51097 = (function app$auth$views$SignInBtn_render(props__27104__auto__,maybe_ref__27105__auto__){
var vec__51098 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27104__auto__),maybe_ref__27105__auto__], null);
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(app.auth.views.sig51096)){
(app.auth.views.sig51096.cljs$core$IFn$_invoke$arity$0 ? app.auth.views.sig51096.cljs$core$IFn$_invoke$arity$0() : app.auth.views.sig51096.call(null));
} else {
}
} else {
}

return helix.core.get_react().createElement("div",(function (){var obj51102 = ({"className":"hidden md:block"});
return obj51102;
})(),helix.core.get_react().createElement(app.components.navlink.NavLink,(function (){var obj51104 = ({"children":"Sign In","href":reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.core","login","app.core/login",1145385267))});
return obj51104;
})()));
});
if(goog.DEBUG === true){
var G__51105 = G__51097;
(G__51105.displayName = "app.auth.views/SignInBtn");

return G__51105;
} else {
return G__51097;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(app.auth.views.sig51096)){
(app.auth.views.sig51096.cljs$core$IFn$_invoke$arity$4 ? app.auth.views.sig51096.cljs$core$IFn$_invoke$arity$4(app.auth.views.SignInBtn,"",null,null) : app.auth.views.sig51096.call(null,app.auth.views.SignInBtn,"",null,null));
} else {
}

helix.core.register_BANG_(app.auth.views.SignInBtn,"app.auth.views/SignInBtn");
} else {
}

if(goog.DEBUG){
app.auth.views.sig51106 = helix.core.signature_BANG_();
} else {
}

app.auth.views.LogOutBtn = (function (){var G__51107 = (function app$auth$views$LogOutBtn_render(props__27104__auto__,maybe_ref__27105__auto__){
var vec__51108 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27104__auto__),maybe_ref__27105__auto__], null);
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(app.auth.views.sig51106)){
(app.auth.views.sig51106.cljs$core$IFn$_invoke$arity$0 ? app.auth.views.sig51106.cljs$core$IFn$_invoke$arity$0() : app.auth.views.sig51106.call(null));
} else {
}
} else {
}

return helix.core.get_react().createElement("div",(function (){var obj51112 = ({"className":"hidden md:block"});
return obj51112;
})(),helix.core.get_react().createElement(app.components.navlink.NavLink,(function (){var obj51114 = ({"on-click":(function (e){
e.preventDefault();

refx.alpha.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.routes","push-state","app.routes/push-state",376935027),new cljs.core.Keyword("app.core","home","app.core/home",1018164047)], null));

return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","logout","app.auth/logout",-1850847146)], null));
}),"children":"Logout","href":"#"});
return obj51114;
})()));
});
if(goog.DEBUG === true){
var G__51115 = G__51107;
(G__51115.displayName = "app.auth.views/LogOutBtn");

return G__51115;
} else {
return G__51107;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(app.auth.views.sig51106)){
(app.auth.views.sig51106.cljs$core$IFn$_invoke$arity$4 ? app.auth.views.sig51106.cljs$core$IFn$_invoke$arity$4(app.auth.views.LogOutBtn,"",null,null) : app.auth.views.sig51106.call(null,app.auth.views.LogOutBtn,"",null,null));
} else {
}

helix.core.register_BANG_(app.auth.views.LogOutBtn,"app.auth.views/LogOutBtn");
} else {
}

if(goog.DEBUG){
app.auth.views.sig51116 = helix.core.signature_BANG_();
} else {
}

app.auth.views.AuthMenu = (function (){var G__51117 = (function app$auth$views$AuthMenu_render(props__27104__auto__,maybe_ref__27105__auto__){
var vec__51118 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27104__auto__),maybe_ref__27105__auto__], null);
var map__51121 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51118,(0),null);
var map__51121__$1 = cljs.core.__destructure_map(map__51121);
var user = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51121__$1,new cljs.core.Keyword(null,"user","user",1532431356));
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(app.auth.views.sig51116)){
(app.auth.views.sig51116.cljs$core$IFn$_invoke$arity$0 ? app.auth.views.sig51116.cljs$core$IFn$_invoke$arity$0() : app.auth.views.sig51116.call(null));
} else {
}
} else {
}

if(cljs.core.truth_(user)){
return helix.core.get_react().createElement(app.auth.views.LogOutBtn,null);
} else {
return helix.core.get_react().createElement(app.auth.views.SignInBtn,null);
}
});
if(goog.DEBUG === true){
var G__51122 = G__51117;
(G__51122.displayName = "app.auth.views/AuthMenu");

return G__51122;
} else {
return G__51117;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(app.auth.views.sig51116)){
(app.auth.views.sig51116.cljs$core$IFn$_invoke$arity$4 ? app.auth.views.sig51116.cljs$core$IFn$_invoke$arity$4(app.auth.views.AuthMenu,"",null,null) : app.auth.views.sig51116.call(null,app.auth.views.AuthMenu,"",null,null));
} else {
}

helix.core.register_BANG_(app.auth.views.AuthMenu,"app.auth.views/AuthMenu");
} else {
}

if(goog.DEBUG){
app.auth.views.sig51124 = helix.core.signature_BANG_();
} else {
}

app.auth.views.login_view = (function (){var G__51125 = (function app$auth$views$login_view_render(props__27104__auto__,maybe_ref__27105__auto__){
var vec__51126 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27104__auto__),maybe_ref__27105__auto__], null);
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(app.auth.views.sig51124)){
(app.auth.views.sig51124.cljs$core$IFn$_invoke$arity$0 ? app.auth.views.sig51124.cljs$core$IFn$_invoke$arity$0() : app.auth.views.sig51124.call(null));
} else {
}
} else {
}

var loading_QMARK_ = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","login-loading","app.auth/login-loading",523485317)], null));
var vec__51129 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","login-error","app.auth/login-error",2008740350)], null));
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51129,(0),null);
var error_res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51129,(1),null);
var email_sent_QMARK_ = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","email-sent","app.auth/email-sent",1729173059)], null));
var vec__51132 = helix.hooks.use_state(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"email","email",1415816706),""], null));
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51132,(0),null);
var set_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51132,(1),null);
return helix.core.get_react().createElement(app.auth.views.AuthLayout,null,helix.core.get_react().createElement("div",null,(cljs.core.truth_(email_sent_QMARK_)?helix.core.get_react().createElement("div",(function (){var obj51136 = ({"id":"login-email-sent","className":"flex flex-col"});
return obj51136;
})(),helix.core.get_react().createElement("h2",(function (){var obj51138 = ({"className":"text-lg font-semibold text-gray-900"});
return obj51138;
})(),"Check your email, and click on the link."),helix.core.get_react().createElement("div",null,helix.core.get_react().createElement("div",(function (){var obj51140 = ({"className":"mt-2 text-sm text-gray-700"});
return obj51140;
})(),"Didn't received it?",helix.core.get_react().createElement(app.components.navlink.NavLink,(function (){var obj51142 = ({"children":" Try again.","on-click":(function (e){
e.preventDefault();

return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","send-email-again","app.auth/send-email-again",-25575890)], null));
}),"href":"#"});
return obj51142;
})())))):helix.core.get_react().createElement("div",(function (){var obj51144 = ({"className":"flex flex-col"});
return obj51144;
})(),helix.core.get_react().createElement("a",(function (){var obj51146 = ({"href":"/"});
return obj51146;
})(),helix.core.get_react().createElement("img",(function (){var obj51148 = ({"className":"h-10 w-auto"});
return obj51148;
})()),"Home"),helix.core.get_react().createElement("div",(function (){var obj51150 = ({"className":"mt-20"});
return obj51150;
})(),helix.core.get_react().createElement("h2",(function (){var obj51152 = ({"className":"text-lg font-semibold text-gray-900"});
return obj51152;
})(),"Sign in to your account"),helix.core.get_react().createElement("p",(function (){var obj51154 = ({"className":"mt-2 text-sm text-gray-700"});
return obj51154;
})(),"Don't have an account? ")),helix.core.get_react().createElement("form",(function (){var obj51156 = ({"disabled":loading_QMARK_,"className":"mt-10 grid grid-cols-1 gap-y-8","onSubmit":(function (e){
e.preventDefault();

if(cljs.core.truth_(new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(state))){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","send-email","app.auth/send-email",-459398038),state], null));
} else {
return null;
}
})});
return obj51156;
})(),helix.core.get_react().createElement(app.auth.views.text_field,(function (){var obj51158 = ({"label":"Email address","id":"login-email","name":"email","type-field":"email","required":true,"value":new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(state),"disabled":loading_QMARK_,"on-change":(function (p1__51123_SHARP_){
var G__51159 = cljs.core.assoc;
var G__51160 = new cljs.core.Keyword(null,"email","email",1415816706);
var G__51161 = p1__51123_SHARP_.target.value;
return (set_state.cljs$core$IFn$_invoke$arity$3 ? set_state.cljs$core$IFn$_invoke$arity$3(G__51159,G__51160,G__51161) : set_state.call(null,G__51159,G__51160,G__51161));
})});
return obj51158;
})()),(cljs.core.truth_(error)?helix.core.get_react().createElement(app.components.alerts.Error,(function (){var obj51163 = ({"id":"login-error","error":"Error... try it again.","description":new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(error_res)});
return obj51163;
})()):null),helix.core.get_react().createElement("div",null,helix.core.get_react().createElement(app.components.button.Button,(function (){var obj51165 = ({"disabled":loading_QMARK_,"type":"submit","variant":"solid","color":"blue","class-name":"w-full"});
return obj51165;
})(),(cljs.core.truth_(loading_QMARK_)?helix.core.get_react().createElement("span",(function (){var obj51167 = ({"className":"inline-flex"});
return obj51167;
})(),helix.core.get_react().createElement(app.components.loading.LoadingSpinner,({})),"Loading..."):helix.core.get_react().createElement("span",null,"Sign in")))))))));
});
if(goog.DEBUG === true){
var G__51170 = G__51125;
(G__51170.displayName = "app.auth.views/login-view");

return G__51170;
} else {
return G__51125;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(app.auth.views.sig51124)){
(app.auth.views.sig51124.cljs$core$IFn$_invoke$arity$4 ? app.auth.views.sig51124.cljs$core$IFn$_invoke$arity$4(app.auth.views.login_view,"(refx/use-sub [:app.auth/login-loading])(refx/use-sub [:app.auth/login-error])(refx/use-sub [:app.auth/email-sent])(hooks/use-state {:email \"\"})",null,null) : app.auth.views.sig51124.call(null,app.auth.views.login_view,"(refx/use-sub [:app.auth/login-loading])(refx/use-sub [:app.auth/login-error])(refx/use-sub [:app.auth/email-sent])(hooks/use-state {:email \"\"})",null,null));
} else {
}

helix.core.register_BANG_(app.auth.views.login_view,"app.auth.views/login-view");
} else {
}

if(goog.DEBUG){
app.auth.views.sig51171 = helix.core.signature_BANG_();
} else {
}

app.auth.views.login_auth_view = (function (){var G__51172 = (function app$auth$views$login_auth_view_render(props__27104__auto__,maybe_ref__27105__auto__){
var vec__51173 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27104__auto__),maybe_ref__27105__auto__], null);
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(app.auth.views.sig51171)){
(app.auth.views.sig51171.cljs$core$IFn$_invoke$arity$0 ? app.auth.views.sig51171.cljs$core$IFn$_invoke$arity$0() : app.auth.views.sig51171.call(null));
} else {
}
} else {
}

var map__51176 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.route","current-route","app.route/current-route",-648461532)], null));
var map__51176__$1 = cljs.core.__destructure_map(map__51176);
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51176__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var loading_QMARK_ = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","login-loading","app.auth/login-loading",523485317)], null));
var user = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","current-user","app.auth/current-user",-1927966660)], null));
var vec__51177 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","login-error","app.auth/login-error",2008740350)], null));
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51177,(0),null);
var _error_res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51177,(1),null);
if(cljs.core.truth_(user)){
refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.routes","push-state","app.routes/push-state",376935027),new cljs.core.Keyword("app.core","home","app.core/home",1018164047)], null));
} else {
}

if(cljs.core.truth_(error)){
refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.routes","push-state","app.routes/push-state",376935027),new cljs.core.Keyword("app.core","login","app.core/login",1145385267)], null));
} else {
}

var G__51180_51205 = helix.hooks.wrap_fx((function (){
var temp__5802__auto__ = new cljs.core.Keyword(null,"error_description","error_description",1071682680).cljs$core$IFn$_invoke$arity$1(query_params);
if(cljs.core.truth_(temp__5802__auto__)){
var error_msg = temp__5802__auto__;
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","error","app.auth/error",-125470583),error_msg], null));
} else {
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","login","app.auth/login",1145290492),cljs.core.select_keys(query_params,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142)], null))], null));
}
}));
var G__51181_51206 = [query_params];
(helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2 ? helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2(G__51180_51205,G__51181_51206) : helix.hooks.raw_use_effect.call(null,G__51180_51205,G__51181_51206));

return helix.core.get_react().createElement(app.auth.views.AuthLayout,null,(cljs.core.truth_(loading_QMARK_)?helix.core.get_react().createElement("div",null,["Validating... ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(query_params))].join('')):null));
});
if(goog.DEBUG === true){
var G__51182 = G__51172;
(G__51182.displayName = "app.auth.views/login-auth-view");

return G__51182;
} else {
return G__51172;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(app.auth.views.sig51171)){
(app.auth.views.sig51171.cljs$core$IFn$_invoke$arity$4 ? app.auth.views.sig51171.cljs$core$IFn$_invoke$arity$4(app.auth.views.login_auth_view,"(refx/use-sub [:app.route/current-route])(refx/use-sub [:app.auth/login-loading])(refx/use-sub [:app.auth/current-user])(refx/use-sub [:app.auth/login-error])(hooks/use-effect [query-params] (if-let [error-msg (:error_description query-params)] (refx/dispatch [:app.auth/error error-msg]) (refx/dispatch [:app.auth/login (select-keys query-params [:code])])))",null,null) : app.auth.views.sig51171.call(null,app.auth.views.login_auth_view,"(refx/use-sub [:app.route/current-route])(refx/use-sub [:app.auth/login-loading])(refx/use-sub [:app.auth/current-user])(refx/use-sub [:app.auth/login-error])(hooks/use-effect [query-params] (if-let [error-msg (:error_description query-params)] (refx/dispatch [:app.auth/error error-msg]) (refx/dispatch [:app.auth/login (select-keys query-params [:code])])))",null,null));
} else {
}

helix.core.register_BANG_(app.auth.views.login_auth_view,"app.auth.views/login-auth-view");
} else {
}


//# sourceMappingURL=app.auth.views.js.map
