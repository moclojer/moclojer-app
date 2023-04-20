goog.provide('app.integration.auth_view_test');
app.integration.auth_view_test.auth_view_test = (function app$integration$auth_view_test$auth_view_test(){
return cljs.test.test_var(app.integration.auth_view_test.auth_view_test.cljs$lang$var);
});
app.integration.auth_view_test.auth_view_test.cljs$lang$test = (function (){
if((typeof app !== 'undefined') && (typeof app.integration !== 'undefined') && (typeof app.integration.auth_view_test !== 'undefined') && (typeof app.integration.auth_view_test.t_app$integration$auth_view_test45349 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
app.integration.auth_view_test.t_app$integration$auth_view_test45349 = (function (meta45350){
this.meta45350 = meta45350;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.integration.auth_view_test.t_app$integration$auth_view_test45349.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45351,meta45350__$1){
var self__ = this;
var _45351__$1 = this;
return (new app.integration.auth_view_test.t_app$integration$auth_view_test45349(meta45350__$1));
}));

(app.integration.auth_view_test.t_app$integration$auth_view_test45349.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45351){
var self__ = this;
var _45351__$1 = this;
return self__.meta45350;
}));

(app.integration.auth_view_test.t_app$integration$auth_view_test45349.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(app.integration.auth_view_test.t_app$integration$auth_view_test45349.prototype.call = (function (unused__11778__auto__){
var self__ = this;
var self__ = this;
var G__45360 = (arguments.length - (1));
switch (G__45360) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(app.integration.auth_view_test.t_app$integration$auth_view_test45349.prototype.apply = (function (self__,args45354){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args45354)));
}));

(app.integration.auth_view_test.t_app$integration$auth_view_test45349.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11437__auto__ = this;
return promesa.protocols._bind(promesa.protocols._promise(null),(function (___33467__auto__){
return promesa.protocols._promise((function (){var G__45365 = (function (){
return promesa.protocols._bind(promesa.protocols._promise(null),(function (___33482__auto__){
return promesa.protocols._bind(promesa.protocols._promise(dev.msw.browser.start_BANG_()),(function (_){
return promesa.protocols._bind(promesa.protocols._promise(app.aux.render(app.auth.views.login_view)),(function (render){
return promesa.protocols._bind(promesa.protocols._promise(render.container),(function (container){
return promesa.protocols._bind(promesa.protocols._promise(cljs.core.first(app.aux.tag(container,"button"))),(function (button){
return promesa.protocols._bind(promesa.protocols._promise(app.aux.query(container,"#login-username")),(function (input){
return promesa.protocols._bind(promesa.protocols._promise(app.aux.change(input,"err@ee.cc")),(function (_change){
return promesa.protocols._bind(promesa.protocols._promise(app.aux.click(button)),(function (_click){
return promesa.protocols._bind(promesa.protocols._promise(app.aux.find_by_text(render,"Error... Try again")),(function (error_msg){
return promesa.protocols._bind(promesa.protocols._promise(null),(function (___33467__auto____$1){
return promesa.protocols._bind(promesa.protocols._promise((function (){try{var values__11355__auto__ = (new cljs.core.List(null,"Error... Try again",(new cljs.core.List(null,app.aux.text(error_msg),null,(1),null)),(2),null));
var result__11356__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__11355__auto__);
if(cljs.core.truth_(result__11356__auto__)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["app/integration/auth_view_test.cljs",60,new cljs.core.Keyword(null,"pass","pass",1574159993),15,22,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Error... Try again",cljs.core.list(new cljs.core.Symbol("aux","text","aux/text",-150194846,null),new cljs.core.Symbol(null,"error-msg","error-msg",231170904,null))),22,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11355__auto__),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["app/integration/auth_view_test.cljs",60,new cljs.core.Keyword(null,"fail","fail",1706214930),15,22,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Error... Try again",cljs.core.list(new cljs.core.Symbol("aux","text","aux/text",-150194846,null),new cljs.core.Symbol(null,"error-msg","error-msg",231170904,null))),22,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11355__auto__),null,(1),null)),(2),null)),null]));
}

return result__11356__auto__;
}catch (e45372){var t__11406__auto__ = e45372;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["app/integration/auth_view_test.cljs",60,new cljs.core.Keyword(null,"error","error",-978969032),15,22,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Error... Try again",cljs.core.list(new cljs.core.Symbol("aux","text","aux/text",-150194846,null),new cljs.core.Symbol(null,"error-msg","error-msg",231170904,null))),22,t__11406__auto__,null]));
}})()),(function (___33466__auto__){
return promesa.protocols._promise(app.aux.cleanup.cljs$core$IFn$_invoke$arity$1(done));
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
});
return (app.aux.wait_for.cljs$core$IFn$_invoke$arity$1 ? app.aux.wait_for.cljs$core$IFn$_invoke$arity$1(G__45365) : app.aux.wait_for.call(null,G__45365));
})());
}));
}));

(app.integration.auth_view_test.t_app$integration$auth_view_test45349.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta45350","meta45350",-675989570,null)], null);
}));

(app.integration.auth_view_test.t_app$integration$auth_view_test45349.cljs$lang$type = true);

(app.integration.auth_view_test.t_app$integration$auth_view_test45349.cljs$lang$ctorStr = "app.integration.auth-view-test/t_app$integration$auth_view_test45349");

(app.integration.auth_view_test.t_app$integration$auth_view_test45349.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"app.integration.auth-view-test/t_app$integration$auth_view_test45349");
}));

/**
 * Positional factory function for app.integration.auth-view-test/t_app$integration$auth_view_test45349.
 */
app.integration.auth_view_test.__GT_t_app$integration$auth_view_test45349 = (function app$integration$auth_view_test$__GT_t_app$integration$auth_view_test45349(meta45350){
return (new app.integration.auth_view_test.t_app$integration$auth_view_test45349(meta45350));
});

}

return (new app.integration.auth_view_test.t_app$integration$auth_view_test45349(null));
});

(app.integration.auth_view_test.auth_view_test.cljs$lang$var = new cljs.core.Var(function(){return app.integration.auth_view_test.auth_view_test;},new cljs.core.Symbol("app.integration.auth-view-test","auth-view-test","app.integration.auth-view-test/auth-view-test",2124444234,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"app.integration.auth-view-test","app.integration.auth-view-test",1337441401,null),new cljs.core.Symbol(null,"auth-view-test","auth-view-test",-26065306,null),"app/integration/auth_view_test.cljs",24,1,10,10,cljs.core.List.EMPTY,null,(cljs.core.truth_(app.integration.auth_view_test.auth_view_test)?app.integration.auth_view_test.auth_view_test.cljs$lang$test:null)])));

//# sourceMappingURL=app.integration.auth_view_test.js.map
