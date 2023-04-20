goog.provide('front.app.auth.views');
front.app.auth.views.form_classes = "block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm";
if(goog.DEBUG){
front.app.auth.views.sig54366 = helix.core.signature_BANG_();
} else {
}

front.app.auth.views.text_field = (function (){var G__54367 = (function front$app$auth$views$text_field_render(props__27103__auto__,maybe_ref__27104__auto__){
var vec__54368 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27103__auto__),maybe_ref__27104__auto__], null);
var map__54371 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54368,(0),null);
var map__54371__$1 = cljs.core.__destructure_map(map__54371);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54371__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var required = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54371__$1,new cljs.core.Keyword(null,"required","required",1807647006));
var name_field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54371__$1,new cljs.core.Keyword(null,"name-field","name-field",-1347695388));
var disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54371__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54371__$1,new cljs.core.Keyword(null,"value","value",305978217));
var type_field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54371__$1,new cljs.core.Keyword(null,"type-field","type-field",-905349238));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54371__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54371__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54371__$1,new cljs.core.Keyword(null,"class-name","class-name",945142584));
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.app.auth.views.sig54366)){
(front.app.auth.views.sig54366.cljs$core$IFn$_invoke$arity$0 ? front.app.auth.views.sig54366.cljs$core$IFn$_invoke$arity$0() : front.app.auth.views.sig54366.call(null));
} else {
}
} else {
}

return helix.core.get_react().createElement("div",(function (){var obj54374 = ({"className":class_name});
return obj54374;
})(),(cljs.core.truth_(label)?helix.core.get_react().createElement("label",(function (){var obj54376 = ({"htmlFor":id,"className":"mb-3 block text-sm font-medium text-gray-700"});
return obj54376;
})(),label):null),helix.core.get_react().createElement("input",(function (){var obj54378 = ({"id":id,"type":type_field,"className":front.app.auth.views.form_classes,"name":name_field,"value":helix.impl.props.or_undefined(value),"onChange":on_change,"disabled":disabled,"required":required});
return obj54378;
})()));
});
if(goog.DEBUG === true){
var G__54379 = G__54367;
(G__54379.displayName = "front.app.auth.views/text-field");

return G__54379;
} else {
return G__54367;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.app.auth.views.sig54366)){
(front.app.auth.views.sig54366.cljs$core$IFn$_invoke$arity$4 ? front.app.auth.views.sig54366.cljs$core$IFn$_invoke$arity$4(front.app.auth.views.text_field,"",null,null) : front.app.auth.views.sig54366.call(null,front.app.auth.views.text_field,"",null,null));
} else {
}

helix.core.register_BANG_(front.app.auth.views.text_field,"front.app.auth.views/text-field");
} else {
}

if(goog.DEBUG){
front.app.auth.views.sig54380 = helix.core.signature_BANG_();
} else {
}

front.app.auth.views.AuthLayout = (function (){var G__54382 = (function front$app$auth$views$AuthLayout_render(props__27103__auto__,maybe_ref__27104__auto__){
var vec__54383 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27103__auto__),maybe_ref__27104__auto__], null);
var map__54386 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54383,(0),null);
var map__54386__$1 = cljs.core.__destructure_map(map__54386);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54386__$1,new cljs.core.Keyword(null,"children","children",-940561982));
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.app.auth.views.sig54380)){
(front.app.auth.views.sig54380.cljs$core$IFn$_invoke$arity$0 ? front.app.auth.views.sig54380.cljs$core$IFn$_invoke$arity$0() : front.app.auth.views.sig54380.call(null));
} else {
}
} else {
}

return helix.core.get_react().createElement("div",(function (){var obj54388 = ({"className":"relative flex min-h-full justify-center md:px-12 lg:px-0"});
return obj54388;
})(),helix.core.get_react().createElement("div",(function (){var obj54390 = ({"className":"relative z-10 flex flex-1 flex-col bg-white py-10 px-4 shadow-2xl sm:justify-center md:flex-none md:px-28"});
return obj54390;
})(),helix.core.get_react().createElement("div",(function (){var obj54392 = ({"className":"mx-auto w-full max-w-md sm:px-4 md:w-96 md:max-w-sm md:px-0"});
return obj54392;
})(),children)));
});
if(goog.DEBUG === true){
var G__54393 = G__54382;
(G__54393.displayName = "front.app.auth.views/AuthLayout");

return G__54393;
} else {
return G__54382;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.app.auth.views.sig54380)){
(front.app.auth.views.sig54380.cljs$core$IFn$_invoke$arity$4 ? front.app.auth.views.sig54380.cljs$core$IFn$_invoke$arity$4(front.app.auth.views.AuthLayout,"",null,null) : front.app.auth.views.sig54380.call(null,front.app.auth.views.AuthLayout,"",null,null));
} else {
}

helix.core.register_BANG_(front.app.auth.views.AuthLayout,"front.app.auth.views/AuthLayout");
} else {
}

if(goog.DEBUG){
front.app.auth.views.sig54395 = helix.core.signature_BANG_();
} else {
}

front.app.auth.views.SignInBtn = (function (){var G__54400 = (function front$app$auth$views$SignInBtn_render(props__27103__auto__,maybe_ref__27104__auto__){
var vec__54401 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27103__auto__),maybe_ref__27104__auto__], null);
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.app.auth.views.sig54395)){
(front.app.auth.views.sig54395.cljs$core$IFn$_invoke$arity$0 ? front.app.auth.views.sig54395.cljs$core$IFn$_invoke$arity$0() : front.app.auth.views.sig54395.call(null));
} else {
}
} else {
}

return helix.core.get_react().createElement("div",(function (){var obj54405 = ({"className":"hidden md:block"});
return obj54405;
})(),helix.core.get_react().createElement(front.app.components.navlink.NavLink,(function (){var obj54407 = ({"children":"Sign In","href":reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.core","login","app.core/login",1145385267))});
return obj54407;
})()));
});
if(goog.DEBUG === true){
var G__54408 = G__54400;
(G__54408.displayName = "front.app.auth.views/SignInBtn");

return G__54408;
} else {
return G__54400;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.app.auth.views.sig54395)){
(front.app.auth.views.sig54395.cljs$core$IFn$_invoke$arity$4 ? front.app.auth.views.sig54395.cljs$core$IFn$_invoke$arity$4(front.app.auth.views.SignInBtn,"",null,null) : front.app.auth.views.sig54395.call(null,front.app.auth.views.SignInBtn,"",null,null));
} else {
}

helix.core.register_BANG_(front.app.auth.views.SignInBtn,"front.app.auth.views/SignInBtn");
} else {
}

if(goog.DEBUG){
front.app.auth.views.sig54409 = helix.core.signature_BANG_();
} else {
}

front.app.auth.views.LogOutBtn = (function (){var G__54410 = (function front$app$auth$views$LogOutBtn_render(props__27103__auto__,maybe_ref__27104__auto__){
var vec__54411 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27103__auto__),maybe_ref__27104__auto__], null);
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.app.auth.views.sig54409)){
(front.app.auth.views.sig54409.cljs$core$IFn$_invoke$arity$0 ? front.app.auth.views.sig54409.cljs$core$IFn$_invoke$arity$0() : front.app.auth.views.sig54409.call(null));
} else {
}
} else {
}

return helix.core.get_react().createElement("div",(function (){var obj54415 = ({"className":"hidden md:block"});
return obj54415;
})(),helix.core.get_react().createElement(front.app.components.navlink.NavLink,(function (){var obj54417 = ({"on-click":(function (e){
e.preventDefault();

refx.alpha.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.routes","push-state","app.routes/push-state",376935027),new cljs.core.Keyword("app.core","home","app.core/home",1018164047)], null));

return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","logout","app.auth/logout",-1850847146)], null));
}),"children":"Logout","href":"#"});
return obj54417;
})()));
});
if(goog.DEBUG === true){
var G__54418 = G__54410;
(G__54418.displayName = "front.app.auth.views/LogOutBtn");

return G__54418;
} else {
return G__54410;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.app.auth.views.sig54409)){
(front.app.auth.views.sig54409.cljs$core$IFn$_invoke$arity$4 ? front.app.auth.views.sig54409.cljs$core$IFn$_invoke$arity$4(front.app.auth.views.LogOutBtn,"",null,null) : front.app.auth.views.sig54409.call(null,front.app.auth.views.LogOutBtn,"",null,null));
} else {
}

helix.core.register_BANG_(front.app.auth.views.LogOutBtn,"front.app.auth.views/LogOutBtn");
} else {
}

if(goog.DEBUG){
front.app.auth.views.sig54423 = helix.core.signature_BANG_();
} else {
}

front.app.auth.views.AuthMenu = (function (){var G__54424 = (function front$app$auth$views$AuthMenu_render(props__27103__auto__,maybe_ref__27104__auto__){
var vec__54425 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27103__auto__),maybe_ref__27104__auto__], null);
var map__54428 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54425,(0),null);
var map__54428__$1 = cljs.core.__destructure_map(map__54428);
var user = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54428__$1,new cljs.core.Keyword(null,"user","user",1532431356));
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.app.auth.views.sig54423)){
(front.app.auth.views.sig54423.cljs$core$IFn$_invoke$arity$0 ? front.app.auth.views.sig54423.cljs$core$IFn$_invoke$arity$0() : front.app.auth.views.sig54423.call(null));
} else {
}
} else {
}

if(cljs.core.truth_(user)){
return helix.core.get_react().createElement(front.app.auth.views.LogOutBtn,null);
} else {
return helix.core.get_react().createElement(front.app.auth.views.SignInBtn,null);
}
});
if(goog.DEBUG === true){
var G__54429 = G__54424;
(G__54429.displayName = "front.app.auth.views/AuthMenu");

return G__54429;
} else {
return G__54424;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.app.auth.views.sig54423)){
(front.app.auth.views.sig54423.cljs$core$IFn$_invoke$arity$4 ? front.app.auth.views.sig54423.cljs$core$IFn$_invoke$arity$4(front.app.auth.views.AuthMenu,"",null,null) : front.app.auth.views.sig54423.call(null,front.app.auth.views.AuthMenu,"",null,null));
} else {
}

helix.core.register_BANG_(front.app.auth.views.AuthMenu,"front.app.auth.views/AuthMenu");
} else {
}

if(goog.DEBUG){
front.app.auth.views.sig54431 = helix.core.signature_BANG_();
} else {
}

front.app.auth.views.login_view = (function (){var G__54432 = (function front$app$auth$views$login_view_render(props__27103__auto__,maybe_ref__27104__auto__){
var vec__54433 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27103__auto__),maybe_ref__27104__auto__], null);
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.app.auth.views.sig54431)){
(front.app.auth.views.sig54431.cljs$core$IFn$_invoke$arity$0 ? front.app.auth.views.sig54431.cljs$core$IFn$_invoke$arity$0() : front.app.auth.views.sig54431.call(null));
} else {
}
} else {
}

var loading_QMARK_ = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","login-loading","app.auth/login-loading",523485317)], null));
var vec__54436 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","login-error","app.auth/login-error",2008740350)], null));
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54436,(0),null);
var error_res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54436,(1),null);
var email_sent_QMARK_ = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","email-sent","app.auth/email-sent",1729173059)], null));
var vec__54439 = helix.hooks.use_state(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"email","email",1415816706),""], null));
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54439,(0),null);
var set_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54439,(1),null);
return helix.core.get_react().createElement(front.app.auth.views.AuthLayout,null,helix.core.get_react().createElement("div",null,(cljs.core.truth_(email_sent_QMARK_)?helix.core.get_react().createElement("div",(function (){var obj54443 = ({"id":"login-email-sent","className":"flex flex-col"});
return obj54443;
})(),helix.core.get_react().createElement("h2",(function (){var obj54445 = ({"className":"text-lg font-semibold text-gray-900"});
return obj54445;
})(),"Check your email, and click on the link."),helix.core.get_react().createElement("div",null,helix.core.get_react().createElement("div",(function (){var obj54447 = ({"className":"mt-2 text-sm text-gray-700"});
return obj54447;
})(),"Didn't received it?",helix.core.get_react().createElement(front.app.components.navlink.NavLink,(function (){var obj54449 = ({"children":" Try again.","on-click":(function (e){
e.preventDefault();

return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","send-email-again","app.auth/send-email-again",-25575890)], null));
}),"href":"#"});
return obj54449;
})())))):helix.core.get_react().createElement("div",(function (){var obj54451 = ({"className":"flex flex-col"});
return obj54451;
})(),helix.core.get_react().createElement("a",(function (){var obj54453 = ({"href":"/"});
return obj54453;
})(),helix.core.get_react().createElement("img",(function (){var obj54455 = ({"className":"h-10 w-auto"});
return obj54455;
})()),"Home"),helix.core.get_react().createElement("div",(function (){var obj54457 = ({"className":"mt-20"});
return obj54457;
})(),helix.core.get_react().createElement("h2",(function (){var obj54463 = ({"className":"text-lg font-semibold text-gray-900"});
return obj54463;
})(),"Sign in to your account"),helix.core.get_react().createElement("p",(function (){var obj54467 = ({"className":"mt-2 text-sm text-gray-700"});
return obj54467;
})(),"Don't have an account? ")),helix.core.get_react().createElement("form",(function (){var obj54469 = ({"disabled":loading_QMARK_,"className":"mt-10 grid grid-cols-1 gap-y-8","onSubmit":(function (e){
e.preventDefault();

if(cljs.core.truth_(new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(state))){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","send-email","app.auth/send-email",-459398038),state], null));
} else {
return null;
}
})});
return obj54469;
})(),helix.core.get_react().createElement(front.app.auth.views.text_field,(function (){var obj54471 = ({"label":"Email address","id":"login-email","name":"email","type-field":"email","required":true,"value":new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(state),"disabled":loading_QMARK_,"on-change":(function (p1__54430_SHARP_){
var G__54473 = cljs.core.assoc;
var G__54474 = new cljs.core.Keyword(null,"email","email",1415816706);
var G__54475 = p1__54430_SHARP_.target.value;
return (set_state.cljs$core$IFn$_invoke$arity$3 ? set_state.cljs$core$IFn$_invoke$arity$3(G__54473,G__54474,G__54475) : set_state.call(null,G__54473,G__54474,G__54475));
})});
return obj54471;
})()),(cljs.core.truth_(error)?helix.core.get_react().createElement(front.app.components.alerts.Error,(function (){var obj54477 = ({"id":"login-error","error":"Error... try it again.","description":new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(error_res)});
return obj54477;
})()):null),helix.core.get_react().createElement("div",null,helix.core.get_react().createElement(front.app.components.button.Button,(function (){var obj54479 = ({"disabled":loading_QMARK_,"type":"submit","variant":"solid","color":"blue","class-name":"w-full"});
return obj54479;
})(),(cljs.core.truth_(loading_QMARK_)?helix.core.get_react().createElement("span",(function (){var obj54481 = ({"className":"inline-flex"});
return obj54481;
})(),helix.core.get_react().createElement(front.app.components.loading.LoadingSpinner,({})),"Loading..."):helix.core.get_react().createElement("span",null,"Sign in")))))))));
});
if(goog.DEBUG === true){
var G__54484 = G__54432;
(G__54484.displayName = "front.app.auth.views/login-view");

return G__54484;
} else {
return G__54432;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.app.auth.views.sig54431)){
(front.app.auth.views.sig54431.cljs$core$IFn$_invoke$arity$4 ? front.app.auth.views.sig54431.cljs$core$IFn$_invoke$arity$4(front.app.auth.views.login_view,"(refx/use-sub [:app.auth/login-loading])(refx/use-sub [:app.auth/login-error])(refx/use-sub [:app.auth/email-sent])(hooks/use-state {:email \"\"})",null,null) : front.app.auth.views.sig54431.call(null,front.app.auth.views.login_view,"(refx/use-sub [:app.auth/login-loading])(refx/use-sub [:app.auth/login-error])(refx/use-sub [:app.auth/email-sent])(hooks/use-state {:email \"\"})",null,null));
} else {
}

helix.core.register_BANG_(front.app.auth.views.login_view,"front.app.auth.views/login-view");
} else {
}

if(goog.DEBUG){
front.app.auth.views.sig54486 = helix.core.signature_BANG_();
} else {
}

front.app.auth.views.login_auth_view = (function (){var G__54487 = (function front$app$auth$views$login_auth_view_render(props__27103__auto__,maybe_ref__27104__auto__){
var vec__54488 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27103__auto__),maybe_ref__27104__auto__], null);
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.app.auth.views.sig54486)){
(front.app.auth.views.sig54486.cljs$core$IFn$_invoke$arity$0 ? front.app.auth.views.sig54486.cljs$core$IFn$_invoke$arity$0() : front.app.auth.views.sig54486.call(null));
} else {
}
} else {
}

var map__54491 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.route","current-route","app.route/current-route",-648461532)], null));
var map__54491__$1 = cljs.core.__destructure_map(map__54491);
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54491__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var loading_QMARK_ = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","login-loading","app.auth/login-loading",523485317)], null));
var user = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","current-user","app.auth/current-user",-1927966660)], null));
var vec__54492 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","login-error","app.auth/login-error",2008740350)], null));
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54492,(0),null);
var _error_res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54492,(1),null);
if(cljs.core.truth_(user)){
refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.routes","push-state","app.routes/push-state",376935027),new cljs.core.Keyword("app.core","home","app.core/home",1018164047)], null));
} else {
}

if(cljs.core.truth_(error)){
refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.routes","push-state","app.routes/push-state",376935027),new cljs.core.Keyword("app.core","login","app.core/login",1145385267)], null));
} else {
}

var G__54496_54615 = helix.hooks.wrap_fx((function (){
var temp__5802__auto__ = new cljs.core.Keyword(null,"error_description","error_description",1071682680).cljs$core$IFn$_invoke$arity$1(query_params);
if(cljs.core.truth_(temp__5802__auto__)){
var error_msg = temp__5802__auto__;
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","error","app.auth/error",-125470583),error_msg], null));
} else {
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","login","app.auth/login",1145290492),cljs.core.select_keys(query_params,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142)], null))], null));
}
}));
var G__54497_54616 = [query_params];
(helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2 ? helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2(G__54496_54615,G__54497_54616) : helix.hooks.raw_use_effect.call(null,G__54496_54615,G__54497_54616));

return helix.core.get_react().createElement(front.app.auth.views.AuthLayout,null,(cljs.core.truth_(loading_QMARK_)?helix.core.get_react().createElement("div",null,["Validating... ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(query_params))].join('')):null));
});
if(goog.DEBUG === true){
var G__54501 = G__54487;
(G__54501.displayName = "front.app.auth.views/login-auth-view");

return G__54501;
} else {
return G__54487;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.app.auth.views.sig54486)){
(front.app.auth.views.sig54486.cljs$core$IFn$_invoke$arity$4 ? front.app.auth.views.sig54486.cljs$core$IFn$_invoke$arity$4(front.app.auth.views.login_auth_view,"(refx/use-sub [:app.route/current-route])(refx/use-sub [:app.auth/login-loading])(refx/use-sub [:app.auth/current-user])(refx/use-sub [:app.auth/login-error])(hooks/use-effect [query-params] (if-let [error-msg (:error_description query-params)] (refx/dispatch [:app.auth/error error-msg]) (refx/dispatch [:app.auth/login (select-keys query-params [:code])])))",null,null) : front.app.auth.views.sig54486.call(null,front.app.auth.views.login_auth_view,"(refx/use-sub [:app.route/current-route])(refx/use-sub [:app.auth/login-loading])(refx/use-sub [:app.auth/current-user])(refx/use-sub [:app.auth/login-error])(hooks/use-effect [query-params] (if-let [error-msg (:error_description query-params)] (refx/dispatch [:app.auth/error error-msg]) (refx/dispatch [:app.auth/login (select-keys query-params [:code])])))",null,null));
} else {
}

helix.core.register_BANG_(front.app.auth.views.login_auth_view,"front.app.auth.views/login-auth-view");
} else {
}


//# sourceMappingURL=front.app.auth.views.js.map
