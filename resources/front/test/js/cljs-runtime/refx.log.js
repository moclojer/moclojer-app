goog.provide('refx.log');
refx.log.debug = (function refx$log$debug(var_args){
var args__5775__auto__ = [];
var len__5769__auto___52558 = arguments.length;
var i__5770__auto___52559 = (0);
while(true){
if((i__5770__auto___52559 < len__5769__auto___52558)){
args__5775__auto__.push((arguments[i__5770__auto___52559]));

var G__52560 = (i__5770__auto___52559 + (1));
i__5770__auto___52559 = G__52560;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return refx.log.debug.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(refx.log.debug.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return refx.interop.log(new cljs.core.Keyword(null,"debug","debug",-1608172596),cljs.core.cons("refx:",args));
}));

(refx.log.debug.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(refx.log.debug.cljs$lang$applyTo = (function (seq52488){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52488));
}));

refx.log.info = (function refx$log$info(var_args){
var args__5775__auto__ = [];
var len__5769__auto___52561 = arguments.length;
var i__5770__auto___52562 = (0);
while(true){
if((i__5770__auto___52562 < len__5769__auto___52561)){
args__5775__auto__.push((arguments[i__5770__auto___52562]));

var G__52563 = (i__5770__auto___52562 + (1));
i__5770__auto___52562 = G__52563;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return refx.log.info.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(refx.log.info.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return refx.interop.log(new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.cons("refx:",args));
}));

(refx.log.info.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(refx.log.info.cljs$lang$applyTo = (function (seq52489){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52489));
}));

refx.log.warn = (function refx$log$warn(var_args){
var args__5775__auto__ = [];
var len__5769__auto___52564 = arguments.length;
var i__5770__auto___52565 = (0);
while(true){
if((i__5770__auto___52565 < len__5769__auto___52564)){
args__5775__auto__.push((arguments[i__5770__auto___52565]));

var G__52566 = (i__5770__auto___52565 + (1));
i__5770__auto___52565 = G__52566;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return refx.log.warn.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(refx.log.warn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return refx.interop.log(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.cons("refx:",args));
}));

(refx.log.warn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(refx.log.warn.cljs$lang$applyTo = (function (seq52551){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52551));
}));

refx.log.error = (function refx$log$error(var_args){
var args__5775__auto__ = [];
var len__5769__auto___52567 = arguments.length;
var i__5770__auto___52568 = (0);
while(true){
if((i__5770__auto___52568 < len__5769__auto___52567)){
args__5775__auto__.push((arguments[i__5770__auto___52568]));

var G__52569 = (i__5770__auto___52568 + (1));
i__5770__auto___52568 = G__52569;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return refx.log.error.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(refx.log.error.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return refx.interop.log(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.cons("refx:",args));
}));

(refx.log.error.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(refx.log.error.cljs$lang$applyTo = (function (seq52557){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52557));
}));


//# sourceMappingURL=refx.log.js.map
