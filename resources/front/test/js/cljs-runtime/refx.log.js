goog.provide('refx.log');
refx.log.debug = (function refx$log$debug(var_args){
var args__5775__auto__ = [];
var len__5769__auto___57548 = arguments.length;
var i__5770__auto___57549 = (0);
while(true){
if((i__5770__auto___57549 < len__5769__auto___57548)){
args__5775__auto__.push((arguments[i__5770__auto___57549]));

var G__57550 = (i__5770__auto___57549 + (1));
i__5770__auto___57549 = G__57550;
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
(refx.log.debug.cljs$lang$applyTo = (function (seq57507){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57507));
}));

refx.log.info = (function refx$log$info(var_args){
var args__5775__auto__ = [];
var len__5769__auto___57552 = arguments.length;
var i__5770__auto___57554 = (0);
while(true){
if((i__5770__auto___57554 < len__5769__auto___57552)){
args__5775__auto__.push((arguments[i__5770__auto___57554]));

var G__57561 = (i__5770__auto___57554 + (1));
i__5770__auto___57554 = G__57561;
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
(refx.log.info.cljs$lang$applyTo = (function (seq57515){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57515));
}));

refx.log.warn = (function refx$log$warn(var_args){
var args__5775__auto__ = [];
var len__5769__auto___57563 = arguments.length;
var i__5770__auto___57564 = (0);
while(true){
if((i__5770__auto___57564 < len__5769__auto___57563)){
args__5775__auto__.push((arguments[i__5770__auto___57564]));

var G__57565 = (i__5770__auto___57564 + (1));
i__5770__auto___57564 = G__57565;
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
(refx.log.warn.cljs$lang$applyTo = (function (seq57520){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57520));
}));

refx.log.error = (function refx$log$error(var_args){
var args__5775__auto__ = [];
var len__5769__auto___57566 = arguments.length;
var i__5770__auto___57567 = (0);
while(true){
if((i__5770__auto___57567 < len__5769__auto___57566)){
args__5775__auto__.push((arguments[i__5770__auto___57567]));

var G__57568 = (i__5770__auto___57567 + (1));
i__5770__auto___57567 = G__57568;
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
(refx.log.error.cljs$lang$applyTo = (function (seq57537){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57537));
}));


//# sourceMappingURL=refx.log.js.map
