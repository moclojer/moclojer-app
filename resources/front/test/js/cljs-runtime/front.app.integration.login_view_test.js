goog.provide('front.app.integration.login_view_test');
front.app.integration.login_view_test.cljs_test_each_fixtures = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"before","before",-1633692388),front.app.integration.aux.before_fn,new cljs.core.Keyword(null,"after","after",594996914),front.app.integration.aux.after_fn], null)], null);
front.app.integration.login_view_test.login_error_msw = new cljs.core.PersistentArrayMap(null, 1, ["/login/send-email",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lag","lag",935418682),(300),new cljs.core.Keyword(null,"status","status",-1997798413),(500),new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"body","body",-2049205669),({"message": "Not found"})], null)], null)], null);
front.app.integration.login_view_test.login_sucess_msw = new cljs.core.PersistentArrayMap(null, 1, ["/login/send-email",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lag","lag",935418682),(300),new cljs.core.Keyword(null,"status","status",-1997798413),(201),new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"body","body",-2049205669),({"ok": true})], null)], null)], null);
front.app.integration.login_view_test.auth_view_email_send_error_test = (function front$app$integration$login_view_test$auth_view_email_send_error_test(){
return cljs.test.test_var(front.app.integration.login_view_test.auth_view_email_send_error_test.cljs$lang$var);
});
front.app.integration.login_view_test.auth_view_email_send_error_test.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["auth email send view should error"], 0));

try{if((typeof front !== 'undefined') && (typeof front.app !== 'undefined') && (typeof front.app.integration !== 'undefined') && (typeof front.app.integration.login_view_test !== 'undefined') && (typeof front.app.integration.login_view_test.t_front$app$integration$login_view_test60453 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
front.app.integration.login_view_test.t_front$app$integration$login_view_test60453 = (function (meta60454){
this.meta60454 = meta60454;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(front.app.integration.login_view_test.t_front$app$integration$login_view_test60453.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60455,meta60454__$1){
var self__ = this;
var _60455__$1 = this;
return (new front.app.integration.login_view_test.t_front$app$integration$login_view_test60453(meta60454__$1));
}));

(front.app.integration.login_view_test.t_front$app$integration$login_view_test60453.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60455){
var self__ = this;
var _60455__$1 = this;
return self__.meta60454;
}));

(front.app.integration.login_view_test.t_front$app$integration$login_view_test60453.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(front.app.integration.login_view_test.t_front$app$integration$login_view_test60453.prototype.call = (function (unused__11783__auto__){
var self__ = this;
var self__ = this;
var G__60462 = (arguments.length - (1));
switch (G__60462) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(front.app.integration.login_view_test.t_front$app$integration$login_view_test60453.prototype.apply = (function (self__,args60459){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args60459)));
}));

(front.app.integration.login_view_test.t_front$app$integration$login_view_test60453.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11442__auto__ = this;
return promesa.protocols._bind(promesa.protocols._promise(null),(function (___32162__auto__){
return promesa.protocols._bind(promesa.protocols._promise(dev.msw.core.start_BANG_.cljs$core$IFn$_invoke$arity$1(front.app.integration.login_view_test.login_error_msw)),(function (_){
return promesa.protocols._bind(promesa.protocols._promise(front.app.aux.wait_for.cljs$core$IFn$_invoke$arity$1((function (){
return front.app.aux.render(front.app.auth.views.login_view);
}))),(function (render){
return promesa.protocols._bind(promesa.protocols._promise(front.app.aux.wait_for.cljs$core$IFn$_invoke$arity$1((function (){
return render.container;
}))),(function (container){
return promesa.protocols._bind(promesa.protocols._promise(cljs.core.first(front.app.aux.tag(container,"button"))),(function (button){
return promesa.protocols._bind(promesa.protocols._promise(front.app.aux.query(container,"#login-email")),(function (input){
return promesa.protocols._bind(promesa.protocols._promise(front.app.aux.wait_for.cljs$core$IFn$_invoke$arity$1((function (){
return front.app.aux.change(input,"err@ee.cc");
}))),(function (_change){
return promesa.protocols._bind(promesa.protocols._promise(front.app.aux.wait_for.cljs$core$IFn$_invoke$arity$1((function (){
return front.app.aux.click(button);
}))),(function (_click){
return promesa.protocols._bind(promesa.protocols._promise(front.app.aux.wait_for.cljs$core$IFn$_invoke$arity$1((function (){
return front.app.aux.text(front.app.aux.query(container,"#login-error"));
}))),(function (error_msg){
return promesa.protocols._bind(promesa.protocols._promise(null),(function (___32147__auto__){
return promesa.protocols._bind(promesa.protocols._promise((function (){try{var values__11360__auto__ = (new cljs.core.List(null,"Error... try it again.Not found",(new cljs.core.List(null,error_msg,null,(1),null)),(2),null));
var result__11361__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__11360__auto__);
if(cljs.core.truth_(result__11361__auto__)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["front/app/integration/login_view_test.cljs",65,new cljs.core.Keyword(null,"pass","pass",1574159993),18,42,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Error... try it again.Not found",new cljs.core.Symbol(null,"error-msg","error-msg",231170904,null)),42,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11360__auto__),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["front/app/integration/login_view_test.cljs",65,new cljs.core.Keyword(null,"fail","fail",1706214930),18,42,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Error... try it again.Not found",new cljs.core.Symbol(null,"error-msg","error-msg",231170904,null)),42,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11360__auto__),null,(1),null)),(2),null)),null]));
}

return result__11361__auto__;
}catch (e60464){var t__11411__auto__ = e60464;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["front/app/integration/login_view_test.cljs",65,new cljs.core.Keyword(null,"error","error",-978969032),18,42,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Error... try it again.Not found",new cljs.core.Symbol(null,"error-msg","error-msg",231170904,null)),42,t__11411__auto__,null]));
}})()),(function (___32146__auto__){
return promesa.protocols._bind(promesa.protocols._promise(front.app.aux.cleanup.cljs$core$IFn$_invoke$arity$0()),(function (___32146__auto____$1){
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
}));
}));
}));
}));

(front.app.integration.login_view_test.t_front$app$integration$login_view_test60453.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta60454","meta60454",949805609,null)], null);
}));

(front.app.integration.login_view_test.t_front$app$integration$login_view_test60453.cljs$lang$type = true);

(front.app.integration.login_view_test.t_front$app$integration$login_view_test60453.cljs$lang$ctorStr = "front.app.integration.login-view-test/t_front$app$integration$login_view_test60453");

(front.app.integration.login_view_test.t_front$app$integration$login_view_test60453.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"front.app.integration.login-view-test/t_front$app$integration$login_view_test60453");
}));

/**
 * Positional factory function for front.app.integration.login-view-test/t_front$app$integration$login_view_test60453.
 */
front.app.integration.login_view_test.__GT_t_front$app$integration$login_view_test60453 = (function front$app$integration$login_view_test$__GT_t_front$app$integration$login_view_test60453(meta60454){
return (new front.app.integration.login_view_test.t_front$app$integration$login_view_test60453(meta60454));
});

}

return (new front.app.integration.login_view_test.t_front$app$integration$login_view_test60453(null));
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

(front.app.integration.login_view_test.auth_view_email_send_error_test.cljs$lang$var = new cljs.core.Var(function(){return front.app.integration.login_view_test.auth_view_email_send_error_test;},new cljs.core.Symbol("front.app.integration.login-view-test","auth-view-email-send-error-test","front.app.integration.login-view-test/auth-view-email-send-error-test",986505677,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"front.app.integration.login-view-test","front.app.integration.login-view-test",2044340802,null),new cljs.core.Symbol(null,"auth-view-email-send-error-test","auth-view-email-send-error-test",354431291,null),"front/app/integration/login_view_test.cljs",41,1,31,31,cljs.core.List.EMPTY,null,(cljs.core.truth_(front.app.integration.login_view_test.auth_view_email_send_error_test)?front.app.integration.login_view_test.auth_view_email_send_error_test.cljs$lang$test:null)])));
front.app.integration.login_view_test.auth_view_email_send_success_test = (function front$app$integration$login_view_test$auth_view_email_send_success_test(){
return cljs.test.test_var(front.app.integration.login_view_test.auth_view_email_send_success_test.cljs$lang$var);
});
front.app.integration.login_view_test.auth_view_email_send_success_test.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["auth email send view should work and show next panel"], 0));

try{if((typeof front !== 'undefined') && (typeof front.app !== 'undefined') && (typeof front.app.integration !== 'undefined') && (typeof front.app.integration.login_view_test !== 'undefined') && (typeof front.app.integration.login_view_test.t_front$app$integration$login_view_test60465 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
front.app.integration.login_view_test.t_front$app$integration$login_view_test60465 = (function (meta60466){
this.meta60466 = meta60466;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(front.app.integration.login_view_test.t_front$app$integration$login_view_test60465.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60467,meta60466__$1){
var self__ = this;
var _60467__$1 = this;
return (new front.app.integration.login_view_test.t_front$app$integration$login_view_test60465(meta60466__$1));
}));

(front.app.integration.login_view_test.t_front$app$integration$login_view_test60465.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60467){
var self__ = this;
var _60467__$1 = this;
return self__.meta60466;
}));

(front.app.integration.login_view_test.t_front$app$integration$login_view_test60465.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(front.app.integration.login_view_test.t_front$app$integration$login_view_test60465.prototype.call = (function (unused__11783__auto__){
var self__ = this;
var self__ = this;
var G__60474 = (arguments.length - (1));
switch (G__60474) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(front.app.integration.login_view_test.t_front$app$integration$login_view_test60465.prototype.apply = (function (self__,args60472){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args60472)));
}));

(front.app.integration.login_view_test.t_front$app$integration$login_view_test60465.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11442__auto__ = this;
return promesa.protocols._bind(promesa.protocols._promise(null),(function (___32162__auto__){
return promesa.protocols._bind(promesa.protocols._promise(dev.msw.core.start_BANG_.cljs$core$IFn$_invoke$arity$1(front.app.integration.login_view_test.login_sucess_msw)),(function (_){
return promesa.protocols._bind(promesa.protocols._promise(front.app.aux.wait_for.cljs$core$IFn$_invoke$arity$1((function (){
return front.app.aux.render(front.app.auth.views.login_view);
}))),(function (render){
return promesa.protocols._bind(promesa.protocols._promise(front.app.aux.wait_for.cljs$core$IFn$_invoke$arity$1((function (){
return render.container;
}))),(function (container){
return promesa.protocols._bind(promesa.protocols._promise(cljs.core.first(front.app.aux.tag(container,"button"))),(function (button){
return promesa.protocols._bind(promesa.protocols._promise(front.app.aux.query(container,"#login-email")),(function (input){
return promesa.protocols._bind(promesa.protocols._promise(front.app.aux.wait_for.cljs$core$IFn$_invoke$arity$1((function (){
return front.app.aux.change(input,"nice@email.cc");
}))),(function (_change){
return promesa.protocols._bind(promesa.protocols._promise(front.app.aux.wait_for.cljs$core$IFn$_invoke$arity$1((function (){
return front.app.aux.click(button);
}))),(function (_click){
return promesa.protocols._bind(promesa.protocols._promise(front.app.aux.wait_for.cljs$core$IFn$_invoke$arity$1((function (){
return front.app.aux.text(front.app.aux.query(container,"#login-email-sent"));
}))),(function (success_msg){
return promesa.protocols._bind(promesa.protocols._promise(null),(function (___32147__auto__){
return promesa.protocols._bind(promesa.protocols._promise((function (){try{var values__11360__auto__ = (new cljs.core.List(null,"Check your email, and click on the link.Didn't received it? Try again.",(new cljs.core.List(null,success_msg,null,(1),null)),(2),null));
var result__11361__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__11360__auto__);
if(cljs.core.truth_(result__11361__auto__)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["front/app/integration/login_view_test.cljs",106,new cljs.core.Keyword(null,"pass","pass",1574159993),18,57,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Check your email, and click on the link.Didn't received it? Try again.",new cljs.core.Symbol(null,"success-msg","success-msg",1043718722,null)),57,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11360__auto__),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["front/app/integration/login_view_test.cljs",106,new cljs.core.Keyword(null,"fail","fail",1706214930),18,57,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Check your email, and click on the link.Didn't received it? Try again.",new cljs.core.Symbol(null,"success-msg","success-msg",1043718722,null)),57,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11360__auto__),null,(1),null)),(2),null)),null]));
}

return result__11361__auto__;
}catch (e60476){var t__11411__auto__ = e60476;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["front/app/integration/login_view_test.cljs",106,new cljs.core.Keyword(null,"error","error",-978969032),18,57,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Check your email, and click on the link.Didn't received it? Try again.",new cljs.core.Symbol(null,"success-msg","success-msg",1043718722,null)),57,t__11411__auto__,null]));
}})()),(function (___32146__auto__){
return promesa.protocols._bind(promesa.protocols._promise(front.app.aux.cleanup.cljs$core$IFn$_invoke$arity$0()),(function (___32146__auto____$1){
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
}));
}));
}));
}));

(front.app.integration.login_view_test.t_front$app$integration$login_view_test60465.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta60466","meta60466",1610883968,null)], null);
}));

(front.app.integration.login_view_test.t_front$app$integration$login_view_test60465.cljs$lang$type = true);

(front.app.integration.login_view_test.t_front$app$integration$login_view_test60465.cljs$lang$ctorStr = "front.app.integration.login-view-test/t_front$app$integration$login_view_test60465");

(front.app.integration.login_view_test.t_front$app$integration$login_view_test60465.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"front.app.integration.login-view-test/t_front$app$integration$login_view_test60465");
}));

/**
 * Positional factory function for front.app.integration.login-view-test/t_front$app$integration$login_view_test60465.
 */
front.app.integration.login_view_test.__GT_t_front$app$integration$login_view_test60465 = (function front$app$integration$login_view_test$__GT_t_front$app$integration$login_view_test60465(meta60466){
return (new front.app.integration.login_view_test.t_front$app$integration$login_view_test60465(meta60466));
});

}

return (new front.app.integration.login_view_test.t_front$app$integration$login_view_test60465(null));
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

(front.app.integration.login_view_test.auth_view_email_send_success_test.cljs$lang$var = new cljs.core.Var(function(){return front.app.integration.login_view_test.auth_view_email_send_success_test;},new cljs.core.Symbol("front.app.integration.login-view-test","auth-view-email-send-success-test","front.app.integration.login-view-test/auth-view-email-send-success-test",1934318697,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"front.app.integration.login-view-test","front.app.integration.login-view-test",2044340802,null),new cljs.core.Symbol(null,"auth-view-email-send-success-test","auth-view-email-send-success-test",-1679839993,null),"front/app/integration/login_view_test.cljs",43,1,46,46,cljs.core.List.EMPTY,null,(cljs.core.truth_(front.app.integration.login_view_test.auth_view_email_send_success_test)?front.app.integration.login_view_test.auth_view_email_send_success_test.cljs$lang$test:null)])));

//# sourceMappingURL=front.app.integration.login_view_test.js.map
