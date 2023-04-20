goog.provide('front.app.integration.aux');
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("test","initialize-db","test/initialize-db",233569322),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"current-route","current-route",2067529448),null,new cljs.core.Keyword(null,"current-user","current-user",-868792091),null,new cljs.core.Keyword(null,"login-loading?","login-loading?",-1491014397),false,new cljs.core.Keyword(null,"login-error","login-error",-1290265439),null,new cljs.core.Keyword(null,"login-email-sent","login-email-sent",1198441300),null], null);
}));
front.app.integration.aux.before_fn = (function front$app$integration$aux$before_fn(){
if((typeof front !== 'undefined') && (typeof front.app !== 'undefined') && (typeof front.app.integration !== 'undefined') && (typeof front.app.integration.aux !== 'undefined') && (typeof front.app.integration.aux.t_front$app$integration$aux53927 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
front.app.integration.aux.t_front$app$integration$aux53927 = (function (meta53928){
this.meta53928 = meta53928;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(front.app.integration.aux.t_front$app$integration$aux53927.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53929,meta53928__$1){
var self__ = this;
var _53929__$1 = this;
return (new front.app.integration.aux.t_front$app$integration$aux53927(meta53928__$1));
}));

(front.app.integration.aux.t_front$app$integration$aux53927.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53929){
var self__ = this;
var _53929__$1 = this;
return self__.meta53928;
}));

(front.app.integration.aux.t_front$app$integration$aux53927.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(front.app.integration.aux.t_front$app$integration$aux53927.prototype.call = (function (unused__11783__auto__){
var self__ = this;
var self__ = this;
var G__53950 = (arguments.length - (1));
switch (G__53950) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(front.app.integration.aux.t_front$app$integration$aux53927.prototype.apply = (function (self__,args53934){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args53934)));
}));

(front.app.integration.aux.t_front$app$integration$aux53927.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11442__auto__ = this;
refx.alpha.clear_subscription_cache_BANG_();

refx.alpha.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("test","initialize-db","test/initialize-db",233569322)], null));

front.app.aux.cleanup.cljs$core$IFn$_invoke$arity$0();

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));

(front.app.integration.aux.t_front$app$integration$aux53927.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta53928","meta53928",-385391649,null)], null);
}));

(front.app.integration.aux.t_front$app$integration$aux53927.cljs$lang$type = true);

(front.app.integration.aux.t_front$app$integration$aux53927.cljs$lang$ctorStr = "front.app.integration.aux/t_front$app$integration$aux53927");

(front.app.integration.aux.t_front$app$integration$aux53927.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"front.app.integration.aux/t_front$app$integration$aux53927");
}));

/**
 * Positional factory function for front.app.integration.aux/t_front$app$integration$aux53927.
 */
front.app.integration.aux.__GT_t_front$app$integration$aux53927 = (function front$app$integration$aux$before_fn_$___GT_t_front$app$integration$aux53927(meta53928){
return (new front.app.integration.aux.t_front$app$integration$aux53927(meta53928));
});

}

return (new front.app.integration.aux.t_front$app$integration$aux53927(null));
});
front.app.integration.aux.after_fn = (function front$app$integration$aux$after_fn(){
return front.app.aux.cleanup.cljs$core$IFn$_invoke$arity$0();
});

//# sourceMappingURL=front.app.integration.aux.js.map
