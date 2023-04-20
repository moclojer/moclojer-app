goog.provide('refx.alpha');
refx.alpha.dispatch = (function refx$alpha$dispatch(event){
return refx.dispatch.dispatch(event);
});
refx.alpha.dispatch_sync = (function refx$alpha$dispatch_sync(event){
return refx.dispatch.dispatch_sync(event);
});
refx.alpha.base_interceptors = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [refx.cofx.inject_db,refx.effects.do_fx,refx.interceptors.inject_global_interceptors], null);
refx.alpha._reg_event = (function refx$alpha$_reg_event(id,interceptors,handler_interceptor){
return refx.events.register(id,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(refx.alpha.base_interceptors,interceptors,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([handler_interceptor], 0)));
});
refx.alpha.reg_event_db = (function refx$alpha$reg_event_db(var_args){
var G__22440 = arguments.length;
switch (G__22440) {
case 2:
return refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2 = (function (id,handler){
return refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$3(id,null,handler);
}));

(refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,handler){
return refx.alpha._reg_event(id,interceptors,refx.events.db_handler__GT_interceptor(handler));
}));

(refx.alpha.reg_event_db.cljs$lang$maxFixedArity = 3);

refx.alpha.reg_event_fx = (function refx$alpha$reg_event_fx(var_args){
var G__22461 = arguments.length;
switch (G__22461) {
case 2:
return refx.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return refx.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(refx.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$2 = (function (id,handler){
return refx.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$3(id,null,handler);
}));

(refx.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,handler){
return refx.alpha._reg_event(id,interceptors,refx.events.fx_handler__GT_interceptor(handler));
}));

(refx.alpha.reg_event_fx.cljs$lang$maxFixedArity = 3);

refx.alpha.reg_event_ctx = (function refx$alpha$reg_event_ctx(var_args){
var G__22467 = arguments.length;
switch (G__22467) {
case 2:
return refx.alpha.reg_event_ctx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return refx.alpha.reg_event_ctx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(refx.alpha.reg_event_ctx.cljs$core$IFn$_invoke$arity$2 = (function (id,handler){
return refx.alpha.reg_event_ctx.cljs$core$IFn$_invoke$arity$3(id,null,handler);
}));

(refx.alpha.reg_event_ctx.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,handler){
return refx.alpha._reg_event(id,interceptors,refx.events.ctx_handler__GT_interceptor(handler));
}));

(refx.alpha.reg_event_ctx.cljs$lang$maxFixedArity = 3);

refx.alpha.clear_event = (function refx$alpha$clear_event(var_args){
var G__22477 = arguments.length;
switch (G__22477) {
case 0:
return refx.alpha.clear_event.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return refx.alpha.clear_event.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(refx.alpha.clear_event.cljs$core$IFn$_invoke$arity$0 = (function (){
return refx.registry.clear_BANG_(refx.events.kind);
}));

(refx.alpha.clear_event.cljs$core$IFn$_invoke$arity$1 = (function (id){
return refx.registry.remove_BANG_(refx.events.kind,id);
}));

(refx.alpha.clear_event.cljs$lang$maxFixedArity = 1);

/**
 * Return a subscription signal to be used as an input in `reg-sub`.
 */
refx.alpha.sub = (function refx$alpha$sub(query_v){
return refx.subs.sub(query_v);
});
/**
 * Like re-frame's `:<-` sugar, returns an `input-fn` for `reg-sub` that
 * subscribes to one or more query vectors.
 */
refx.alpha._LT__ = (function refx$alpha$_LT__(var_args){
var G__22481 = arguments.length;
switch (G__22481) {
case 1:
return refx.alpha._LT__.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___22648 = arguments.length;
var i__5770__auto___22650 = (0);
while(true){
if((i__5770__auto___22650 < len__5769__auto___22648)){
args_arr__5794__auto__.push((arguments[i__5770__auto___22650]));

var G__22651 = (i__5770__auto___22650 + (1));
i__5770__auto___22650 = G__22651;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((1)),(0),null));
return refx.alpha._LT__.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5795__auto__);

}
});

(refx.alpha._LT__.cljs$core$IFn$_invoke$arity$1 = (function (query_v){
return (function (_){
return refx.subs.sub(query_v);
});
}));

(refx.alpha._LT__.cljs$core$IFn$_invoke$arity$variadic = (function (query_v,qs){
var qs__$1 = cljs.core.cons(query_v,qs);
return (function (_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(refx.subs.sub,qs__$1);
});
}));

/** @this {Function} */
(refx.alpha._LT__.cljs$lang$applyTo = (function (seq22479){
var G__22480 = cljs.core.first(seq22479);
var seq22479__$1 = cljs.core.next(seq22479);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22480,seq22479__$1);
}));

(refx.alpha._LT__.cljs$lang$maxFixedArity = (1));

refx.alpha.parse_reg_sub_sugar = (function refx$alpha$parse_reg_sub_sugar(args){
var vec__22485 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__22488,p__22489){
var vec__22490 = p__22488;
var qs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22490,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22490,(1),null);
var vec__22493 = p__22489;
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22493,(0),null);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22493,(1),null);
var G__22500 = op;
var G__22500__$1 = (((G__22500 instanceof cljs.core.Keyword))?G__22500.fqn:null);
switch (G__22500__$1) {
case "<-":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(qs,arg),f], null);

break;
case "->":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qs,(function (v){
return (arg.cljs$core$IFn$_invoke$arity$1 ? arg.cljs$core$IFn$_invoke$arity$1(v) : arg.call(null,v));
})], null);

break;
case "=>":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qs,(function (v,p__22501){
var vec__22502 = p__22501;
var seq__22503 = cljs.core.seq(vec__22502);
var first__22504 = cljs.core.first(seq__22503);
var seq__22503__$1 = cljs.core.next(seq__22503);
var _ = first__22504;
var vs = seq__22503__$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(arg,v,vs);
})], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qs,op], null);

}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,null], null),cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2((2),args));
var qs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22485,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22485,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.seq(qs))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(refx.alpha._LT__,qs):null),f], null);
});
refx.alpha.reg_sub = (function refx$alpha$reg_sub(var_args){
var G__22514 = arguments.length;
switch (G__22514) {
case 2:
return refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___22675 = arguments.length;
var i__5770__auto___22676 = (0);
while(true){
if((i__5770__auto___22676 < len__5769__auto___22675)){
args_arr__5794__auto__.push((arguments[i__5770__auto___22676]));

var G__22677 = (i__5770__auto___22676 + (1));
i__5770__auto___22676 = G__22677;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((4)),(0),null));
return refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5795__auto__);

}
});

(refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2 = (function (query_id,compute_fn){
return refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$3(query_id,cljs.core.constantly(refx.db.app_db),compute_fn);
}));

(refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$3 = (function (query_id,input_fn,compute_fn){
return refx.subs.register(query_id,input_fn,compute_fn);
}));

(refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic = (function (query_id,x,y,z,args){
var vec__22519 = refx.alpha.parse_reg_sub_sugar(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(x,y,z,args));
var input_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22519,(0),null);
var compute_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22519,(1),null);
if(cljs.core.truth_(input_fn)){
return refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$3(query_id,input_fn,compute_fn);
} else {
return refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(query_id,compute_fn);
}
}));

/** @this {Function} */
(refx.alpha.reg_sub.cljs$lang$applyTo = (function (seq22507){
var G__22508 = cljs.core.first(seq22507);
var seq22507__$1 = cljs.core.next(seq22507);
var G__22509 = cljs.core.first(seq22507__$1);
var seq22507__$2 = cljs.core.next(seq22507__$1);
var G__22510 = cljs.core.first(seq22507__$2);
var seq22507__$3 = cljs.core.next(seq22507__$2);
var G__22511 = cljs.core.first(seq22507__$3);
var seq22507__$4 = cljs.core.next(seq22507__$3);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22508,G__22509,G__22510,G__22511,seq22507__$4);
}));

(refx.alpha.reg_sub.cljs$lang$maxFixedArity = (4));

refx.alpha.use_sub = (function refx$alpha$use_sub(query_v){
return refx.hooks.use_sub(query_v);
});
refx.alpha.clear_sub = (function refx$alpha$clear_sub(var_args){
var G__22536 = arguments.length;
switch (G__22536) {
case 0:
return refx.alpha.clear_sub.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return refx.alpha.clear_sub.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(refx.alpha.clear_sub.cljs$core$IFn$_invoke$arity$0 = (function (){
return refx.registry.clear_BANG_(refx.subs.kind);
}));

(refx.alpha.clear_sub.cljs$core$IFn$_invoke$arity$1 = (function (id){
return refx.registry.remove_BANG_(refx.subs.kind,id);
}));

(refx.alpha.clear_sub.cljs$lang$maxFixedArity = 1);

refx.alpha.clear_subscription_cache_BANG_ = (function refx$alpha$clear_subscription_cache_BANG_(){
return refx.subs.clear_subscription_cache_BANG_();
});
refx.alpha.reg_fx = (function refx$alpha$reg_fx(id,handler){
return refx.effects.register(id,handler);
});
refx.alpha.clear_fx = (function refx$alpha$clear_fx(var_args){
var G__22545 = arguments.length;
switch (G__22545) {
case 0:
return refx.alpha.clear_fx.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return refx.alpha.clear_fx.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(refx.alpha.clear_fx.cljs$core$IFn$_invoke$arity$0 = (function (){
return refx.registry.clear_BANG_(refx.effects.kind);
}));

(refx.alpha.clear_fx.cljs$core$IFn$_invoke$arity$1 = (function (id){
return refx.registry.remove_BANG_(refx.effects.kind,id);
}));

(refx.alpha.clear_fx.cljs$lang$maxFixedArity = 1);

refx.alpha.reg_cofx = (function refx$alpha$reg_cofx(id,handler){
return refx.cofx.register(id,handler);
});
refx.alpha.clear_cofx = (function refx$alpha$clear_cofx(var_args){
var G__22555 = arguments.length;
switch (G__22555) {
case 0:
return refx.alpha.clear_cofx.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return refx.alpha.clear_cofx.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(refx.alpha.clear_cofx.cljs$core$IFn$_invoke$arity$0 = (function (){
return refx.registry.clear_BANG_(refx.cofx.kind);
}));

(refx.alpha.clear_cofx.cljs$core$IFn$_invoke$arity$1 = (function (id){
return refx.registry.remove_BANG_(refx.cofx.kind,id);
}));

(refx.alpha.clear_cofx.cljs$lang$maxFixedArity = 1);

refx.alpha.inject_cofx = (function refx$alpha$inject_cofx(var_args){
var G__22564 = arguments.length;
switch (G__22564) {
case 1:
return refx.alpha.inject_cofx.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return refx.alpha.inject_cofx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(refx.alpha.inject_cofx.cljs$core$IFn$_invoke$arity$1 = (function (id){
return refx.cofx.inject_cofx.cljs$core$IFn$_invoke$arity$1(id);
}));

(refx.alpha.inject_cofx.cljs$core$IFn$_invoke$arity$2 = (function (id,value){
return refx.cofx.inject_cofx.cljs$core$IFn$_invoke$arity$2(id,value);
}));

(refx.alpha.inject_cofx.cljs$lang$maxFixedArity = 2);

refx.alpha.__GT_interceptor = (function refx$alpha$__GT_interceptor(var_args){
var args__5775__auto__ = [];
var len__5769__auto___22725 = arguments.length;
var i__5770__auto___22726 = (0);
while(true){
if((i__5770__auto___22726 < len__5769__auto___22725)){
args__5775__auto__.push((arguments[i__5770__auto___22726]));

var G__22729 = (i__5770__auto___22726 + (1));
i__5770__auto___22726 = G__22729;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return refx.alpha.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(refx.alpha.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic = (function (p__22572){
var map__22577 = p__22572;
var map__22577__$1 = cljs.core.__destructure_map(map__22577);
var m = map__22577__$1;
return refx.utils.apply_kw.cljs$core$IFn$_invoke$arity$variadic(refx.interceptor.__GT_interceptor,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m], 0));
}));

(refx.alpha.__GT_interceptor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(refx.alpha.__GT_interceptor.cljs$lang$applyTo = (function (seq22571){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22571));
}));


//# sourceMappingURL=refx.alpha.js.map
