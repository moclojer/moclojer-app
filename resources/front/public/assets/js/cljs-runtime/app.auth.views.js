goog.provide('app.auth.views');
app.auth.views.form_classes = "block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm";
if(goog.DEBUG){
app.auth.views.sig23389 = helix.core.signature_BANG_();
} else {
}

app.auth.views.text_field = (function (){var G__23398 = (function app$auth$views$text_field_render(props__20503__auto__,maybe_ref__20504__auto__){
var vec__23402 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__20503__auto__),maybe_ref__20504__auto__], null);
var map__23405 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23402,(0),null);
var map__23405__$1 = cljs.core.__destructure_map(map__23405);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23405__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var required = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23405__$1,new cljs.core.Keyword(null,"required","required",1807647006));
var name_field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23405__$1,new cljs.core.Keyword(null,"name-field","name-field",-1347695388));
var disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23405__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23405__$1,new cljs.core.Keyword(null,"value","value",305978217));
var type_field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23405__$1,new cljs.core.Keyword(null,"type-field","type-field",-905349238));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23405__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23405__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23405__$1,new cljs.core.Keyword(null,"class-name","class-name",945142584));
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(app.auth.views.sig23389)){
(app.auth.views.sig23389.cljs$core$IFn$_invoke$arity$0 ? app.auth.views.sig23389.cljs$core$IFn$_invoke$arity$0() : app.auth.views.sig23389.call(null));
} else {
}
} else {
}

return helix.core.get_react().createElement("div",(function (){var obj23419 = ({"className":class_name});
return obj23419;
})(),(cljs.core.truth_(label)?helix.core.get_react().createElement("label",(function (){var obj23429 = ({"htmlFor":id,"className":"mb-3 block text-sm font-medium text-gray-700"});
return obj23429;
})(),label):null),helix.core.get_react().createElement("input",(function (){var obj23441 = ({"id":id,"type":type_field,"className":app.auth.views.form_classes,"name":name_field,"value":helix.impl.props.or_undefined(value),"onChange":on_change,"disabled":disabled,"required":required});
return obj23441;
})()));
});
if(goog.DEBUG === true){
var G__23444 = G__23398;
(G__23444.displayName = "app.auth.views/text-field");

return G__23444;
} else {
return G__23398;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(app.auth.views.sig23389)){
(app.auth.views.sig23389.cljs$core$IFn$_invoke$arity$4 ? app.auth.views.sig23389.cljs$core$IFn$_invoke$arity$4(app.auth.views.text_field,"",null,null) : app.auth.views.sig23389.call(null,app.auth.views.text_field,"",null,null));
} else {
}

helix.core.register_BANG_(app.auth.views.text_field,"app.auth.views/text-field");
} else {
}

if(goog.DEBUG){
app.auth.views.sig23456 = helix.core.signature_BANG_();
} else {
}

app.auth.views.AuthLayout = (function (){var G__23461 = (function app$auth$views$AuthLayout_render(props__20503__auto__,maybe_ref__20504__auto__){
var vec__23463 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__20503__auto__),maybe_ref__20504__auto__], null);
var map__23466 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23463,(0),null);
var map__23466__$1 = cljs.core.__destructure_map(map__23466);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23466__$1,new cljs.core.Keyword(null,"children","children",-940561982));
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(app.auth.views.sig23456)){
(app.auth.views.sig23456.cljs$core$IFn$_invoke$arity$0 ? app.auth.views.sig23456.cljs$core$IFn$_invoke$arity$0() : app.auth.views.sig23456.call(null));
} else {
}
} else {
}

return helix.core.get_react().createElement("div",(function (){var obj23469 = ({"className":"relative flex min-h-full justify-center md:px-12 lg:px-0"});
return obj23469;
})(),helix.core.get_react().createElement("div",(function (){var obj23477 = ({"className":"relative z-10 flex flex-1 flex-col bg-white py-10 px-4 shadow-2xl sm:justify-center md:flex-none md:px-28"});
return obj23477;
})(),helix.core.get_react().createElement("div",(function (){var obj23479 = ({"className":"mx-auto w-full max-w-md sm:px-4 md:w-96 md:max-w-sm md:px-0"});
return obj23479;
})(),children)));
});
if(goog.DEBUG === true){
var G__23480 = G__23461;
(G__23480.displayName = "app.auth.views/AuthLayout");

return G__23480;
} else {
return G__23461;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(app.auth.views.sig23456)){
(app.auth.views.sig23456.cljs$core$IFn$_invoke$arity$4 ? app.auth.views.sig23456.cljs$core$IFn$_invoke$arity$4(app.auth.views.AuthLayout,"",null,null) : app.auth.views.sig23456.call(null,app.auth.views.AuthLayout,"",null,null));
} else {
}

helix.core.register_BANG_(app.auth.views.AuthLayout,"app.auth.views/AuthLayout");
} else {
}

if(goog.DEBUG){
app.auth.views.sig23482 = helix.core.signature_BANG_();
} else {
}

app.auth.views.SignInBtn = (function (){var G__23487 = (function app$auth$views$SignInBtn_render(props__20503__auto__,maybe_ref__20504__auto__){
var vec__23488 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__20503__auto__),maybe_ref__20504__auto__], null);
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(app.auth.views.sig23482)){
(app.auth.views.sig23482.cljs$core$IFn$_invoke$arity$0 ? app.auth.views.sig23482.cljs$core$IFn$_invoke$arity$0() : app.auth.views.sig23482.call(null));
} else {
}
} else {
}

return helix.core.get_react().createElement("div",(function (){var obj23495 = ({"className":"hidden md:block"});
return obj23495;
})(),helix.core.get_react().createElement(app.components.navlink.NavLink,(function (){var obj23507 = ({"children":"Sign In","href":reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.core","login","app.core/login",1145385267))});
return obj23507;
})()));
});
if(goog.DEBUG === true){
var G__23508 = G__23487;
(G__23508.displayName = "app.auth.views/SignInBtn");

return G__23508;
} else {
return G__23487;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(app.auth.views.sig23482)){
(app.auth.views.sig23482.cljs$core$IFn$_invoke$arity$4 ? app.auth.views.sig23482.cljs$core$IFn$_invoke$arity$4(app.auth.views.SignInBtn,"",null,null) : app.auth.views.sig23482.call(null,app.auth.views.SignInBtn,"",null,null));
} else {
}

helix.core.register_BANG_(app.auth.views.SignInBtn,"app.auth.views/SignInBtn");
} else {
}

if(goog.DEBUG){
app.auth.views.sig23513 = helix.core.signature_BANG_();
} else {
}

app.auth.views.LogOutBtn = (function (){var G__23518 = (function app$auth$views$LogOutBtn_render(props__20503__auto__,maybe_ref__20504__auto__){
var vec__23519 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__20503__auto__),maybe_ref__20504__auto__], null);
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(app.auth.views.sig23513)){
(app.auth.views.sig23513.cljs$core$IFn$_invoke$arity$0 ? app.auth.views.sig23513.cljs$core$IFn$_invoke$arity$0() : app.auth.views.sig23513.call(null));
} else {
}
} else {
}

return helix.core.get_react().createElement("div",(function (){var obj23524 = ({"className":"hidden md:block"});
return obj23524;
})(),helix.core.get_react().createElement(app.components.navlink.NavLink,(function (){var obj23526 = ({"on-click":(function (e){
e.preventDefault();

refx.alpha.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.routes","push-state","app.routes/push-state",376935027),new cljs.core.Keyword("app.core","home","app.core/home",1018164047)], null));

return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","logout","app.auth/logout",-1850847146)], null));
}),"children":"Logout","href":"#"});
return obj23526;
})()));
});
if(goog.DEBUG === true){
var G__23527 = G__23518;
(G__23527.displayName = "app.auth.views/LogOutBtn");

return G__23527;
} else {
return G__23518;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(app.auth.views.sig23513)){
(app.auth.views.sig23513.cljs$core$IFn$_invoke$arity$4 ? app.auth.views.sig23513.cljs$core$IFn$_invoke$arity$4(app.auth.views.LogOutBtn,"",null,null) : app.auth.views.sig23513.call(null,app.auth.views.LogOutBtn,"",null,null));
} else {
}

helix.core.register_BANG_(app.auth.views.LogOutBtn,"app.auth.views/LogOutBtn");
} else {
}

if(goog.DEBUG){
app.auth.views.sig23528 = helix.core.signature_BANG_();
} else {
}

app.auth.views.AuthMenu = (function (){var G__23530 = (function app$auth$views$AuthMenu_render(props__20503__auto__,maybe_ref__20504__auto__){
var vec__23531 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__20503__auto__),maybe_ref__20504__auto__], null);
var map__23534 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23531,(0),null);
var map__23534__$1 = cljs.core.__destructure_map(map__23534);
var user = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23534__$1,new cljs.core.Keyword(null,"user","user",1532431356));
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(app.auth.views.sig23528)){
(app.auth.views.sig23528.cljs$core$IFn$_invoke$arity$0 ? app.auth.views.sig23528.cljs$core$IFn$_invoke$arity$0() : app.auth.views.sig23528.call(null));
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
var G__23536 = G__23530;
(G__23536.displayName = "app.auth.views/AuthMenu");

return G__23536;
} else {
return G__23530;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(app.auth.views.sig23528)){
(app.auth.views.sig23528.cljs$core$IFn$_invoke$arity$4 ? app.auth.views.sig23528.cljs$core$IFn$_invoke$arity$4(app.auth.views.AuthMenu,"",null,null) : app.auth.views.sig23528.call(null,app.auth.views.AuthMenu,"",null,null));
} else {
}

helix.core.register_BANG_(app.auth.views.AuthMenu,"app.auth.views/AuthMenu");
} else {
}

if(goog.DEBUG){
app.auth.views.sig23557 = helix.core.signature_BANG_();
} else {
}

app.auth.views.login_view = (function (){var G__23602 = (function app$auth$views$login_view_render(props__20503__auto__,maybe_ref__20504__auto__){
var vec__23603 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__20503__auto__),maybe_ref__20504__auto__], null);
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(app.auth.views.sig23557)){
(app.auth.views.sig23557.cljs$core$IFn$_invoke$arity$0 ? app.auth.views.sig23557.cljs$core$IFn$_invoke$arity$0() : app.auth.views.sig23557.call(null));
} else {
}
} else {
}

var loading_QMARK_ = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","login-loading","app.auth/login-loading",523485317)], null));
var vec__23606 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","login-error","app.auth/login-error",2008740350)], null));
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23606,(0),null);
var error_res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23606,(1),null);
var email_sent_QMARK_ = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","email-sent","app.auth/email-sent",1729173059)], null));
var vec__23609 = helix.hooks.use_state(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"email","email",1415816706),""], null));
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23609,(0),null);
var set_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23609,(1),null);
return helix.core.get_react().createElement(app.auth.views.AuthLayout,null,helix.core.get_react().createElement("div",null,(cljs.core.truth_(email_sent_QMARK_)?helix.core.get_react().createElement("div",(function (){var obj23613 = ({"id":"login-email-sent","className":"flex flex-col"});
return obj23613;
})(),helix.core.get_react().createElement("h2",(function (){var obj23622 = ({"className":"text-lg font-semibold text-gray-900"});
return obj23622;
})(),"Check your email, and click on the link."),helix.core.get_react().createElement("div",null,helix.core.get_react().createElement("div",(function (){var obj23625 = ({"className":"mt-2 text-sm text-gray-700"});
return obj23625;
})(),"Didn't received it?",helix.core.get_react().createElement(app.components.navlink.NavLink,(function (){var obj23627 = ({"children":" Try again.","on-click":(function (e){
e.preventDefault();

return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","send-email-again","app.auth/send-email-again",-25575890)], null));
}),"href":"#"});
return obj23627;
})())))):helix.core.get_react().createElement("div",(function (){var obj23634 = ({"className":"flex flex-col"});
return obj23634;
})(),helix.core.get_react().createElement("a",(function (){var obj23638 = ({"href":"/"});
return obj23638;
})(),helix.core.get_react().createElement("img",(function (){var obj23642 = ({"className":"h-10 w-auto"});
return obj23642;
})()),"Home"),helix.core.get_react().createElement("div",(function (){var obj23646 = ({"className":"mt-20"});
return obj23646;
})(),helix.core.get_react().createElement("h2",(function (){var obj23648 = ({"className":"text-lg font-semibold text-gray-900"});
return obj23648;
})(),"Sign in to your account"),helix.core.get_react().createElement("p",(function (){var obj23650 = ({"className":"mt-2 text-sm text-gray-700"});
return obj23650;
})(),"Don't have an account? ")),helix.core.get_react().createElement("form",(function (){var obj23652 = ({"disabled":loading_QMARK_,"className":"mt-10 grid grid-cols-1 gap-y-8","onSubmit":(function (e){
e.preventDefault();

if(cljs.core.truth_(new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(state))){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","send-email","app.auth/send-email",-459398038),state], null));
} else {
return null;
}
})});
return obj23652;
})(),helix.core.get_react().createElement(app.auth.views.text_field,(function (){var obj23665 = ({"label":"Email address","id":"login-email","name":"email","type-field":"email","required":true,"value":new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(state),"disabled":loading_QMARK_,"on-change":(function (p1__23550_SHARP_){
var G__23667 = cljs.core.assoc;
var G__23668 = new cljs.core.Keyword(null,"email","email",1415816706);
var G__23669 = p1__23550_SHARP_.target.value;
return (set_state.cljs$core$IFn$_invoke$arity$3 ? set_state.cljs$core$IFn$_invoke$arity$3(G__23667,G__23668,G__23669) : set_state.call(null,G__23667,G__23668,G__23669));
})});
return obj23665;
})()),(cljs.core.truth_(error)?helix.core.get_react().createElement(app.components.alerts.Error,(function (){var obj23671 = ({"id":"login-error","error":"Error... try it again.","description":new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(error_res)});
return obj23671;
})()):null),helix.core.get_react().createElement("div",null,helix.core.get_react().createElement(app.components.button.Button,(function (){var obj23673 = ({"disabled":loading_QMARK_,"type":"submit","variant":"solid","color":"blue","class-name":"w-full"});
return obj23673;
})(),(cljs.core.truth_(loading_QMARK_)?helix.core.get_react().createElement("span",(function (){var obj23675 = ({"className":"inline-flex"});
return obj23675;
})(),helix.core.get_react().createElement(app.components.loading.LoadingSpinner,({})),"Loading..."):helix.core.get_react().createElement("span",null,"Sign in")))))))));
});
if(goog.DEBUG === true){
var G__23678 = G__23602;
(G__23678.displayName = "app.auth.views/login-view");

return G__23678;
} else {
return G__23602;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(app.auth.views.sig23557)){
(app.auth.views.sig23557.cljs$core$IFn$_invoke$arity$4 ? app.auth.views.sig23557.cljs$core$IFn$_invoke$arity$4(app.auth.views.login_view,"(refx/use-sub [:app.auth/login-loading])(refx/use-sub [:app.auth/login-error])(refx/use-sub [:app.auth/email-sent])(hooks/use-state {:email \"\"})",null,null) : app.auth.views.sig23557.call(null,app.auth.views.login_view,"(refx/use-sub [:app.auth/login-loading])(refx/use-sub [:app.auth/login-error])(refx/use-sub [:app.auth/email-sent])(hooks/use-state {:email \"\"})",null,null));
} else {
}

helix.core.register_BANG_(app.auth.views.login_view,"app.auth.views/login-view");
} else {
}

if(goog.DEBUG){
app.auth.views.sig23679 = helix.core.signature_BANG_();
} else {
}

app.auth.views.login_auth_view = (function (){var G__23680 = (function app$auth$views$login_auth_view_render(props__20503__auto__,maybe_ref__20504__auto__){
var vec__23681 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__20503__auto__),maybe_ref__20504__auto__], null);
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(app.auth.views.sig23679)){
(app.auth.views.sig23679.cljs$core$IFn$_invoke$arity$0 ? app.auth.views.sig23679.cljs$core$IFn$_invoke$arity$0() : app.auth.views.sig23679.call(null));
} else {
}
} else {
}

var map__23684 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.route","current-route","app.route/current-route",-648461532)], null));
var map__23684__$1 = cljs.core.__destructure_map(map__23684);
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23684__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var loading_QMARK_ = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","login-loading","app.auth/login-loading",523485317)], null));
var user = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","current-user","app.auth/current-user",-1927966660)], null));
var vec__23685 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","login-error","app.auth/login-error",2008740350)], null));
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23685,(0),null);
var _error_res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23685,(1),null);
if(cljs.core.truth_(user)){
refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.routes","push-state","app.routes/push-state",376935027),new cljs.core.Keyword("app.core","home","app.core/home",1018164047)], null));
} else {
}

if(cljs.core.truth_(error)){
refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.routes","push-state","app.routes/push-state",376935027),new cljs.core.Keyword("app.core","login","app.core/login",1145385267)], null));
} else {
}

var G__23688_23793 = helix.hooks.wrap_fx((function (){
var temp__5802__auto__ = new cljs.core.Keyword(null,"error_description","error_description",1071682680).cljs$core$IFn$_invoke$arity$1(query_params);
if(cljs.core.truth_(temp__5802__auto__)){
var error_msg = temp__5802__auto__;
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","error","app.auth/error",-125470583),error_msg], null));
} else {
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","login","app.auth/login",1145290492),cljs.core.select_keys(query_params,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142)], null))], null));
}
}));
var G__23689_23794 = [query_params];
(helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2 ? helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2(G__23688_23793,G__23689_23794) : helix.hooks.raw_use_effect.call(null,G__23688_23793,G__23689_23794));

return helix.core.get_react().createElement(app.auth.views.AuthLayout,null,(cljs.core.truth_(loading_QMARK_)?helix.core.get_react().createElement("div",null,["Validating... ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(query_params))].join('')):null));
});
if(goog.DEBUG === true){
var G__23692 = G__23680;
(G__23692.displayName = "app.auth.views/login-auth-view");

return G__23692;
} else {
return G__23680;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(app.auth.views.sig23679)){
(app.auth.views.sig23679.cljs$core$IFn$_invoke$arity$4 ? app.auth.views.sig23679.cljs$core$IFn$_invoke$arity$4(app.auth.views.login_auth_view,"(refx/use-sub [:app.route/current-route])(refx/use-sub [:app.auth/login-loading])(refx/use-sub [:app.auth/current-user])(refx/use-sub [:app.auth/login-error])(hooks/use-effect [query-params] (if-let [error-msg (:error_description query-params)] (refx/dispatch [:app.auth/error error-msg]) (refx/dispatch [:app.auth/login (select-keys query-params [:code])])))",null,null) : app.auth.views.sig23679.call(null,app.auth.views.login_auth_view,"(refx/use-sub [:app.route/current-route])(refx/use-sub [:app.auth/login-loading])(refx/use-sub [:app.auth/current-user])(refx/use-sub [:app.auth/login-error])(hooks/use-effect [query-params] (if-let [error-msg (:error_description query-params)] (refx/dispatch [:app.auth/error error-msg]) (refx/dispatch [:app.auth/login (select-keys query-params [:code])])))",null,null));
} else {
}

helix.core.register_BANG_(app.auth.views.login_auth_view,"app.auth.views/login-auth-view");
} else {
}


//# sourceMappingURL=app.auth.views.js.map
