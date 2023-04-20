goog.provide('front.app.auth.views');
front.app.auth.views.form_classes = "block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm";
if(goog.DEBUG){
front.app.auth.views.sig35726 = helix.core.signature_BANG_();
} else {
}

front.app.auth.views.text_field = (function (){var G__35741 = (function front$app$auth$views$text_field_render(props__32635__auto__,maybe_ref__32636__auto__){
var vec__35743 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__32635__auto__),maybe_ref__32636__auto__], null);
var map__35746 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35743,(0),null);
var map__35746__$1 = cljs.core.__destructure_map(map__35746);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35746__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var required = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35746__$1,new cljs.core.Keyword(null,"required","required",1807647006));
var name_field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35746__$1,new cljs.core.Keyword(null,"name-field","name-field",-1347695388));
var disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35746__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35746__$1,new cljs.core.Keyword(null,"value","value",305978217));
var type_field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35746__$1,new cljs.core.Keyword(null,"type-field","type-field",-905349238));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35746__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35746__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35746__$1,new cljs.core.Keyword(null,"class-name","class-name",945142584));
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.app.auth.views.sig35726)){
(front.app.auth.views.sig35726.cljs$core$IFn$_invoke$arity$0 ? front.app.auth.views.sig35726.cljs$core$IFn$_invoke$arity$0() : front.app.auth.views.sig35726.call(null));
} else {
}
} else {
}

return helix.core.get_react().createElement("div",(function (){var obj35752 = ({"className":class_name});
return obj35752;
})(),(cljs.core.truth_(label)?helix.core.get_react().createElement("label",(function (){var obj35754 = ({"htmlFor":id,"className":"mb-3 block text-sm font-medium text-gray-700"});
return obj35754;
})(),label):null),helix.core.get_react().createElement("input",(function (){var obj35756 = ({"id":id,"type":type_field,"className":front.app.auth.views.form_classes,"name":name_field,"value":helix.impl.props.or_undefined(value),"onChange":on_change,"disabled":disabled,"required":required});
return obj35756;
})()));
});
if(goog.DEBUG === true){
var G__35757 = G__35741;
(G__35757.displayName = "front.app.auth.views/text-field");

return G__35757;
} else {
return G__35741;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.app.auth.views.sig35726)){
(front.app.auth.views.sig35726.cljs$core$IFn$_invoke$arity$4 ? front.app.auth.views.sig35726.cljs$core$IFn$_invoke$arity$4(front.app.auth.views.text_field,"",null,null) : front.app.auth.views.sig35726.call(null,front.app.auth.views.text_field,"",null,null));
} else {
}

helix.core.register_BANG_(front.app.auth.views.text_field,"front.app.auth.views/text-field");
} else {
}

if(goog.DEBUG){
front.app.auth.views.sig35758 = helix.core.signature_BANG_();
} else {
}

front.app.auth.views.AuthLayout = (function (){var G__35759 = (function front$app$auth$views$AuthLayout_render(props__32635__auto__,maybe_ref__32636__auto__){
var vec__35760 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__32635__auto__),maybe_ref__32636__auto__], null);
var map__35763 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35760,(0),null);
var map__35763__$1 = cljs.core.__destructure_map(map__35763);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35763__$1,new cljs.core.Keyword(null,"children","children",-940561982));
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.app.auth.views.sig35758)){
(front.app.auth.views.sig35758.cljs$core$IFn$_invoke$arity$0 ? front.app.auth.views.sig35758.cljs$core$IFn$_invoke$arity$0() : front.app.auth.views.sig35758.call(null));
} else {
}
} else {
}

return helix.core.get_react().createElement("div",(function (){var obj35765 = ({"className":"relative flex min-h-full justify-center md:px-12 lg:px-0"});
return obj35765;
})(),helix.core.get_react().createElement("div",(function (){var obj35767 = ({"className":"relative z-10 flex flex-1 flex-col bg-white py-10 px-4 shadow-2xl sm:justify-center md:flex-none md:px-28"});
return obj35767;
})(),helix.core.get_react().createElement("div",(function (){var obj35770 = ({"className":"mx-auto w-full max-w-md sm:px-4 md:w-96 md:max-w-sm md:px-0"});
return obj35770;
})(),children)));
});
if(goog.DEBUG === true){
var G__35771 = G__35759;
(G__35771.displayName = "front.app.auth.views/AuthLayout");

return G__35771;
} else {
return G__35759;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.app.auth.views.sig35758)){
(front.app.auth.views.sig35758.cljs$core$IFn$_invoke$arity$4 ? front.app.auth.views.sig35758.cljs$core$IFn$_invoke$arity$4(front.app.auth.views.AuthLayout,"",null,null) : front.app.auth.views.sig35758.call(null,front.app.auth.views.AuthLayout,"",null,null));
} else {
}

helix.core.register_BANG_(front.app.auth.views.AuthLayout,"front.app.auth.views/AuthLayout");
} else {
}

if(goog.DEBUG){
front.app.auth.views.sig35775 = helix.core.signature_BANG_();
} else {
}

front.app.auth.views.SignInBtn = (function (){var G__35776 = (function front$app$auth$views$SignInBtn_render(props__32635__auto__,maybe_ref__32636__auto__){
var vec__35777 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__32635__auto__),maybe_ref__32636__auto__], null);
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.app.auth.views.sig35775)){
(front.app.auth.views.sig35775.cljs$core$IFn$_invoke$arity$0 ? front.app.auth.views.sig35775.cljs$core$IFn$_invoke$arity$0() : front.app.auth.views.sig35775.call(null));
} else {
}
} else {
}

return helix.core.get_react().createElement("div",(function (){var obj35781 = ({"className":"hidden md:block"});
return obj35781;
})(),helix.core.get_react().createElement(front.app.components.navlink.NavLink,(function (){var obj35784 = ({"children":"Sign In","href":reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.core","login","app.core/login",1145385267))});
return obj35784;
})()));
});
if(goog.DEBUG === true){
var G__35785 = G__35776;
(G__35785.displayName = "front.app.auth.views/SignInBtn");

return G__35785;
} else {
return G__35776;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.app.auth.views.sig35775)){
(front.app.auth.views.sig35775.cljs$core$IFn$_invoke$arity$4 ? front.app.auth.views.sig35775.cljs$core$IFn$_invoke$arity$4(front.app.auth.views.SignInBtn,"",null,null) : front.app.auth.views.sig35775.call(null,front.app.auth.views.SignInBtn,"",null,null));
} else {
}

helix.core.register_BANG_(front.app.auth.views.SignInBtn,"front.app.auth.views/SignInBtn");
} else {
}

if(goog.DEBUG){
front.app.auth.views.sig35793 = helix.core.signature_BANG_();
} else {
}

front.app.auth.views.LogOutBtn = (function (){var G__35798 = (function front$app$auth$views$LogOutBtn_render(props__32635__auto__,maybe_ref__32636__auto__){
var vec__35799 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__32635__auto__),maybe_ref__32636__auto__], null);
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.app.auth.views.sig35793)){
(front.app.auth.views.sig35793.cljs$core$IFn$_invoke$arity$0 ? front.app.auth.views.sig35793.cljs$core$IFn$_invoke$arity$0() : front.app.auth.views.sig35793.call(null));
} else {
}
} else {
}

return helix.core.get_react().createElement("div",(function (){var obj35803 = ({"className":"hidden md:block"});
return obj35803;
})(),helix.core.get_react().createElement(front.app.components.navlink.NavLink,(function (){var obj35805 = ({"on-click":(function (e){
e.preventDefault();

refx.alpha.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.routes","push-state","app.routes/push-state",376935027),new cljs.core.Keyword("app.core","home","app.core/home",1018164047)], null));

return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","logout","app.auth/logout",-1850847146)], null));
}),"children":"Logout","href":"#"});
return obj35805;
})()));
});
if(goog.DEBUG === true){
var G__35807 = G__35798;
(G__35807.displayName = "front.app.auth.views/LogOutBtn");

return G__35807;
} else {
return G__35798;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.app.auth.views.sig35793)){
(front.app.auth.views.sig35793.cljs$core$IFn$_invoke$arity$4 ? front.app.auth.views.sig35793.cljs$core$IFn$_invoke$arity$4(front.app.auth.views.LogOutBtn,"",null,null) : front.app.auth.views.sig35793.call(null,front.app.auth.views.LogOutBtn,"",null,null));
} else {
}

helix.core.register_BANG_(front.app.auth.views.LogOutBtn,"front.app.auth.views/LogOutBtn");
} else {
}

if(goog.DEBUG){
front.app.auth.views.sig35808 = helix.core.signature_BANG_();
} else {
}

front.app.auth.views.AuthMenu = (function (){var G__35809 = (function front$app$auth$views$AuthMenu_render(props__32635__auto__,maybe_ref__32636__auto__){
var vec__35810 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__32635__auto__),maybe_ref__32636__auto__], null);
var map__35813 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35810,(0),null);
var map__35813__$1 = cljs.core.__destructure_map(map__35813);
var user = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35813__$1,new cljs.core.Keyword(null,"user","user",1532431356));
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.app.auth.views.sig35808)){
(front.app.auth.views.sig35808.cljs$core$IFn$_invoke$arity$0 ? front.app.auth.views.sig35808.cljs$core$IFn$_invoke$arity$0() : front.app.auth.views.sig35808.call(null));
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
var G__35818 = G__35809;
(G__35818.displayName = "front.app.auth.views/AuthMenu");

return G__35818;
} else {
return G__35809;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.app.auth.views.sig35808)){
(front.app.auth.views.sig35808.cljs$core$IFn$_invoke$arity$4 ? front.app.auth.views.sig35808.cljs$core$IFn$_invoke$arity$4(front.app.auth.views.AuthMenu,"",null,null) : front.app.auth.views.sig35808.call(null,front.app.auth.views.AuthMenu,"",null,null));
} else {
}

helix.core.register_BANG_(front.app.auth.views.AuthMenu,"front.app.auth.views/AuthMenu");
} else {
}

if(goog.DEBUG){
front.app.auth.views.sig35826 = helix.core.signature_BANG_();
} else {
}

front.app.auth.views.login_view = (function (){var G__35839 = (function front$app$auth$views$login_view_render(props__32635__auto__,maybe_ref__32636__auto__){
var vec__35840 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__32635__auto__),maybe_ref__32636__auto__], null);
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.app.auth.views.sig35826)){
(front.app.auth.views.sig35826.cljs$core$IFn$_invoke$arity$0 ? front.app.auth.views.sig35826.cljs$core$IFn$_invoke$arity$0() : front.app.auth.views.sig35826.call(null));
} else {
}
} else {
}

var loading_QMARK_ = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","login-loading","app.auth/login-loading",523485317)], null));
var vec__35843 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","login-error","app.auth/login-error",2008740350)], null));
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35843,(0),null);
var error_res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35843,(1),null);
var email_sent_QMARK_ = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","email-sent","app.auth/email-sent",1729173059)], null));
var vec__35846 = helix.hooks.use_state(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"email","email",1415816706),""], null));
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35846,(0),null);
var set_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35846,(1),null);
return helix.core.get_react().createElement(front.app.auth.views.AuthLayout,null,helix.core.get_react().createElement("div",null,(cljs.core.truth_(email_sent_QMARK_)?helix.core.get_react().createElement("div",(function (){var obj35858 = ({"id":"login-email-sent","className":"flex flex-col"});
return obj35858;
})(),helix.core.get_react().createElement("h2",(function (){var obj35867 = ({"className":"text-lg font-semibold text-gray-900"});
return obj35867;
})(),"Check your email, and click on the link."),helix.core.get_react().createElement("div",null,helix.core.get_react().createElement("div",(function (){var obj35869 = ({"className":"mt-2 text-sm text-gray-700"});
return obj35869;
})(),"Didn't received it?",helix.core.get_react().createElement(front.app.components.navlink.NavLink,(function (){var obj35871 = ({"children":" Try again.","on-click":(function (e){
e.preventDefault();

return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","send-email-again","app.auth/send-email-again",-25575890)], null));
}),"href":"#"});
return obj35871;
})())))):helix.core.get_react().createElement("div",(function (){var obj35873 = ({"className":"flex flex-col"});
return obj35873;
})(),helix.core.get_react().createElement("a",(function (){var obj35875 = ({"href":"/"});
return obj35875;
})(),helix.core.get_react().createElement("img",(function (){var obj35877 = ({"className":"h-10 w-auto"});
return obj35877;
})()),"Home"),helix.core.get_react().createElement("div",(function (){var obj35879 = ({"className":"mt-20"});
return obj35879;
})(),helix.core.get_react().createElement("h2",(function (){var obj35881 = ({"className":"text-lg font-semibold text-gray-900"});
return obj35881;
})(),"Sign in to your account"),helix.core.get_react().createElement("p",(function (){var obj35883 = ({"className":"mt-2 text-sm text-gray-700"});
return obj35883;
})(),"Don't have an account? ")),helix.core.get_react().createElement("form",(function (){var obj35886 = ({"disabled":loading_QMARK_,"className":"mt-10 grid grid-cols-1 gap-y-8","onSubmit":(function (e){
e.preventDefault();

if(cljs.core.truth_(new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(state))){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","send-email","app.auth/send-email",-459398038),state], null));
} else {
return null;
}
})});
return obj35886;
})(),helix.core.get_react().createElement(front.app.auth.views.text_field,(function (){var obj35888 = ({"label":"Email address","id":"login-email","name":"email","type-field":"email","required":true,"value":new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(state),"disabled":loading_QMARK_,"on-change":(function (p1__35825_SHARP_){
var G__35889 = cljs.core.assoc;
var G__35890 = new cljs.core.Keyword(null,"email","email",1415816706);
var G__35891 = p1__35825_SHARP_.target.value;
return (set_state.cljs$core$IFn$_invoke$arity$3 ? set_state.cljs$core$IFn$_invoke$arity$3(G__35889,G__35890,G__35891) : set_state.call(null,G__35889,G__35890,G__35891));
})});
return obj35888;
})()),(cljs.core.truth_(error)?helix.core.get_react().createElement(front.app.components.alerts.Error,(function (){var obj35893 = ({"id":"login-error","error":"Error... try it again.","description":new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(error_res)});
return obj35893;
})()):null),helix.core.get_react().createElement("div",null,helix.core.get_react().createElement(front.app.components.button.Button,(function (){var obj35895 = ({"disabled":loading_QMARK_,"type":"submit","variant":"solid","color":"blue","class-name":"w-full"});
return obj35895;
})(),(cljs.core.truth_(loading_QMARK_)?helix.core.get_react().createElement("span",(function (){var obj35897 = ({"className":"inline-flex"});
return obj35897;
})(),helix.core.get_react().createElement(front.app.components.loading.LoadingSpinner,({})),"Loading..."):helix.core.get_react().createElement("span",null,"Sign in")))))))));
});
if(goog.DEBUG === true){
var G__35900 = G__35839;
(G__35900.displayName = "front.app.auth.views/login-view");

return G__35900;
} else {
return G__35839;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.app.auth.views.sig35826)){
(front.app.auth.views.sig35826.cljs$core$IFn$_invoke$arity$4 ? front.app.auth.views.sig35826.cljs$core$IFn$_invoke$arity$4(front.app.auth.views.login_view,"(refx/use-sub [:app.auth/login-loading])(refx/use-sub [:app.auth/login-error])(refx/use-sub [:app.auth/email-sent])(hooks/use-state {:email \"\"})",null,null) : front.app.auth.views.sig35826.call(null,front.app.auth.views.login_view,"(refx/use-sub [:app.auth/login-loading])(refx/use-sub [:app.auth/login-error])(refx/use-sub [:app.auth/email-sent])(hooks/use-state {:email \"\"})",null,null));
} else {
}

helix.core.register_BANG_(front.app.auth.views.login_view,"front.app.auth.views/login-view");
} else {
}

if(goog.DEBUG){
front.app.auth.views.sig35901 = helix.core.signature_BANG_();
} else {
}

front.app.auth.views.login_auth_view = (function (){var G__35912 = (function front$app$auth$views$login_auth_view_render(props__32635__auto__,maybe_ref__32636__auto__){
var vec__35913 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__32635__auto__),maybe_ref__32636__auto__], null);
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.app.auth.views.sig35901)){
(front.app.auth.views.sig35901.cljs$core$IFn$_invoke$arity$0 ? front.app.auth.views.sig35901.cljs$core$IFn$_invoke$arity$0() : front.app.auth.views.sig35901.call(null));
} else {
}
} else {
}

var map__35916 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.route","current-route","app.route/current-route",-648461532)], null));
var map__35916__$1 = cljs.core.__destructure_map(map__35916);
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35916__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var loading_QMARK_ = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","login-loading","app.auth/login-loading",523485317)], null));
var user = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","current-user","app.auth/current-user",-1927966660)], null));
var vec__35917 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","login-error","app.auth/login-error",2008740350)], null));
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35917,(0),null);
var _error_res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35917,(1),null);
if(cljs.core.truth_(user)){
refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.routes","push-state","app.routes/push-state",376935027),new cljs.core.Keyword("app.core","home","app.core/home",1018164047)], null));
} else {
}

if(cljs.core.truth_(error)){
refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.routes","push-state","app.routes/push-state",376935027),new cljs.core.Keyword("app.core","login","app.core/login",1145385267)], null));
} else {
}

var G__35922_35976 = helix.hooks.wrap_fx((function (){
var temp__5802__auto__ = new cljs.core.Keyword(null,"error_description","error_description",1071682680).cljs$core$IFn$_invoke$arity$1(query_params);
if(cljs.core.truth_(temp__5802__auto__)){
var error_msg = temp__5802__auto__;
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","error","app.auth/error",-125470583),error_msg], null));
} else {
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","login","app.auth/login",1145290492),cljs.core.select_keys(query_params,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142)], null))], null));
}
}));
var G__35923_35977 = [query_params];
(helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2 ? helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2(G__35922_35976,G__35923_35977) : helix.hooks.raw_use_effect.call(null,G__35922_35976,G__35923_35977));

return helix.core.get_react().createElement(front.app.auth.views.AuthLayout,null,(cljs.core.truth_(loading_QMARK_)?helix.core.get_react().createElement("div",null,["Validating... ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(query_params))].join('')):null));
});
if(goog.DEBUG === true){
var G__35934 = G__35912;
(G__35934.displayName = "front.app.auth.views/login-auth-view");

return G__35934;
} else {
return G__35912;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.app.auth.views.sig35901)){
(front.app.auth.views.sig35901.cljs$core$IFn$_invoke$arity$4 ? front.app.auth.views.sig35901.cljs$core$IFn$_invoke$arity$4(front.app.auth.views.login_auth_view,"(refx/use-sub [:app.route/current-route])(refx/use-sub [:app.auth/login-loading])(refx/use-sub [:app.auth/current-user])(refx/use-sub [:app.auth/login-error])(hooks/use-effect [query-params] (if-let [error-msg (:error_description query-params)] (refx/dispatch [:app.auth/error error-msg]) (refx/dispatch [:app.auth/login (select-keys query-params [:code])])))",null,null) : front.app.auth.views.sig35901.call(null,front.app.auth.views.login_auth_view,"(refx/use-sub [:app.route/current-route])(refx/use-sub [:app.auth/login-loading])(refx/use-sub [:app.auth/current-user])(refx/use-sub [:app.auth/login-error])(hooks/use-effect [query-params] (if-let [error-msg (:error_description query-params)] (refx/dispatch [:app.auth/error error-msg]) (refx/dispatch [:app.auth/login (select-keys query-params [:code])])))",null,null));
} else {
}

helix.core.register_BANG_(front.app.auth.views.login_auth_view,"front.app.auth.views/login-auth-view");
} else {
}


//# sourceMappingURL=front.app.auth.views.js.map
