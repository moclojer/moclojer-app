goog.provide('app.integration.aux');
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("test","initialize-db","test/initialize-db",233569322),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"current-route","current-route",2067529448),null,new cljs.core.Keyword(null,"current-user","current-user",-868792091),null,new cljs.core.Keyword(null,"login-loading?","login-loading?",-1491014397),false,new cljs.core.Keyword(null,"login-error","login-error",-1290265439),null,new cljs.core.Keyword(null,"login-email-sent","login-email-sent",1198441300),null], null);
}));
app.integration.aux.before_fn = (function app$integration$aux$before_fn(){
if((typeof app !== 'undefined') && (typeof app.integration !== 'undefined') && (typeof app.integration.aux !== 'undefined') && (typeof app.integration.aux.t_app$integration$aux33317 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
app.integration.aux.t_app$integration$aux33317 = (function (meta33318){
this.meta33318 = meta33318;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.integration.aux.t_app$integration$aux33317.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33319,meta33318__$1){
var self__ = this;
var _33319__$1 = this;
return (new app.integration.aux.t_app$integration$aux33317(meta33318__$1));
}));

(app.integration.aux.t_app$integration$aux33317.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33319){
var self__ = this;
var _33319__$1 = this;
return self__.meta33318;
}));

(app.integration.aux.t_app$integration$aux33317.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(app.integration.aux.t_app$integration$aux33317.prototype.call = (function (unused__11778__auto__){
var self__ = this;
var self__ = this;
var G__33323 = (arguments.length - (1));
switch (G__33323) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(app.integration.aux.t_app$integration$aux33317.prototype.apply = (function (self__,args33322){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args33322)));
}));

(app.integration.aux.t_app$integration$aux33317.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11437__auto__ = this;
refx.alpha.clear_subscription_cache_BANG_();

refx.alpha.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("test","initialize-db","test/initialize-db",233569322)], null));

app.aux.cleanup.cljs$core$IFn$_invoke$arity$0();

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));

(app.integration.aux.t_app$integration$aux33317.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta33318","meta33318",-1265970506,null)], null);
}));

(app.integration.aux.t_app$integration$aux33317.cljs$lang$type = true);

(app.integration.aux.t_app$integration$aux33317.cljs$lang$ctorStr = "app.integration.aux/t_app$integration$aux33317");

(app.integration.aux.t_app$integration$aux33317.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"app.integration.aux/t_app$integration$aux33317");
}));

/**
 * Positional factory function for app.integration.aux/t_app$integration$aux33317.
 */
app.integration.aux.__GT_t_app$integration$aux33317 = (function app$integration$aux$before_fn_$___GT_t_app$integration$aux33317(meta33318){
return (new app.integration.aux.t_app$integration$aux33317(meta33318));
});

}

return (new app.integration.aux.t_app$integration$aux33317(null));
});
app.integration.aux.after_fn = (function app$integration$aux$after_fn(){
return app.aux.cleanup.cljs$core$IFn$_invoke$arity$0();
});

//# sourceMappingURL=app.integration.aux.js.map
