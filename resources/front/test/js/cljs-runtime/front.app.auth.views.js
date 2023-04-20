goog.provide('front.app.auth.views');
front.app.auth.views.form_classes = "block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm";
if(goog.DEBUG){
front.app.auth.views.sig59865 = helix.core.signature_BANG_();
} else {
}

front.app.auth.views.text_field = (function (){var G__59883 = (function front$app$auth$views$text_field_render(props__32635__auto__,maybe_ref__32636__auto__){
var vec__59885 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__32635__auto__),maybe_ref__32636__auto__], null);
var map__59888 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59885,(0),null);
var map__59888__$1 = cljs.core.__destructure_map(map__59888);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59888__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var required = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59888__$1,new cljs.core.Keyword(null,"required","required",1807647006));
var name_field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59888__$1,new cljs.core.Keyword(null,"name-field","name-field",-1347695388));
var disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59888__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59888__$1,new cljs.core.Keyword(null,"value","value",305978217));
var type_field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59888__$1,new cljs.core.Keyword(null,"type-field","type-field",-905349238));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59888__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59888__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59888__$1,new cljs.core.Keyword(null,"class-name","class-name",945142584));
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.app.auth.views.sig59865)){
(front.app.auth.views.sig59865.cljs$core$IFn$_invoke$arity$0 ? front.app.auth.views.sig59865.cljs$core$IFn$_invoke$arity$0() : front.app.auth.views.sig59865.call(null));
} else {
}
} else {
}

return helix.core.get_react().createElement("div",(function (){var obj59892 = ({"className":class_name});
return obj59892;
})(),(cljs.core.truth_(label)?helix.core.get_react().createElement("label",(function (){var obj59894 = ({"htmlFor":id,"className":"mb-3 block text-sm font-medium text-gray-700"});
return obj59894;
})(),label):null),helix.core.get_react().createElement("input",(function (){var obj59896 = ({"id":id,"type":type_field,"className":front.app.auth.views.form_classes,"name":name_field,"value":helix.impl.props.or_undefined(value),"onChange":on_change,"disabled":disabled,"required":required});
return obj59896;
})()));
});
if(goog.DEBUG === true){
var G__59897 = G__59883;
(G__59897.displayName = "front.app.auth.views/text-field");

return G__59897;
} else {
return G__59883;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.app.auth.views.sig59865)){
(front.app.auth.views.sig59865.cljs$core$IFn$_invoke$arity$4 ? front.app.auth.views.sig59865.cljs$core$IFn$_invoke$arity$4(front.app.auth.views.text_field,"",null,null) : front.app.auth.views.sig59865.call(null,front.app.auth.views.text_field,"",null,null));
} else {
}

helix.core.register_BANG_(front.app.auth.views.text_field,"front.app.auth.views/text-field");
} else {
}

if(goog.DEBUG){
front.app.auth.views.sig59898 = helix.core.signature_BANG_();
} else {
}

front.app.auth.views.AuthLayout = (function (){var G__59900 = (function front$app$auth$views$AuthLayout_render(props__32635__auto__,maybe_ref__32636__auto__){
var vec__59901 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__32635__auto__),maybe_ref__32636__auto__], null);
var map__59904 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59901,(0),null);
var map__59904__$1 = cljs.core.__destructure_map(map__59904);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59904__$1,new cljs.core.Keyword(null,"children","children",-940561982));
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.app.auth.views.sig59898)){
(front.app.auth.views.sig59898.cljs$core$IFn$_invoke$arity$0 ? front.app.auth.views.sig59898.cljs$core$IFn$_invoke$arity$0() : front.app.auth.views.sig59898.call(null));
} else {
}
} else {
}

return helix.core.get_react().createElement("div",(function (){var obj59907 = ({"className":"relative flex min-h-full justify-center md:px-12 lg:px-0"});
return obj59907;
})(),helix.core.get_react().createElement("div",(function (){var obj59909 = ({"className":"relative z-10 flex flex-1 flex-col bg-white py-10 px-4 shadow-2xl sm:justify-center md:flex-none md:px-28"});
return obj59909;
})(),helix.core.get_react().createElement("div",(function (){var obj59912 = ({"className":"mx-auto w-full max-w-md sm:px-4 md:w-96 md:max-w-sm md:px-0"});
return obj59912;
})(),children)));
});
if(goog.DEBUG === true){
var G__59914 = G__59900;
(G__59914.displayName = "front.app.auth.views/AuthLayout");

return G__59914;
} else {
return G__59900;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.app.auth.views.sig59898)){
(front.app.auth.views.sig59898.cljs$core$IFn$_invoke$arity$4 ? front.app.auth.views.sig59898.cljs$core$IFn$_invoke$arity$4(front.app.auth.views.AuthLayout,"",null,null) : front.app.auth.views.sig59898.call(null,front.app.auth.views.AuthLayout,"",null,null));
} else {
}

helix.core.register_BANG_(front.app.auth.views.AuthLayout,"front.app.auth.views/AuthLayout");
} else {
}

if(goog.DEBUG){
front.app.auth.views.sig59921 = helix.core.signature_BANG_();
} else {
}

front.app.auth.views.SignInBtn = (function (){var G__59926 = (function front$app$auth$views$SignInBtn_render(props__32635__auto__,maybe_ref__32636__auto__){
var vec__59927 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__32635__auto__),maybe_ref__32636__auto__], null);
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.app.auth.views.sig59921)){
(front.app.auth.views.sig59921.cljs$core$IFn$_invoke$arity$0 ? front.app.auth.views.sig59921.cljs$core$IFn$_invoke$arity$0() : front.app.auth.views.sig59921.call(null));
} else {
}
} else {
}

return helix.core.get_react().createElement("div",(function (){var obj59931 = ({"className":"hidden md:block"});
return obj59931;
})(),helix.core.get_react().createElement(front.app.components.navlink.NavLink,(function (){var obj59933 = ({"children":"Sign In","href":reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.core","login","app.core/login",1145385267))});
return obj59933;
})()));
});
if(goog.DEBUG === true){
var G__59934 = G__59926;
(G__59934.displayName = "front.app.auth.views/SignInBtn");

return G__59934;
} else {
return G__59926;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.app.auth.views.sig59921)){
(front.app.auth.views.sig59921.cljs$core$IFn$_invoke$arity$4 ? front.app.auth.views.sig59921.cljs$core$IFn$_invoke$arity$4(front.app.auth.views.SignInBtn,"",null,null) : front.app.auth.views.sig59921.call(null,front.app.auth.views.SignInBtn,"",null,null));
} else {
}

helix.core.register_BANG_(front.app.auth.views.SignInBtn,"front.app.auth.views/SignInBtn");
} else {
}

if(goog.DEBUG){
front.app.auth.views.sig59939 = helix.core.signature_BANG_();
} else {
}

front.app.auth.views.LogOutBtn = (function (){var G__59940 = (function front$app$auth$views$LogOutBtn_render(props__32635__auto__,maybe_ref__32636__auto__){
var vec__59941 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__32635__auto__),maybe_ref__32636__auto__], null);
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.app.auth.views.sig59939)){
(front.app.auth.views.sig59939.cljs$core$IFn$_invoke$arity$0 ? front.app.auth.views.sig59939.cljs$core$IFn$_invoke$arity$0() : front.app.auth.views.sig59939.call(null));
} else {
}
} else {
}

return helix.core.get_react().createElement("div",(function (){var obj59949 = ({"className":"hidden md:block"});
return obj59949;
})(),helix.core.get_react().createElement(front.app.components.navlink.NavLink,(function (){var obj59951 = ({"on-click":(function (e){
e.preventDefault();

refx.alpha.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.routes","push-state","app.routes/push-state",376935027),new cljs.core.Keyword("app.core","home","app.core/home",1018164047)], null));

return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","logout","app.auth/logout",-1850847146)], null));
}),"children":"Logout","href":"#"});
return obj59951;
})()));
});
if(goog.DEBUG === true){
var G__59952 = G__59940;
(G__59952.displayName = "front.app.auth.views/LogOutBtn");

return G__59952;
} else {
return G__59940;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.app.auth.views.sig59939)){
(front.app.auth.views.sig59939.cljs$core$IFn$_invoke$arity$4 ? front.app.auth.views.sig59939.cljs$core$IFn$_invoke$arity$4(front.app.auth.views.LogOutBtn,"",null,null) : front.app.auth.views.sig59939.call(null,front.app.auth.views.LogOutBtn,"",null,null));
} else {
}

helix.core.register_BANG_(front.app.auth.views.LogOutBtn,"front.app.auth.views/LogOutBtn");
} else {
}

if(goog.DEBUG){
front.app.auth.views.sig59956 = helix.core.signature_BANG_();
} else {
}

front.app.auth.views.AuthMenu = (function (){var G__59958 = (function front$app$auth$views$AuthMenu_render(props__32635__auto__,maybe_ref__32636__auto__){
var vec__59959 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__32635__auto__),maybe_ref__32636__auto__], null);
var map__59962 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59959,(0),null);
var map__59962__$1 = cljs.core.__destructure_map(map__59962);
var user = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59962__$1,new cljs.core.Keyword(null,"user","user",1532431356));
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.app.auth.views.sig59956)){
(front.app.auth.views.sig59956.cljs$core$IFn$_invoke$arity$0 ? front.app.auth.views.sig59956.cljs$core$IFn$_invoke$arity$0() : front.app.auth.views.sig59956.call(null));
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
var G__59963 = G__59958;
(G__59963.displayName = "front.app.auth.views/AuthMenu");

return G__59963;
} else {
return G__59958;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.app.auth.views.sig59956)){
(front.app.auth.views.sig59956.cljs$core$IFn$_invoke$arity$4 ? front.app.auth.views.sig59956.cljs$core$IFn$_invoke$arity$4(front.app.auth.views.AuthMenu,"",null,null) : front.app.auth.views.sig59956.call(null,front.app.auth.views.AuthMenu,"",null,null));
} else {
}

helix.core.register_BANG_(front.app.auth.views.AuthMenu,"front.app.auth.views/AuthMenu");
} else {
}

if(goog.DEBUG){
front.app.auth.views.sig59965 = helix.core.signature_BANG_();
} else {
}

front.app.auth.views.login_view = (function (){var G__59968 = (function front$app$auth$views$login_view_render(props__32635__auto__,maybe_ref__32636__auto__){
var vec__59970 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__32635__auto__),maybe_ref__32636__auto__], null);
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.app.auth.views.sig59965)){
(front.app.auth.views.sig59965.cljs$core$IFn$_invoke$arity$0 ? front.app.auth.views.sig59965.cljs$core$IFn$_invoke$arity$0() : front.app.auth.views.sig59965.call(null));
} else {
}
} else {
}

var loading_QMARK_ = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","login-loading","app.auth/login-loading",523485317)], null));
var vec__59973 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","login-error","app.auth/login-error",2008740350)], null));
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59973,(0),null);
var error_res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59973,(1),null);
var email_sent_QMARK_ = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","email-sent","app.auth/email-sent",1729173059)], null));
var vec__59976 = helix.hooks.use_state(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"email","email",1415816706),""], null));
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59976,(0),null);
var set_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59976,(1),null);
return helix.core.get_react().createElement(front.app.auth.views.AuthLayout,null,helix.core.get_react().createElement("div",null,(cljs.core.truth_(email_sent_QMARK_)?helix.core.get_react().createElement("div",(function (){var obj59991 = ({"id":"login-email-sent","className":"flex flex-col"});
return obj59991;
})(),helix.core.get_react().createElement("h2",(function (){var obj59993 = ({"className":"text-lg font-semibold text-gray-900"});
return obj59993;
})(),"Check your email, and click on the link."),helix.core.get_react().createElement("div",null,helix.core.get_react().createElement("div",(function (){var obj59995 = ({"className":"mt-2 text-sm text-gray-700"});
return obj59995;
})(),"Didn't received it?",helix.core.get_react().createElement(front.app.components.navlink.NavLink,(function (){var obj59997 = ({"children":" Try again.","on-click":(function (e){
e.preventDefault();

return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","send-email-again","app.auth/send-email-again",-25575890)], null));
}),"href":"#"});
return obj59997;
})())))):helix.core.get_react().createElement("div",(function (){var obj59999 = ({"className":"flex flex-col"});
return obj59999;
})(),helix.core.get_react().createElement("a",(function (){var obj60001 = ({"href":"/"});
return obj60001;
})(),helix.core.get_react().createElement("img",(function (){var obj60003 = ({"className":"h-10 w-auto"});
return obj60003;
})()),"Home"),helix.core.get_react().createElement("div",(function (){var obj60005 = ({"className":"mt-20"});
return obj60005;
})(),helix.core.get_react().createElement("h2",(function (){var obj60007 = ({"className":"text-lg font-semibold text-gray-900"});
return obj60007;
})(),"Sign in to your account"),helix.core.get_react().createElement("p",(function (){var obj60009 = ({"className":"mt-2 text-sm text-gray-700"});
return obj60009;
})(),"Don't have an account? ")),helix.core.get_react().createElement("form",(function (){var obj60011 = ({"disabled":loading_QMARK_,"className":"mt-10 grid grid-cols-1 gap-y-8","onSubmit":(function (e){
e.preventDefault();

if(cljs.core.truth_(new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(state))){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","send-email","app.auth/send-email",-459398038),state], null));
} else {
return null;
}
})});
return obj60011;
})(),helix.core.get_react().createElement(front.app.auth.views.text_field,(function (){var obj60013 = ({"label":"Email address","id":"login-email","name":"email","type-field":"email","required":true,"value":new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(state),"disabled":loading_QMARK_,"on-change":(function (p1__59964_SHARP_){
var G__60014 = cljs.core.assoc;
var G__60015 = new cljs.core.Keyword(null,"email","email",1415816706);
var G__60016 = p1__59964_SHARP_.target.value;
return (set_state.cljs$core$IFn$_invoke$arity$3 ? set_state.cljs$core$IFn$_invoke$arity$3(G__60014,G__60015,G__60016) : set_state.call(null,G__60014,G__60015,G__60016));
})});
return obj60013;
})()),(cljs.core.truth_(error)?helix.core.get_react().createElement(front.app.components.alerts.Error,(function (){var obj60018 = ({"id":"login-error","error":"Error... try it again.","description":new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(error_res)});
return obj60018;
})()):null),helix.core.get_react().createElement("div",null,helix.core.get_react().createElement(front.app.components.button.Button,(function (){var obj60022 = ({"disabled":loading_QMARK_,"type":"submit","variant":"solid","color":"blue","class-name":"w-full"});
return obj60022;
})(),(cljs.core.truth_(loading_QMARK_)?helix.core.get_react().createElement("span",(function (){var obj60024 = ({"className":"inline-flex"});
return obj60024;
})(),helix.core.get_react().createElement(front.app.components.loading.LoadingSpinner,({})),"Loading..."):helix.core.get_react().createElement("span",null,"Sign in")))))))));
});
if(goog.DEBUG === true){
var G__60027 = G__59968;
(G__60027.displayName = "front.app.auth.views/login-view");

return G__60027;
} else {
return G__59968;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.app.auth.views.sig59965)){
(front.app.auth.views.sig59965.cljs$core$IFn$_invoke$arity$4 ? front.app.auth.views.sig59965.cljs$core$IFn$_invoke$arity$4(front.app.auth.views.login_view,"(refx/use-sub [:app.auth/login-loading])(refx/use-sub [:app.auth/login-error])(refx/use-sub [:app.auth/email-sent])(hooks/use-state {:email \"\"})",null,null) : front.app.auth.views.sig59965.call(null,front.app.auth.views.login_view,"(refx/use-sub [:app.auth/login-loading])(refx/use-sub [:app.auth/login-error])(refx/use-sub [:app.auth/email-sent])(hooks/use-state {:email \"\"})",null,null));
} else {
}

helix.core.register_BANG_(front.app.auth.views.login_view,"front.app.auth.views/login-view");
} else {
}

if(goog.DEBUG){
front.app.auth.views.sig60029 = helix.core.signature_BANG_();
} else {
}

front.app.auth.views.login_auth_view = (function (){var G__60030 = (function front$app$auth$views$login_auth_view_render(props__32635__auto__,maybe_ref__32636__auto__){
var vec__60031 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__32635__auto__),maybe_ref__32636__auto__], null);
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.app.auth.views.sig60029)){
(front.app.auth.views.sig60029.cljs$core$IFn$_invoke$arity$0 ? front.app.auth.views.sig60029.cljs$core$IFn$_invoke$arity$0() : front.app.auth.views.sig60029.call(null));
} else {
}
} else {
}

var map__60034 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.route","current-route","app.route/current-route",-648461532)], null));
var map__60034__$1 = cljs.core.__destructure_map(map__60034);
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60034__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var loading_QMARK_ = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","login-loading","app.auth/login-loading",523485317)], null));
var user = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","current-user","app.auth/current-user",-1927966660)], null));
var vec__60035 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","login-error","app.auth/login-error",2008740350)], null));
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60035,(0),null);
var _error_res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60035,(1),null);
if(cljs.core.truth_(user)){
refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.routes","push-state","app.routes/push-state",376935027),new cljs.core.Keyword("app.core","home","app.core/home",1018164047)], null));
} else {
}

if(cljs.core.truth_(error)){
refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.routes","push-state","app.routes/push-state",376935027),new cljs.core.Keyword("app.core","login","app.core/login",1145385267)], null));
} else {
}

var G__60038_60109 = helix.hooks.wrap_fx((function (){
var temp__5802__auto__ = new cljs.core.Keyword(null,"error_description","error_description",1071682680).cljs$core$IFn$_invoke$arity$1(query_params);
if(cljs.core.truth_(temp__5802__auto__)){
var error_msg = temp__5802__auto__;
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","error","app.auth/error",-125470583),error_msg], null));
} else {
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","login","app.auth/login",1145290492),cljs.core.select_keys(query_params,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142)], null))], null));
}
}));
var G__60039_60110 = [query_params];
(helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2 ? helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2(G__60038_60109,G__60039_60110) : helix.hooks.raw_use_effect.call(null,G__60038_60109,G__60039_60110));

return helix.core.get_react().createElement(front.app.auth.views.AuthLayout,null,(cljs.core.truth_(loading_QMARK_)?helix.core.get_react().createElement("div",null,["Validating... ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(query_params))].join('')):null));
});
if(goog.DEBUG === true){
var G__60042 = G__60030;
(G__60042.displayName = "front.app.auth.views/login-auth-view");

return G__60042;
} else {
return G__60030;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.app.auth.views.sig60029)){
(front.app.auth.views.sig60029.cljs$core$IFn$_invoke$arity$4 ? front.app.auth.views.sig60029.cljs$core$IFn$_invoke$arity$4(front.app.auth.views.login_auth_view,"(refx/use-sub [:app.route/current-route])(refx/use-sub [:app.auth/login-loading])(refx/use-sub [:app.auth/current-user])(refx/use-sub [:app.auth/login-error])(hooks/use-effect [query-params] (if-let [error-msg (:error_description query-params)] (refx/dispatch [:app.auth/error error-msg]) (refx/dispatch [:app.auth/login (select-keys query-params [:code])])))",null,null) : front.app.auth.views.sig60029.call(null,front.app.auth.views.login_auth_view,"(refx/use-sub [:app.route/current-route])(refx/use-sub [:app.auth/login-loading])(refx/use-sub [:app.auth/current-user])(refx/use-sub [:app.auth/login-error])(hooks/use-effect [query-params] (if-let [error-msg (:error_description query-params)] (refx/dispatch [:app.auth/error error-msg]) (refx/dispatch [:app.auth/login (select-keys query-params [:code])])))",null,null));
} else {
}

helix.core.register_BANG_(front.app.auth.views.login_auth_view,"front.app.auth.views/login-auth-view");
} else {
}


//# sourceMappingURL=front.app.auth.views.js.map
