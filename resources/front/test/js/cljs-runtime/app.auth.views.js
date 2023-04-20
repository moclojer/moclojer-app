goog.provide('app.auth.views');
app.auth.views.form_classes = "block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm";
if(goog.DEBUG){
app.auth.views.sig35977 = helix.core.signature_BANG_();
} else {
}

app.auth.views.text_field = (function (){var G__35979 = (function app$auth$views$text_field_render(props__27104__auto__,maybe_ref__27105__auto__){
var vec__35984 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27104__auto__),maybe_ref__27105__auto__], null);
var map__35987 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35984,(0),null);
var map__35987__$1 = cljs.core.__destructure_map(map__35987);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35987__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var required = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35987__$1,new cljs.core.Keyword(null,"required","required",1807647006));
var name_field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35987__$1,new cljs.core.Keyword(null,"name-field","name-field",-1347695388));
var disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35987__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35987__$1,new cljs.core.Keyword(null,"value","value",305978217));
var type_field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35987__$1,new cljs.core.Keyword(null,"type-field","type-field",-905349238));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35987__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35987__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35987__$1,new cljs.core.Keyword(null,"class-name","class-name",945142584));
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(app.auth.views.sig35977)){
(app.auth.views.sig35977.cljs$core$IFn$_invoke$arity$0 ? app.auth.views.sig35977.cljs$core$IFn$_invoke$arity$0() : app.auth.views.sig35977.call(null));
} else {
}
} else {
}

return helix.core.get_react().createElement("div",(function (){var obj35994 = ({"className":class_name});
return obj35994;
})(),(cljs.core.truth_(label)?helix.core.get_react().createElement("label",(function (){var obj35996 = ({"htmlFor":id,"className":"mb-3 block text-sm font-medium text-gray-700"});
return obj35996;
})(),label):null),helix.core.get_react().createElement("input",(function (){var obj35998 = ({"id":id,"type":type_field,"className":app.auth.views.form_classes,"name":name_field,"value":helix.impl.props.or_undefined(value),"onChange":on_change,"disabled":disabled,"required":required});
return obj35998;
})()));
});
if(goog.DEBUG === true){
var G__35999 = G__35979;
(G__35999.displayName = "app.auth.views/text-field");

return G__35999;
} else {
return G__35979;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(app.auth.views.sig35977)){
(app.auth.views.sig35977.cljs$core$IFn$_invoke$arity$4 ? app.auth.views.sig35977.cljs$core$IFn$_invoke$arity$4(app.auth.views.text_field,"",null,null) : app.auth.views.sig35977.call(null,app.auth.views.text_field,"",null,null));
} else {
}

helix.core.register_BANG_(app.auth.views.text_field,"app.auth.views/text-field");
} else {
}

if(goog.DEBUG){
app.auth.views.sig36001 = helix.core.signature_BANG_();
} else {
}

app.auth.views.AuthLayout = (function (){var G__36003 = (function app$auth$views$AuthLayout_render(props__27104__auto__,maybe_ref__27105__auto__){
var vec__36009 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27104__auto__),maybe_ref__27105__auto__], null);
var map__36012 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36009,(0),null);
var map__36012__$1 = cljs.core.__destructure_map(map__36012);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36012__$1,new cljs.core.Keyword(null,"children","children",-940561982));
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(app.auth.views.sig36001)){
(app.auth.views.sig36001.cljs$core$IFn$_invoke$arity$0 ? app.auth.views.sig36001.cljs$core$IFn$_invoke$arity$0() : app.auth.views.sig36001.call(null));
} else {
}
} else {
}

return helix.core.get_react().createElement("div",(function (){var obj36016 = ({"className":"relative flex min-h-full justify-center md:px-12 lg:px-0"});
return obj36016;
})(),helix.core.get_react().createElement("div",(function (){var obj36018 = ({"className":"relative z-10 flex flex-1 flex-col bg-white py-10 px-4 shadow-2xl sm:justify-center md:flex-none md:px-28"});
return obj36018;
})(),helix.core.get_react().createElement("div",(function (){var obj36020 = ({"className":"mx-auto w-full max-w-md sm:px-4 md:w-96 md:max-w-sm md:px-0"});
return obj36020;
})(),children)));
});
if(goog.DEBUG === true){
var G__36021 = G__36003;
(G__36021.displayName = "app.auth.views/AuthLayout");

return G__36021;
} else {
return G__36003;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(app.auth.views.sig36001)){
(app.auth.views.sig36001.cljs$core$IFn$_invoke$arity$4 ? app.auth.views.sig36001.cljs$core$IFn$_invoke$arity$4(app.auth.views.AuthLayout,"",null,null) : app.auth.views.sig36001.call(null,app.auth.views.AuthLayout,"",null,null));
} else {
}

helix.core.register_BANG_(app.auth.views.AuthLayout,"app.auth.views/AuthLayout");
} else {
}

if(goog.DEBUG){
app.auth.views.sig36024 = helix.core.signature_BANG_();
} else {
}

app.auth.views.SignInBtn = (function (){var G__36026 = (function app$auth$views$SignInBtn_render(props__27104__auto__,maybe_ref__27105__auto__){
var vec__36027 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27104__auto__),maybe_ref__27105__auto__], null);
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(app.auth.views.sig36024)){
(app.auth.views.sig36024.cljs$core$IFn$_invoke$arity$0 ? app.auth.views.sig36024.cljs$core$IFn$_invoke$arity$0() : app.auth.views.sig36024.call(null));
} else {
}
} else {
}

return helix.core.get_react().createElement("div",(function (){var obj36031 = ({"className":"hidden md:block"});
return obj36031;
})(),helix.core.get_react().createElement(app.components.navlink.NavLink,(function (){var obj36037 = ({"children":"Sign In","href":reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.core","login","app.core/login",1145385267))});
return obj36037;
})()));
});
if(goog.DEBUG === true){
var G__36038 = G__36026;
(G__36038.displayName = "app.auth.views/SignInBtn");

return G__36038;
} else {
return G__36026;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(app.auth.views.sig36024)){
(app.auth.views.sig36024.cljs$core$IFn$_invoke$arity$4 ? app.auth.views.sig36024.cljs$core$IFn$_invoke$arity$4(app.auth.views.SignInBtn,"",null,null) : app.auth.views.sig36024.call(null,app.auth.views.SignInBtn,"",null,null));
} else {
}

helix.core.register_BANG_(app.auth.views.SignInBtn,"app.auth.views/SignInBtn");
} else {
}

if(goog.DEBUG){
app.auth.views.sig36040 = helix.core.signature_BANG_();
} else {
}

app.auth.views.LogOutBtn = (function (){var G__36041 = (function app$auth$views$LogOutBtn_render(props__27104__auto__,maybe_ref__27105__auto__){
var vec__36042 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27104__auto__),maybe_ref__27105__auto__], null);
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(app.auth.views.sig36040)){
(app.auth.views.sig36040.cljs$core$IFn$_invoke$arity$0 ? app.auth.views.sig36040.cljs$core$IFn$_invoke$arity$0() : app.auth.views.sig36040.call(null));
} else {
}
} else {
}

return helix.core.get_react().createElement("div",(function (){var obj36046 = ({"className":"hidden md:block"});
return obj36046;
})(),helix.core.get_react().createElement(app.components.navlink.NavLink,(function (){var obj36049 = ({"on-click":(function (e){
e.preventDefault();

refx.alpha.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.routes","push-state","app.routes/push-state",376935027),new cljs.core.Keyword("app.core","home","app.core/home",1018164047)], null));

return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","logout","app.auth/logout",-1850847146)], null));
}),"children":"Logout","href":"#"});
return obj36049;
})()));
});
if(goog.DEBUG === true){
var G__36051 = G__36041;
(G__36051.displayName = "app.auth.views/LogOutBtn");

return G__36051;
} else {
return G__36041;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(app.auth.views.sig36040)){
(app.auth.views.sig36040.cljs$core$IFn$_invoke$arity$4 ? app.auth.views.sig36040.cljs$core$IFn$_invoke$arity$4(app.auth.views.LogOutBtn,"",null,null) : app.auth.views.sig36040.call(null,app.auth.views.LogOutBtn,"",null,null));
} else {
}

helix.core.register_BANG_(app.auth.views.LogOutBtn,"app.auth.views/LogOutBtn");
} else {
}

if(goog.DEBUG){
app.auth.views.sig36053 = helix.core.signature_BANG_();
} else {
}

app.auth.views.AuthMenu = (function (){var G__36063 = (function app$auth$views$AuthMenu_render(props__27104__auto__,maybe_ref__27105__auto__){
var vec__36068 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27104__auto__),maybe_ref__27105__auto__], null);
var map__36071 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36068,(0),null);
var map__36071__$1 = cljs.core.__destructure_map(map__36071);
var user = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36071__$1,new cljs.core.Keyword(null,"user","user",1532431356));
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(app.auth.views.sig36053)){
(app.auth.views.sig36053.cljs$core$IFn$_invoke$arity$0 ? app.auth.views.sig36053.cljs$core$IFn$_invoke$arity$0() : app.auth.views.sig36053.call(null));
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
var G__36078 = G__36063;
(G__36078.displayName = "app.auth.views/AuthMenu");

return G__36078;
} else {
return G__36063;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(app.auth.views.sig36053)){
(app.auth.views.sig36053.cljs$core$IFn$_invoke$arity$4 ? app.auth.views.sig36053.cljs$core$IFn$_invoke$arity$4(app.auth.views.AuthMenu,"",null,null) : app.auth.views.sig36053.call(null,app.auth.views.AuthMenu,"",null,null));
} else {
}

helix.core.register_BANG_(app.auth.views.AuthMenu,"app.auth.views/AuthMenu");
} else {
}

if(goog.DEBUG){
app.auth.views.sig36097 = helix.core.signature_BANG_();
} else {
}

app.auth.views.login_view = (function (){var G__36106 = (function app$auth$views$login_view_render(props__27104__auto__,maybe_ref__27105__auto__){
var vec__36108 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27104__auto__),maybe_ref__27105__auto__], null);
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(app.auth.views.sig36097)){
(app.auth.views.sig36097.cljs$core$IFn$_invoke$arity$0 ? app.auth.views.sig36097.cljs$core$IFn$_invoke$arity$0() : app.auth.views.sig36097.call(null));
} else {
}
} else {
}

var loading_QMARK_ = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","login-loading","app.auth/login-loading",523485317)], null));
var vec__36112 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","login-error","app.auth/login-error",2008740350)], null));
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36112,(0),null);
var error_res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36112,(1),null);
var email_sent_QMARK_ = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","email-sent","app.auth/email-sent",1729173059)], null));
var vec__36115 = helix.hooks.use_state(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"email","email",1415816706),""], null));
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36115,(0),null);
var set_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36115,(1),null);
return helix.core.get_react().createElement(app.auth.views.AuthLayout,null,helix.core.get_react().createElement("div",null,(cljs.core.truth_(email_sent_QMARK_)?helix.core.get_react().createElement("div",(function (){var obj36123 = ({"id":"login-email-sent","className":"flex flex-col"});
return obj36123;
})(),helix.core.get_react().createElement("h2",(function (){var obj36125 = ({"className":"text-lg font-semibold text-gray-900"});
return obj36125;
})(),"Check your email, and click on the link."),helix.core.get_react().createElement("div",null,helix.core.get_react().createElement("div",(function (){var obj36131 = ({"className":"mt-2 text-sm text-gray-700"});
return obj36131;
})(),"Didn't received it?",helix.core.get_react().createElement(app.components.navlink.NavLink,(function (){var obj36133 = ({"children":" Try again.","on-click":(function (e){
e.preventDefault();

return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","send-email-again","app.auth/send-email-again",-25575890)], null));
}),"href":"#"});
return obj36133;
})())))):helix.core.get_react().createElement("div",(function (){var obj36137 = ({"className":"flex flex-col"});
return obj36137;
})(),helix.core.get_react().createElement("a",(function (){var obj36139 = ({"href":"/"});
return obj36139;
})(),helix.core.get_react().createElement("img",(function (){var obj36141 = ({"className":"h-10 w-auto"});
return obj36141;
})()),"Home"),helix.core.get_react().createElement("div",(function (){var obj36143 = ({"className":"mt-20"});
return obj36143;
})(),helix.core.get_react().createElement("h2",(function (){var obj36145 = ({"className":"text-lg font-semibold text-gray-900"});
return obj36145;
})(),"Sign in to your account"),helix.core.get_react().createElement("p",(function (){var obj36147 = ({"className":"mt-2 text-sm text-gray-700"});
return obj36147;
})(),"Don't have an account? ")),helix.core.get_react().createElement("form",(function (){var obj36149 = ({"disabled":loading_QMARK_,"className":"mt-10 grid grid-cols-1 gap-y-8","onSubmit":(function (e){
e.preventDefault();

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([":here",state], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(state))){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","send-email","app.auth/send-email",-459398038),state], null));
} else {
return null;
}
})});
return obj36149;
})(),helix.core.get_react().createElement(app.auth.views.text_field,(function (){var obj36152 = ({"label":"Email address","id":"login-email","name":"email","type-field":"email","required":true,"value":new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(state),"disabled":loading_QMARK_,"on-change":(function (p1__36093_SHARP_){
var G__36153 = cljs.core.assoc;
var G__36154 = new cljs.core.Keyword(null,"email","email",1415816706);
var G__36155 = p1__36093_SHARP_.target.value;
return (set_state.cljs$core$IFn$_invoke$arity$3 ? set_state.cljs$core$IFn$_invoke$arity$3(G__36153,G__36154,G__36155) : set_state.call(null,G__36153,G__36154,G__36155));
})});
return obj36152;
})()),(cljs.core.truth_(error)?helix.core.get_react().createElement(app.components.alerts.Error,(function (){var obj36157 = ({"id":"login-error","error":"Error... try it again.","description":new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(error_res)});
return obj36157;
})()):null),helix.core.get_react().createElement("div",null,helix.core.get_react().createElement(app.components.button.Button,(function (){var obj36159 = ({"disabled":loading_QMARK_,"type":"submit","variant":"solid","color":"blue","class-name":"w-full"});
return obj36159;
})(),(cljs.core.truth_(loading_QMARK_)?helix.core.get_react().createElement("span",(function (){var obj36161 = ({"className":"inline-flex"});
return obj36161;
})(),helix.core.get_react().createElement(app.components.loading.LoadingSpinner,({})),"Loading..."):helix.core.get_react().createElement("span",null,"Sign in")))))))));
});
if(goog.DEBUG === true){
var G__36164 = G__36106;
(G__36164.displayName = "app.auth.views/login-view");

return G__36164;
} else {
return G__36106;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(app.auth.views.sig36097)){
(app.auth.views.sig36097.cljs$core$IFn$_invoke$arity$4 ? app.auth.views.sig36097.cljs$core$IFn$_invoke$arity$4(app.auth.views.login_view,"(refx/use-sub [:app.auth/login-loading])(refx/use-sub [:app.auth/login-error])(refx/use-sub [:app.auth/email-sent])(hooks/use-state {:email \"\"})",null,null) : app.auth.views.sig36097.call(null,app.auth.views.login_view,"(refx/use-sub [:app.auth/login-loading])(refx/use-sub [:app.auth/login-error])(refx/use-sub [:app.auth/email-sent])(hooks/use-state {:email \"\"})",null,null));
} else {
}

helix.core.register_BANG_(app.auth.views.login_view,"app.auth.views/login-view");
} else {
}

if(goog.DEBUG){
app.auth.views.sig36165 = helix.core.signature_BANG_();
} else {
}

app.auth.views.login_auth_view = (function (){var G__36166 = (function app$auth$views$login_auth_view_render(props__27104__auto__,maybe_ref__27105__auto__){
var vec__36167 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27104__auto__),maybe_ref__27105__auto__], null);
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(app.auth.views.sig36165)){
(app.auth.views.sig36165.cljs$core$IFn$_invoke$arity$0 ? app.auth.views.sig36165.cljs$core$IFn$_invoke$arity$0() : app.auth.views.sig36165.call(null));
} else {
}
} else {
}

var map__36170 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.route","current-route","app.route/current-route",-648461532)], null));
var map__36170__$1 = cljs.core.__destructure_map(map__36170);
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36170__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var loading_QMARK_ = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","login-loading","app.auth/login-loading",523485317)], null));
var user = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","current-user","app.auth/current-user",-1927966660)], null));
var vec__36171 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","login-error","app.auth/login-error",2008740350)], null));
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36171,(0),null);
var _error_res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36171,(1),null);
if(cljs.core.truth_(user)){
refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.routes","push-state","app.routes/push-state",376935027),new cljs.core.Keyword("app.core","home","app.core/home",1018164047)], null));
} else {
}

if(cljs.core.truth_(error)){
refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.routes","push-state","app.routes/push-state",376935027),new cljs.core.Keyword("app.core","login","app.core/login",1145385267)], null));
} else {
}

var G__36174_36240 = helix.hooks.wrap_fx((function (){
var temp__5802__auto__ = new cljs.core.Keyword(null,"error_description","error_description",1071682680).cljs$core$IFn$_invoke$arity$1(query_params);
if(cljs.core.truth_(temp__5802__auto__)){
var error_msg = temp__5802__auto__;
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","error","app.auth/error",-125470583),error_msg], null));
} else {
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","login","app.auth/login",1145290492),cljs.core.select_keys(query_params,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142)], null))], null));
}
}));
var G__36175_36241 = [query_params];
(helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2 ? helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2(G__36174_36240,G__36175_36241) : helix.hooks.raw_use_effect.call(null,G__36174_36240,G__36175_36241));

return helix.core.get_react().createElement(app.auth.views.AuthLayout,null,(cljs.core.truth_(loading_QMARK_)?helix.core.get_react().createElement("div",null,["Validating... ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(query_params))].join('')):null));
});
if(goog.DEBUG === true){
var G__36177 = G__36166;
(G__36177.displayName = "app.auth.views/login-auth-view");

return G__36177;
} else {
return G__36166;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(app.auth.views.sig36165)){
(app.auth.views.sig36165.cljs$core$IFn$_invoke$arity$4 ? app.auth.views.sig36165.cljs$core$IFn$_invoke$arity$4(app.auth.views.login_auth_view,"(refx/use-sub [:app.route/current-route])(refx/use-sub [:app.auth/login-loading])(refx/use-sub [:app.auth/current-user])(refx/use-sub [:app.auth/login-error])(hooks/use-effect [query-params] (if-let [error-msg (:error_description query-params)] (refx/dispatch [:app.auth/error error-msg]) (refx/dispatch [:app.auth/login (select-keys query-params [:code])])))",null,null) : app.auth.views.sig36165.call(null,app.auth.views.login_auth_view,"(refx/use-sub [:app.route/current-route])(refx/use-sub [:app.auth/login-loading])(refx/use-sub [:app.auth/current-user])(refx/use-sub [:app.auth/login-error])(hooks/use-effect [query-params] (if-let [error-msg (:error_description query-params)] (refx/dispatch [:app.auth/error error-msg]) (refx/dispatch [:app.auth/login (select-keys query-params [:code])])))",null,null));
} else {
}

helix.core.register_BANG_(app.auth.views.login_auth_view,"app.auth.views/login-auth-view");
} else {
}


//# sourceMappingURL=app.auth.views.js.map
