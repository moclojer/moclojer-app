goog.provide('front.app.auth.views');
front.app.auth.views.form_classes = "block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm";
if(goog.DEBUG){
front.app.auth.views.sig62195 = helix.core.signature_BANG_();
} else {
}

front.app.auth.views.text_field = (function (){var G__62196 = (function front$app$auth$views$text_field_render(props__32635__auto__,maybe_ref__32636__auto__){
var vec__62197 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__32635__auto__),maybe_ref__32636__auto__], null);
var map__62200 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62197,(0),null);
var map__62200__$1 = cljs.core.__destructure_map(map__62200);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62200__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var required = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62200__$1,new cljs.core.Keyword(null,"required","required",1807647006));
var name_field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62200__$1,new cljs.core.Keyword(null,"name-field","name-field",-1347695388));
var disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62200__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62200__$1,new cljs.core.Keyword(null,"value","value",305978217));
var type_field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62200__$1,new cljs.core.Keyword(null,"type-field","type-field",-905349238));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62200__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62200__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62200__$1,new cljs.core.Keyword(null,"class-name","class-name",945142584));
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.app.auth.views.sig62195)){
(front.app.auth.views.sig62195.cljs$core$IFn$_invoke$arity$0 ? front.app.auth.views.sig62195.cljs$core$IFn$_invoke$arity$0() : front.app.auth.views.sig62195.call(null));
} else {
}
} else {
}

return helix.core.get_react().createElement("div",(function (){var obj62202 = ({"className":class_name});
return obj62202;
})(),(cljs.core.truth_(label)?helix.core.get_react().createElement("label",(function (){var obj62204 = ({"htmlFor":id,"className":"mb-3 block text-sm font-medium text-gray-700"});
return obj62204;
})(),label):null),helix.core.get_react().createElement("input",(function (){var obj62206 = ({"id":id,"type":type_field,"className":front.app.auth.views.form_classes,"name":name_field,"value":helix.impl.props.or_undefined(value),"onChange":on_change,"disabled":disabled,"required":required});
return obj62206;
})()));
});
if(goog.DEBUG === true){
var G__62209 = G__62196;
(G__62209.displayName = "front.app.auth.views/text-field");

return G__62209;
} else {
return G__62196;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.app.auth.views.sig62195)){
(front.app.auth.views.sig62195.cljs$core$IFn$_invoke$arity$4 ? front.app.auth.views.sig62195.cljs$core$IFn$_invoke$arity$4(front.app.auth.views.text_field,"",null,null) : front.app.auth.views.sig62195.call(null,front.app.auth.views.text_field,"",null,null));
} else {
}

helix.core.register_BANG_(front.app.auth.views.text_field,"front.app.auth.views/text-field");
} else {
}

if(goog.DEBUG){
front.app.auth.views.sig62214 = helix.core.signature_BANG_();
} else {
}

front.app.auth.views.AuthLayout = (function (){var G__62219 = (function front$app$auth$views$AuthLayout_render(props__32635__auto__,maybe_ref__32636__auto__){
var vec__62226 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__32635__auto__),maybe_ref__32636__auto__], null);
var map__62229 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62226,(0),null);
var map__62229__$1 = cljs.core.__destructure_map(map__62229);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62229__$1,new cljs.core.Keyword(null,"children","children",-940561982));
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.app.auth.views.sig62214)){
(front.app.auth.views.sig62214.cljs$core$IFn$_invoke$arity$0 ? front.app.auth.views.sig62214.cljs$core$IFn$_invoke$arity$0() : front.app.auth.views.sig62214.call(null));
} else {
}
} else {
}

return helix.core.get_react().createElement("div",(function (){var obj62237 = ({"className":"relative flex min-h-full justify-center md:px-12 lg:px-0"});
return obj62237;
})(),helix.core.get_react().createElement("div",(function (){var obj62243 = ({"className":"relative z-10 flex flex-1 flex-col bg-white py-10 px-4 shadow-2xl sm:justify-center md:flex-none md:px-28"});
return obj62243;
})(),helix.core.get_react().createElement("div",(function (){var obj62247 = ({"className":"mx-auto w-full max-w-md sm:px-4 md:w-96 md:max-w-sm md:px-0"});
return obj62247;
})(),children)));
});
if(goog.DEBUG === true){
var G__62252 = G__62219;
(G__62252.displayName = "front.app.auth.views/AuthLayout");

return G__62252;
} else {
return G__62219;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.app.auth.views.sig62214)){
(front.app.auth.views.sig62214.cljs$core$IFn$_invoke$arity$4 ? front.app.auth.views.sig62214.cljs$core$IFn$_invoke$arity$4(front.app.auth.views.AuthLayout,"",null,null) : front.app.auth.views.sig62214.call(null,front.app.auth.views.AuthLayout,"",null,null));
} else {
}

helix.core.register_BANG_(front.app.auth.views.AuthLayout,"front.app.auth.views/AuthLayout");
} else {
}

if(goog.DEBUG){
front.app.auth.views.sig62255 = helix.core.signature_BANG_();
} else {
}

front.app.auth.views.SignInBtn = (function (){var G__62256 = (function front$app$auth$views$SignInBtn_render(props__32635__auto__,maybe_ref__32636__auto__){
var vec__62257 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__32635__auto__),maybe_ref__32636__auto__], null);
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.app.auth.views.sig62255)){
(front.app.auth.views.sig62255.cljs$core$IFn$_invoke$arity$0 ? front.app.auth.views.sig62255.cljs$core$IFn$_invoke$arity$0() : front.app.auth.views.sig62255.call(null));
} else {
}
} else {
}

return helix.core.get_react().createElement("div",(function (){var obj62261 = ({"className":"hidden md:block"});
return obj62261;
})(),helix.core.get_react().createElement(front.app.components.navlink.NavLink,(function (){var obj62263 = ({"children":"Sign In","href":reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.core","login","app.core/login",1145385267))});
return obj62263;
})()));
});
if(goog.DEBUG === true){
var G__62264 = G__62256;
(G__62264.displayName = "front.app.auth.views/SignInBtn");

return G__62264;
} else {
return G__62256;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.app.auth.views.sig62255)){
(front.app.auth.views.sig62255.cljs$core$IFn$_invoke$arity$4 ? front.app.auth.views.sig62255.cljs$core$IFn$_invoke$arity$4(front.app.auth.views.SignInBtn,"",null,null) : front.app.auth.views.sig62255.call(null,front.app.auth.views.SignInBtn,"",null,null));
} else {
}

helix.core.register_BANG_(front.app.auth.views.SignInBtn,"front.app.auth.views/SignInBtn");
} else {
}

if(goog.DEBUG){
front.app.auth.views.sig62265 = helix.core.signature_BANG_();
} else {
}

front.app.auth.views.LogOutBtn = (function (){var G__62266 = (function front$app$auth$views$LogOutBtn_render(props__32635__auto__,maybe_ref__32636__auto__){
var vec__62267 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__32635__auto__),maybe_ref__32636__auto__], null);
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.app.auth.views.sig62265)){
(front.app.auth.views.sig62265.cljs$core$IFn$_invoke$arity$0 ? front.app.auth.views.sig62265.cljs$core$IFn$_invoke$arity$0() : front.app.auth.views.sig62265.call(null));
} else {
}
} else {
}

return helix.core.get_react().createElement("div",(function (){var obj62271 = ({"className":"hidden md:block"});
return obj62271;
})(),helix.core.get_react().createElement(front.app.components.navlink.NavLink,(function (){var obj62273 = ({"on-click":(function (e){
e.preventDefault();

refx.alpha.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.routes","push-state","app.routes/push-state",376935027),new cljs.core.Keyword("app.core","home","app.core/home",1018164047)], null));

return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","logout","app.auth/logout",-1850847146)], null));
}),"children":"Logout","href":"#"});
return obj62273;
})()));
});
if(goog.DEBUG === true){
var G__62274 = G__62266;
(G__62274.displayName = "front.app.auth.views/LogOutBtn");

return G__62274;
} else {
return G__62266;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.app.auth.views.sig62265)){
(front.app.auth.views.sig62265.cljs$core$IFn$_invoke$arity$4 ? front.app.auth.views.sig62265.cljs$core$IFn$_invoke$arity$4(front.app.auth.views.LogOutBtn,"",null,null) : front.app.auth.views.sig62265.call(null,front.app.auth.views.LogOutBtn,"",null,null));
} else {
}

helix.core.register_BANG_(front.app.auth.views.LogOutBtn,"front.app.auth.views/LogOutBtn");
} else {
}

if(goog.DEBUG){
front.app.auth.views.sig62275 = helix.core.signature_BANG_();
} else {
}

front.app.auth.views.AuthMenu = (function (){var G__62277 = (function front$app$auth$views$AuthMenu_render(props__32635__auto__,maybe_ref__32636__auto__){
var vec__62278 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__32635__auto__),maybe_ref__32636__auto__], null);
var map__62281 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62278,(0),null);
var map__62281__$1 = cljs.core.__destructure_map(map__62281);
var user = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62281__$1,new cljs.core.Keyword(null,"user","user",1532431356));
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.app.auth.views.sig62275)){
(front.app.auth.views.sig62275.cljs$core$IFn$_invoke$arity$0 ? front.app.auth.views.sig62275.cljs$core$IFn$_invoke$arity$0() : front.app.auth.views.sig62275.call(null));
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
var G__62283 = G__62277;
(G__62283.displayName = "front.app.auth.views/AuthMenu");

return G__62283;
} else {
return G__62277;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.app.auth.views.sig62275)){
(front.app.auth.views.sig62275.cljs$core$IFn$_invoke$arity$4 ? front.app.auth.views.sig62275.cljs$core$IFn$_invoke$arity$4(front.app.auth.views.AuthMenu,"",null,null) : front.app.auth.views.sig62275.call(null,front.app.auth.views.AuthMenu,"",null,null));
} else {
}

helix.core.register_BANG_(front.app.auth.views.AuthMenu,"front.app.auth.views/AuthMenu");
} else {
}

if(goog.DEBUG){
front.app.auth.views.sig62286 = helix.core.signature_BANG_();
} else {
}

front.app.auth.views.login_view = (function (){var G__62287 = (function front$app$auth$views$login_view_render(props__32635__auto__,maybe_ref__32636__auto__){
var vec__62288 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__32635__auto__),maybe_ref__32636__auto__], null);
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.app.auth.views.sig62286)){
(front.app.auth.views.sig62286.cljs$core$IFn$_invoke$arity$0 ? front.app.auth.views.sig62286.cljs$core$IFn$_invoke$arity$0() : front.app.auth.views.sig62286.call(null));
} else {
}
} else {
}

var loading_QMARK_ = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","login-loading","app.auth/login-loading",523485317)], null));
var vec__62291 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","login-error","app.auth/login-error",2008740350)], null));
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62291,(0),null);
var error_res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62291,(1),null);
var email_sent_QMARK_ = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","email-sent","app.auth/email-sent",1729173059)], null));
var vec__62294 = helix.hooks.use_state(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"email","email",1415816706),""], null));
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62294,(0),null);
var set_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62294,(1),null);
return helix.core.get_react().createElement(front.app.auth.views.AuthLayout,null,helix.core.get_react().createElement("div",null,(cljs.core.truth_(email_sent_QMARK_)?helix.core.get_react().createElement("div",(function (){var obj62300 = ({"id":"login-email-sent","className":"flex flex-col"});
return obj62300;
})(),helix.core.get_react().createElement("h2",(function (){var obj62302 = ({"className":"text-lg font-semibold text-gray-900"});
return obj62302;
})(),"Check your email, and click on the link."),helix.core.get_react().createElement("div",null,helix.core.get_react().createElement("div",(function (){var obj62304 = ({"className":"mt-2 text-sm text-gray-700"});
return obj62304;
})(),"Didn't received it?",helix.core.get_react().createElement(front.app.components.navlink.NavLink,(function (){var obj62306 = ({"children":" Try again.","on-click":(function (e){
e.preventDefault();

return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","send-email-again","app.auth/send-email-again",-25575890)], null));
}),"href":"#"});
return obj62306;
})())))):helix.core.get_react().createElement("div",(function (){var obj62308 = ({"className":"flex flex-col"});
return obj62308;
})(),helix.core.get_react().createElement("a",(function (){var obj62311 = ({"href":"/"});
return obj62311;
})(),helix.core.get_react().createElement("img",(function (){var obj62313 = ({"className":"h-10 w-auto"});
return obj62313;
})()),"Home"),helix.core.get_react().createElement("div",(function (){var obj62315 = ({"className":"mt-20"});
return obj62315;
})(),helix.core.get_react().createElement("h2",(function (){var obj62317 = ({"className":"text-lg font-semibold text-gray-900"});
return obj62317;
})(),"Sign in to your account"),helix.core.get_react().createElement("p",(function (){var obj62319 = ({"className":"mt-2 text-sm text-gray-700"});
return obj62319;
})(),"Don't have an account? ")),helix.core.get_react().createElement("form",(function (){var obj62321 = ({"disabled":loading_QMARK_,"className":"mt-10 grid grid-cols-1 gap-y-8","onSubmit":(function (e){
e.preventDefault();

if(cljs.core.truth_(new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(state))){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","send-email","app.auth/send-email",-459398038),state], null));
} else {
return null;
}
})});
return obj62321;
})(),helix.core.get_react().createElement(front.app.auth.views.text_field,(function (){var obj62324 = ({"label":"Email address","id":"login-email","name":"email","type-field":"email","required":true,"value":new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(state),"disabled":loading_QMARK_,"on-change":(function (p1__62285_SHARP_){
var G__62325 = cljs.core.assoc;
var G__62326 = new cljs.core.Keyword(null,"email","email",1415816706);
var G__62327 = p1__62285_SHARP_.target.value;
return (set_state.cljs$core$IFn$_invoke$arity$3 ? set_state.cljs$core$IFn$_invoke$arity$3(G__62325,G__62326,G__62327) : set_state.call(null,G__62325,G__62326,G__62327));
})});
return obj62324;
})()),(cljs.core.truth_(error)?helix.core.get_react().createElement(front.app.components.alerts.Error,(function (){var obj62329 = ({"id":"login-error","error":"Error... try it again.","description":new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(error_res)});
return obj62329;
})()):null),helix.core.get_react().createElement("div",null,helix.core.get_react().createElement(front.app.components.button.Button,(function (){var obj62332 = ({"disabled":loading_QMARK_,"type":"submit","variant":"solid","color":"blue","class-name":"w-full"});
return obj62332;
})(),(cljs.core.truth_(loading_QMARK_)?helix.core.get_react().createElement("span",(function (){var obj62334 = ({"className":"inline-flex"});
return obj62334;
})(),helix.core.get_react().createElement(front.app.components.loading.LoadingSpinner,({})),"Loading..."):helix.core.get_react().createElement("span",null,"Sign in")))))))));
});
if(goog.DEBUG === true){
var G__62337 = G__62287;
(G__62337.displayName = "front.app.auth.views/login-view");

return G__62337;
} else {
return G__62287;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.app.auth.views.sig62286)){
(front.app.auth.views.sig62286.cljs$core$IFn$_invoke$arity$4 ? front.app.auth.views.sig62286.cljs$core$IFn$_invoke$arity$4(front.app.auth.views.login_view,"(refx/use-sub [:app.auth/login-loading])(refx/use-sub [:app.auth/login-error])(refx/use-sub [:app.auth/email-sent])(hooks/use-state {:email \"\"})",null,null) : front.app.auth.views.sig62286.call(null,front.app.auth.views.login_view,"(refx/use-sub [:app.auth/login-loading])(refx/use-sub [:app.auth/login-error])(refx/use-sub [:app.auth/email-sent])(hooks/use-state {:email \"\"})",null,null));
} else {
}

helix.core.register_BANG_(front.app.auth.views.login_view,"front.app.auth.views/login-view");
} else {
}

if(goog.DEBUG){
front.app.auth.views.sig62338 = helix.core.signature_BANG_();
} else {
}

front.app.auth.views.login_auth_view = (function (){var G__62341 = (function front$app$auth$views$login_auth_view_render(props__32635__auto__,maybe_ref__32636__auto__){
var vec__62342 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__32635__auto__),maybe_ref__32636__auto__], null);
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.app.auth.views.sig62338)){
(front.app.auth.views.sig62338.cljs$core$IFn$_invoke$arity$0 ? front.app.auth.views.sig62338.cljs$core$IFn$_invoke$arity$0() : front.app.auth.views.sig62338.call(null));
} else {
}
} else {
}

var map__62345 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.route","current-route","app.route/current-route",-648461532)], null));
var map__62345__$1 = cljs.core.__destructure_map(map__62345);
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62345__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var loading_QMARK_ = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","login-loading","app.auth/login-loading",523485317)], null));
var user = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","current-user","app.auth/current-user",-1927966660)], null));
var vec__62346 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","login-error","app.auth/login-error",2008740350)], null));
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62346,(0),null);
var _error_res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62346,(1),null);
if(cljs.core.truth_(user)){
refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.routes","push-state","app.routes/push-state",376935027),new cljs.core.Keyword("app.core","home","app.core/home",1018164047)], null));
} else {
}

if(cljs.core.truth_(error)){
refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.routes","push-state","app.routes/push-state",376935027),new cljs.core.Keyword("app.core","login","app.core/login",1145385267)], null));
} else {
}

var G__62349_62400 = helix.hooks.wrap_fx((function (){
var temp__5802__auto__ = new cljs.core.Keyword(null,"error_description","error_description",1071682680).cljs$core$IFn$_invoke$arity$1(query_params);
if(cljs.core.truth_(temp__5802__auto__)){
var error_msg = temp__5802__auto__;
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","error","app.auth/error",-125470583),error_msg], null));
} else {
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","login","app.auth/login",1145290492),cljs.core.select_keys(query_params,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142)], null))], null));
}
}));
var G__62350_62401 = [query_params];
(helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2 ? helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2(G__62349_62400,G__62350_62401) : helix.hooks.raw_use_effect.call(null,G__62349_62400,G__62350_62401));

return helix.core.get_react().createElement(front.app.auth.views.AuthLayout,null,(cljs.core.truth_(loading_QMARK_)?helix.core.get_react().createElement("div",null,["Validating... ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(query_params))].join('')):null));
});
if(goog.DEBUG === true){
var G__62354 = G__62341;
(G__62354.displayName = "front.app.auth.views/login-auth-view");

return G__62354;
} else {
return G__62341;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.app.auth.views.sig62338)){
(front.app.auth.views.sig62338.cljs$core$IFn$_invoke$arity$4 ? front.app.auth.views.sig62338.cljs$core$IFn$_invoke$arity$4(front.app.auth.views.login_auth_view,"(refx/use-sub [:app.route/current-route])(refx/use-sub [:app.auth/login-loading])(refx/use-sub [:app.auth/current-user])(refx/use-sub [:app.auth/login-error])(hooks/use-effect [query-params] (if-let [error-msg (:error_description query-params)] (refx/dispatch [:app.auth/error error-msg]) (refx/dispatch [:app.auth/login (select-keys query-params [:code])])))",null,null) : front.app.auth.views.sig62338.call(null,front.app.auth.views.login_auth_view,"(refx/use-sub [:app.route/current-route])(refx/use-sub [:app.auth/login-loading])(refx/use-sub [:app.auth/current-user])(refx/use-sub [:app.auth/login-error])(hooks/use-effect [query-params] (if-let [error-msg (:error_description query-params)] (refx/dispatch [:app.auth/error error-msg]) (refx/dispatch [:app.auth/login (select-keys query-params [:code])])))",null,null));
} else {
}

helix.core.register_BANG_(front.app.auth.views.login_auth_view,"front.app.auth.views/login-auth-view");
} else {
}


//# sourceMappingURL=front.app.auth.views.js.map
