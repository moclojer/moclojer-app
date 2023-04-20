goog.provide('app.integration.login_auth_view_test');
app.integration.login_auth_view_test.cljs_test_each_fixtures = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"before","before",-1633692388),app.integration.aux.before_fn,new cljs.core.Keyword(null,"after","after",594996914),app.integration.aux.after_fn], null)], null);
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.routes","navigated-fake","app.routes/navigated-fake",-167106125),(function (db,p__35486){
var vec__35487 = p__35486;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35487,(0),null);
var current_route = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35487,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-route","current-route",2067529448),current_route);
}));
refx.alpha.reg_fx(new cljs.core.Keyword(null,"push-state","push-state",-1409397210),(function (_){
return null;
}));
refx.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.routes","push-state","app.routes/push-state",376935027),(function (_,p__35500){
var vec__35501 = p__35500;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35501,(0),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35501,(1),null);
return null;
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.routes","navigated","app.routes/navigated",1254076289),(function (_,p__35510){
var vec__35511 = p__35510;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35511,(0),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35511,(1),null);
return null;
}));
app.integration.login_auth_view_test.login_auth_fail_msw = new cljs.core.PersistentArrayMap(null, 1, ["/login/auth",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(401),new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"body","body",-2049205669),({"message": "Invalid credentials"})], null)], null)], null);
app.integration.login_auth_view_test.login_return = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"profile","profile",-545963874),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"email","email",1415816706),"msw.mock@email.com",new cljs.core.Keyword(null,"name","name",1843675177),"Msw Mock"], null),new cljs.core.Keyword(null,"token","token",-1211463215),"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1za0BlbWFpbC5jb20ifQ._M8ecsfRagfoZhCxLiCSWr9j7JVRyrOKPf-VTKsinU8",new cljs.core.Keyword(null,"expires_in","expires_in",453935095),(1)], null);
app.integration.login_auth_view_test.login_auth_sucess_msw = new cljs.core.PersistentArrayMap(null, 1, ["/login/auth",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(201),new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.clj__GT_js(app.integration.login_auth_view_test.login_return)], null)], null)], null);
app.integration.login_auth_view_test.login_auth_view_test_fail_workos_test = (function app$integration$login_auth_view_test$login_auth_view_test_fail_workos_test(){
return cljs.test.test_var(app.integration.login_auth_view_test.login_auth_view_test_fail_workos_test.cljs$lang$var);
});
app.integration.login_auth_view_test.login_auth_view_test_fail_workos_test.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["auth login code redirect view should show error from WORKOS"], 0));

try{if((typeof app !== 'undefined') && (typeof app.integration !== 'undefined') && (typeof app.integration.login_auth_view_test !== 'undefined') && (typeof app.integration.login_auth_view_test.t_app$integration$login_auth_view_test35525 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
app.integration.login_auth_view_test.t_app$integration$login_auth_view_test35525 = (function (meta35526){
this.meta35526 = meta35526;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.integration.login_auth_view_test.t_app$integration$login_auth_view_test35525.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35527,meta35526__$1){
var self__ = this;
var _35527__$1 = this;
return (new app.integration.login_auth_view_test.t_app$integration$login_auth_view_test35525(meta35526__$1));
}));

(app.integration.login_auth_view_test.t_app$integration$login_auth_view_test35525.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35527){
var self__ = this;
var _35527__$1 = this;
return self__.meta35526;
}));

(app.integration.login_auth_view_test.t_app$integration$login_auth_view_test35525.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(app.integration.login_auth_view_test.t_app$integration$login_auth_view_test35525.prototype.call = (function (unused__11778__auto__){
var self__ = this;
var self__ = this;
var G__35529 = (arguments.length - (1));
switch (G__35529) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(app.integration.login_auth_view_test.t_app$integration$login_auth_view_test35525.prototype.apply = (function (self__,args35528){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args35528)));
}));

(app.integration.login_auth_view_test.t_app$integration$login_auth_view_test35525.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11437__auto__ = this;
return promesa.protocols._bind(promesa.protocols._promise(null),(function (___29369__auto__){
return promesa.protocols._bind(promesa.protocols._promise(refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.routes","navigated-fake","app.routes/navigated-fake",-167106125),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error_description","error_description",1071682680),"some err message."], null)], null)], null))),(function (_route){
return promesa.protocols._bind(promesa.protocols._promise(dev.msw.core.start_BANG_.cljs$core$IFn$_invoke$arity$1(app.integration.login_auth_view_test.login_auth_fail_msw)),(function (_msw){
return promesa.protocols._bind(promesa.protocols._promise(app.aux.wait_for.cljs$core$IFn$_invoke$arity$1((function (){
return app.aux.render(app.auth.views.login_auth_view).container;
}))),(function (_render){
return promesa.protocols._bind(promesa.protocols._promise(promesa.core.delay.cljs$core$IFn$_invoke$arity$2((250),refx.subs.sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","login-error","app.auth/login-error",2008740350)], null)))),(function (error_msg){
return promesa.protocols._bind(promesa.protocols._promise(null),(function (___29354__auto__){
return promesa.protocols._bind(promesa.protocols._promise((function (){try{var values__11355__auto__ = (new cljs.core.List(null,"some err message.",(new cljs.core.List(null,cljs.core.last(refx.subs._value(error_msg)),null,(1),null)),(2),null));
var result__11356__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__11355__auto__);
if(cljs.core.truth_(result__11356__auto__)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["app/integration/login_auth_view_test.cljs",72,new cljs.core.Keyword(null,"pass","pass",1574159993),18,60,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"some err message.",cljs.core.list(new cljs.core.Symbol(null,"last","last",-1548700637,null),cljs.core.list(new cljs.core.Symbol("subs","-value","subs/-value",-903472753,null),new cljs.core.Symbol(null,"error-msg","error-msg",231170904,null)))),60,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11355__auto__),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["app/integration/login_auth_view_test.cljs",72,new cljs.core.Keyword(null,"fail","fail",1706214930),18,60,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"some err message.",cljs.core.list(new cljs.core.Symbol(null,"last","last",-1548700637,null),cljs.core.list(new cljs.core.Symbol("subs","-value","subs/-value",-903472753,null),new cljs.core.Symbol(null,"error-msg","error-msg",231170904,null)))),60,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11355__auto__),null,(1),null)),(2),null)),null]));
}

return result__11356__auto__;
}catch (e35531){var t__11406__auto__ = e35531;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["app/integration/login_auth_view_test.cljs",72,new cljs.core.Keyword(null,"error","error",-978969032),18,60,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"some err message.",cljs.core.list(new cljs.core.Symbol(null,"last","last",-1548700637,null),cljs.core.list(new cljs.core.Symbol("subs","-value","subs/-value",-903472753,null),new cljs.core.Symbol(null,"error-msg","error-msg",231170904,null)))),60,t__11406__auto__,null]));
}})()),(function (___29353__auto__){
return promesa.protocols._bind(promesa.protocols._promise(app.aux.cleanup.cljs$core$IFn$_invoke$arity$0()),(function (___29353__auto____$1){
return promesa.protocols._promise((done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null)));
}));
}));
}));
}));
}));
}));
}));
}));
}));

(app.integration.login_auth_view_test.t_app$integration$login_auth_view_test35525.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta35526","meta35526",-646368016,null)], null);
}));

(app.integration.login_auth_view_test.t_app$integration$login_auth_view_test35525.cljs$lang$type = true);

(app.integration.login_auth_view_test.t_app$integration$login_auth_view_test35525.cljs$lang$ctorStr = "app.integration.login-auth-view-test/t_app$integration$login_auth_view_test35525");

(app.integration.login_auth_view_test.t_app$integration$login_auth_view_test35525.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"app.integration.login-auth-view-test/t_app$integration$login_auth_view_test35525");
}));

/**
 * Positional factory function for app.integration.login-auth-view-test/t_app$integration$login_auth_view_test35525.
 */
app.integration.login_auth_view_test.__GT_t_app$integration$login_auth_view_test35525 = (function app$integration$login_auth_view_test$__GT_t_app$integration$login_auth_view_test35525(meta35526){
return (new app.integration.login_auth_view_test.t_app$integration$login_auth_view_test35525(meta35526));
});

}

return (new app.integration.login_auth_view_test.t_app$integration$login_auth_view_test35525(null));
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

(app.integration.login_auth_view_test.login_auth_view_test_fail_workos_test.cljs$lang$var = new cljs.core.Var(function(){return app.integration.login_auth_view_test.login_auth_view_test_fail_workos_test;},new cljs.core.Symbol("app.integration.login-auth-view-test","login-auth-view-test-fail-workos-test","app.integration.login-auth-view-test/login-auth-view-test-fail-workos-test",-159957368,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"app.integration.login-auth-view-test","app.integration.login-auth-view-test",-1780115585,null),new cljs.core.Symbol(null,"login-auth-view-test-fail-workos-test","login-auth-view-test-fail-workos-test",1366235336,null),"app/integration/login_auth_view_test.cljs",47,1,51,51,cljs.core.List.EMPTY,null,(cljs.core.truth_(app.integration.login_auth_view_test.login_auth_view_test_fail_workos_test)?app.integration.login_auth_view_test.login_auth_view_test_fail_workos_test.cljs$lang$test:null)])));
app.integration.login_auth_view_test.login_auth_view_test_fail_api_test = (function app$integration$login_auth_view_test$login_auth_view_test_fail_api_test(){
return cljs.test.test_var(app.integration.login_auth_view_test.login_auth_view_test_fail_api_test.cljs$lang$var);
});
app.integration.login_auth_view_test.login_auth_view_test_fail_api_test.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["auth login code redirect view should show error from internal API"], 0));

try{if((typeof app !== 'undefined') && (typeof app.integration !== 'undefined') && (typeof app.integration.login_auth_view_test !== 'undefined') && (typeof app.integration.login_auth_view_test.t_app$integration$login_auth_view_test35537 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
app.integration.login_auth_view_test.t_app$integration$login_auth_view_test35537 = (function (meta35538){
this.meta35538 = meta35538;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.integration.login_auth_view_test.t_app$integration$login_auth_view_test35537.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35539,meta35538__$1){
var self__ = this;
var _35539__$1 = this;
return (new app.integration.login_auth_view_test.t_app$integration$login_auth_view_test35537(meta35538__$1));
}));

(app.integration.login_auth_view_test.t_app$integration$login_auth_view_test35537.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35539){
var self__ = this;
var _35539__$1 = this;
return self__.meta35538;
}));

(app.integration.login_auth_view_test.t_app$integration$login_auth_view_test35537.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(app.integration.login_auth_view_test.t_app$integration$login_auth_view_test35537.prototype.call = (function (unused__11778__auto__){
var self__ = this;
var self__ = this;
var G__35541 = (arguments.length - (1));
switch (G__35541) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(app.integration.login_auth_view_test.t_app$integration$login_auth_view_test35537.prototype.apply = (function (self__,args35540){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args35540)));
}));

(app.integration.login_auth_view_test.t_app$integration$login_auth_view_test35537.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11437__auto__ = this;
return promesa.protocols._bind(promesa.protocols._promise(null),(function (___29369__auto__){
return promesa.protocols._bind(promesa.protocols._promise(refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.routes","navigated-fake","app.routes/navigated-fake",-167106125),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"code","code",1586293142),"1234"], null)], null)], null))),(function (_route){
return promesa.protocols._bind(promesa.protocols._promise(dev.msw.core.start_BANG_.cljs$core$IFn$_invoke$arity$1(app.integration.login_auth_view_test.login_auth_fail_msw)),(function (_msw){
return promesa.protocols._bind(promesa.protocols._promise(app.aux.wait_for.cljs$core$IFn$_invoke$arity$1((function (){
return app.aux.render(app.auth.views.login_auth_view).container;
}))),(function (_render){
return promesa.protocols._bind(promesa.protocols._promise(promesa.core.delay.cljs$core$IFn$_invoke$arity$2((250),refx.subs.sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","login-error","app.auth/login-error",2008740350)], null)))),(function (error_msg){
return promesa.protocols._bind(promesa.protocols._promise(null),(function (___29354__auto__){
return promesa.protocols._bind(promesa.protocols._promise((function (){try{var values__11355__auto__ = (new cljs.core.List(null,"Invalid credentials",(new cljs.core.List(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(cljs.core.last(refx.subs._value(error_msg))),null,(1),null)),(2),null));
var result__11356__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__11355__auto__);
if(cljs.core.truth_(result__11356__auto__)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["app/integration/login_auth_view_test.cljs",85,new cljs.core.Keyword(null,"pass","pass",1574159993),18,72,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Invalid credentials",cljs.core.list(new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.list(new cljs.core.Symbol(null,"last","last",-1548700637,null),cljs.core.list(new cljs.core.Symbol("subs","-value","subs/-value",-903472753,null),new cljs.core.Symbol(null,"error-msg","error-msg",231170904,null))))),72,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11355__auto__),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["app/integration/login_auth_view_test.cljs",85,new cljs.core.Keyword(null,"fail","fail",1706214930),18,72,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Invalid credentials",cljs.core.list(new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.list(new cljs.core.Symbol(null,"last","last",-1548700637,null),cljs.core.list(new cljs.core.Symbol("subs","-value","subs/-value",-903472753,null),new cljs.core.Symbol(null,"error-msg","error-msg",231170904,null))))),72,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11355__auto__),null,(1),null)),(2),null)),null]));
}

return result__11356__auto__;
}catch (e35542){var t__11406__auto__ = e35542;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["app/integration/login_auth_view_test.cljs",85,new cljs.core.Keyword(null,"error","error",-978969032),18,72,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Invalid credentials",cljs.core.list(new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.list(new cljs.core.Symbol(null,"last","last",-1548700637,null),cljs.core.list(new cljs.core.Symbol("subs","-value","subs/-value",-903472753,null),new cljs.core.Symbol(null,"error-msg","error-msg",231170904,null))))),72,t__11406__auto__,null]));
}})()),(function (___29353__auto__){
return promesa.protocols._bind(promesa.protocols._promise(app.aux.cleanup.cljs$core$IFn$_invoke$arity$0()),(function (___29353__auto____$1){
return promesa.protocols._promise((done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null)));
}));
}));
}));
}));
}));
}));
}));
}));
}));

(app.integration.login_auth_view_test.t_app$integration$login_auth_view_test35537.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta35538","meta35538",-975597445,null)], null);
}));

(app.integration.login_auth_view_test.t_app$integration$login_auth_view_test35537.cljs$lang$type = true);

(app.integration.login_auth_view_test.t_app$integration$login_auth_view_test35537.cljs$lang$ctorStr = "app.integration.login-auth-view-test/t_app$integration$login_auth_view_test35537");

(app.integration.login_auth_view_test.t_app$integration$login_auth_view_test35537.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"app.integration.login-auth-view-test/t_app$integration$login_auth_view_test35537");
}));

/**
 * Positional factory function for app.integration.login-auth-view-test/t_app$integration$login_auth_view_test35537.
 */
app.integration.login_auth_view_test.__GT_t_app$integration$login_auth_view_test35537 = (function app$integration$login_auth_view_test$__GT_t_app$integration$login_auth_view_test35537(meta35538){
return (new app.integration.login_auth_view_test.t_app$integration$login_auth_view_test35537(meta35538));
});

}

return (new app.integration.login_auth_view_test.t_app$integration$login_auth_view_test35537(null));
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

(app.integration.login_auth_view_test.login_auth_view_test_fail_api_test.cljs$lang$var = new cljs.core.Var(function(){return app.integration.login_auth_view_test.login_auth_view_test_fail_api_test;},new cljs.core.Symbol("app.integration.login-auth-view-test","login-auth-view-test-fail-api-test","app.integration.login-auth-view-test/login-auth-view-test-fail-api-test",-1056917750,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"app.integration.login-auth-view-test","app.integration.login-auth-view-test",-1780115585,null),new cljs.core.Symbol(null,"login-auth-view-test-fail-api-test","login-auth-view-test-fail-api-test",-1610050102,null),"app/integration/login_auth_view_test.cljs",44,1,64,64,cljs.core.List.EMPTY,null,(cljs.core.truth_(app.integration.login_auth_view_test.login_auth_view_test_fail_api_test)?app.integration.login_auth_view_test.login_auth_view_test_fail_api_test.cljs$lang$test:null)])));
app.integration.login_auth_view_test.login_auth_view_test_success_api_test = (function app$integration$login_auth_view_test$login_auth_view_test_success_api_test(){
return cljs.test.test_var(app.integration.login_auth_view_test.login_auth_view_test_success_api_test.cljs$lang$var);
});
app.integration.login_auth_view_test.login_auth_view_test_success_api_test.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["auth login code redirect view should show error from internal API"], 0));

try{if((typeof app !== 'undefined') && (typeof app.integration !== 'undefined') && (typeof app.integration.login_auth_view_test !== 'undefined') && (typeof app.integration.login_auth_view_test.t_app$integration$login_auth_view_test35544 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
app.integration.login_auth_view_test.t_app$integration$login_auth_view_test35544 = (function (meta35545){
this.meta35545 = meta35545;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.integration.login_auth_view_test.t_app$integration$login_auth_view_test35544.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35546,meta35545__$1){
var self__ = this;
var _35546__$1 = this;
return (new app.integration.login_auth_view_test.t_app$integration$login_auth_view_test35544(meta35545__$1));
}));

(app.integration.login_auth_view_test.t_app$integration$login_auth_view_test35544.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35546){
var self__ = this;
var _35546__$1 = this;
return self__.meta35545;
}));

(app.integration.login_auth_view_test.t_app$integration$login_auth_view_test35544.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(app.integration.login_auth_view_test.t_app$integration$login_auth_view_test35544.prototype.call = (function (unused__11778__auto__){
var self__ = this;
var self__ = this;
var G__35548 = (arguments.length - (1));
switch (G__35548) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(app.integration.login_auth_view_test.t_app$integration$login_auth_view_test35544.prototype.apply = (function (self__,args35547){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args35547)));
}));

(app.integration.login_auth_view_test.t_app$integration$login_auth_view_test35544.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11437__auto__ = this;
return promesa.protocols._bind(promesa.protocols._promise(null),(function (___29369__auto__){
return promesa.protocols._bind(promesa.protocols._promise(refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.routes","navigated-fake","app.routes/navigated-fake",-167106125),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"code","code",1586293142),"1234"], null)], null)], null))),(function (_route){
return promesa.protocols._bind(promesa.protocols._promise(dev.msw.core.start_BANG_.cljs$core$IFn$_invoke$arity$1(app.integration.login_auth_view_test.login_auth_sucess_msw)),(function (_msw){
return promesa.protocols._bind(promesa.protocols._promise(app.aux.wait_for.cljs$core$IFn$_invoke$arity$1((function (){
return app.aux.render(app.auth.views.login_auth_view).container;
}))),(function (_render){
return promesa.protocols._bind(promesa.protocols._promise(promesa.core.delay.cljs$core$IFn$_invoke$arity$2((250),refx.subs.sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","current-user","app.auth/current-user",-1927966660)], null)))),(function (current_user){
return promesa.protocols._bind(promesa.protocols._promise(null),(function (___29354__auto__){
return promesa.protocols._bind(promesa.protocols._promise((function (){try{var values__11355__auto__ = (new cljs.core.List(null,app.integration.login_auth_view_test.login_return,(new cljs.core.List(null,refx.subs._value(current_user),null,(1),null)),(2),null));
var result__11356__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__11355__auto__);
if(cljs.core.truth_(result__11356__auto__)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["app/integration/login_auth_view_test.cljs",61,new cljs.core.Keyword(null,"pass","pass",1574159993),18,84,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"login-return","login-return",1851386916,null),cljs.core.list(new cljs.core.Symbol("subs","-value","subs/-value",-903472753,null),new cljs.core.Symbol(null,"current-user","current-user",771739436,null))),84,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11355__auto__),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["app/integration/login_auth_view_test.cljs",61,new cljs.core.Keyword(null,"fail","fail",1706214930),18,84,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"login-return","login-return",1851386916,null),cljs.core.list(new cljs.core.Symbol("subs","-value","subs/-value",-903472753,null),new cljs.core.Symbol(null,"current-user","current-user",771739436,null))),84,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11355__auto__),null,(1),null)),(2),null)),null]));
}

return result__11356__auto__;
}catch (e35550){var t__11406__auto__ = e35550;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["app/integration/login_auth_view_test.cljs",61,new cljs.core.Keyword(null,"error","error",-978969032),18,84,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"login-return","login-return",1851386916,null),cljs.core.list(new cljs.core.Symbol("subs","-value","subs/-value",-903472753,null),new cljs.core.Symbol(null,"current-user","current-user",771739436,null))),84,t__11406__auto__,null]));
}})()),(function (___29353__auto__){
return promesa.protocols._bind(promesa.protocols._promise(app.aux.cleanup.cljs$core$IFn$_invoke$arity$0()),(function (___29353__auto____$1){
return promesa.protocols._promise((done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null)));
}));
}));
}));
}));
}));
}));
}));
}));
}));

(app.integration.login_auth_view_test.t_app$integration$login_auth_view_test35544.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta35545","meta35545",-1334298417,null)], null);
}));

(app.integration.login_auth_view_test.t_app$integration$login_auth_view_test35544.cljs$lang$type = true);

(app.integration.login_auth_view_test.t_app$integration$login_auth_view_test35544.cljs$lang$ctorStr = "app.integration.login-auth-view-test/t_app$integration$login_auth_view_test35544");

(app.integration.login_auth_view_test.t_app$integration$login_auth_view_test35544.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"app.integration.login-auth-view-test/t_app$integration$login_auth_view_test35544");
}));

/**
 * Positional factory function for app.integration.login-auth-view-test/t_app$integration$login_auth_view_test35544.
 */
app.integration.login_auth_view_test.__GT_t_app$integration$login_auth_view_test35544 = (function app$integration$login_auth_view_test$__GT_t_app$integration$login_auth_view_test35544(meta35545){
return (new app.integration.login_auth_view_test.t_app$integration$login_auth_view_test35544(meta35545));
});

}

return (new app.integration.login_auth_view_test.t_app$integration$login_auth_view_test35544(null));
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

(app.integration.login_auth_view_test.login_auth_view_test_success_api_test.cljs$lang$var = new cljs.core.Var(function(){return app.integration.login_auth_view_test.login_auth_view_test_success_api_test;},new cljs.core.Symbol("app.integration.login-auth-view-test","login-auth-view-test-success-api-test","app.integration.login-auth-view-test/login-auth-view-test-success-api-test",433109397,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"app.integration.login-auth-view-test","app.integration.login-auth-view-test",-1780115585,null),new cljs.core.Symbol(null,"login-auth-view-test-success-api-test","login-auth-view-test-success-api-test",2027461205,null),"app/integration/login_auth_view_test.cljs",47,1,76,76,cljs.core.List.EMPTY,null,(cljs.core.truth_(app.integration.login_auth_view_test.login_auth_view_test_success_api_test)?app.integration.login_auth_view_test.login_auth_view_test_success_api_test.cljs$lang$test:null)])));

//# sourceMappingURL=app.integration.login_auth_view_test.js.map
