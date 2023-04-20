goog.provide('front.app.auth.views');
front.app.auth.views.form_classes = "block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm";
if(goog.DEBUG){
front.app.auth.views.sig29472 = helix.core.signature_BANG_();
} else {
}

front.app.auth.views.text_field = (function (){var G__29474 = (function front$app$auth$views$text_field_render(props__24071__auto__,maybe_ref__24072__auto__){
var vec__29477 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__24071__auto__),maybe_ref__24072__auto__], null);
var map__29480 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29477,(0),null);
var map__29480__$1 = cljs.core.__destructure_map(map__29480);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29480__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var required = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29480__$1,new cljs.core.Keyword(null,"required","required",1807647006));
var name_field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29480__$1,new cljs.core.Keyword(null,"name-field","name-field",-1347695388));
var disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29480__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29480__$1,new cljs.core.Keyword(null,"value","value",305978217));
var type_field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29480__$1,new cljs.core.Keyword(null,"type-field","type-field",-905349238));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29480__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29480__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29480__$1,new cljs.core.Keyword(null,"class-name","class-name",945142584));
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.app.auth.views.sig29472)){
(front.app.auth.views.sig29472.cljs$core$IFn$_invoke$arity$0 ? front.app.auth.views.sig29472.cljs$core$IFn$_invoke$arity$0() : front.app.auth.views.sig29472.call(null));
} else {
}
} else {
}

return helix.core.get_react().createElement("div",(function (){var obj29483 = ({"className":class_name});
return obj29483;
})(),(cljs.core.truth_(label)?helix.core.get_react().createElement("label",(function (){var obj29485 = ({"htmlFor":id,"className":"mb-3 block text-sm font-medium text-gray-700"});
return obj29485;
})(),label):null),helix.core.get_react().createElement("input",(function (){var obj29487 = ({"id":id,"type":type_field,"className":front.app.auth.views.form_classes,"name":name_field,"value":helix.impl.props.or_undefined(value),"onChange":on_change,"disabled":disabled,"required":required});
return obj29487;
})()));
});
if(goog.DEBUG === true){
var G__29488 = G__29474;
(G__29488.displayName = "front.app.auth.views/text-field");

return G__29488;
} else {
return G__29474;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.app.auth.views.sig29472)){
(front.app.auth.views.sig29472.cljs$core$IFn$_invoke$arity$4 ? front.app.auth.views.sig29472.cljs$core$IFn$_invoke$arity$4(front.app.auth.views.text_field,"",null,null) : front.app.auth.views.sig29472.call(null,front.app.auth.views.text_field,"",null,null));
} else {
}

helix.core.register_BANG_(front.app.auth.views.text_field,"front.app.auth.views/text-field");
} else {
}

if(goog.DEBUG){
front.app.auth.views.sig29489 = helix.core.signature_BANG_();
} else {
}

front.app.auth.views.AuthLayout = (function (){var G__29490 = (function front$app$auth$views$AuthLayout_render(props__24071__auto__,maybe_ref__24072__auto__){
var vec__29491 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__24071__auto__),maybe_ref__24072__auto__], null);
var map__29494 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29491,(0),null);
var map__29494__$1 = cljs.core.__destructure_map(map__29494);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29494__$1,new cljs.core.Keyword(null,"children","children",-940561982));
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.app.auth.views.sig29489)){
(front.app.auth.views.sig29489.cljs$core$IFn$_invoke$arity$0 ? front.app.auth.views.sig29489.cljs$core$IFn$_invoke$arity$0() : front.app.auth.views.sig29489.call(null));
} else {
}
} else {
}

return helix.core.get_react().createElement("div",(function (){var obj29496 = ({"className":"relative flex min-h-full justify-center md:px-12 lg:px-0"});
return obj29496;
})(),helix.core.get_react().createElement("div",(function (){var obj29498 = ({"className":"relative z-10 flex flex-1 flex-col bg-white py-10 px-4 shadow-2xl sm:justify-center md:flex-none md:px-28"});
return obj29498;
})(),helix.core.get_react().createElement("div",(function (){var obj29500 = ({"className":"mx-auto w-full max-w-md sm:px-4 md:w-96 md:max-w-sm md:px-0"});
return obj29500;
})(),children)));
});
if(goog.DEBUG === true){
var G__29501 = G__29490;
(G__29501.displayName = "front.app.auth.views/AuthLayout");

return G__29501;
} else {
return G__29490;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.app.auth.views.sig29489)){
(front.app.auth.views.sig29489.cljs$core$IFn$_invoke$arity$4 ? front.app.auth.views.sig29489.cljs$core$IFn$_invoke$arity$4(front.app.auth.views.AuthLayout,"",null,null) : front.app.auth.views.sig29489.call(null,front.app.auth.views.AuthLayout,"",null,null));
} else {
}

helix.core.register_BANG_(front.app.auth.views.AuthLayout,"front.app.auth.views/AuthLayout");
} else {
}

if(goog.DEBUG){
front.app.auth.views.sig29502 = helix.core.signature_BANG_();
} else {
}

front.app.auth.views.SignInBtn = (function (){var G__29503 = (function front$app$auth$views$SignInBtn_render(props__24071__auto__,maybe_ref__24072__auto__){
var vec__29504 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__24071__auto__),maybe_ref__24072__auto__], null);
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.app.auth.views.sig29502)){
(front.app.auth.views.sig29502.cljs$core$IFn$_invoke$arity$0 ? front.app.auth.views.sig29502.cljs$core$IFn$_invoke$arity$0() : front.app.auth.views.sig29502.call(null));
} else {
}
} else {
}

return helix.core.get_react().createElement("div",(function (){var obj29508 = ({"className":"hidden md:block"});
return obj29508;
})(),helix.core.get_react().createElement(front.app.components.navlink.NavLink,(function (){var obj29510 = ({"children":"Sign In","href":reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.core","login","app.core/login",1145385267))});
return obj29510;
})()));
});
if(goog.DEBUG === true){
var G__29511 = G__29503;
(G__29511.displayName = "front.app.auth.views/SignInBtn");

return G__29511;
} else {
return G__29503;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.app.auth.views.sig29502)){
(front.app.auth.views.sig29502.cljs$core$IFn$_invoke$arity$4 ? front.app.auth.views.sig29502.cljs$core$IFn$_invoke$arity$4(front.app.auth.views.SignInBtn,"",null,null) : front.app.auth.views.sig29502.call(null,front.app.auth.views.SignInBtn,"",null,null));
} else {
}

helix.core.register_BANG_(front.app.auth.views.SignInBtn,"front.app.auth.views/SignInBtn");
} else {
}

if(goog.DEBUG){
front.app.auth.views.sig29512 = helix.core.signature_BANG_();
} else {
}

front.app.auth.views.LogOutBtn = (function (){var G__29513 = (function front$app$auth$views$LogOutBtn_render(props__24071__auto__,maybe_ref__24072__auto__){
var vec__29514 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__24071__auto__),maybe_ref__24072__auto__], null);
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.app.auth.views.sig29512)){
(front.app.auth.views.sig29512.cljs$core$IFn$_invoke$arity$0 ? front.app.auth.views.sig29512.cljs$core$IFn$_invoke$arity$0() : front.app.auth.views.sig29512.call(null));
} else {
}
} else {
}

return helix.core.get_react().createElement("div",(function (){var obj29518 = ({"className":"hidden md:block"});
return obj29518;
})(),helix.core.get_react().createElement(front.app.components.navlink.NavLink,(function (){var obj29520 = ({"on-click":(function (e){
e.preventDefault();

refx.alpha.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.routes","push-state","app.routes/push-state",376935027),new cljs.core.Keyword("app.core","home","app.core/home",1018164047)], null));

return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","logout","app.auth/logout",-1850847146)], null));
}),"children":"Logout","href":"#"});
return obj29520;
})()));
});
if(goog.DEBUG === true){
var G__29521 = G__29513;
(G__29521.displayName = "front.app.auth.views/LogOutBtn");

return G__29521;
} else {
return G__29513;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.app.auth.views.sig29512)){
(front.app.auth.views.sig29512.cljs$core$IFn$_invoke$arity$4 ? front.app.auth.views.sig29512.cljs$core$IFn$_invoke$arity$4(front.app.auth.views.LogOutBtn,"",null,null) : front.app.auth.views.sig29512.call(null,front.app.auth.views.LogOutBtn,"",null,null));
} else {
}

helix.core.register_BANG_(front.app.auth.views.LogOutBtn,"front.app.auth.views/LogOutBtn");
} else {
}

if(goog.DEBUG){
front.app.auth.views.sig29522 = helix.core.signature_BANG_();
} else {
}

front.app.auth.views.AuthMenu = (function (){var G__29523 = (function front$app$auth$views$AuthMenu_render(props__24071__auto__,maybe_ref__24072__auto__){
var vec__29524 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__24071__auto__),maybe_ref__24072__auto__], null);
var map__29527 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29524,(0),null);
var map__29527__$1 = cljs.core.__destructure_map(map__29527);
var user = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29527__$1,new cljs.core.Keyword(null,"user","user",1532431356));
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.app.auth.views.sig29522)){
(front.app.auth.views.sig29522.cljs$core$IFn$_invoke$arity$0 ? front.app.auth.views.sig29522.cljs$core$IFn$_invoke$arity$0() : front.app.auth.views.sig29522.call(null));
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
var G__29529 = G__29523;
(G__29529.displayName = "front.app.auth.views/AuthMenu");

return G__29529;
} else {
return G__29523;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.app.auth.views.sig29522)){
(front.app.auth.views.sig29522.cljs$core$IFn$_invoke$arity$4 ? front.app.auth.views.sig29522.cljs$core$IFn$_invoke$arity$4(front.app.auth.views.AuthMenu,"",null,null) : front.app.auth.views.sig29522.call(null,front.app.auth.views.AuthMenu,"",null,null));
} else {
}

helix.core.register_BANG_(front.app.auth.views.AuthMenu,"front.app.auth.views/AuthMenu");
} else {
}

if(goog.DEBUG){
front.app.auth.views.sig29531 = helix.core.signature_BANG_();
} else {
}

front.app.auth.views.login_view = (function (){var G__29540 = (function front$app$auth$views$login_view_render(props__24071__auto__,maybe_ref__24072__auto__){
var vec__29541 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__24071__auto__),maybe_ref__24072__auto__], null);
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.app.auth.views.sig29531)){
(front.app.auth.views.sig29531.cljs$core$IFn$_invoke$arity$0 ? front.app.auth.views.sig29531.cljs$core$IFn$_invoke$arity$0() : front.app.auth.views.sig29531.call(null));
} else {
}
} else {
}

var loading_QMARK_ = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","login-loading","app.auth/login-loading",523485317)], null));
var vec__29544 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","login-error","app.auth/login-error",2008740350)], null));
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29544,(0),null);
var error_res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29544,(1),null);
var email_sent_QMARK_ = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","email-sent","app.auth/email-sent",1729173059)], null));
var vec__29547 = helix.hooks.use_state(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"email","email",1415816706),""], null));
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29547,(0),null);
var set_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29547,(1),null);
return helix.core.get_react().createElement(front.app.auth.views.AuthLayout,null,helix.core.get_react().createElement("div",null,(cljs.core.truth_(email_sent_QMARK_)?helix.core.get_react().createElement("div",(function (){var obj29551 = ({"id":"login-email-sent","className":"flex flex-col"});
return obj29551;
})(),helix.core.get_react().createElement("h2",(function (){var obj29553 = ({"className":"text-lg font-semibold text-gray-900"});
return obj29553;
})(),"Check your email, and click on the link."),helix.core.get_react().createElement("div",null,helix.core.get_react().createElement("div",(function (){var obj29555 = ({"className":"mt-2 text-sm text-gray-700"});
return obj29555;
})(),"Didn't received it?",helix.core.get_react().createElement(front.app.components.navlink.NavLink,(function (){var obj29557 = ({"children":" Try again.","on-click":(function (e){
e.preventDefault();

return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","send-email-again","app.auth/send-email-again",-25575890)], null));
}),"href":"#"});
return obj29557;
})())))):helix.core.get_react().createElement("div",(function (){var obj29559 = ({"className":"flex flex-col"});
return obj29559;
})(),helix.core.get_react().createElement("a",(function (){var obj29561 = ({"href":"/"});
return obj29561;
})(),helix.core.get_react().createElement("img",(function (){var obj29563 = ({"className":"h-10 w-auto"});
return obj29563;
})()),"Home"),helix.core.get_react().createElement("div",(function (){var obj29565 = ({"className":"mt-20"});
return obj29565;
})(),helix.core.get_react().createElement("h2",(function (){var obj29567 = ({"className":"text-lg font-semibold text-gray-900"});
return obj29567;
})(),"Sign in to your account"),helix.core.get_react().createElement("p",(function (){var obj29569 = ({"className":"mt-2 text-sm text-gray-700"});
return obj29569;
})(),"Don't have an account? ")),helix.core.get_react().createElement("form",(function (){var obj29571 = ({"disabled":loading_QMARK_,"className":"mt-10 grid grid-cols-1 gap-y-8","onSubmit":(function (e){
e.preventDefault();

if(cljs.core.truth_(new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(state))){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","send-email","app.auth/send-email",-459398038),state], null));
} else {
return null;
}
})});
return obj29571;
})(),helix.core.get_react().createElement(front.app.auth.views.text_field,(function (){var obj29573 = ({"label":"Email address","id":"login-email","name":"email","type-field":"email","required":true,"value":new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(state),"disabled":loading_QMARK_,"on-change":(function (p1__29530_SHARP_){
var G__29574 = cljs.core.assoc;
var G__29575 = new cljs.core.Keyword(null,"email","email",1415816706);
var G__29576 = p1__29530_SHARP_.target.value;
return (set_state.cljs$core$IFn$_invoke$arity$3 ? set_state.cljs$core$IFn$_invoke$arity$3(G__29574,G__29575,G__29576) : set_state.call(null,G__29574,G__29575,G__29576));
})});
return obj29573;
})()),(cljs.core.truth_(error)?helix.core.get_react().createElement(front.app.components.alerts.Error,(function (){var obj29578 = ({"id":"login-error","error":"Error... try it again.","description":new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(error_res)});
return obj29578;
})()):null),helix.core.get_react().createElement("div",null,helix.core.get_react().createElement(front.app.components.button.Button,(function (){var obj29586 = ({"disabled":loading_QMARK_,"type":"submit","variant":"solid","color":"blue","class-name":"w-full"});
return obj29586;
})(),(cljs.core.truth_(loading_QMARK_)?helix.core.get_react().createElement("span",(function (){var obj29588 = ({"className":"inline-flex"});
return obj29588;
})(),helix.core.get_react().createElement(front.app.components.loading.LoadingSpinner,({})),"Loading..."):helix.core.get_react().createElement("span",null,"Sign in")))))))));
});
if(goog.DEBUG === true){
var G__29591 = G__29540;
(G__29591.displayName = "front.app.auth.views/login-view");

return G__29591;
} else {
return G__29540;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.app.auth.views.sig29531)){
(front.app.auth.views.sig29531.cljs$core$IFn$_invoke$arity$4 ? front.app.auth.views.sig29531.cljs$core$IFn$_invoke$arity$4(front.app.auth.views.login_view,"(refx/use-sub [:app.auth/login-loading])(refx/use-sub [:app.auth/login-error])(refx/use-sub [:app.auth/email-sent])(hooks/use-state {:email \"\"})",null,null) : front.app.auth.views.sig29531.call(null,front.app.auth.views.login_view,"(refx/use-sub [:app.auth/login-loading])(refx/use-sub [:app.auth/login-error])(refx/use-sub [:app.auth/email-sent])(hooks/use-state {:email \"\"})",null,null));
} else {
}

helix.core.register_BANG_(front.app.auth.views.login_view,"front.app.auth.views/login-view");
} else {
}

if(goog.DEBUG){
front.app.auth.views.sig29592 = helix.core.signature_BANG_();
} else {
}

front.app.auth.views.login_auth_view = (function (){var G__29593 = (function front$app$auth$views$login_auth_view_render(props__24071__auto__,maybe_ref__24072__auto__){
var vec__29594 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__24071__auto__),maybe_ref__24072__auto__], null);
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.app.auth.views.sig29592)){
(front.app.auth.views.sig29592.cljs$core$IFn$_invoke$arity$0 ? front.app.auth.views.sig29592.cljs$core$IFn$_invoke$arity$0() : front.app.auth.views.sig29592.call(null));
} else {
}
} else {
}

var map__29597 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.route","current-route","app.route/current-route",-648461532)], null));
var map__29597__$1 = cljs.core.__destructure_map(map__29597);
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29597__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var loading_QMARK_ = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","login-loading","app.auth/login-loading",523485317)], null));
var user = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","current-user","app.auth/current-user",-1927966660)], null));
var vec__29598 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","login-error","app.auth/login-error",2008740350)], null));
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29598,(0),null);
var _error_res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29598,(1),null);
if(cljs.core.truth_(user)){
refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.routes","push-state","app.routes/push-state",376935027),new cljs.core.Keyword("app.core","home","app.core/home",1018164047)], null));
} else {
}

if(cljs.core.truth_(error)){
refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.routes","push-state","app.routes/push-state",376935027),new cljs.core.Keyword("app.core","login","app.core/login",1145385267)], null));
} else {
}

var G__29604_29681 = helix.hooks.wrap_fx((function (){
var temp__5802__auto__ = new cljs.core.Keyword(null,"error_description","error_description",1071682680).cljs$core$IFn$_invoke$arity$1(query_params);
if(cljs.core.truth_(temp__5802__auto__)){
var error_msg = temp__5802__auto__;
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","error","app.auth/error",-125470583),error_msg], null));
} else {
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","login","app.auth/login",1145290492),cljs.core.select_keys(query_params,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142)], null))], null));
}
}));
var G__29605_29682 = [query_params];
(helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2 ? helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2(G__29604_29681,G__29605_29682) : helix.hooks.raw_use_effect.call(null,G__29604_29681,G__29605_29682));

return helix.core.get_react().createElement(front.app.auth.views.AuthLayout,null,(cljs.core.truth_(loading_QMARK_)?helix.core.get_react().createElement("div",null,["Validating... ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(query_params))].join('')):null));
});
if(goog.DEBUG === true){
var G__29608 = G__29593;
(G__29608.displayName = "front.app.auth.views/login-auth-view");

return G__29608;
} else {
return G__29593;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.app.auth.views.sig29592)){
(front.app.auth.views.sig29592.cljs$core$IFn$_invoke$arity$4 ? front.app.auth.views.sig29592.cljs$core$IFn$_invoke$arity$4(front.app.auth.views.login_auth_view,"(refx/use-sub [:app.route/current-route])(refx/use-sub [:app.auth/login-loading])(refx/use-sub [:app.auth/current-user])(refx/use-sub [:app.auth/login-error])(hooks/use-effect [query-params] (if-let [error-msg (:error_description query-params)] (refx/dispatch [:app.auth/error error-msg]) (refx/dispatch [:app.auth/login (select-keys query-params [:code])])))",null,null) : front.app.auth.views.sig29592.call(null,front.app.auth.views.login_auth_view,"(refx/use-sub [:app.route/current-route])(refx/use-sub [:app.auth/login-loading])(refx/use-sub [:app.auth/current-user])(refx/use-sub [:app.auth/login-error])(hooks/use-effect [query-params] (if-let [error-msg (:error_description query-params)] (refx/dispatch [:app.auth/error error-msg]) (refx/dispatch [:app.auth/login (select-keys query-params [:code])])))",null,null));
} else {
}

helix.core.register_BANG_(front.app.auth.views.login_auth_view,"front.app.auth.views/login-auth-view");
} else {
}


//# sourceMappingURL=front.app.auth.views.js.map
